import { useCallback } from 'react';

export default function useInfo(email: string) {
    const sendEmail = useCallback(() => {
        if (typeof window === 'undefined') return;

        window.location.href = `mailto:${email}`;

        setTimeout(() => {
            const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
            window.open(gmailLink, '_blank');
        }, 1200);
    }, [email]);

    return { sendEmail };
}
