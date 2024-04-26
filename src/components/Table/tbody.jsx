import ActionButton from '../Buttons/actionButton'
import { RiDeleteBin2Line } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import withColorButton from '../../hoc/withColorButton';
import PropTypes from 'prop-types';

function Tbody({refreshTable,deletePost,address,data,setShowMode}) {
  return (
    <tbody key={data?.length}>
      {data?.map((post)=><tr key={post?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">

<th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
<h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
  {  post?.title
  }
</h5>
</th>
<td className="px-6 py-4">
    {new Date(post?.create_date).toDateString()}
</td>
<td className="px-6 py-4">
{withColorButton(ActionButton,
                                    "blue",
                                    <FaEdit className="text-xl"/>,
                                    "Edit",
                                    ()=>{setShowMode({refresh:refreshTable,address:address,mode:"edit",isOpen:true,post:Object.entries(post)})} )}
{withColorButton(ActionButton,
                                    "red",
                                    <RiDeleteBin2Line className="text-xl"/>,
                                    "Delete",
                                    ()=>{deletePost(post?.id,refreshTable)} )}
</td>
</tr>)}
    
    
</tbody>
  )
}
Tbody.propTypes = {
    setShowMode:PropTypes.func,
    data:PropTypes.array,
    address:PropTypes.string,
    deletePost:PropTypes.func,
    refreshTable:PropTypes.func
  }
export default Tbody
