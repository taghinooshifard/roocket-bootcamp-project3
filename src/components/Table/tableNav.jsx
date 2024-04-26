import { useEffect } from 'react';
import TableNavButton from '../Buttons/tableNavButton'
import PropTypes from 'prop-types';
function TableNav({urlHandler,count,paginator,setPaginator}) {

  const prevHandler = ()=>{
    setPaginator((prev)=>({...prev,page:prev.page-1}))
    

  }
  const nextHandler = ()=>{
    setPaginator((prev)=>({...prev,page:prev.page+1}))
    
  }
  useEffect(()=>{
    urlHandler();
  },[paginator])
  return (
    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-center py-4" aria-label="Table navigation">
    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 gap-2">
            <li>
                <TableNavButton 
                disable={paginator.page === 1 ? true:false} 
                caption="Previous" 
                clickHandler={prevHandler}/>
            </li>
            <li>
               <TableNavButton 
               disable={count != paginator.limit ? true:false} 
               caption="Next"
               clickHandler={nextHandler}/>
            </li>
        </ul>
    </nav>
  )
}
TableNav.propTypes = {
  paginator:PropTypes.object,
  setPaginator:PropTypes.func,
  urlHandler:PropTypes.func,
  count:PropTypes.number,
}
export default TableNav
