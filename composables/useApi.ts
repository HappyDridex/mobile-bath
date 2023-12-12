export const useApi = () => {
    const apiUrl = 'https://banyabochka.moscow/';

    async function getBuzyDays() {
        const path = 'get_schedule/';
        const res = await $fetch<Promise<string[]>>(`${apiUrl}${path}`);
        return res;
    }

    return { getBuzyDays };
};
