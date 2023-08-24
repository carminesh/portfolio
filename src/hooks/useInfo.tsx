import { useCallback } from 'react';

export default function useInfo(email: string) {
    const sendEmail = useCallback(() => {
        const link = `mailto:${email}`;
        window.location.href = link;
    }, [email]);

    return { sendEmail };
}
