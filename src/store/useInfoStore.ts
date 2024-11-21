import {create, StateCreator} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface InfoStore {
  id: string;
  email: string;
  name: string;
  setUserInfo: (id: string, email: string, name: string) => Promise<void>;
  clearUserInfo: () => Promise<void>;
}

// 상태 슬라이스 정의
const infoSlice: StateCreator<
  InfoStore,
  [['zustand/persist', unknown]]
> = set => ({
  id: '',
  email: '',
  name: '',
  setUserInfo: async (id, email, name) => {
    await AsyncStorage.setItem('userInfo', JSON.stringify({id, email, name}));
    set({id, email, name});
  },
  clearUserInfo: async () => {
    await AsyncStorage.removeItem('userInfo');
    set({id: '', email: '', name: ''});
  },
});

// 스토어 생성
export const useInfoStore = create<InfoStore>()(
  persist(infoSlice, {
    name: 'user-info-storage',
    storage: createJSONStorage(() => AsyncStorage),
  }),
);

export default useInfoStore;
