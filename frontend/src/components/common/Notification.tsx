"use client"; // Ensure this is included for Next.js client-side rendering
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';

const useNotification = () => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage); // Show error toast
            setErrorMessage(null); // Reset the error message after showing the toast
        }
    }, [errorMessage]);

    const notifyError = (error: string) => {
        if (errorMessage !== error) { // Only update if the new error is different
            setErrorMessage(error); // Set the error message
        }
    };

    return { notifyError }; // Return the notifyError function
};

export default useNotification;
