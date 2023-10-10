import { z } from 'zod';
export const SigninValidation = {
    body: z.object({
        email: z.string().email(),
        password: z.string(),
    }),
};
