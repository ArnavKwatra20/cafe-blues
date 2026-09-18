import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './Button'

export function Navbar({ onReserve }: { onReserve: () => void }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', onScroll); return () => window.removeEventListener('scroll', onScroll) }, [])
  useEffect(() => setOpen(false), [location.pathname])
  const links = [['/', 'Home'], ['/menu', 'Menu'], ['/about', 'About'], ['/contact', 'Contact']]
  return <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}><div className="container nav-wrap">
    <Link to="/" className="logo">CAFE <i>BLUES</i></Link>
    <nav className={`main-nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">{links.map(([to, label]) => <Link className={location.pathname === to ? 'active' : ''} to={to} key={to}>{label}</Link>)}<button className="mobile-reserve" onClick={onReserve}>Reserve a table</button></nav>
    <Button className="nav-cta" variant="outline" onClick={onReserve}>Reserve a table</Button>
    <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
  </div></header>
}
