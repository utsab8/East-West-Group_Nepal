import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { useAuth } from '../context/AuthContext';

export default function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: 'fa-table-columns' },
    { name: 'Home', path: '/admin/home', icon: 'fa-house' },
    { name: 'About', path: '/admin/about', icon: 'fa-address-card' },
    { name: 'Companies', path: '/admin/companies', icon: 'fa-building' },
    { name: 'Products', path: '/admin/products', icon: 'fa-boxes-stacked' },
    { name: 'Solutions', path: '/admin/solutions', icon: 'fa-lightbulb' },
    { name: 'News & Activities', path: '/admin/news', icon: 'fa-newspaper' },
    { name: 'Gallery', path: '/admin/gallery', icon: 'fa-images' },
    { name: 'Contact Info', path: '/admin/contact', icon: 'fa-address-book' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-body">
      <Toaster position="top-right" toastOptions={{ duration: 3000, style: { fontWeight: 'bold' } }} />
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-growth-green to-deep-green flex items-center justify-center text-white shadow-md">
              <i className="fa-solid fa-leaf text-sm" />
            </div>
            <div>
              <h1 className="font-display font-black text-sm text-deep-green leading-none">ADMIN PANEL</h1>
            </div>
          </Link>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.name} 
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive 
                    ? 'bg-growth-green/10 text-growth-green' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-deep-green'
                }`}
              >
                <i className={`fa-solid ${item.icon} w-5 text-center ${isActive ? 'text-growth-green' : 'text-gray-400'}`} />
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={() => {
              logout();
              navigate('/admin/login'); // redirect to login on logout
            }}
            className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
          >
            <i className="fa-solid fa-right-from-bracket w-5 text-center" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm z-10">
          <h2 className="text-lg font-bold text-deep-green font-display capitalize">
            {menuItems.find(m => m.path === location.pathname)?.name || 'Editor'}
          </h2>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-500">Welcome, Admin</span>
            <div className="w-8 h-8 rounded-full bg-growth-green/20 flex items-center justify-center text-growth-green">
              <i className="fa-solid fa-user text-sm" />
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-8 bg-gray-50/50">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
