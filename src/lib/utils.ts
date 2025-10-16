import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge.
 * Replaces `any` with `unknown` to satisfy TypeScript/ESLint.
 */
export function cn(...inputs: unknown[]) {
  return twMerge(clsx(inputs));
}
