import { TableColumn, TableData } from "../components/table/index.prop";

export interface ComponentProps {
    tableProps: TableProps;
    name: string;
}

export interface TableProps {
    data: TableData[];
    columns: TableColumn[];
}