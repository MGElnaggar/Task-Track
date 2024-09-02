import { useState, useEffect } from 'react';

import PostListData from '../PostListsData.json'; 

interface UseFetchResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

function useFetch<T>(url: string): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                // const response = await fetch(url);
                // if (!response.ok) {
                //     throw new Error('Network response was not ok');
                // }
                // const data = await response.json();
                // setData(data);
                const data = PostListData as T;
                setData(data);
            } catch (error) {
                setError((error as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
}

export default useFetch;
