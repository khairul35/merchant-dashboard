import { ComponentProps, TableColumn, TableData } from "./index.prop";

const Component = (props: ComponentProps) => {
    const {
        columns,
        sortKey,
        sortDirection,
        sortedData,
        paginatedData,
        currentPage,
        endIndex,
        handleCheckboxChange,
        handleSort,
        handlePagination,
    } = props;

    return (
        <div className="w-full">
            <div className="overflow-x-auto w-full">
            <table className="table min-w-full border-collapses">
                <thead className="bg-white text-black">
                <tr>
                    {columns.map((column) => (
                    <th
                        key={column.key}
                        className="px-4 py-2 text-left border-b border-gray-200 bg-gray-100 cursor-pointer"
                        onClick={() => (column.sortable ? handleSort(column.key) : null)}
                    >
                        <span className={column.responsiveClasses}>
                        {column.label}
                        {column.sortable && (
                            <span className="ml-1">
                            {sortKey === column.key && (
                                <i className={`${sortDirection === 'asc' ? 'fas fa-sort-up' : 'fas fa-sort-down'}`} />
                            )}
                            </span>
                        )}
                        </span>
                    </th>
                    ))}
                </tr>
                </thead>
                <tbody className="bg-white">
                    {paginatedData.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50 cursor-pointer">
                        {columns.map((column) => (
                            <td key={column.key} className="px-4 py-2 border-b border-gray-200">
                            {column.custom ? column.custom(row[column.dataIndex], row) : row[column.dataIndex]}
                            </td>
                        ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            {/* Pagination component */}
            <div className="flex justify-end mt-4">
                <button
                    onClick={() => handlePagination(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 mr-2 bg-gray-200 rounded-md disabled:opacity-50"
                >
                    Previous
                </button>
                <button
                    onClick={() => handlePagination(currentPage + 1)}
                    disabled={endIndex >= sortedData.length}
                    className="px-3 py-1 bg-gray-200 rounded-md disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
      );
};

export default Component;
