import { GrClose } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";
import { GrTable } from "react-icons/gr";
import SidebarItem from './sidebarItem';
import PropTypes from 'prop-types';
import useSelectSideBar from "../../../hooks/useSelectSideBar";


function SideBarLists({setPath}) {
    const {CloseHandler,dashboardHandler,PostAdminHandler,selectedSideBar} = useSelectSideBar(setPath)
   return (
    <ul className="space-y-2 font-medium">
    <li>
        <SidebarItem clickHandler={CloseHandler}  href="#" caption="Close" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-blue-200 dark:hover:bg-gray-700 group">
            <GrClose />
        </SidebarItem>

    </li>
     <li>
        <SidebarItem clickHandler={dashboardHandler} caption="Dashboard" href="#" className={`flex items-center p-2 text-gray-900 rounded-lg dark:text-white ${selectedSideBar.path=="Dashboard" ? `bg-blue-200`:``} hover:bg-blue-200 dark:hover:bg-gray-700 group`}>
           <MdDashboard className="text-xl"/>
        </SidebarItem>
     </li>
     <li>
        <SidebarItem clickHandler={PostAdminHandler} caption="Posts" href="#" className={`flex items-center p-2 text-gray-900 rounded-lg  dark:text-white  ${selectedSideBar.path=="PostAdmin" ? `bg-blue-200`:``} hover:bg-blue-200 dark:hover:bg-gray-700 group`}>
           <GrTable/>
        </SidebarItem>
     </li>

  </ul>
  )
}
SideBarLists.propTypes ={
   setPath:PropTypes.func,
 }

export default SideBarLists
