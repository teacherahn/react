import './App.css'

import OnClickEvent from './components/OnClickEvent'
import OnChangeEvent from './components/OnChangeEvent'
import OnFocusEvent from './components/OnFocusEvent'
import MultiInputForm from './components/MultiInputForm'

function App() {
  return (
    <>
      <h1>Clikc Event</h1>
      <OnClickEvent />
      <hr />
      <h1>Change Event</h1>
      <OnChangeEvent/>
      <hr/>
      <h1>Focus Event</h1>
      <OnFocusEvent/>
      <hr/>
      <h1>Multi Input Form</h1>
      <MultiInputForm/>
    </>
  )
}

export default App
