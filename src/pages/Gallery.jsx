import { useState } from 'react'
import { Reveal, SectionHeader, PageHero } from '../components/Shared'
import SEO from '../components/SEO'

const galleryItems = [
  { id: 1, type: 'warehouse', title: 'Central Warehouse — Balaju', img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2833?q=80&w=800' },
  { id: 2, type: 'field', title: 'Tomato Trial Plot — Kavre', img: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=800' },
  { id: 3, type: 'lab', title: 'Seed Germination Lab', img: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=800' },
  { id: 4, type: 'team', title: 'Field Team Advisory', img: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800' },
  { id: 5, type: 'warehouse', title: 'Regional Hub — Butwal', img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2833?q=80&w=800' },
  { id: 6, type: 'field', title: 'Maize Demo Plot — Chitwan', img: 'https://images.unsplash.com/photo-1595841696677-6489ffa3e5af?q=80&w=800' },
  { id: 7, type: 'lab', title: 'Chemical QC Laboratory', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800' },
  { id: 8, type: 'team', title: 'Dealer Training Session', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800' },
  { id: 9, type: 'field', title: 'Paddy Harvest', img: 'https://images.unsplash.com/photo-1584282806653-565d70f1a196?q=80&w=800' },
  { id: 10, type: 'warehouse', title: 'Cold Storage Unit', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800' },
]

const filters = ['all', 'warehouse', 'field', 'lab', 'team']
const labels = { all: 'All Photos', warehouse: 'Infrastructure', field: 'Field Trials', lab: 'R&D Labs', team: 'Our People' }

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxImg, setLightboxImg] = useState(null)

  const filtered = activeFilter === 'all' ? galleryItems : galleryItems.filter(g => g.type === activeFilter)

  return (
    <>
      <SEO title="Multimedia Gallery" description="Explore East West Group's world-class facilities, R&D laboratories, field trials, and farmer outreach programs in pictures." url="/gallery" />
      
      <PageHero
        breadcrumbs={[{ href: '#/', label: 'Home' }, { label: 'Gallery' }]}
        title="Multimedia Gallery"
        subtitle="Take a visual journey through our world-class facilities, rigorous R&D processes, and vibrant farming communities."
      />

      <section className="py-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {filters.map(f => (
                <button 
                  key={f} 
                  onClick={() => setActiveFilter(f)} 
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 border ${
                    activeFilter === f 
                      ? 'bg-deep-green text-white border-deep-green shadow-lg scale-105' 
                      : 'bg-white text-gray-500 border-gray-200 hover:border-growth-green hover:text-growth-green'
                  }`}
                >
                  {labels[f]}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={i * 0.05}>
                <div 
                  className="break-inside-avoid relative rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  onClick={() => setLightboxImg(item)}
                >
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[10px] font-black uppercase tracking-widest text-growth-green mb-1">{labels[item.type]}</span>
                    <h5 className="text-white font-bold text-lg leading-tight">{item.title}</h5>
                  </div>
                  
                  {/* Zoom Icon overlay */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:rotate-12">
                    <i className="fa-solid fa-expand" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400 font-medium">
              No images found for this category.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[1000] flex items-center justify-center p-4 animate-fade-in-up" 
          onClick={() => setLightboxImg(null)}
        >
          <button 
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 text-white hover:bg-white/30 transition-colors flex items-center justify-center text-xl z-50"
            onClick={() => setLightboxImg(null)}
          >
            <i className="fa-solid fa-xmark" />
          </button>
          
          <div className="relative max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center" onClick={e => e.stopPropagation()}>
            <img 
              src={lightboxImg.img} 
              alt={lightboxImg.title} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" 
            />
            <div className="mt-6 text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-growth-green block mb-2">{labels[lightboxImg.type]}</span>
              <h3 className="text-2xl font-display font-bold text-white">{lightboxImg.title}</h3>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
