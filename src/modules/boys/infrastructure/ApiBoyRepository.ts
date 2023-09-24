import type { BoyRepository } from "../domain/BoyRepository";
import boys from '../../../media/data.json';
import type { Boy } from "../domain/Boy";

export function createApiBoyRepository(): BoyRepository {
  return {
    getAll
  };
}

async function getAll() {

  return boys as Boy[]
}
