import { useEffect, useMemo, useState } from "react";
import {
    useTable,
    usePagination,
    useSortBy,
    useFilters,
    // useGlobalFilter,
} from "react-table";

const PlanTable = ({ searchValue, tableData }) => {
    const [data, setData] = useState(tableData);


    const columns = useMemo(
        () => [
            {
                Header: "Route",
                accessor: "route",
            },
            {
                Header: "Status",
                accessor: "status",
                Cell: ({ cell: { value } }) =>
                    value == "Delayed" ? (
                        <span className="py-1 px-2 flex items-center justify-center font-medium text-center rounded-[50px] bg-[#e762620f] text-[#E76262]" >{value}</span>
                    ) : value == "Completed" ? (
                        <span className="py-1 px-2 flex items-center justify-center font-medium text-center rounded-[50px] bg-[#3ece8026] text-[#3ECE80]" >{value}</span>
                    ) : value == "In Progress" ? (
                        <span className="py-1 px-2 flex items-center justify-center font-medium text-center rounded-[50px] bg-[#eca33626] text-[#ECA336]" >{value}</span>
                    ) : (
                        <span className="py-1 px-2 flex items-center justify-center font-medium text-center rounded-[50px] bg-[#979BA69B] text-[#3b3c41]" >{value ? value : "Not Started"}</span>
                    ),
            },
            {
                Header: "Planned Date",
                accessor: "planned_date",
            },
            {
                Header: "Treatment",
                accessor: "treatment",
            },
            {
                Header: "Estimated Cost",
                accessor: "estimated_cost",
            },
            {
                Header: "Owner",
                accessor: "owner",
            },
        ],
        []
    );


    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        setFilter,
        // Pagination utilities
        // canPreviousPage,
        canNextPage,
        // pageOptions,
        // pageCount,
        // gotoPage,
        nextPage,
        // previousPage,
        // setPageSize,
        // state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data: useMemo(() => { return data }, [data]),
            initialState: { pageIndex: 0, pageSize: 90 },
        },
        useFilters,
        useSortBy,
        usePagination,
    );


    const handleFilterChange = () => {
        const value = searchValue || undefined;
        setFilter("route", value);
    };

    useEffect(() => {
        handleFilterChange()
    }, [searchValue]);

    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(tableData)) {
            setData(tableData)
        }
        if (canNextPage) {
            nextPage()
        }
        // setPageSize(100)
        // setData(tableData)
    }, [tableData]);

    return (
        <div className="table-container">
            {data && (
                <table className="min-w-full" {...getTableProps()}>
                    <thead className="!mb-6">
                        {headerGroups.map((headerGroup, headerIndex) => (
                            <tr className="py-3 pl-4 pr-8 min-w-full text-sm !rounded-lg bg-primaryBlack text-[#979BA6] font-bold uppercase shadow-md" key={headerIndex} {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column, thIdx) => (
                                    <th
                                        key={thIdx}
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                        className={
                                            `py-3 pl-4 pr-8 mb-6 ${column.isSorted
                                                ? column.isSortedDesc
                                                    ? "sort-desc"
                                                    : "sort-asc"
                                                : ""}`
                                        }
                                    >
                                        <div className="flex items-center gap-3">
                                            {column.render("Header")} {column.isSortedDesc ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#979ba6" viewBox="0 0 256 256"><path d="M40,128a8,8,0,0,1,8-8h72a8,8,0,0,1,0,16H48A8,8,0,0,1,40,128Zm8-56h56a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16ZM184,184H48a8,8,0,0,0,0,16H184a8,8,0,0,0,0-16ZM229.66,82.34l-40-40a8,8,0,0,0-11.32,0l-40,40a8,8,0,0,0,11.32,11.32L176,67.31V144a8,8,0,0,0,16,0V67.31l26.34,26.35a8,8,0,0,0,11.32-11.32Z"></path></svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#979ba6" viewBox="0 0 256 256"><path d="M128,128a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16h72A8,8,0,0,1,128,128ZM48,72H184a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Zm56,112H48a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Zm125.66-21.66a8,8,0,0,0-11.32,0L192,188.69V112a8,8,0,0,0-16,0v76.69l-26.34-26.35a8,8,0,0,0-11.32,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,229.66,162.34Z"></path></svg>
                                            )}
                                        </div>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>

                    <tbody className="" {...getTableBodyProps()}>
                        <tr className="flex items-center  bg-transparent min-w-full rounded-t-xl px-4 py-2 mt-4">
                            <div className="hidden items-center gap-4">
                                <input className="rounded-lg h-4 w-4 accent-[#979BA6]" type="checkbox" />
                                <p>Maintenance Plan</p>
                            </div>
                        </tr>

                        {page.map((row, tbBodyIdx) => {
                            prepareRow(row);
                            return (
                                <tr key={tbBodyIdx} {...row.getRowProps()} className={`bg-[#464647]  ${tbBodyIdx === 0 ? "rounded-t-lg" : tbBodyIdx === page.length - 1 ? "rounded-b-lg" : ""}`}>
                                    {row.cells.map((cell, tdIdx) => {
                                        if (cell.column.id == "route") {
                                            return (
                                                <td key={tdIdx} {...cell.getCellProps()}>
                                                    <div className="flex items-center gap-4">
                                                        <input className="rounded-xl cursor-pointer h-4 w-4 accent-[#979BA6]" type="checkbox" />
                                                        {cell.render("Cell")}
                                                    </div>
                                                </td>
                                            )
                                        } else {
                                            return (
                                                <td key={tdIdx} {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                            )
                                        }
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )
}

export default PlanTable