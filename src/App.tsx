import { useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ReservationModal } from './components/ReservationModal'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { useEffect } from 'react'

function ScrollManager() { const { pathname } = useLocation(); useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); document.title = pathname === '/' ? 'Cafe Blues | Good coffee. Slow mornings.' : `Cafe Blues | ${pathname.slice(1).replace(/^./, letter => letter.toUpperCase())}` }, [pathname]); return null }
function AppShell() { const [reservationOpen, setReservationOpen] = useState(false); return <><ScrollManager /><Navbar onReserve={() => setReservationOpen(true)} /><Routes><Route path="/" element={<Home onReserve={() => setReservationOpen(true)} />} /><Route path="/menu" element={<Menu />} /><Route path="/about" element={<About />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<Home onReserve={() => setReservationOpen(true)} />} /></Routes><Footer onReserve={() => setReservationOpen(true)} /><ReservationModal open={reservationOpen} onClose={() => setReservationOpen(false)} /></> }
export default function App() { return <BrowserRouter><AppShell /></BrowserRouter> }
