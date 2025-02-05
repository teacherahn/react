
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import UpdateProduct from './components/UpdateProduct' 
import DeleteProduct from './components/DeleteProduct'
import CreateProduct from './components/CreateProduct'
import {BrowserRouter as Router, Routes, Route , Link} from "react-router-dom"
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/Products" element={<Products/>} />
          <Route path="/CreateProduct" element={<CreateProduct/>} />
          <Route path="/ProductDetail/:productId" element={<ProductDetail />} />
          <Route path="/UpdateProduct/:productId" element={<UpdateProduct />} />
          <Route path="/DeleteProduct/:productId" element={<DeleteProduct />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
