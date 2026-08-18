import { useState } from 'react'
import { Reveal, SectionHeader, PageHero } from '../components/Shared'
import SEO from '../components/SEO'

const news = [
  { 
    id: 'n1',
    img: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=800&auto=format&fit=crop', 
    date: 'Aug 2026', 
    tag: 'Seed Innovation', 
    title: 'New Hybrid Tomato Variety Registered', 
    desc: 'East West Agro Seed receives registration for EW Srijana-2, an improved blight-tolerant tomato hybrid developed for mid-hill cultivation.',
    fullContent: `After three years of rigorous multi-location trials across Nepal's mid-hills, East West Agro Seed is proud to announce the official national registration of our newest F1 hybrid tomato variety: **EW Srijana-2**. \n\nBuilding upon the success of the original Srijana variety, this improved genetic line offers enhanced resistance to Late Blight (Phytophthora infestans) and Tomato Yellow Leaf Curl Virus (TYLCV), two of the most devastating diseases affecting tomato farmers in the region.\n\n"EW Srijana-2 represents a major breakthrough in local breeding programs," said Dr. Sunita Sharma, Head of R&D. "Farmers in our trial plots saw a 25% increase in marketable yield simply due to the reduced need for chemical fungicide applications."\n\nSeeds will be available for commercial distribution through our authorized dealer network starting next month, well in time for the upcoming planting season.`
  },
  { 
    id: 'n2',
    img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2833?q=80&w=800&auto=format&fit=crop', 
    date: 'Jul 2026', 
    tag: 'Infrastructure', 
    title: 'Warehouse Expansion in Province 2', 
    desc: 'New 5,000 sq.ft. climate-controlled warehouse inaugurated in Janakpur to serve growing dealer network in the Terai region.',
    fullContent: `To meet the rapidly growing demand for quality agricultural inputs in the Terai region, East West Group has successfully inaugurated a state-of-the-art, 5,000 square foot climate-controlled warehouse facility in Janakpur.\n\nThis new regional hub will drastically reduce supply chain bottlenecks for our dealers in Province 2, ensuring that time-sensitive products like hybrid seeds and bio-stimulants reach farmers in peak condition.\n\nThe facility features advanced dehumidification and temperature management systems, which are critical for preserving the germination viability of seeds during the harsh, humid summers of the Terai.\n\n"Our investment in this infrastructure directly translates to better outcomes for farmers. When seeds are stored correctly, germination rates remain above 95%, ensuring a uniform and healthy crop," stated Prakash Gurung, Chief Operations Officer.`
  },
  { 
    id: 'n3',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop', 
    date: 'Jun 2026', 
    tag: 'Events', 
    title: 'Annual Dealer Convention 2026', 
    desc: 'Over 300 authorized dealers gathered in Kathmandu for product launches, training sessions, and recognition awards.',
    fullContent: `The East West Group Annual Dealer Convention 2026 concluded successfully this week in Kathmandu, bringing together over 300 of our top-performing authorized dealers from across all 7 provinces.\n\nThe three-day event was packed with highly technical product training sessions, market outlook presentations, and exclusive previews of our upcoming 2027 product pipeline.\n\nA major highlight of the convention was the "Dealer of the Year" awards ceremony, recognizing partners who demonstrated exceptional commitment to farmer education and ethical business practices.\n\n"Our dealers are the crucial bridge between our laboratories and the farmers' fields," noted Founder & CEO Rajendra Thapa during his keynote address. "Their dedication ensures that our innovations actually translate into national food security."`
  },
  { 
    id: 'n4',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop', 
    date: 'May 2026', 
    tag: 'Partnerships', 
    title: 'Partnership with National Seed Board', 
    desc: "East West Group signs MoU with Nepal's National Seed Board for collaborative varietal testing and farmer outreach.",
    fullContent: `In a landmark move for public-private collaboration in Nepal's agricultural sector, East West Group has signed a Memorandum of Understanding (MoU) with the National Seed Board.\n\nThis strategic partnership will focus on accelerating the varietal testing and registration process for new, climate-resilient crop varieties. By combining East West's extensive multi-location trial data with the Board's rigorous scientific validation frameworks, we aim to bring high-yielding genetics to the market faster.\n\nAdditionally, the partnership includes a joint initiative for farmer outreach, focusing on educating rural communities about the benefits of certified seeds versus farm-saved seeds.`
  },
  { 
    id: 'n5',
    img: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800&auto=format&fit=crop', 
    date: 'Apr 2026', 
    tag: 'Farmer Outreach', 
    title: 'IPM Training in Chitwan District', 
    desc: '150 farmers trained on Integrated Pest Management practices at free camp organized with local agro-vets.',
    fullContent: `As part of our ongoing commitment to sustainable agriculture, East West Agro Chemical organized a massive Integrated Pest Management (IPM) training camp in Chitwan District.\n\nOver 150 local commercial vegetable farmers attended the free session, which was facilitated by our expert agronomists in collaboration with leading local agro-vets. The training focused on identifying beneficial insects, rotating chemical active ingredients to prevent resistance, and safe handling of agrochemicals.\n\n"Pesticide resistance is becoming a major issue in commercial vegetable pockets," explained one of our senior agronomists. "By educating farmers on IPM, we help them protect their crops more effectively while reducing chemical load on the environment and lowering their input costs."`
  },
  { 
    id: 'n6',
    img: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=800&auto=format&fit=crop', 
    date: 'Mar 2026', 
    tag: 'Product Launch', 
    title: 'Bio-Stimulant Product Line Launched', 
    desc: 'East West Agro Chemical introduces organic humic acid and seaweed extract products for sustainable soil health improvement.',
    fullContent: `East West Agro Chemical has officially expanded its portfolio beyond traditional crop protection by launching a new premium line of Bio-Stimulant products: EW HumaGold and EW SeaMax.\n\nEW HumaGold is a 98% potassium humate formulation designed to radically improve soil structure, increase water retention, and enhance nutrient uptake in depleted soils. EW SeaMax is a concentrated seaweed extract that helps crops overcome abiotic stress, such as drought or sudden temperature drops.\n\n"The future of high-yield farming in Nepal must focus on soil health," stated our product development lead. "These bio-stimulants work synergistically with our traditional fertilizers to maximize crop potential while ensuring the long-term sustainability of the land."`
  },
]

