import React from 'react'
import TableNavButton from '../Buttons/tableNavButton'

function TableNav() {
  return (
    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-center py-4" aria-label="Table navigation">
    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 gap-2">
            <li>
                <TableNavButton caption="Previous" clickHandler={()=>{}}/>
            </li>
            <li>
            <TableNavButton caption="Next" clickHandler={()=>{}}/>


            </li>
        </ul>
    </nav>
  )
}

export default TableNav
