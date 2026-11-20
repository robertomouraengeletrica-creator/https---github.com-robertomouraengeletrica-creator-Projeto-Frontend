import { Link } from 'react-router-dom'
import { brl } from '../data/products'

export default function ProductCard({ product: p }) {
  return (
    <Link to={`/produtos/${p.id}`} className="card">
      <div className="thumb" style={{ background: p.color }}>
        {p.oldPrice && <span className="badge">{Math.round((1 - p.price / p.oldPrice) * 100)}% OFF</span>}
        <span className="thumb-label">{p.brand}</span>
        <img src={p.image} alt={p.name} loading="lazy" onError={(e) => (e.currentTarget.style.display = 'none')} />
      </div>
      <small>{p.category}</small>
      <h3>{p.name}</h3>
      <p className="price">
        {p.oldPrice && <s>{brl(p.oldPrice)}</s>} <strong>{brl(p.price)}</strong>
      </p>
    </Link>
  )
}
