import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState('');
    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => clearTimeout(timeOutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debounceValue;
}

export default useDebounce;
