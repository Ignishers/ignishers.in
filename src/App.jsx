import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
const Home = lazy(() => import('./pages/Home.jsx')), About = lazy(() => import('./pages/About.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx')), ProjectDetails = lazy(() => import('./pages/ProjectDetails.jsx'))
const Contribute = lazy(() => import('./pages/Contribute.jsx')), Community = lazy(() => import('./pages/Community.jsx'))
const Docs = lazy(() => import('./pages/Docs.jsx')), Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx')), NotFound = lazy(() => import('./pages/NotFound.jsx'))
function ScrollTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
export default function App() {
  return (<><ScrollTop /><Suspense fallback={<div className="container page" aria-busy="true" />}>
    <Routes><Route element={<MainLayout />}>
      <Route path="/" element={<Home />} /><Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} /><Route path="/projects/:slug" element={<ProjectDetails />} />
      <Route path="/contribute" element={<Contribute />} /><Route path="/community" element={<Community />} />
      <Route path="/docs" element={<Docs />} /><Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} /><Route path="*" element={<NotFound />} />
    </Route></Routes></Suspense></>)
}
