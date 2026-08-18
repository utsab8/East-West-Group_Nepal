import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-deep-green text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-harvest to-growth-green flex items-center justify-center text-deep-green font-display font-black text-sm">EW</div>
              <span className="font-display font-bold text-xl">East West Group</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">One Group. Two Specialized Companies. One Commitment to Agriculture. Providing quality seeds and crop protection solutions to farmers across Nepal since 2008.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-harvest mb-5">Quick Links</h4>
            {[
              { to: '/', label: 'Home' }, { to: '/about', label: 'About Us' },
              { to: '/companies', label: 'Our Companies' }, { to: '/products', label: 'Products' },
              { to: '/solutions', label: 'Solutions' }, { to: '/news-activities', label: 'News & Activities' },
              { to: '/contact', label: 'Contact Us' },
            ].map(l => (
              <Link key={l.to} to={l.to} className="block py-1 text-sm text-white/65 hover:text-harvest hover:pl-2 transition-all duration-200">{l.label}</Link>
            ))}
          </div>

          {/* Companies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-harvest mb-5">Our Companies</h4>
            <Link to="/companies/agro-seed" className="block py-1 text-sm text-white/65 hover:text-harvest hover:pl-2 transition-all duration-200">East West Agro Seed</Link>
            <Link to="/companies/agro-chemical" className="block py-1 text-sm text-white/65 hover:text-harvest hover:pl-2 transition-all duration-200">East West Agro Chemical</Link>
            <Link to="/products" className="block py-1 text-sm text-white/65 hover:text-harvest hover:pl-2 transition-all duration-200">Product Catalogue</Link>
            <Link to="/contact" className="block py-1 text-sm text-white/65 hover:text-harvest hover:pl-2 transition-all duration-200">Become a Dealer</Link>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-harvest mb-5">Contact Info</h4>
            <p className="text-sm text-white/65 py-1"><i className="fa-solid fa-phone mr-2 text-harvest/70" /> +977-1-555-1234</p>
            <p className="text-sm text-white/65 py-1"><i className="fa-solid fa-envelope mr-2 text-harvest/70" /> info@eastwestgroup.com.np</p>
            <p className="text-sm text-white/65 py-1"><i className="fa-solid fa-location-dot mr-2 text-harvest/70" /> Balaju Industrial Area, Kathmandu</p>
            <p className="text-sm text-white/65 py-1"><i className="fa-solid fa-clock mr-2 text-harvest/70" /> Sun–Fri: 9AM – 6PM</p>
          </div>
        </div>

        <div className="border-t border-white/12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/45">© {new Date().getFullYear()} East West Group Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/45 hover:text-harvest transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/45 hover:text-harvest transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
