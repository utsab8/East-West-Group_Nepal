import { useProducts } from '../context/ProductContext';
import { useNews } from '../context/NewsContext';
import { useGallery } from '../context/GalleryContext';
import { useContact } from '../context/ContactContext';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { products } = useProducts();
  const { news, events } = useNews();
  const { galleryItems } = useGallery();
  const { contactData } = useContact();

  const seedCount = products.filter(p => p.category === 'seed').length;
  const chemicalCount = products.filter(p => p.category === 'chemical').length;
  const warehouseCount = contactData?.warehouses?.length || 0;

  const quickLinks = [
    { title: 'Add Product', icon: 'fa-plus', path: '/admin/products', color: 'bg-growth-green' },
    { title: 'Post News', icon: 'fa-newspaper', path: '/admin/news', color: 'bg-blue-500' },
    { title: 'Upload Gallery', icon: 'fa-image', path: '/admin/gallery', color: 'bg-purple-500' },
    { title: 'Edit Contact', icon: 'fa-address-card', path: '/admin/contact', color: 'bg-harvest' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-display font-black text-deep-green tracking-tight">Admin Dashboard</h2>
          <p className="text-gray-500 mt-2">Welcome back! Here is an overview of your website's content.</p>
        </div>
        <div className="flex gap-2">
          {quickLinks.map((link, i) => (
            <Link 
              key={i} 
              to={link.path}
              className={`${link.color} text-white px-4 py-2 rounded-lg text-sm font-bold shadow-sm hover:-translate-y-0.5 hover:shadow-md transition-all flex items-center gap-2`}
            >
              <i className={`fa-solid ${link.icon}`} /> <span className="hidden sm:inline">{link.title}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Stats Row 1: Products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-growth-green/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Total Products</p>
              <h3 className="text-4xl font-black text-deep-green mt-1">{products.length}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-growth-green/10 flex items-center justify-center text-growth-green text-xl shadow-inner">
              <i className="fa-solid fa-seedling" />
            </div>
          </div>
          <div className="mt-6 flex gap-4 text-sm font-semibold relative z-10">
            <span className="text-growth-green bg-growth-green/10 px-2 py-1 rounded-md">{seedCount} Seed</span>
            <span className="text-blue-500 bg-blue-500/10 px-2 py-1 rounded-md">{chemicalCount} Chemical</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">News & Events</p>
              <h3 className="text-4xl font-black text-deep-green mt-1">{news.length + events.length}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 text-xl shadow-inner">
              <i className="fa-solid fa-newspaper" />
            </div>
          </div>
          <div className="mt-6 flex gap-4 text-sm font-semibold relative z-10">
            <span className="text-blue-500 bg-blue-500/10 px-2 py-1 rounded-md">{news.length} Articles</span>
            <span className="text-purple-500 bg-purple-500/10 px-2 py-1 rounded-md">{events.length} Events</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-harvest/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          <div className="flex justify-between items-start relative z-10">
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Gallery & Media</p>
              <h3 className="text-4xl font-black text-deep-green mt-1">{galleryItems.length}</h3>
            </div>
            <div className="w-12 h-12 rounded-xl bg-harvest/10 flex items-center justify-center text-harvest text-xl shadow-inner">
              <i className="fa-solid fa-images" />
            </div>
          </div>
          <div className="mt-6 text-sm font-semibold text-gray-500 relative z-10">
            Across {new Set(galleryItems.map(img => img.type)).size} categories
          </div>
        </div>
      </div>

      {/* Row 2: Recent Activity & System Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Recent Items Preview */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-deep-green flex items-center gap-2">
              <i className="fa-solid fa-clock-rotate-left text-gray-400" /> Recent Content
            </h3>
            <Link to="/admin/products" className="text-xs font-bold text-growth-green hover:underline">View All Products &rarr;</Link>
          </div>
          
          <div className="space-y-4">
            {products.slice(0, 4).map((p) => (
              <div key={p.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                <div className={`w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center text-xl text-white shadow-inner ${p.category === 'seed' ? 'bg-growth-green' : 'bg-blue-500'}`}>
                  {p.img ? <img src={p.img} alt={p.name} className="w-full h-full object-cover rounded-lg" /> : <i className={`fa-solid ${p.category === 'seed' ? 'fa-seedling' : 'fa-flask'}`} />}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-800 text-sm truncate">{p.name}</h4>
                  <p className="text-xs text-gray-500 truncate">{p.desc}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${p.category === 'seed' ? 'bg-growth-green/10 text-growth-green' : 'bg-blue-500/10 text-blue-500'}`}>
                    {p.category}
                  </span>
                </div>
              </div>
            ))}
            {products.length === 0 && (
              <div className="text-center py-8 text-gray-400 text-sm font-semibold">
                No products added yet.
              </div>
            )}
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-br from-deep-green to-[#0f4624] rounded-3xl shadow-lg p-8 text-white relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -right-10 -top-10 text-white/5 text-[150px]">
            <i className="fa-solid fa-shield-check" />
          </div>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6">
              <i className="fa-solid fa-server text-xl text-growth-green" />
            </div>
            <h3 className="text-2xl font-display font-black mb-2">System Status</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              All services are operating normally. The website is live and your latest content updates have been synced perfectly.
            </p>
            
            <div className="space-y-4">
              <div className="bg-black/20 p-4 rounded-xl">
                <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">Active Warehouses</div>
                <div className="text-xl font-bold text-growth-green">{warehouseCount} Locations</div>
              </div>
              <div className="bg-black/20 p-4 rounded-xl">
                <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">Storage Mode</div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-growth-green animate-pulse"></span>
                  Local IndexedDB Sync
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
