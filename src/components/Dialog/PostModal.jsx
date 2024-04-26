import { useEffect, useState } from 'react';
import Modal from './Modal'
import PropTypes from 'prop-types';
import FormPost from '../../hoc/FormPost';


function PostModal({Mode}) {
    const [showMode,setShowMode] = useState({isOpen:false,mode:'',post:null})
   useEffect(() => {
    setShowMode((prev)=>{return {...prev,isOpen:Mode.isOpen,mode:Mode.mode,post:Mode.post}})
   },[Mode]);
   const handleClose = ()=>{setShowMode((prev)=>{return {...prev,isOpen:false}})}
   let child = null
    switch (showMode.mode) {
        case "new":
            child = <FormPost refresh={Mode.refresh} address={Mode.address} post_or_put="post" handleClose={handleClose} postItem={showMode?.post}/>
            break;
        case "edit":
                console.log('Mode.refresh',Mode.refresh);
                child = <FormPost refresh={Mode.refresh} address={Mode.address} post_or_put="put" handleClose={handleClose} postItem={showMode?.post}/>
                break;
        default:
            break;
    }
  return (
    <Modal  hasCloseBtn={true}
        isOpen={showMode?.isOpen}
        onClose={handleClose}>
        {child}
    </Modal>
  )
}
PostModal.propTypes = {
    Mode:PropTypes.object
  }
export default PostModal
