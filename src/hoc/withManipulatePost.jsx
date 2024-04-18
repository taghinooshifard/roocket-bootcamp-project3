import { BsFillXCircleFill, BsServer } from "react-icons/bs";

function withManipulatePost(postItem) {
  const submitHandler = (event)=>{
    event.preventDefault();
    alert('save')
  }  
  console.log(postItem);
  return (
    <div className="grid grid-cols-12 gap-4 bg-slate-100 ">
    <div className="w-10/12  space-y-3  py-20 flex flex-col justify-center items-center mx-auto text-black col-span-12">
      <form method="post" className="flex flex-col w-5/12 text-black">
      <input type='hidden' defaultValue={postItem?.id} name='id'/>
        <label htmlFor='title' >Title:
          <input className="px-3 py-2 rounded-md w-full ml-2"  type='text' defaultValue={postItem?.title} name='title'/>
        </label>
        <label htmlFor='image'>Image:
          <input type='text' defaultValue={postItem?.image} name='image'
          className="px-3 py-2 rounded-md w-full ml-2"
          />
        </label>
        <label htmlFor='tags'>Tags:
          <input type='text' defaultValue={postItem?.tags} name='tags'
          className="px-3 py-2 rounded-md w-full ml-2"/>
        </label>
        <label htmlFor='text'>Text:
          <textarea  defaultValue={postItem?.text} name='text'
          className="px-3 py-2 rounded-md w-full ml-2"/>
        </label>
        
        
        <div className="col-span-12 flex justify-center items-center  gap-3 mt-5 ">
        <button onClick={submitHandler} className="flex justify-center items-center gap-1 px-4 py-2  rounded-md border border-indigo-600  font-semibold hover:text-cyan-950 hover:bg-gradient-to-r hover:from-slate-300 hover:to-indigo-400" type="submit">
        <BsServer />Save
        </button>
        <a
          className="flex justify-center items-center  gap-1 px-4 py-2  rounded-md border border-indigo-600 font-semibold hover:text-cyan-950 hover:bg-gradient-to-r hover:from-slate-300 hover:to-indigo-400"
          
        >
          <BsFillXCircleFill />
          Cancel
        </a>
        </div>
      </form>
    </div>
    </div>
    
  )
}

export default withManipulatePost