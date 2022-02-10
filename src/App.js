 import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment} from './actions/index';


function App() {
  // const de=()=>{
  //  // dispatch(allActions.decrement())
  // }; 
  console.log(" enter in app"); 
  const counter = useSelector(state=> state.counter);
  const isloggedIn = useSelector(state=> state.islogged);
  const dispatch = useDispatch();

  return (
    <div>
        <div> Counter {counter}</div> 
       
        <button onclick={()=> dispatch(increment())}> + </button> 

       { isloggedIn ? <div >contenu que vous voyer si seulement vous êtes connecté </div> : ''}  
    
    </div>
  );
}


export default App;
