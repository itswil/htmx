import { z } from "zod";
import { characterSchema } from "./Character";

export const createListResponseSchema = <T extends z.ZodTypeAny>(schema: T) =>
  z.object({
    info: z.object({
      count: z.number(),
      pages: z.number(),
      next: z.string().url().nullable(),
      prev: z.string().url().nullable(),
    }),
    results: z.array(schema),
  });

export const charactersListResponseSchema =
  createListResponseSchema(characterSchema);
export type CharactersListResponse = z.infer<
  typeof charactersListResponseSchema
>;
