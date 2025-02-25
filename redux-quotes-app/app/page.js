"use client"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuotes } from './actions/quoteActions';

export default function Home() {
    const dispatch = useDispatch();
    const { loading, quotes, error } = useSelector((state) => state.quotes);

    useEffect(() => {
        dispatch(fetchQuotes());
    }, [dispatch]);

    return (
        <div>
            <h1>Quotes</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <ul>
                {quotes.map((quote) => (
                    <li key={quote.id}>{quote.quote}</li>
                ))}
            </ul>
        </div>
    );
}