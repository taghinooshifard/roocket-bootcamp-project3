import React from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../slices/sidebarSlice'
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

function useSelectSideBar(setPath) {
    const dispatch = useDispatch()
    const CloseHandler = ()=>{
      dispatch(toggle());
      }
    const [selectedSideBar,setSelectedSideBar] =  useState({path:"Dashboard"});
    const dashboardHandler = ()=>{
     setSelectedSideBar((prev)=>{return {...prev,path:"Dashboard"}})
     setPath("Dashboard")
    }
    const PostAdminHandler = ()=>{
     setSelectedSideBar((prev)=>{return {...prev,path:"PostAdmin"}})
     setPath("PostAdmin")
    }
    useEffect(() => {


    }, [selectedSideBar]);
  return {CloseHandler,dashboardHandler,PostAdminHandler,selectedSideBar}
}
useSelectSideBar.propTypes ={
    setPath:PropTypes.func,
  }

export default useSelectSideBar
