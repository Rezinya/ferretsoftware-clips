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
    query: z.union([z.string(), z.literal("")]),
    sort: sortOptions,
    dateRange: z
      .object({
        startDate: z.coerce.date(),
        endDate: z.coerce.date(),
      })
      .optional()
      .superRefine((values, ctx) => {
        if (values && (values.startDate && values.endDate)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Start date should not be later than end date",
            path: ["startDate"]
          });
        }
        if (values && values.endDate && !values.startDate) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Please enter a start date",
            path: ["startDate"]
          });
        }
        if (values && values.startDate && !values.endDate) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Please enter an end date",
            path: ["endDate"]
          });
        }
      }),
  })

export type SearchParams = z.infer<typeof searchFormSchema>;
export type SortOptions = z.infer<typeof sortOptions>;