const events = [
  { icon: 'fa-building-columns', title: 'Annual Dealer Convention 2026', desc: 'Three-day event featuring 12 product launches, technical workshops, and the prestigious "Dealer of the Year" awards ceremony.', stats: ['300+ Dealers', '12 New Products', '5 Sessions'], img: '/images/convention.jpg' },
  { icon: 'fa-users', title: 'Regional Farmer Meetups', desc: 'Quarterly farmer engagement events across all 7 provinces showcasing best practices and new product demonstrations.', stats: ['28 Events/Year', '7 Provinces', '5000+ Farmers'], img: '/images/field-demo.jpg' },
]

export default function News() {
  const [selectedNews, setSelectedNews] = useState(null)
  
  // Prevent background scrolling when modal is open
  if (selectedNews) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'unset';
  }

  return (
    <>
      <SEO title="News & Activities" description="Stay updated with East West Group's latest corporate news, farmer events, and field activities across Nepal." url="/news-activities" />
      <PageHero
        breadcrumbs={[{ href: '#/', label: 'Home' }, { label: 'News & Activities' }]}
        title="News & Activities"
        subtitle="Stay updated with East West Group's latest corporate news, farmer events, and field activities."
      />

      {/* News */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Latest News" title="Corporate Updates & Press Releases" /></Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((n, i) => (
              <Reveal key={n.id} delay={i * 0.06}>
                <div 
                  onClick={() => setSelectedNews(n)}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col h-full"
                >
                  <div className="h-48 overflow-hidden">
                    <img src={n.img} alt={n.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-growth-green/10 text-growth-green">{n.date}</span>
                      <span className="text-xs font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-deep-green/10 text-deep-green">{n.tag}</span>
                    </div>
                    <h5 className="font-display font-bold text-deep-green mb-3 leading-snug group-hover:text-growth-green transition-colors">{n.title}</h5>
                    <p className="text-sm text-gray-500 mb-6 flex-grow">{n.desc}</p>
                    <span className="text-sm font-semibold text-growth-green mt-auto inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read More <i className="fa-solid fa-arrow-right text-[10px]" /></span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 bg-meadow">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal><SectionHeader overline="Event Highlights" title="Event Coverage" subtitle="Photo stories from our annual events and farmer meetups." /></Reveal>
          <div className="grid md:grid-cols-2 gap-8">
            {events.map((e, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  <img src={e.img} alt={e.title} className="w-full h-56 object-cover" />
                  <div className="p-8">
                    <h4 className="font-display font-bold text-xl text-deep-green mb-3">{e.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed mb-5">{e.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {e.stats.map(s => (
                        <span key={s} className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-growth-green/10 text-growth-green">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* News Details Modal */}
      {selectedNews && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1000] flex items-center justify-center p-4 md:p-6 opacity-100 transition-opacity" 
          onClick={() => setSelectedNews(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl animate-fade-in-up" 
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedNews(null)} 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 z-50 flex items-center justify-center hover:bg-black/70 transition-colors shadow-lg"
            >
              <i className="fa-solid fa-xmark text-lg" />
            </button>
            
            {/* Modal Image */}
            <div className="w-full h-64 md:h-80 relative">
              <img src={selectedNews.img} alt={selectedNews.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white border border-white/30">{selectedNews.date}</span>
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-growth-green text-white shadow-lg">{selectedNews.tag}</span>
                </div>
                <h3 className="font-display font-black text-3xl md:text-4xl text-white leading-tight">{selectedNews.title}</h3>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-8 md:p-12">
              <p className="text-xl text-deep-green font-medium leading-relaxed mb-8 border-l-4 border-growth-green pl-6">
                {selectedNews.desc}
              </p>
              
              <div className="prose prose-lg text-gray-600 prose-p:leading-relaxed prose-strong:text-deep-green">
                {selectedNews.fullContent.split('\n\n').map((paragraph, idx) => {
                  const parts = paragraph.split('**');
                  return (
                    <p key={idx} className="mb-6">
                      {parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
                    </p>
                  );
                })}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between">
                <div className="flex gap-3">
                  <span className="w-10 h-10 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white cursor-pointer transition-colors"><i className="fa-brands fa-twitter"></i></span>
                  <span className="w-10 h-10 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#4267B2] hover:text-white cursor-pointer transition-colors"><i className="fa-brands fa-facebook-f"></i></span>
                  <span className="w-10 h-10 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center hover:bg-[#0077B5] hover:text-white cursor-pointer transition-colors"><i className="fa-brands fa-linkedin-in"></i></span>
                </div>
                <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-charcoal font-bold rounded-xl text-sm transition-colors" onClick={() => setSelectedNews(null)}>Close Article</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
