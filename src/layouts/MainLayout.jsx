import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
export default function MainLayout() {
  return (<><a href="#main" className="skip">Skip to content</a><Navbar /><main id="main"><Outlet /></main><Footer /></>)
}
