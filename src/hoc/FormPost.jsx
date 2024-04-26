import { BsFillXCircleFill, BsServer } from "react-icons/bs";
import { Formik, Form, Field, ErrorMessage } from "formik"; 
import * as Yup from 'yup'; 
import PropTypes from 'prop-types';
import axios from "axios";
import { toast } from "react-toastify";

const PostSchema = Yup.object().shape({ 
  title: Yup.string() 
     .min(5, 'Too Short!') 
    .max(200, 'Too Long!') 
    .required('Required'),
    text: Yup.string() 
    .min(10, 'Too Short!') 
   .max(5000, 'Too Long!') 
   .required('Required'), 
   image: Yup.string().url('Invalid url') 
     .required('Required'), 
     tags: Yup.string() 
     .min(3, 'Too Short!') 
    .max(200, 'Too Long!') 
    .required('Required'), 
  }); 
function FormPost({refresh,address,post_or_put,handleClose,postItem}) {
  let post = structuredClone(Object.fromEntries(postItem));
  return (
    <div className="grid grid-cols-12 gap-4 bg-slate-100 ">
    <div className="w-12/12  space-y-3  py-8 flex flex-col justify-center items-center mx-auto text-black col-span-12">
    <Formik enableReinitialize={true}
       initialValues={post} 
       validationSchema={PostSchema} 
       onSubmit={(values, actions) => {
                  actions.setSubmitting(true);
                  if(post_or_put ==="post")  
                  axios.post(address,JSON.stringify(values),{headers: {
                      'content-type': 'application/json'
                    }})
                  .then(response=>{
                    toast.success('Post Created...', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                      }); 
                      actions.setSubmitting(false);
                      if(refresh)  refresh();
                  })
                  .catch((error)=>{
                      console.log(error);   
                      toast.error('Error in post creating... ', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        }); 
                      actions.setSubmitting(false);
                  })
                  if(post_or_put ==="put")
                  axios.put(`${address}/${values.id}`,JSON.stringify(values),{headers: {
                    'content-type': 'application/json'
                  }})
                .then(response=>{
                    console.log('post-data',response);
                    toast.success('Post Updated', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                      });  
                    actions.setSubmitting(false);
                    if(refresh)  refresh();
                })
                .catch((error)=>{
                    console.log(error);
                    toast.error('Error in post updating... ', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                      });   
                    actions.setSubmitting(false);
                })
                
                
              }} 
     > {({ isSubmitting }) => (
      <Form  className="flex flex-col w-8/12 text-black">
        {isSubmitting && <div>isSubmitting...</div>}
        <Field type="hidden" name="id"/>
        <Field type="hidden" name="create_date"/>
        <label htmlFor="title" >Title:
          <Field  className="px-3 py-2 rounded-md w-full ml-2"      
          name="title" type="text"/>
          <ErrorMessage className="text-red-600" name="title" component="div" />
        </label>
        <label htmlFor="image">Image:
          <Field  type="text" 
          name="image"
          className="px-3 py-2 rounded-md w-full ml-2"
          />
          <ErrorMessage className="text-red-600" name="image" component="div" />
        </label>
        <label htmlFor="tags">Tags:
          <Field  type="text" 
          name="tags"
          className="px-3 py-2 rounded-md w-full ml-2"/>
          <ErrorMessage className="text-red-600" name="tags" component="div" />
        </label>
        
        <label htmlFor="text">Text:
          <Field as="textarea"  
          name="text"
          className="px-3 py-2 rounded-md w-full ml-2"/>
          <ErrorMessage className="text-red-600" name="text" component="div" />
        </label>
        
        
        <div className="col-span-12 flex justify-center items-center  gap-3 mt-5 ">
        <button disabled={isSubmitting}   type="submit" className={`flex justify-center items-center gap-1 px-4 py-2  rounded-md border border-indigo-600  font-semibold hover:text-cyan-950 hover:bg-gradient-to-r hover:from-slate-300 hover:to-indigo-400 ${isSubmitting && `bg-stone-500 text-white`}`} >
        <BsServer />Save
        </button>
        <button type="button"
          className="flex justify-center items-center  gap-1 px-4 py-2  rounded-md border border-indigo-600 font-semibold hover:text-cyan-950 hover:bg-gradient-to-r hover:from-slate-300 hover:to-indigo-400"
          onClick={handleClose}
        >
          <BsFillXCircleFill />
          Cancel
        </button>
        </div>
      </Form>
        )}


    </Formik>
    </div>
    </div>

  )
}
FormPost.propTypes = {
  postItem:PropTypes.array,
  handleClose:PropTypes.func,
  address:PropTypes.string,
  post_or_put:PropTypes.string,
  refresh:PropTypes.func
}

export default FormPost