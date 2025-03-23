
import './App.css'

import UseStateEx from './components/basic/UseStateEx'
import UseEffectEx01 from './components/basic/UseEffectEx01'
import UseRefEx01 from './components/advanced/UseRefEx01'
import UseRefEx02 from './components/advanced/UseRefEx02'
import UseReducerBefore from './components/advanced/UseReducerBefore'
import UseReducerEx01 from './components/advanced/UseReducerEx01'
import UseReducerEx02 from './components/advanced/UseReducerEx02'
import UseEffectEx02 from './components/basic/UseEffectEx02'
import TodoMainReducer from './components/practice_todo_list/TodoMainReducer'
import UseCallbackEx from './components/advanced/UseCallbackEx'
import UseMemoEx from './components/advanced/UseMemoEx'
import UseContextBefore from './components/advanced/UseContextBefore'
import UseContextEx from './components/advanced/UseContextEx'

function App() {

  return (
    <>   
     
      {/* <UseStateEx />
      <hr />
      <UseEffectEx />
      <hr/>
      <UseRefEx01 />
      <hr/>
      <UseRefEx02 />
      <hr/>
      <UseReducerBefore />
      <hr/>
      */}
      <UseReducerEx01 />
      <hr/>
      <UseReducerEx02 />
      <hr/>
      <UseEffectEx01 />
      <hr/>
      <UseCallbackEx/>
      <hr/>

     <UseContextBefore/>
     <hr/>
     <UseContextEx/>
      

    </>
  )
}

export default App
