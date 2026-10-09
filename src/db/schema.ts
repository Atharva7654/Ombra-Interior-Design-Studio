import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

/** Project enquiries submitted through the contact form. */
export const enquiries = pgTable("enquiries", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 120 }).notNull(),
  email: varchar("email", { length: 200 }).notNull(),
  phone: varchar("phone", { length: 40 }),
  projectType: varchar("project_type", { length: 60 }).notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

export type Enquiry = typeof enquiries.$inferSelect;
export type NewEnquiry = typeof enquiries.$inferInsert;
