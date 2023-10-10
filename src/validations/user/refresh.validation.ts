import { z } from 'zod';
export const RefreshValidation = {
  body: z.object({
    refresh_token: z.string(),
  }),
};
