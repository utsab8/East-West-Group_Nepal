import { Link } from 'react-router-dom'
import { useContact } from '../context/ContactContext'

export default function Footer() {
  const { contactData } = useContact();
  
  // Extract info from context
  const officeDesc = contactData?.offices?.[0]?.desc?.split('\n') || ['Balaju Industrial Area', 'Kathmandu'];
  const phoneEmailDesc = contactData?.offices?.[1]?.desc?.split('\n') || ['+977-1-555-1234', 'info@eastwestgroup.com.np'];
  const hoursDesc = contactData?.offices?.[2]?.desc?.replace('\n', ' ') || 'Sun–Fri: 9AM – 6PM';

  return (
    <footer className="bg-sky-50 text-charcoal pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-growth-green to-deep-green flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                <i className="fa-solid fa-leaf text-xl" />
              </div>
              <div>
                <h1 className="font-display font-black text-xl text-deep-green leading-none tracking-tight">EAST WEST</h1>
                <span className="text-[10px] font-bold text-growth-green uppercase tracking-widest">Group Nepal</span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">One Group. Two Specialized Companies. One Commitment to Agriculture. Providing quality seeds and crop protection solutions to farmers across Nepal since 2008.</p>
            <div className="flex gap-4">
              {contactData?.socialLinks?.facebook && (
                <a href={contactData.socialLinks.facebook} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#1877F2] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <i className="fa-brands fa-facebook-f" />
                </a>
              )}
              {contactData?.socialLinks?.whatsapp && (
                <a href={contactData.socialLinks.whatsapp} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#25D366] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <i className="fa-brands fa-whatsapp" />
                </a>
              )}
              {contactData?.socialLinks?.youtube && (
                <a href={contactData.socialLinks.youtube} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#FF0000] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
                  <i className="fa-brands fa-youtube" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-deep-green mb-5">Quick Links</h4>
            {[
              { to: '/', label: 'Home' }, { to: '/about', label: 'About Us' },
              { to: '/companies', label: 'Our Companies' }, { to: '/products', label: 'Products' },
              { to: '/solutions', label: 'Solutions' }, { to: '/news-activities', label: 'News & Activities' },
              { to: '/contact', label: 'Contact Us' },
            ].map(l => (
              <Link key={l.to} to={l.to} className="block py-1 text-sm text-gray-600 hover:text-growth-green hover:pl-2 transition-all duration-200">{l.label}</Link>
            ))}
          </div>

          {/* Companies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-deep-green mb-5">Our Companies</h4>
            <Link to="/companies/agro-seed" className="block py-1 text-sm text-gray-600 hover:text-growth-green hover:pl-2 transition-all duration-200">East West Agro Seed</Link>
            <Link to="/companies/agro-chemical" className="block py-1 text-sm text-gray-600 hover:text-growth-green hover:pl-2 transition-all duration-200">East West Agro Chemical</Link>
            <Link to="/products" className="block py-1 text-sm text-gray-600 hover:text-growth-green hover:pl-2 transition-all duration-200">Product Catalogue</Link>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-deep-green mb-5">Contact Info</h4>
            <p className="text-sm text-gray-600 py-1"><i className="fa-solid fa-phone mr-2 text-growth-green" /> {phoneEmailDesc[0]}</p>
            <p className="text-sm text-gray-600 py-1"><i className="fa-solid fa-envelope mr-2 text-growth-green" /> {phoneEmailDesc[1]}</p>
            <p className="text-sm text-gray-600 py-1"><i className="fa-solid fa-location-dot mr-2 text-growth-green" /> {officeDesc[0]}</p>
            <p className="text-sm text-gray-600 py-1"><i className="fa-solid fa-clock mr-2 text-growth-green" /> {hoursDesc}</p>
          </div>
        </div>

        <div className="border-t border-sky-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} East West Group Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-growth-green transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-500 hover:text-growth-green transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
