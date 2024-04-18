import ActionButton from '../Buttons/actionButton'
import withColorButton from '../../hoc/withColorButton';
import { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import {  toast } from 'react-toastify';
import dateFormat from 'dateformat';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin2Line } from 'react-icons/ri';
import Modal from '../Dialog/Modal';
import withManipulatePost from '../../hoc/withManipulatePost';

function Tbody() {
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  
    const {data,isloading,error} = useAxios("https://65f55662f54db27bc022ec4a.mockapi.io/posts","get",null)
    if(error) toast.error('Error in Fetch Data!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        
        });
  return (
    error?
    <h1>error</h1>
    :
    <tbody>
      {isloading?
      <h1>isLoading...</h1>:
      data.map((post)=>{
        return <tr key={post.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <Modal isOpen={openEditDialog} hasCloseBtn={true} onClose={()=>setOpenEditDialog(false)} >
          {withManipulatePost(post)}
        </Modal>
        <Modal isOpen={openDeleteDialog} hasCloseBtn={true} onClose={()=>setOpenDeleteDialog(false)} >

        </Modal>
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
        </h5>
        </th>
        <td className="px-6 py-4">
            {dateFormat(post.create_date, "dd/mm/yyyy")}
        </td>
        <td className="px-6 py-4">
        {withColorButton(ActionButton,
                                            "blue",
                                            <FaEdit className="text-xl"/>,
                                            "Edit",
                                            ()=>{setOpenEditDialog(true)} )}
        {withColorButton(ActionButton,
                                            "red",
                                            <RiDeleteBin2Line className="text-xl"/>,
                                            "Delete",
                                            ()=>{setOpenDeleteDialog(true)} )}
        </td>
      </tr>
      })


      }
    </tbody>
  )
}

export default Tbody
