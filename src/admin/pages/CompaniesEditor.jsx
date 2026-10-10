import { useState } from 'react';
import toast from 'react-hot-toast';

export default function CompaniesEditor() {
  const [activeTab, setActiveTab] = useState('seed'); // 'seed' or 'chemical'
  
  // Fake state for Agro Seed
  const [seedData, setSeedData] = useState({
    title: 'East West Agro Seed',
    subtitle: 'High-yield, quality-tested seed varieties bred for Nepal\'s diverse agro-climatic conditions.',
    labTitle: 'Science-Backed Seed Genetics',
    labDesc: 'Before a single seed reaches a farmer\'s field, it undergoes rigorous evaluation in our state-of-the-art testing facilities.',
    testimonials: [
      {
        id: 1,
        headline: '"The EW Srijana hybrid completely transformed my tomato harvest."',
        quote: 'I used to struggle with early blight wiping out half my crop during the monsoon. Since switching to East West\'s Srijana hybrid seeds, my plants are healthier, the fruits are uniform, and my overall yield has increased by 40%. The agronomist support from my local dealer made all the difference.',
        farmer: 'Ram Bahadur Thapa',
        location: 'Commercial Vegetable Farmer, Kavre District'
      }
    ]
  });

  // Fake state for Agro Chemical
  const [chemicalData, setChemicalData] = useState({
    title: 'East West Agro Chemical',
    subtitle: 'Advanced crop protection, nutrition, and bio-stimulant solutions for maximum yield.',
    labTitle: 'Advanced Chemical Formulations',
    labDesc: 'Our formulations are developed to combat local pest and disease pressures while minimizing environmental impact.',
    testimonials: [
      {
        id: 1,
        headline: '"Their bio-pesticides saved my entire crop from the fall armyworm infestation."',
        quote: 'When the fall armyworm hit my maize field, I thought everything was lost. The East West Agro Chemical team visited my farm and recommended their specific bio-pesticide protocol. Within a week, the infestation was controlled, and my crop fully recovered.',
        farmer: 'Sita Gurung',
        location: 'Maize Farmer, Chitwan'
      }
    ]
  });

  const handleSeedChange = (e) => {
    const { name, value } = e.target;
    setSeedData(prev => ({ ...prev, [name]: value }));
  };

  const handleChemicalChange = (e) => {
    const { name, value } = e.target;
    setChemicalData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    toast.success(`Saved data for ${activeTab === 'seed' ? 'Agro Seed' : 'Agro Chemical'}!`);
  };

  const addTestimonial = () => {
    const newTestimonial = {
      id: Date.now(),
      headline: '',
      quote: '',
      farmer: '',
      location: ''
    };
    if (activeTab === 'seed') {
      setSeedData(prev => ({ ...prev, testimonials: [...prev.testimonials, newTestimonial] }));
    } else {
      setChemicalData(prev => ({ ...prev, testimonials: [...prev.testimonials, newTestimonial] }));
    }
  };

  const removeTestimonial = (id) => {
    if (activeTab === 'seed') {
      setSeedData(prev => ({ ...prev, testimonials: prev.testimonials.filter(t => t.id !== id) }));
    } else {
      setChemicalData(prev => ({ ...prev, testimonials: prev.testimonials.filter(t => t.id !== id) }));
    }
  };

  const updateTestimonial = (id, field, value) => {
    if (activeTab === 'seed') {
      setSeedData(prev => ({
        ...prev,
        testimonials: prev.testimonials.map(t => t.id === id ? { ...t, [field]: value } : t)
      }));
    } else {
      setChemicalData(prev => ({
        ...prev,
        testimonials: prev.testimonials.map(t => t.id === id ? { ...t, [field]: value } : t)
      }));
    }
  };

  const renderTestimonialEditor = (testimonials, color) => (
    <div className="space-y-6">
      {testimonials.map((t, index) => (
        <div key={t.id} className="p-6 border border-gray-200 rounded-2xl bg-gray-50/50 relative group">
          <div className="absolute top-4 right-4 flex gap-2">
            <span className={`text-xs font-bold px-2 py-1 bg-${color}/10 text-${color} rounded-md`}>Slide {index + 1}</span>
            <button type="button" onClick={() => removeTestimonial(t.id)} className="text-gray-400 hover:text-red-500 transition-colors p-1">
              <i className="fa-solid fa-trash" />
            </button>
          </div>
          
          <div className="space-y-4 mt-2">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Headline (Large Text)</label>
              <input type="text" value={t.headline} onChange={(e) => updateTestimonial(t.id, 'headline', e.target.value)} className={`w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-${color}`} />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Full Story Quote</label>
              <textarea rows="3" value={t.quote} onChange={(e) => updateTestimonial(t.id, 'quote', e.target.value)} className={`w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-${color} resize-none`} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Farmer Name</label>
                <input type="text" value={t.farmer} onChange={(e) => updateTestimonial(t.id, 'farmer', e.target.value)} className={`w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-${color}`} />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Location / Details</label>
                <input type="text" value={t.location} onChange={(e) => updateTestimonial(t.id, 'location', e.target.value)} className={`w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-${color}`} />
              </div>
              <div className="md:col-span-2 mt-2">
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Farmer / Field Image</label>
                <div className={`flex justify-center px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-${color} hover:bg-${color}/5 transition-colors cursor-pointer group`}>
                  <div className="text-center">
                    <i className={`fa-solid fa-image text-gray-400 group-hover:text-${color} text-xl mb-1`} />
                    <div className="text-xs text-gray-600">
                      <span className={`font-semibold text-${color}`}>Upload image</span> or drag and drop
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-4xl">
      <div className="mb-6 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-display font-black text-deep-green tracking-tight">Our Companies</h2>
          <p className="text-gray-500 mt-2">Manage the specific pages for your two subsidiary companies.</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 mb-8 bg-gray-200/50 p-1.5 rounded-xl w-fit">
        <button 
          onClick={() => setActiveTab('seed')}
          className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
            activeTab === 'seed' 
              ? 'bg-white text-growth-green shadow-sm' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <i className="fa-solid fa-seedling mr-2" /> Agro Seed
        </button>
        <button 
          onClick={() => setActiveTab('chemical')}
          className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${
            activeTab === 'chemical' 
              ? 'bg-white text-blue-500 shadow-sm' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <i className="fa-solid fa-flask mr-2" /> Agro Chemical
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Dynamic Content based on Active Tab */}
        {activeTab === 'seed' ? (
          <div className="space-y-8 animate-fade-in-up">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-growth-green"></div>
              <h3 className="text-xl font-bold text-deep-green mb-6">Agro Seed - Hero Section</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Page Title</label>
                  <input type="text" name="title" value={seedData.title} onChange={handleSeedChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Subtitle</label>
                  <textarea name="subtitle" value={seedData.subtitle} onChange={handleSeedChange} rows="2" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green resize-none" />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-harvest"></div>
              <h3 className="text-xl font-bold text-deep-green mb-6">Agro Seed - R&D Facility</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Section Title</label>
                  <input type="text" name="labTitle" value={seedData.labTitle} onChange={handleSeedChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-harvest" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Section Description</label>
                  <textarea name="labDesc" value={seedData.labDesc} onChange={handleSeedChange} rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-harvest resize-none" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-deep-green"></div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-deep-green">Agro Seed - Success Stories Slider</h3>
                <button type="button" onClick={addTestimonial} className="text-sm font-bold text-growth-green hover:text-growth-green-hover flex items-center gap-1 bg-growth-green/10 px-3 py-1.5 rounded-lg">
                  <i className="fa-solid fa-plus" /> Add Story
                </button>
              </div>
              {renderTestimonialEditor(seedData.testimonials, 'growth-green')}
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-fade-in-up">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
              <h3 className="text-xl font-bold text-deep-green mb-6">Agro Chemical - Hero Section</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Page Title</label>
                  <input type="text" name="title" value={chemicalData.title} onChange={handleChemicalChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Subtitle</label>
                  <textarea name="subtitle" value={chemicalData.subtitle} onChange={handleChemicalChange} rows="2" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 resize-none" />
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>
              <h3 className="text-xl font-bold text-deep-green mb-6">Agro Chemical - Laboratory</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Section Title</label>
                  <input type="text" name="labTitle" value={chemicalData.labTitle} onChange={handleChemicalChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-500" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Section Description</label>
                  <textarea name="labDesc" value={chemicalData.labDesc} onChange={handleChemicalChange} rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-purple-500 resize-none" />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-deep-green"></div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-deep-green">Agro Chemical - Success Stories Slider</h3>
                <button type="button" onClick={addTestimonial} className="text-sm font-bold text-blue-500 hover:text-blue-700 flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-lg">
                  <i className="fa-solid fa-plus" /> Add Story
                </button>
              </div>
              {renderTestimonialEditor(chemicalData.testimonials, 'blue-500')}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end pt-4">
          <button 
            type="submit" 
            className={`px-8 py-4 text-white font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1 active:scale-[0.98] flex items-center gap-2 ${
              activeTab === 'seed' 
                ? 'bg-gradient-to-r from-growth-green to-deep-green shadow-growth-green/30' 
                : 'bg-gradient-to-r from-blue-500 to-blue-700 shadow-blue-500/30'
            }`}
          >
            <i className="fa-solid fa-cloud-arrow-up" /> Save {activeTab === 'seed' ? 'Agro Seed' : 'Agro Chemical'} Content
          </button>
        </div>

      </form>
    </div>
  )
}
