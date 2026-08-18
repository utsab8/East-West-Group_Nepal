import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Lazy loading all pages for performance (Code Splitting)
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Companies = lazy(() => import('./pages/Companies'))
const AgroSeed = lazy(() => import('./pages/AgroSeed'))
const AgroChemical = lazy(() => import('./pages/AgroChemical'))
const Products = lazy(() => import('./pages/Products'))
const Solutions = lazy(() => import('./pages/Solutions'))
const News = lazy(() => import('./pages/News'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Contact = lazy(() => import('./pages/Contact'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Loader() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-meadow border-t-growth-green rounded-full animate-spin mb-4" />
      <p className="font-display font-bold text-deep-green text-sm uppercase tracking-wider">Loading...</p>
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="pt-[76px] min-h-screen">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/companies/agro-seed" element={<AgroSeed />} />
            <Route path="/companies/agro-chemical" element={<AgroChemical />} />
            <Route path="/products" element={<Products />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/news-activities" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}
