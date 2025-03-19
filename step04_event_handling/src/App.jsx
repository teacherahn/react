import './App.css'

import OnClickEventHandling from './components/OnClickEventHandling'
import OnChangeEventHandling from './components/OnChangeEventHandling'
import OnFocusEventHandling from './components/OnFocusEventHandling'
import MultiInputFormHandling from './components/MultiInputFormHandling'
import ControlledComponent from './components/ControlledComponent'

function App() {
  return (
    <>
      <OnClickEventHandling />
      <hr />
    
      <OnFocusEventHandling/>
      <hr/>
      
      <OnChangeEventHandling/>
      <hr/>
     
      <MultiInputFormHandling/>
      <hr/>
     
      <ControlledComponent/>
    </>
  )
}

export default App
