
import './App.css'
import Dashboard from './components/fetch/FetchDashboard'
import AxiosDashboard from './components/axios/AxiosDashboard'
import AxiosGet from './components/axios/AxiosGet'
import AxiosPost from './components/axios/AxiosPost'
import AxiosPut from './components/axios/AxiosPut'  
import AxiosDelete from './components/axios/AxiosDelete'
import AxiosAdvance from './components/axios/AxiosAdvance'
function App() {
 
  return (
    <>
      {/*
      <AxiosGet />
      <AxiosPost />
      <AxiosPut />
      <AxiosDelete />
      <AxiosAdvance /> */}
      <AxiosAdvance />
    </>
  )
}

export default App
