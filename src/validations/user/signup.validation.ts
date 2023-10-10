import { z } from 'zod';

export const SignupValidation = {
  body: z
    .object({
      first_name: z.string(),
      last_name: z.string(),
      email: z.string().email(),
      password: z
        .string()
        .min(8, 'Password must be at least 8 characters')
        .regex(
          /^(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z])/,
          'Password does not meet the required criteria',
        ),
      confirm_password: z.string(),
      t_and_c: z.boolean(),
    })
    .refine((data) => data.password === data.confirm_password, {
      message: "Passwords don't match",
      path: ['confirm_password'],
    }),
};
