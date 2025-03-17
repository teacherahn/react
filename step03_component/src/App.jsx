import './App.css'
import React from 'react'
import Button from './components/componentEx01'
import {FunctionComponent,ClassComponent} from './components/componentEx02'
import Container from './components/componentEx03'
import Counter from './components/componentEx04'

function App() {
  return (
    <>
      <Button label="signin"/>
      <Button label="signup"/>
      <Button label="singout"/>
      <hr/>
      <FunctionComponent />
      <ClassComponent />
      <hr/>
      <Container />
      <hr/>
      <Counter />
      
    </>
  )
}

export default App
