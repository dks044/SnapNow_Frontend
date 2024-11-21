import {z} from 'zod';

export type Variant = 'LOGIN' | 'REGISTER';

export const loginDataSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type LoginData = z.infer<typeof loginDataSchema>;

export const signupDataSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
});

export type SignupData = z.infer<typeof signupDataSchema>;

export const verifyCodeSchema = z.object({
  email: z.string(),
  emailCode: z.string(),
});

export type VerifyCode = z.infer<typeof verifyCodeSchema>;
