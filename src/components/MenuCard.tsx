import { Leaf } from 'lucide-react'
import type { MenuItem } from '../data/menu'

interface MenuCardProps { item: MenuItem; compact?: boolean }

export function MenuCard({ item, compact = false }: MenuCardProps) {
  return (
    <article className={`menu-card ${compact ? 'menu-card-compact' : ''}`}>
      <div className="menu-card-image-wrap">
        <img src={item.image} alt={item.alt} loading="lazy" className="menu-card-image" />
        {item.vegetarian && <span className="veg-badge"><Leaf size={12} /> Vegetarian</span>}
        <span className="menu-card-category">{item.category}</span>
      </div>
      <div className="menu-card-copy">
        <div className="menu-card-title"><h3>{item.name}</h3><span>₹{item.price}</span></div>
        <p>{item.description}</p>
      </div>
    </article>
  )
}
