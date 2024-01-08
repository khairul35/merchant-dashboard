// types.ts
export interface TableColumn {
    key: string;
    label: string;
    dataIndex: string;
    sortable?: boolean;
    filterable?: boolean;
    center?: boolean;
    responsiveClasses?: string;
    custom?: (value: any, record: TableData) => React.ReactNode;
}

export interface TableData {
    [key: string]: any;
}

export interface TableProps {
    data: TableData[];
    columns: TableColumn[];
}

export interface ComponentProps {
    columns: TableColumn[];
    sortKey: string | number;
    sortDirection: 'asc' | 'desc';
    paginatedData: TableData[];
    currentPage: number;
    endIndex: number;
    sortedData: TableData[];
    handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSort: (key: string | number) => void;
    handlePagination: (page: number) => void;
}
