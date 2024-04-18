import React, { useState } from 'react'
import ActionButton from '../../../components/Buttons/actionButton'
import Table from '../../../components/Table/table'
import { MdAddCircle } from "react-icons/md";
import withColorButton from '../../../hoc/withColorButton';
import Modal from '../../../components/Dialog/Modal';


function PostAdmin() {
  const [openDialog, setOpenDialog] = useState(false);
  const newPostButton = withColorButton(ActionButton,
                                            "green",
                                            <MdAddCircle className="text-xl"/>,
                                            "New Post",
                                            ()=>{setOpenDialog(true)} );

  return (
    <>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                {newPostButton}
                <Modal isOpen={openDialog} hasCloseBtn={true} onClose={()=>setOpenDialog(false)} >
                    <h1>Test</h1>
                </Modal>
            </div>
            <Table/>

        </div>
    </>
  )
}

export default PostAdmin
