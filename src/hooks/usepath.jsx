import  {  useState } from 'react'
import PostAdmin from '../Layouts/Pages/Admin/posts'
import Dashboard from '../Layouts/Pages/Admin/dashboard'

function usePath() {
  const [currentPath,setCurrentPath] =  useState("")
  const getCurrentPath = ()=>{
    switch (currentPath) {
      case "PostAdmin":
            return   <PostAdmin/>;
      case "Dashboard":
            return   <Dashboard/>;
      default:
        return   <Dashboard/>;
    }
  }
  return (
    {currentPath,setCurrentPath,getCurrentPath}
  )
}

export default usePath
