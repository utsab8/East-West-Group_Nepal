import { useState } from 'react'
import { Reveal, SectionHeader, PageHero } from '../components/Shared'
import SEO from '../components/SEO'
import { useContact } from '../context/ContactContext'

export default function Contact() {
  const { contactData } = useContact();
  const { offices, warehouses, mapUrl } = contactData;

  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setStep(1); e.target.reset() }, 3000)
  }

  return (
    <>
      <SEO title="Contact Us" description="Reach out to our team for product inquiries or agronomic support." url="/contact" />
      <PageHero
        breadcrumbs={[{ href: '#/', label: 'Home' }, { label: 'Contact Us' }]}
        title="Contact Us"
        subtitle="Reach out to our team for product inquiries or agronomic support."
      />

      {/* Contact Info Matrix */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Get In Touch" title="Corporate Contact Information" /></Reveal>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {offices.map((o, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-lg p-8 text-center shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center bg-${o.color}/10`}>
                    <i className={`fa-solid ${o.icon} text-2xl text-${o.color === 'harvest' ? 'harvest-hover' : o.color}`} />
                  </div>
                  <h5 className="font-display font-bold text-lg text-deep-green mb-2">{o.title}</h5>
                  <p className="text-sm text-gray-500 whitespace-pre-line leading-relaxed">{o.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mb-20">
              <h4 className="font-display font-bold text-2xl text-deep-green text-center mb-8">Regional Storage Warehouses</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {warehouses.map((w, i) => (
                  <div key={i} className="bg-meadow/50 border border-growth-green/20 rounded-md p-5 text-center hover:border-growth-green hover:shadow-md transition-all">
                    <i className="fa-solid fa-boxes-stacked text-growth-green text-xl mb-3" />
                    <h6 className="font-bold text-deep-green text-sm mb-1">{w.city}</h6>
                    <p className="text-xs text-gray-500 mb-3">{w.address}</p>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-white px-2 py-1 rounded text-growth-green shadow-sm">{w.size}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal>
            <div className="rounded-lg overflow-hidden shadow-xl border-4 border-white h-[400px]">
              <iframe 
                src={mapUrl} 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="East West Group HQ"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-24 bg-meadow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            
            {/* General Contact */}
            <Reveal>
              <div className="mb-10 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-growth-green mb-2 block">Send a Message</span>
                <h2 className="font-display text-4xl font-bold text-deep-green mb-4">Get In Touch</h2>
                <p className="text-gray-500 mb-6">Have a question about our products or need agronomic advice? Send us a message and our team will respond within 24 hours.</p>
                <div className="flex justify-center gap-4">
                  {contactData?.socialLinks?.facebook && (
                    <a href={contactData.socialLinks.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1877F2] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                      <i className="fa-brands fa-facebook-f text-lg" />
                    </a>
                  )}
                  {contactData?.socialLinks?.whatsapp && (
                    <a href={contactData.socialLinks.whatsapp} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#25D366] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                      <i className="fa-brands fa-whatsapp text-lg" />
                    </a>
                  )}
                  {contactData?.socialLinks?.youtube && (
                    <a href={contactData.socialLinks.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#FF0000] shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                      <i className="fa-brands fa-youtube text-lg" />
                    </a>
                  )}
                </div>
              </div>
              <form className="bg-white rounded-lg p-8 shadow-lg border border-gray-100" onSubmit={e => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div><label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label><input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-growth-green focus:ring-1 focus:ring-growth-green transition-all" required /></div>
                  <div><label className="block text-xs font-bold text-gray-700 mb-1">Email *</label><input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-growth-green focus:ring-1 focus:ring-growth-green transition-all" required /></div>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-bold text-gray-700 mb-1">Subject *</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-growth-green focus:ring-1 focus:ring-growth-green transition-all" required>
                    <option value="">Select a topic...</option>
                    <option>Product Inquiry</option>
                    <option>Technical / Agronomic Support</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-xs font-bold text-gray-700 mb-1">Message *</label>
                  <textarea rows="4" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-growth-green focus:ring-1 focus:ring-growth-green transition-all" required></textarea>
                </div>
                <button type="button" className="w-full py-3.5 bg-deep-green text-white font-bold rounded-md shadow-md hover:bg-[#166534] transition-colors">
                  <i className="fa-solid fa-paper-plane mr-2" /> Send Message
                </button>
              </form>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  )
}
