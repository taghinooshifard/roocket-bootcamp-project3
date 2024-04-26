import React from 'react'
import PropTypes from 'prop-types';

function TableNavButton({caption,clickHandler,disable}) {
  return (

      <button disabled={disable}   href="#" onClick={clickHandler} 
      className={`flex items-center justify-center w-20 px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${disable && `hover:bg-gray-300 bg-gray-300`}`}>
        {caption}
      </button>

  )
}
TableNavButton.propTypes ={
    clickHandler:PropTypes.func,
    caption:PropTypes.string,
    disable:PropTypes.bool
}
export default TableNavButton
