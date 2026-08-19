import { Reveal, SectionHeader, PageHero } from '../components/Shared'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom'

const values = [
  { icon: 'fa-seedling', title: 'Quality First', desc: 'Rigorous testing at every stage to ensure maximum genetic purity and germination rates.' },
  { icon: 'fa-handshake', title: 'Farmer Centric', desc: 'Our success is measured by the prosperity and yield improvements of our farmers.' },
  { icon: 'fa-flask', title: 'Innovation', desc: 'Continuous investment in R&D to develop climate-resilient and high-yielding varieties.' },
  { icon: 'fa-globe', title: 'Sustainability', desc: 'Promoting agricultural practices that protect the soil and environment for future generations.' }
]

const leaders = [
  { name: 'Rajendra Thapa', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop', desc: 'Over 25 years of experience in agricultural supply chain and agronomy.' },
  { name: 'Dr. Sunita Sharma', role: 'Head of R&D (Seeds)', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop', desc: 'PhD in Plant Genetics. Leads our hybrid development and testing facilities.' },
  { name: 'Prakash Gurung', role: 'Chief Operations Officer', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop', desc: 'Manages our nationwide distribution network and 3 regional warehouses.' },
]

export default function About() {
  return (
    <>
      <SEO title="About Us" description="Building Nepal's agricultural future through quality, innovation, and farmer-first commitment since 2008." url="/about" />
      <PageHero
        breadcrumbs={[{ href: '#/', label: 'Home' }, { label: 'About Us' }]}
        title="Our Story & Vision"
        subtitle="Driving agricultural transformation in Nepal through relentless innovation, quality inputs, and an unwavering commitment to farmers."
      />

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img src="/images/hero.jpg" alt="Company history" className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <SectionHeader align="left" overline="Our History" title="Rooted in Nepal's Soil" />
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>Founded in 2008, East West Group began with a simple but powerful mission: to empower Nepali farmers with the highest quality agricultural inputs available.</p>
              <p>Starting as a small regional distributor, we quickly recognized the need for localized, climate-resilient seed varieties. This led to the establishment of East West Agro Seed, our dedicated R&D and production wing.</p>
              <p>Today, we operate three major regional warehouses and support a network of over 500 authorized dealers, ensuring that premium seeds, fertilizers, and crop protection chemicals reach every corner of the country.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Core Values" title="What Drives Us Forward" subtitle="The principles that guide our research, operations, and partnerships." /></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-center">
                  <div className="w-16 h-16 mx-auto bg-growth-green/10 text-growth-green rounded-2xl flex items-center justify-center text-2xl mb-6"><i className={`fa-solid ${v.icon}`} /></div>
                  <h4 className="font-display font-bold text-xl text-deep-green mb-3">{v.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Leaders */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Executive Team" title="Our Industrial Leaders" subtitle="Decades of combined expertise in agronomy, supply chain, and agricultural science." /></Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {leaders.map((leader, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group text-center flex flex-col items-center">
                  <div className="relative w-36 h-36 mb-6 rounded-full overflow-hidden shadow-md border-4 border-meadow group-hover:border-growth-green transition-colors duration-500">
                    <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button className="w-8 h-8 rounded-full bg-white/30 backdrop-blur text-white flex items-center justify-center hover:bg-growth-green hover:text-white transition-all"><i className="fa-brands fa-linkedin-in text-sm" /></button>
                      <button className="w-8 h-8 rounded-full bg-white/30 backdrop-blur text-white flex items-center justify-center hover:bg-growth-green hover:text-white transition-all"><i className="fa-regular fa-envelope text-sm" /></button>
                    </div>
                  </div>
                  <h4 className="font-display font-bold text-xl text-deep-green mb-1">{leader.name}</h4>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-growth-green mb-4 block">{leader.role}</span>
                  <p className="text-sm text-gray-500 leading-relaxed max-w-[16rem]">{leader.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-growth-green text-center">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <h2 className="font-display font-black text-4xl text-white mb-6">Join Our Growing Network</h2>
            <p className="text-white/80 text-lg mb-8">We are always looking for passionate dealers to partner with us in transforming Nepal's agriculture.</p>
            <Link to="/contact" className="px-8 py-4 bg-harvest text-charcoal font-bold rounded-xl hover:-translate-y-1 transition-transform inline-block">
              Become a Dealer
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
