import { ArrowUpRight, Camera, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer({ onReserve }: { onReserve: () => void }) {
  return <footer className="site-footer">
    <div className="container footer-grid">
      <div className="footer-brand"><Link to="/" className="logo logo-footer">CAFE <i>BLUES</i></Link><p>Good coffee. Slow mornings.<br />Better conversations.</p><a className="footer-social" href="#instagram" aria-label="Instagram"><Camera size={18} /></a></div>
      <div><span className="footer-label">Explore</span><nav className="footer-links"><Link to="/menu">Menu</Link><Link to="/about">Our story</Link><Link to="/contact">Visit us</Link><button className="footer-reserve" onClick={onReserve}>Reserve a table</button></nav></div>
      <div><span className="footer-label">Find us</span><address><a href="#location"><MapPin size={15} /> 24 Blue Street<br /><span>Mumbai, MH 400001</span></a><a href="tel:+912240001234"><Phone size={15} /> +91 22 4000 1234</a></address></div>
      <div><span className="footer-label">Hours</span><p className="footer-hours">Mon–Fri <b>8am–10pm</b><br />Sat–Sun <b>9am–11pm</b></p><a className="footer-arrow" href="#top">Back to top <ArrowUpRight size={16} /></a></div>
    </div>
    <div className="container footer-bottom"><span>© 2024 Cafe Blues. A fictional cafe concept.</span><span>Made for slow moments.</span></div>
  </footer>
}
