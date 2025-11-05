import { z } from "zod"

export const signUpInputs = z.object({
    name: z.string().optional(),
    email: z.string().email(),
    password: z.string().min(4)
})

export const signInInputs = z.object({
    email: z.string().email(),
    password: z.string().min(4)
})