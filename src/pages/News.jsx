import { useState } from 'react'
import { Reveal, SectionHeader, PageHero } from '../components/Shared'
import SEO from '../components/SEO'
import { useNews } from '../context/NewsContext'

export default function News() {
  const { news, events } = useNews();
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
                  className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-50 hover:shadow-sm hover:-translate-y-2 transition-all duration-500 group cursor-pointer flex flex-col h-full"
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
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
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
          className="fixed inset-0 bg-charcoal/40  z-[1000] flex items-center justify-center p-4 md:p-6 opacity-100 transition-all duration-500" 
          onClick={() => setSelectedNews(null)}
        >
          <div 
            className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-sm animate-fade-in-up" 
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedNews(null)} 
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-charcoal  text-white border border-gray-200 z-50 flex items-center justify-center hover:bg-black/70 transition-colors shadow-lg"
            >
              <i className="fa-solid fa-xmark text-lg" />
            </button>
            
            {/* Modal Image */}
            <div className="w-full h-64 md:h-80 relative">
              <img src={selectedNews.img} alt={selectedNews.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/20  text-white border border-white/30">{selectedNews.date}</span>
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
                <button className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-charcoal font-bold rounded-md text-sm transition-colors" onClick={() => setSelectedNews(null)}>Close Article</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
