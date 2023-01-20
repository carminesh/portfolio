import { useCallback } from 'react';

export default function useInfo(email: string) {
    const sendEmail = useCallback(() => {
        const link = `mailto:${email}`;
        window.location.href = link;
    }, []);

    // props: fileName: string, fileData: Blob
    // const downloadResume = useCallback(() => {
    //     const url = window.URL.createObjectURL(fileData);
    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.setAttribute('download', fileName);
    //     document.body.appendChild(link);
    //     link.click();
    //     link.remove();
    // }, []);

    return { sendEmail };
}
