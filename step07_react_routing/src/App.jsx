
import './App.css'
import RoutingEx01 from './components/RoutingEx01'
import RoutingEx02 from './components/RoutingEx02'
import RoutingEx04 from './components/RoutingEx04'

import { Link } from 'react-router-dom'

function App() {
  
  return (
    <>
      <RoutingEx01 />
      <hr/>
      <RoutingEx02 />
      <hr/>
      <nav>
        <Link to="/product">Product Page</Link> {/* 추가 */}
      </nav>
      <RoutingEx04 />
      <hr/>
    </>
  )
}

export default App
