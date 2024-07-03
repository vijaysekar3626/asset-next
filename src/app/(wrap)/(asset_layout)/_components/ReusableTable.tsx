import React from 'react'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
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
    })
    
    const {
        getHeaderGroups,
        getRowModel,
        getFooterGroups
      } = table;
  return (
    <div>
        <table className='border-collapse  border-slate-400 w-full'>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} className='border border-slate-300'>
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
                <td key={cell.id} className='border border-slate-300 text-center'>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  )
}

export default ReusableTable