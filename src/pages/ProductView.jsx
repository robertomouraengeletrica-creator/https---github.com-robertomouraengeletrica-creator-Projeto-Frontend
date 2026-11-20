import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products, brl } from '../data/products'

export default function ProductView() {
  const { id } = useParams()
  const p = products.find((x) => x.id === Number(id))
  const [size, setSize] = useState(null)
  const [color, setColor] = useState(null)
  const [added, setAdded] = useState(false)

  if (!p) return <div className="container section"><p>Produto não encontrado. <Link to="/produtos">Voltar à listagem</Link></p></div>

  return (
    <div className="container section">
      <p className="crumb"><Link to="/">Home</Link> / <Link to="/produtos">Produtos</Link> / {p.category} / {p.name}</p>
      <div className="product">
        <div className="gallery">
          <div className="main-img" style={{ background: color || p.color }}><span>{p.brand}</span>
            <img src={p.image} alt={p.name} onError={(e) => (e.currentTarget.style.display = 'none')} />
          </div>
          <div className="thumbs">{p.colors.map((c) => <button key={c} style={{ background: c }} onClick={() => setColor(c)} aria-label={`Ver cor ${c}`} />)}</div>
        </div>
        <div className="info">
          <h1>{p.name}</h1>
          <small>{p.category} | {p.brand}</small>
          <p className="price big">{p.oldPrice && <s>{brl(p.oldPrice)}</s>} <strong>{brl(p.price)}</strong></p>
          <h4>Descrição</h4><p>{p.description}</p>
          <h4>Tamanho</h4>
          <div className="options">{p.sizes.map((s) => <button key={s} className={size === s ? 'opt active' : 'opt'} onClick={() => setSize(s)}>{s}</button>)}</div>
          <h4>Cor</h4>
          <div className="options">{p.colors.map((c) => <button key={c} className={(color || p.color) === c ? 'dot active' : 'dot'} style={{ background: c }} onClick={() => setColor(c)} aria-label={`Cor ${c}`} />)}</div>
          <button className="btn buy" disabled={!size} onClick={() => setAdded(true)}>{added ? 'Adicionado ao carrinho ✓' : size ? 'Comprar' : 'Escolha um tamanho'}</button>
        </div>
      </div>
      <h2 className="section">Produtos relacionados</h2>
      <div className="grid">{products.filter((x) => x.id !== p.id).slice(0, 4).map((x) => <ProductCard key={x.id} product={x} />)}</div>
    </div>
  )
}
