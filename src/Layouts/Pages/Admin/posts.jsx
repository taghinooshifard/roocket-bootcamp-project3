import ActionButton from '../../../components/Buttons/actionButton'
import Table from '../../../components/Table/table'
import { MdAddCircle } from "react-icons/md";
import withColorButton from '../../../hoc/withColorButton';
import { useState } from 'react';
import PostModal from '../../../components/Dialog/PostModal';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import axios from 'axios';

const newPost = {
  id:0,
  title:'',
  text:'',
  image:'',
  tags:'',
  create_date:Date.now()
}
function PostAdmin() {
  const address = 'https://65f55662f54db27bc022ec4a.mockapi.io/posts';
  const [refresh,setRefresh] = useState(null);
  const [showMode,setShowMode] = useState({refresh:refresh,address:address,isOpen:false,mode:"",post:null})
  const newPostButton = withColorButton(ActionButton,
                                            "green",
                                            <MdAddCircle className="text-xl"/>,
                                            "New Post",
                                            ()=> setShowMode({refresh:refresh,address:address,mode:"new",isOpen:true,post:Object.entries(newPost)})
                                            )
  const deletePost = (id,refreshTable)=>{
    Swal.fire({
      title: "Do you want to delete the post?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "yes",
      denyButtonText: `no`
    }).then((result) => {
      
      if (result.isConfirmed) {
        axios.delete(`${address}/${id}`,{headers: {
          'content-type': 'application/json'
        }})
      .then(response=>{
        Swal.fire(`Delete id = ${id}`, "", "success");
        refreshTable();
      })
      .catch((error)=>{
          console.log(error);   
          Swal.fire(`Error in deleting..`, "", "error");

      })
        
      } else if (result.isDenied) {
        Swal.fire("post not deleted", "", "info");
      }
    });
  }                                            

  return (
    <>
       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                {newPostButton}
                <PostModal Mode={showMode}/>
            </div>
            <Table setRefresh={setRefresh}  deletePost={deletePost} address={address} setShowMode={setShowMode}/>

        </div>
    </>
  )
}

export default PostAdmin
