import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { ordered,restocked } from './icrecreamSlice'

const IcecreamView = () => {
    const numOfIcecream = useSelector((state)=> state.icecream.numOfIcecreams)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of icecream = {numOfIcecream}</h2>
        <button onClick={()=> dispatch(ordered())}>order icecream</button>
        <button onClick={()=> dispatch(restocked(5))}>Restock icecream</button>
    </div>
  )
}

export default IcecreamView