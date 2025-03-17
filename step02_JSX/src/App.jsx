import React from 'react' // React 17+에서는 import React from 'react'를 생략할 수 있음
import './App.css'
import ComponentTest from './components/JsxEx01' // vite는 확장자를 생략해도 된다.
import CommentTest from './components/jsxEx02'
import ReturnTest1 from './components/JsxEx03'
import ExportTest1 from './components/JsxEx04'
import { ExportTest2 , ExportTest3, ExportTest4, ExportTest5 } from './components/JsxEx04'  // {}로 묶어서 여러개를 불러올 수 있다.
import { Diff1,Diff2,Diff3 } from './components/JsxEx05'
import { Style1 , Style2 } from './components/JsxEx06'
import { ConditionalRendering1, ConditionalRendering2 } from './components/JsxEx07'

function App() {

  return (
    <>
      <ComponentTest />
      <hr/>
      <CommentTest />      
      <hr/>
      <ReturnTest1 />
      <hr/>
      <ExportTest1 />  
      <ExportTest2 />
      <ExportTest3 />
      <ExportTest4 />
      <ExportTest5 />
      <hr/>
      <Diff1 />
      <Diff2 />
      <Diff3 />
      <hr/>
      <Style1 />
      <Style2 />
      <hr/>
      <ConditionalRendering1 />
      <ConditionalRendering2 />
    </>
  )
}

export default App
