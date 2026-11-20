import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-top">
        <Link to="/" className="logo">ActiveMove</Link>
        <input className="search" type="search" placeholder="Pesquisar produto..." aria-label="Pesquisar produto" />
        <a href="#" className="link-cadastro">Cadastre-se</a>
        <button className="btn">Entrar</button>
        <button className="cart" aria-label="Carrinho">🛒 0</button>
      </div>
      <nav className="container nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/produtos">Produtos</NavLink>
        <a href="#">Categorias</a>
        <a href="#">Meus Pedidos</a>
      </nav>
    </header>
  )
}
