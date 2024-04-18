import React from 'react'
import PropTypes from 'prop-types';

function SidebarItem({children,caption,clickHandler,className,href }) {
  return (
    <a
    onClick={clickHandler}
    href={href}
    className={className }>
        {children}
        <span className="flex-1 ms-3 whitespace-nowrap">{caption}</span>
    </a>
  )
}
SidebarItem.propTypes ={
    children:PropTypes.node,
    caption:PropTypes.string,
    clickHandler:PropTypes.func,
    className:PropTypes.string,
    href:PropTypes.string,
}
export default SidebarItem
