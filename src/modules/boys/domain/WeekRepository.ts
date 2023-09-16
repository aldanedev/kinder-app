import type { Week } from "./Week";

export interface WeekRepository {
    getAll(): Promise<Week[]>;
}