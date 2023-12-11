export const useTelegram = () => {
    const runtimeConfig = useRuntimeConfig();

    const telegram_bot_api = runtimeConfig.public.TELEGRAM_API_KEY;
    const chat_id = '783857198';
    // Саня 783857198
    // я 146216492

    const sendForm = async (form: Record<string, string>, formKeysTranslation: Record<string, keyof typeof form>) => {
        let message = '⚡НОВЫЙ ЗАКАЗ⚡';

        for (let key in formKeysTranslation) {
            formKeysTranslation[key] = form[formKeysTranslation[key]];
            message += `\n${key}: ${formKeysTranslation[key]}`;
        }

        const url = 'https://api.telegram.org/bot' + telegram_bot_api + '/sendMessage';

        try {
            const res = await $fetch<Record<'ok' | 'result', any>>(url, {
                method: 'POST',
                body: { chat_id, text: message },
            });
            if (res.ok) {
                return true;
            }
        } catch (err) {
            console.log('Error...', err);
            return false;
        }
    };

    return { sendForm };
};
