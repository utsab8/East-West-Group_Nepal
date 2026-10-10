import { Routes, Route, useLocation, Outlet } from 'react-router-dom'
import { useEffect, Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'

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

// Admin Pages
const AdminLayout = lazy(() => import('./admin/AdminLayout'))
const Login = lazy(() => import('./admin/Login'))
const Dashboard = lazy(() => import('./admin/Dashboard'))

// Admin Content Editors
const HomeEditor = lazy(() => import('./admin/pages/HomeEditor'))
const AboutEditor = lazy(() => import('./admin/pages/AboutEditor'))
const CompaniesEditor = lazy(() => import('./admin/pages/CompaniesEditor'))
const SolutionsEditor = lazy(() => import('./admin/pages/SolutionsEditor'))
const ProductsEditor = lazy(() => import('./admin/pages/ProductsEditor'))
const NewsEditor = lazy(() => import('./admin/pages/NewsEditor'))
const GalleryEditor = lazy(() => import('./admin/pages/GalleryEditor'))
const ContactEditor = lazy(() => import('./admin/pages/ContactEditor'))

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

// Layout wrapper for public pages (with Navbar and Footer)
function PublicLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-[76px] min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicLayout />}>
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
          </Route>

          {/* Admin Routes */}
          <Route path="/admin/login" element={<Login />} />
          
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Dashboard />} />
            <Route path="home" element={<HomeEditor />} />
            <Route path="about" element={<AboutEditor />} />
            <Route path="companies" element={<CompaniesEditor />} />
            <Route path="products" element={<ProductsEditor />} />
            <Route path="solutions" element={<SolutionsEditor />} />
            <Route path="news" element={<NewsEditor />} />
            <Route path="gallery" element={<GalleryEditor />} />
            <Route path="contact" element={<ContactEditor />} />
          </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  )
}
