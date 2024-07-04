import React from 'react'
import { flexRender, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import Link from 'next/link'
import { Table } from 'reactstrap'
type TableProps = {
    header:string[],
    accessorKey:string[],
    data:any[]
}
function ReusableTable({header,accessorKey,data}:TableProps) {
    const columns = header.map((colHeader,index)=>({
        header:colHeader,
        accessorKey:accessorKey[index],
        cell:(cell:any)=><div>{cell.getValue()}</div>,
        enableColumnFilter: false,
    }))
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel:getCoreRowModel(),
        getPaginationRowModel:getPaginationRowModel(),

    })
    
    const {
        getHeaderGroups,
        getRowModel,
        getFooterGroups,
        getPageOptions,
        setPageSize,
        getState,
        nextPage,
        getCanNextPage,
        getCanPreviousPage,

      } = table;
  return (
    <>
        <Table className='table-hover align-middle table-nowrap mb-0 py-5 table'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id} className='data-table-header'>
              {headerGroup.headers.map(header => (
                <th key={header.id} className=''>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id} className=''>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <div>
          {table.getFooterGroups().map(footerGroup => (
              <div className="items-center mt-3 xl:mt-4 justify-between flex text-xs" key={footerGroup.id}>
                    <div className="flex-shrink-0">
                      <div className="text-slate-400">
                        Showing <span className="fw-semibold">5</span> of{' '}
                        <span className="fw-semibold">25</span> Results
                      </div>
                    </div>
                    <ul className="pagination pagination-separated pagination-sm mb-0">
                      <li className="page-item disabled">
                        <Link href="#" className="page-link">
                          ←
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link href="#" className="page-link">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link href="#" className="page-link">
                          →
                        </Link>
                      </li>
                    </ul>
                  </div>
          ))}
        </div>
        </>
  )
}

export default ReusableTable