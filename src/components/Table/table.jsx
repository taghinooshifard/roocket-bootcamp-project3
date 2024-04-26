import {useEffect, useState } from 'react'
import Thead from './thead'
import Tbody from './tbody'
import TableNav from './tableNav'
import PropTypes from 'prop-types';
import useAxios from '../../hooks/useAxios';
function Table({setRefresh,deletePost,address,setShowMode}) {
  
  const [paginator,setPaginator] = useState({page:1,limit:3})
  const initUrl = ()=>{
    const myurl = new URL(address);
    myurl.searchParams.append('page', paginator.page); 
    myurl.searchParams.append('limit', paginator.limit); 
    return myurl;
  }
  const[url,setUrl] = useState(initUrl())
  let {data,isloading,error} = useAxios(url,"get");
  const urlHandler=()=>{
    const myurl = initUrl();
    setUrl(myurl) 
  }
  useEffect(()=>{
    console.log('setRefresh',urlHandler);
    setRefresh((prev)=>(urlHandler))
  },[])
  return (
    <>
            {error == null ?
        <>
        <table className="w-full text-base text-left rtl:text-right text-gray-600 dark:text-gray-400">
            <Thead/>
  
           {isloading ?<tbody><tr><th>Loading...</th></tr></tbody>:data?.length==0?<tbody><tr><th>no data found!</th></tr></tbody>:<Tbody refreshTable={urlHandler} deletePost={deletePost} address={address} data={data}  setShowMode={setShowMode}/>}

        </table>
        <TableNav urlHandler={urlHandler} count={data?.length} paginator={paginator} setPaginator={setPaginator}/>
        </>
        : <h1 className="text-3xl">{error}</h1>}
    </>
  )
}
Table.propTypes = {
    setShowMode:PropTypes.func,
    address:PropTypes.string,
    deletePost:PropTypes.func,
    setRefresh:PropTypes.func
  }
export default Table
