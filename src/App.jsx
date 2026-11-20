import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductView from './pages/ProductView'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/produtos/:id" element={<ProductView />} />
          <Route path="*" element={<p className="container">Página não encontrada.</p>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
