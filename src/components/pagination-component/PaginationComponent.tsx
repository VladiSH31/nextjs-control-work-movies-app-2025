'use client';

import './PaginationComponent.css'
import type {FC} from "react";
import { useRouter, useSearchParams } from 'next/navigation';

type PaginationPropsType = {
    totalPages: number,
    currentPage: number
}

const PaginationComponent:FC<PaginationPropsType> = ({ totalPages, currentPage}) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const navigateToPage = (page: number) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set('page', page.toString());
        router.push(`?${newSearchParams.toString()}`);
    };


    const handelOnClickPreviousPage = () => {
        navigateToPage(currentPage - 1);
    }

    const handelOnClickNextPage = () => {
        navigateToPage(currentPage + 1);
    }

    if (totalPages <= 1) {
        return null;
    }
    const displayTotalPages = totalPages > 500 ? 500 : totalPages;
    return (
        <div className="pagination-container">
            <button onClick={handelOnClickPreviousPage} disabled={currentPage <= 1}>Previous Page</button>
            <span>Page {currentPage} of {displayTotalPages}</span>
            <button onClick={handelOnClickNextPage} disabled={currentPage >= displayTotalPages}>Next Page</button>
        </div>
    );
};

export default PaginationComponent;