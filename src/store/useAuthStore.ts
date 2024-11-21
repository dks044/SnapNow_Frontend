import {create, StateCreator} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthStore {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (access: string, refresh: string) => Promise<void>;
  clearTokens: () => Promise<void>;
}

// 상태 슬라이스 정의
const authSlice: StateCreator<
  AuthStore,
  [['zustand/persist', unknown]]
> = set => ({
  accessToken: null,
  refreshToken: null,
  setTokens: async (access, refresh) => {
    await AsyncStorage.setItem('accessToken', access);
    await AsyncStorage.setItem('refreshToken', refresh);
    set({accessToken: access, refreshToken: refresh});
  },
  clearTokens: async () => {
    await AsyncStorage.removeItem('accessToken');
    await AsyncStorage.removeItem('refreshToken');
    set({accessToken: null, refreshToken: null});
  },
});

// 스토어 생성
export const useAuthStore = create<AuthStore>()(
  persist(authSlice, {
    name: 'auth-storage', // 저장소 이름
    storage: createJSONStorage(() => AsyncStorage),
  }),
);

export default useAuthStore;
