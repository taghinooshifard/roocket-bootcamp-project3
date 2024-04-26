import React from 'react'

import Sidebar from '../../components/Menu/Admin/sidebar'
import usePath from '../../hooks/usepath'
import { useSelector } from 'react-redux'
function AdminLayout() {
const hide = useSelector(state => state.hide.value);

  const {setCurrentPath,getCurrentPath} = usePath();
  return (
        <>
          <Sidebar setPath={setCurrentPath}/>
          <div className={`p-4 ${!hide && `sm:ml-64` } `}>
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
              {getCurrentPath()}
            </div>
          </div>
        </>

  )
}

export default AdminLayout
