import { useState } from 'react'
import { Reveal, SectionHeader, PageHero } from '../components/Shared'
import SEO from '../components/SEO'

const offices = [
  { icon: 'fa-building', title: 'Head Office', desc: 'Balaju Industrial Area\nKathmandu, Nepal 44600', color: 'growth-green' },
  { icon: 'fa-phone-volume', title: 'Phone & Email', desc: '+977-1-555-1234\ninfo@eastwestgroup.com.np', color: 'harvest' },
  { icon: 'fa-clock', title: 'Business Hours', desc: 'Sunday – Friday\n9:00 AM – 6:00 PM', color: 'deep-green' },
]

const warehouses = [
  { city: 'Kathmandu (HQ)', address: 'Balaju Industrial Area', size: '20,000 sq.ft.' },
  { city: 'Butwal', address: 'Siddharthanagar Road', size: '8,000 sq.ft.' },
  { city: 'Janakpur', address: 'Ramdaiya Chowk', size: '5,000 sq.ft.' },
  { city: 'Biratnagar', address: 'Main Road, Morang', size: '6,000 sq.ft.' },
]

export default function Contact() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setStep(1); e.target.reset() }, 3000)
  }

  return (
    <>
      <SEO title="Contact Us" description="Reach out to our team for product inquiries, dealer partnerships, or agronomic support. Join our network of 500+ authorized dealers." url="/contact" />
      <PageHero
        breadcrumbs={[{ href: '#/', label: 'Home' }, { label: 'Contact Us' }]}
        title="Contact Us"
        subtitle="Reach out to our team for product inquiries, dealer partnerships, or agronomic support."
      />

      {/* Contact Info Matrix */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Get In Touch" title="Corporate Contact Information" /></Reveal>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {offices.map((o, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
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
                  <div key={i} className="bg-meadow/50 border border-growth-green/20 rounded-xl p-5 text-center hover:border-growth-green hover:shadow-md transition-all">
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
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.5!2d85.3!3d27.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBalaju+Industrial+Area!5e0!3m2!1sen!2snp!4v1600000000000!5m2!1sen!2snp" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="East West Group HQ"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Forms Section */}
      <section className="py-24 bg-meadow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* General Contact */}
            <Reveal>
              <div className="mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-growth-green mb-2 block">Send a Message</span>
                <h2 className="font-display text-4xl font-bold text-deep-green mb-4">Get In Touch</h2>
                <p className="text-gray-500 mb-8">Have a question about our products or need agronomic advice? Send us a message and our team will respond within 24 hours.</p>
              </div>
              <form className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100" onSubmit={e => e.preventDefault()}>
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
                <button type="button" className="w-full py-3.5 bg-deep-green text-white font-bold rounded-xl shadow-md hover:bg-[#166534] transition-colors">
                  <i className="fa-solid fa-paper-plane mr-2" /> Send Message
                </button>
              </form>
            </Reveal>

            {/* Dealer Onboarding */}
            <Reveal delay={0.15}>
              <div className="mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-harvest-hover mb-2 block">Dealer Partnership</span>
                <h2 className="font-display text-4xl font-bold text-deep-green mb-4">Become an Authorized Dealer</h2>
                <p className="text-gray-500 mb-8">Join our network of 500+ authorized dealers across Nepal. Complete the application below and our dealer development team will review it within 5 business days.</p>
              </div>

              <form className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-harvest" onSubmit={handleSubmit}>
                {submitted ? (
                  <div className="text-center py-12 animate-fade-in-up">
                    <div className="w-20 h-20 rounded-full bg-growth-green/10 flex items-center justify-center mx-auto mb-6">
                      <i className="fa-solid fa-check text-4xl text-growth-green" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-deep-green mb-2">Application Received!</h3>
                    <p className="text-gray-500">Thank you for your interest. Our dealer development team will contact you shortly.</p>
                  </div>
                ) : (
                  <>
                    {/* Stepper */}
                    <div className="flex items-center justify-between mb-8 relative">
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -z-10 -translate-y-1/2" />
                      {[1, 2, 3].map(i => (
                        <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                          step >= i ? 'bg-harvest text-charcoal shadow-md shadow-harvest/30' : 'bg-gray-100 text-gray-400'
                        }`}>
                          {step > i ? <i className="fa-solid fa-check" /> : i}
                        </div>
                      ))}
                    </div>

                    {/* Step 1 */}
                    <div className={`transition-all duration-300 ${step === 1 ? 'block animate-fade-in-up' : 'hidden'}`}>
                      <h5 className="font-display font-bold text-lg text-deep-green mb-4"><i className="fa-solid fa-building mr-2 text-harvest" />Company Info</h5>
                      <div className="mb-4"><label className="block text-xs font-bold text-gray-700 mb-1">Company Name *</label><input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-harvest focus:ring-1 focus:ring-harvest outline-none" required /></div>
                      <div className="mb-4"><label className="block text-xs font-bold text-gray-700 mb-1">Owner Name *</label><input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-harvest focus:ring-1 focus:ring-harvest outline-none" required /></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4"><label className="block text-xs font-bold text-gray-700 mb-1">PAN/VAT No *</label><input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-harvest focus:ring-1 focus:ring-harvest outline-none" required /></div>
                        <div className="mb-4"><label className="block text-xs font-bold text-gray-700 mb-1">Phone *</label><input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-harvest focus:ring-1 focus:ring-harvest outline-none" required /></div>
                      </div>
                      <button type="button" onClick={() => setStep(2)} className="w-full mt-4 py-3 bg-harvest text-charcoal font-bold rounded-xl shadow hover:bg-harvest-hover transition-colors">Next: Market Details <i className="fa-solid fa-arrow-right ml-1" /></button>
                    </div>

                    {/* Step 2 */}
                    <div className={`transition-all duration-300 ${step === 2 ? 'block animate-fade-in-up' : 'hidden'}`}>
                      <h5 className="font-display font-bold text-lg text-deep-green mb-4"><i className="fa-solid fa-map-location-dot mr-2 text-harvest" />Market Details</h5>
                      <div className="mb-4"><label className="block text-xs font-bold text-gray-700 mb-1">Province *</label><select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-harvest"><option>Koshi Province</option><option>Madhesh Province</option><option>Bagmati Province</option></select></div>
                      <div className="mb-4"><label className="block text-xs font-bold text-gray-700 mb-1">Target District *</label><input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-harvest outline-none" required /></div>
                      <div className="mb-4"><label className="block text-xs font-bold text-gray-700 mb-1">Years in Business *</label><select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-harvest"><option>0-2 Years</option><option>2-5 Years</option><option>5+ Years</option></select></div>
                      <div className="flex gap-4 mt-4">
                        <button type="button" onClick={() => setStep(1)} className="px-6 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200"><i className="fa-solid fa-arrow-left" /></button>
                        <button type="button" onClick={() => setStep(3)} className="flex-1 py-3 bg-harvest text-charcoal font-bold rounded-xl shadow hover:bg-harvest-hover transition-colors">Next: Infrastructure <i className="fa-solid fa-arrow-right ml-1" /></button>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className={`transition-all duration-300 ${step === 3 ? 'block animate-fade-in-up' : 'hidden'}`}>
                      <h5 className="font-display font-bold text-lg text-deep-green mb-4"><i className="fa-solid fa-warehouse mr-2 text-harvest" />Infrastructure</h5>
                      <div className="mb-4"><label className="block text-xs font-bold text-gray-700 mb-1">Warehouse Area (sq.ft) *</label><input type="number" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-harvest outline-none" required /></div>
                      <div className="mb-4"><label className="block text-xs font-bold text-gray-700 mb-1">Cold Storage Available? *</label><select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-harvest"><option>Yes</option><option>No</option></select></div>
                      <div className="mb-6"><label className="block text-xs font-bold text-gray-700 mb-1">Additional Remarks</label><textarea rows="2" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:border-harvest outline-none"></textarea></div>
                      <div className="flex gap-4">
                        <button type="button" onClick={() => setStep(2)} className="px-6 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200"><i className="fa-solid fa-arrow-left" /></button>
                        <button type="submit" className="flex-1 py-3 bg-deep-green text-white font-bold rounded-xl shadow-lg hover:bg-[#166534] transition-colors"><i className="fa-solid fa-paper-plane mr-2" /> Submit Application</button>
                      </div>
                    </div>
                  </>
                )}
              </form>
            </Reveal>

          </div>
        </div>
      </section>
    </>
  )
}
