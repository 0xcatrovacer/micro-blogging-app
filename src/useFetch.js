import { useState, useEffect } from 'react';


const useFetch = (url) => {
    
    const [data, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        fetch(url)
            .then(res => {
                if(!res.ok) {
                    throw new Error('Could not fetch Data');
                }
                return res.json()
            })
            .then((data) => {
                setBlogs(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setIsPending(false)
                setError(err.message)
            })
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;