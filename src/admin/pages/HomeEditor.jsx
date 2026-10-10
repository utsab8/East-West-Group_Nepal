import { useState } from 'react';
import toast from 'react-hot-toast';

export default function HomeEditor() {
  const [formData, setFormData] = useState({
    heroTagline: 'Agritech Leadership',
    heroTitleLine1: 'Cultivating Growth.',
    heroTitleLine2: 'Empowering Agriculture.',
    heroDescription: 'We provide high-yield seeds and advanced crop protection solutions to ensure food security and prosperity for farmers across Nepal.',
    counterYears: '15',
    counterFarmers: '500',
    counterProducts: '50',
    counterProvinces: '7'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // In the future, this will push data to Firebase
    toast.success('Settings saved successfully!');
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-display font-black text-deep-green tracking-tight">Home Page Content</h2>
        <p className="text-gray-500 mt-2">Manage the text, counters, and main sections displayed on the landing page.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Hero Section Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-growth-green"></div>
          <h3 className="text-xl font-bold text-deep-green mb-6 flex items-center gap-2">
            <i className="fa-solid fa-image text-growth-green" /> Hero Section
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Tagline (Small text above title)</label>
              <input 
                type="text" 
                name="heroTagline"
                value={formData.heroTagline}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-growth-green/20 focus:border-growth-green transition-all" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Title Line 1 (White)</label>
              <input 
                type="text" 
                name="heroTitleLine1"
                value={formData.heroTitleLine1}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-growth-green/20 focus:border-growth-green transition-all" 
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Title Line 2 (Green)</label>
              <input 
                type="text" 
                name="heroTitleLine2"
                value={formData.heroTitleLine2}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-growth-green/20 focus:border-growth-green transition-all" 
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Description Subtitle</label>
              <textarea 
                name="heroDescription"
                value={formData.heroDescription}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-growth-green/20 focus:border-growth-green transition-all resize-none" 
              ></textarea>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-bold text-gray-700 mb-2">Background Image</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-growth-green hover:bg-growth-green/5 transition-all group cursor-pointer relative overflow-hidden">
                <div className="space-y-2 text-center">
                  <i className="fa-solid fa-cloud-arrow-up text-3xl text-gray-400 group-hover:text-growth-green transition-colors" />
                  <div className="text-sm text-gray-600">
                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-growth-green hover:text-growth-green-hover focus-within:outline-none">
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" />
                    </label>
                    <p className="pl-1 inline">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 5MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Counters Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
          <h3 className="text-xl font-bold text-deep-green mb-6 flex items-center gap-2">
            <i className="fa-solid fa-chart-bar text-blue-500" /> Impact Counters
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Years of Excellence</label>
              <div className="relative">
                <input 
                  type="number" 
                  name="counterYears"
                  value={formData.counterYears}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-lg" 
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">+</span>
              </div>
            </div>
            
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Happy Farmers</label>
              <div className="relative">
                <input 
                  type="number" 
                  name="counterFarmers"
                  value={formData.counterFarmers}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-lg" 
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">+</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Product Lines</label>
              <div className="relative">
                <input 
                  type="number" 
                  name="counterProducts"
                  value={formData.counterProducts}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-lg" 
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">+</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Provinces Served</label>
              <div className="relative">
                <input 
                  type="number" 
                  name="counterProvinces"
                  value={formData.counterProvinces}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-lg" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end pt-4">
          <button 
            type="submit" 
            className="px-8 py-4 bg-gradient-to-r from-growth-green to-deep-green hover:from-growth-green-hover hover:to-deep-green text-white font-bold rounded-xl shadow-lg shadow-growth-green/30 transition-all hover:-translate-y-1 active:scale-[0.98] flex items-center gap-2"
          >
            <i className="fa-solid fa-cloud-arrow-up" /> Save All Changes
          </button>
        </div>

      </form>
    </div>
  )
}
