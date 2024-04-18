import React from 'react'
import PropTypes from 'prop-types';

function ActionButton({clickHandler,caption,className,icon}) {
  return (
    <button onClick={clickHandler} type="button" className={`flex items-center justify-center gap-1 text-white w-32  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ${className}`}>
    {icon}
    {caption}
    </button>

  )
}
ActionButton.propTypes ={
    clickHandler:PropTypes.func,
    caption:PropTypes.string,
    className:PropTypes.string,
    icon:PropTypes.element
}
export default ActionButton
