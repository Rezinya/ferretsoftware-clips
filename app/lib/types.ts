import { z } from "zod";

export type Ferret = {
  name: string;
  sex: "male" | "female";
  playgroup: string;
  valhallaDate: string | null;
}

/* Search Form ----- */

const sortOptions = z.enum([
  "views_desc",
  "views_asc",
  "date_desc",
  "date_asc"
]);

export const searchFormSchema = z
  .object({
    q: z.union([z.string(), z.literal("")]),
    sort: sortOptions,
    sd: z.coerce.date().optional(),
    ed: z.coerce.date().optional()      
  })
  .superRefine((values, ctx) => {
    if (values.sd && values.ed && (values.sd > values.ed)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Start date should not be later than end date",
        path: ["sd"]
      });
    }
    if (values.ed && !values.sd) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please enter a start date",
        path: ["sd"]
      });
    }
    if (values.sd && !values.ed) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please enter an end date",
        path: ["ed"]
      });
    }
  });

export type SearchParams = z.infer<typeof searchFormSchema>;
export type SortOptions = z.infer<typeof sortOptions>;