import {sendCode, verifyCode} from '@/api/authAPI';
import {VerifyCode} from '@/schemas/auth';
import {useCallback, useState} from 'react';
import {useMutation} from 'react-query';

export default function useEmailCode(
  setIsVerify: React.Dispatch<React.SetStateAction<boolean>>,
) {
  const [email, setEmail] = useState<string>('');
  const [emailCode, setEmailCode] = useState<string>('');
  const [isSendLoading, setIsSendLoading] = useState<boolean>(false);
  const [isSend, setIsSend] = useState(false);

  const sendCodeMutation = useMutation((email: string) => sendCode(email), {
    onSuccess: () => {
      console.log('Email Code 전송 완료!');
      setIsSend(true);
    },
    onError: error => {
      console.error('Error sending code:', error);
    },
  });

  const verifyCodeMutation = useMutation(
    ({email, emailCode}: VerifyCode) => verifyCode(email, emailCode),
    {
      onSuccess: () => {
        console.log('Email Code 검증 완료!');
        setIsVerify(true);
      },
      onError: error => {
        console.error('Error verifying code:', error);
      },
    },
  );

  const handleSendCode = useCallback(async () => {
    setIsSendLoading(true);

    try {
      await sendCodeMutation.mutateAsync(email);
    } catch (error) {
      console.error('Error in handleSendCode:', error);
    } finally {
      setIsSendLoading(false);
    }
  }, [email, sendCodeMutation]);

  const handleVerifyCode = useCallback(async () => {
    setIsSendLoading(true);

    try {
      await verifyCodeMutation.mutateAsync({email, emailCode});
    } catch (error) {
      console.error('Error in handleVerifyCode:', error);
    } finally {
      setIsSendLoading(false);
    }
  }, [email, emailCode, verifyCodeMutation]);

  return {
    setEmail,
    setEmailCode,
    isSend,
    isSendLoading,
    handleSendCode,
    handleVerifyCode,
  };
}
