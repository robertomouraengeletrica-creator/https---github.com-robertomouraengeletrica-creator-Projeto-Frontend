import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const brands = [...new Set(products.map((p) => p.brand))]
const cats = [...new Set(products.map((p) => p.category))]

export default function Products() {
  const [sort, setSort] = useState('relevance')
  const [selBrands, setSelBrands] = useState([])
  const [selCats, setSelCats] = useState([])

  const toggle = (list, setList, v) => setList(list.includes(v) ? list.filter((x) => x !== v) : [...list, v])

  const list = useMemo(() => {
    let r = products.filter((p) => (!selBrands.length || selBrands.includes(p.brand)) && (!selCats.length || selCats.includes(p.category)))
    if (sort === 'asc') r = [...r].sort((a, b) => a.price - b.price)
    if (sort === 'desc') r = [...r].sort((a, b) => b.price - a.price)
    return r
  }, [sort, selBrands, selCats])

  return (
    <div className="container section">
      <div className="row">
        <h2>Resultados ({list.length} produtos)</h2>
        <label>Ordenar por{' '}
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="relevance">Mais relevantes</option>
            <option value="asc">Menor preço</option>
            <option value="desc">Maior preço</option>
          </select>
        </label>
      </div>
      <div className="listing">
        <aside className="filters">
          <h3>Filtrar por</h3>
          <h4>Marca</h4>
          {brands.map((b) => <label key={b}><input type="checkbox" checked={selBrands.includes(b)} onChange={() => toggle(selBrands, setSelBrands, b)} /> {b}</label>)}
          <h4>Categoria</h4>
          {cats.map((c) => <label key={c}><input type="checkbox" checked={selCats.includes(c)} onChange={() => toggle(selCats, setSelCats, c)} /> {c}</label>)}
        </aside>
        <div className="grid three">
          {list.length ? list.map((p) => <ProductCard key={p.id} product={p} />) : <p>Nenhum produto encontrado. Remova um filtro.</p>}
        </div>
      </div>
    </div>
  )
}
