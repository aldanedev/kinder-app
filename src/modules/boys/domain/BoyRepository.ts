import type { Boy } from "./Boy";

export interface BoyRepository {
  getAll(): Promise<Boy[]>;
}
