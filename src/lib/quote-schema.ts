import { z } from "zod";

export const SERVICE_OPTIONS = [
  { value: "title-search", label: "Title Search & Examination" },
  { value: "escrow-closing", label: "Escrow & Closing Services" },
  { value: "title-insurance", label: "Title Insurance Policies" },
  { value: "recording", label: "Recording & Document Handling" },
  { value: "exchange-1031", label: "1031 Exchange Support" },
  { value: "settlement-hud", label: "Settlement Statements & HUDs" },
  { value: "wire-fraud", label: "Wire Fraud Protection" },
  { value: "other", label: "Something else / not sure" },
];

export const PROPERTY_OPTIONS = [
  { value: "residential-purchase", label: "Residential purchase" },
  { value: "commercial-purchase", label: "Commercial purchase" },
  { value: "refinance", label: "Refinance" },
  { value: "exchange-1031", label: "1031 exchange" },
  { value: "new-construction", label: "New construction" },
  { value: "other", label: "Other" },
];

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid email address"),
  phone: z
    .string()
    .trim()
    .refine((v) => v === "" || v.length >= 7, { message: "Please enter a valid phone number" }),
  service: z.string().min(1, "Please select a service"),
  propertyType: z.string().min(1, "Please select a property type"),
  message: z.string().max(2000, "Please keep your message under 2,000 characters"),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
