import { z } from 'zod';

// ============================================
// Primitive Schemas
// ============================================

export const IdSchema = z.number().int().positive();
export const UuidSchema = z.string().uuid();
export const EmailSchema = z.string().email();
export const UrlSchema = z.string().url();
export const DateStringSchema = z.string().datetime();

// ============================================
// Pagination
// ============================================

export const PaginationParamsSchema = z.object({
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(20),
});

export const PaginationMetaSchema = z.object({
  page: z.number(),
  limit: z.number(),
  total: z.number(),
  totalPages: z.number(),
});

export type PaginationParams = z.infer<typeof PaginationParamsSchema>;
export type PaginationMeta = z.infer<typeof PaginationMetaSchema>;

// ============================================
// API Response Wrappers
// ============================================

export const ApiErrorSchema = z.object({
  message: z.string(),
  code: z.string().optional(),
  field: z.string().optional(),
});

export const ApiResponseSchema = <T extends z.ZodTypeAny>(dataSchema: T) =>
  z.object({
    success: z.boolean(),
    data: dataSchema,
    message: z.string().optional(),
  });

export const PaginatedResponseSchema = <T extends z.ZodTypeAny>(itemSchema: T) =>
  z.object({
    success: z.boolean(),
    data: z.array(itemSchema),
    meta: PaginationMetaSchema,
  });

export type ApiError = z.infer<typeof ApiErrorSchema>;

// ============================================
// Timestamps
// ============================================

export const TimestampsSchema = z.object({
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export type Timestamps = z.infer<typeof TimestampsSchema>;

// ============================================
// Sort & Filter
// ============================================

export const SortOrderSchema = z.enum(['asc', 'desc']);
export type SortOrder = z.infer<typeof SortOrderSchema>;

export const SortParamsSchema = z.object({
  sortBy: z.string().optional(),
  sortOrder: SortOrderSchema.optional(),
});

export type SortParams = z.infer<typeof SortParamsSchema>;
