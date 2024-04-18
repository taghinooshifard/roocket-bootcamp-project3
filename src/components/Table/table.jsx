import React from 'react'
import Thead from './thead'
import Tbody from './tbody'
import TableNav from './tableNav'

function Table() {
  return (
    <>
        <table className="w-full text-base text-left rtl:text-right text-gray-600 dark:text-gray-400">
            <Thead/>
            <Tbody/>
        </table>
        <TableNav/>
    </>
  )
}

export default Table
