import type { BoyRepository } from "../../domain/BoyRepository";

export function getAllBoys(boyRepository: BoyRepository) {
  return async function() {
    return await boyRepository.getAll();
  };
}


