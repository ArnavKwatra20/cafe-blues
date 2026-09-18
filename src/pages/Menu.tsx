import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MenuCard } from '../components/MenuCard'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { categories, menuItems, type MenuCategory } from '../data/menu'

export function Menu() {
  const [active, setActive] = useState<'All' | MenuCategory>('All')
  const filtered = active === 'All' ? menuItems : menuItems.filter(item => item.category === active)
  const featured = menuItems.find(item => item.featured && item.id === 'blue-plate')!
  return <main className="inner-page menu-page"><section className="page-hero"><div className="container page-hero-inner"><Reveal><span className="eyebrow">The good stuff</span><h1>Our <em>menu.</em></h1><p>Considered plates, beautiful coffee, and something sweet for the road home.</p></Reveal></div></section><section className="section menu-content"><div className="container"><Reveal><div className="featured-menu"><img src={featured.image} alt={featured.alt} /><div><span className="eyebrow">Chef’s pick · Breakfast</span><h2>The <em>Blue Plate</em></h2><p>{featured.description} Built for long mornings and second coffees.</p><Link className="text-link" to="#menu-list">See the full menu <ArrowUpRight size={16} /></Link></div></div></Reveal><div className="menu-list-heading" id="menu-list"><SectionHeading eyebrow="Made today" title={<>Choose your <em>mood.</em></>} /><div className="filter-tabs" role="tablist">{categories.map(category => <button key={category} role="tab" aria-selected={active === category} className={active === category ? 'filter-active' : ''} onClick={() => setActive(category)}>{category}</button>)}</div></div><div className="menu-grid menu-page-grid">{filtered.map((item, index) => <Reveal key={item.id} delay={(index % 3) * .06}><MenuCard item={item} /></Reveal>)}</div></div></section></main>
}
