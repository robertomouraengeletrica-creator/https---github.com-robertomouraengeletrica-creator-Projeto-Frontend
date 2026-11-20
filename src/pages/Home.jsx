import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const categories = ['Camisetas', 'Calças', 'Bonés', 'Tênis', 'Fones']

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-in">
          <div>
            <small>Melhores ofertas personalizadas</small>
            <h1>Queima de estoque Nike 🔥</h1>
            <p>Tênis, camisetas e acessórios com até 30% de desconto por tempo limitado.</p>
            <Link to="/produtos" className="btn">Ver ofertas</Link>
          </div>
          <div className="hero-art">
            <span aria-hidden="true">👟</span>
            <img src="/images/hero-tenis.png" alt="Tênis Nike em destaque" onError={(e) => (e.currentTarget.style.display = 'none')} />
          </div>
        </div>
      </section>

      <section className="container section">
        <h2>Coleções em destaque</h2>
        <div className="collections">
          {['Novo drop Supreme', 'Coleção Adidas', 'Novo Beats Bass'].map((t, i) => (
            <div key={t} className="collection" style={{ background: ['#c92071', '#1f1f1f', '#b5b6f2'][i] }}>
              <span className="badge">30% OFF</span><h3>{t}</h3><Link to="/produtos" className="btn light">Comprar</Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container section">
        <h2>Categorias em destaque</h2>
        <div className="cats">
          {categories.map((c) => <Link key={c} to="/produtos" className="cat"><span>{c[0]}</span>{c}</Link>)}
        </div>
      </section>

      <section className="container section">
        <div className="row"><h2>Produtos em alta</h2><Link to="/produtos" className="more">Ver todos</Link></div>
        <div className="grid">{products.slice(0, 4).map((p) => <ProductCard key={p.id} product={p} />)}</div>
      </section>
    </>
  )
}
