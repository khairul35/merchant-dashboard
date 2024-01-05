'use client';

// Table.tsx
import { useState } from 'react';
import { TableProps, ComponentProps } from './index.prop';
import Component from './index.component';

const Table: React.FC<TableProps> = ({ data, columns }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortKey, setSortKey] = useState<string | number>('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const [filters, setFilters] = useState<{ [key: string]: any }>({});

    const itemsPerPage = 10;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    const filteredData = data.filter((row) => {
        for (const key in filters) {
        if (filters[key] && row[key] !== filters[key]) {
            return false;
        }
        }
        return true;
    });

    const sortedData = sortKey
        ? [...filteredData].sort((a, b) => {
            const valueA = a[sortKey];
            const valueB = b[sortKey];

            if (valueA < valueB) {
            return sortDirection === 'asc' ? -1 : 1;
            }
            if (valueA > valueB) {
            return sortDirection === 'asc' ? 1 : -1;
            }
            return 0;
        })
        : filteredData;

    const paginatedData = sortedData.slice(startIndex, endIndex);

    const handleSort = (key: string | number) => {
        if (key === sortKey) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
        setSortKey(key);
        setSortDirection('asc');
        }
    };

    const handleFilter = (key: string, value: any) => {
        setFilters({ ...filters, [key]: value });
        setCurrentPage(1); // Reset to first page when applying filters
    };

    const handlePagination = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Handle checkbox change logic
    };

    const componentProps: ComponentProps = {
        columns,
        sortKey,
        sortDirection,
        paginatedData,
        currentPage,
        endIndex,
        sortedData,
        handleCheckboxChange,
        handleSort,
        handlePagination,
    }

    return (
        <Component {...componentProps} />
    );
};

export default Table;
