import React, { useState } from 'react'
import SidebarItem from './sidebarItem'
import SideBarLists from './sidebarLists'
import { RiMenuUnfoldLine } from "react-icons/ri";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../../slices/sidebarSlice'

function Sidebar({setPath}) {
  const hide = useSelector(state => state.hide.value)
  const dispatch = useDispatch()
  const MenuHandler = ()=>{
    dispatch(toggle());
    }

  return (

    <>
        <SidebarItem href="#" caption="Menu" clickHandler={MenuHandler} className={`flex items-center ${!hide && `hidden`} p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group w-min`} >
            <RiMenuUnfoldLine/>
        </SidebarItem>
      <aside id="default-sidebar" className={`fixed   top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full  ${!hide && `translate-x-0`}  `} aria-label="Sidebar">
          <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">

              <SideBarLists setPath={setPath}/>

          </div>
      </aside>
    </>

  )
}
Sidebar.propTypes ={
  setPath:PropTypes.func,
}
export default Sidebar
