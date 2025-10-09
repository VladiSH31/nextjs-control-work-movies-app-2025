'use client'
import './SearchComponent.css'
import {FormEvent, useEffect, useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";


const SearchComponent = () => {

    const router = useRouter();
    const searchParams = useSearchParams();
    const [query, setQuery] = useState('')


    useEffect(() => {
        const currentQuery = searchParams.get('query');
        if (currentQuery !== null && currentQuery !== query) {
            setQuery(currentQuery);
        } else if (currentQuery === null && query !== '') {
            // Якщо query зник з URL, а локальний стан не порожній, очищаємо його
            setQuery('');
        }
    }, [searchParams]);

    const handleSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const trimmedQuery = query.trim();
        if (trimmedQuery) {
            router.push('/search?query='+trimmedQuery)
        } else if (!trimmedQuery) {
            router.push('/search')
        }
    }

    return (
        <form onSubmit={handleSearch}>
            <input className={'search-input'} type={'text'} placeholder={'Search...'} value={query} onChange={
                (event) => {
                    setQuery(event.target.value)
                }
            }
            />
        </form>
    );
};

export default SearchComponent;
