export function createApiWeekRepository() {
    return {
        getAll: async () => {
            const response = await fetch("/api/weeks");
            const weeks = await response.json();
            return weeks;
        }
    };
}