
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import {BrowserRouter as Router, Routes, Route , Link} from "react-router-dom"
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/ProductDetail/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
