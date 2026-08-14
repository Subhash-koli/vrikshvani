import { z } from 'zod';

export const WaitlistJoinSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address format"),
  role: z.string().optional().default('PLANT_ENTHUSIAST'),
  preferredColorway: z.enum(['BIOPHILIC_SAGE', 'CREAM_WHITE']).default('BIOPHILIC_SAGE'),
  referralCode: z.string().optional(),
});

export const ContactTicketSchema = z.object({
  department: z.enum(['ORDERS', 'TECHNICAL', 'ENTERPRISE', 'LEGAL_PRIVACY']),
  name: z.string().min(2, "Name required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});
