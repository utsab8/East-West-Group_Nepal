import { useState } from 'react';
import toast from 'react-hot-toast';

export default function AboutEditor() {
  const [formData, setFormData] = useState({
    heroTitle: 'Our Story & Vision',
    heroSubtitle: 'Driving agricultural transformation in Nepal through relentless innovation, quality inputs, and an unwavering commitment to farmers.',
    storyText: 'Founded in 2008, East West Group began with a simple but powerful mission: to empower Nepali farmers with the highest quality agricultural inputs available.\n\nStarting as a small regional distributor, we quickly recognized the need for localized, climate-resilient seed varieties. This led to the establishment of East West Agro Seed, our dedicated R&D and production wing.\n\nToday, we operate three major regional warehouses and support a network of over 500 authorized dealers, ensuring that premium seeds, fertilizers, and crop protection chemicals reach every corner of the country.',
  });

  const [leaders, setLeaders] = useState([
    { id: 1, name: 'Rajendra Thapa', role: 'Founder & CEO', desc: 'Over 25 years of experience in agricultural supply chain and agronomy.' },
    { id: 2, name: 'Dr. Sunita Sharma', role: 'Head of R&D (Seeds)', desc: 'PhD in Plant Genetics. Leads our hybrid development and testing facilities.' }
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    toast.success('About settings saved successfully!');
  };

  const removeLeader = (id) => {
    setLeaders(leaders.filter(l => l.id !== id));
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-display font-black text-deep-green tracking-tight">About Page Content</h2>
        <p className="text-gray-500 mt-2">Manage your company history, mission statements, and executive team profiles.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Hero Section Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-growth-green"></div>
          <h3 className="text-xl font-bold text-deep-green mb-6 flex items-center gap-2">
            <i className="fa-solid fa-heading text-growth-green" /> Hero Section
          </h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Page Title</label>
              <input 
                type="text" 
                name="heroTitle"
                value={formData.heroTitle}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-growth-green/20 focus:border-growth-green transition-all" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Page Subtitle</label>
              <textarea 
                name="heroSubtitle"
                value={formData.heroSubtitle}
                onChange={handleChange}
                rows="2"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-growth-green/20 focus:border-growth-green transition-all resize-none" 
              ></textarea>
            </div>
          </div>
        </div>

        {/* Story Section Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-harvest"></div>
          <h3 className="text-xl font-bold text-deep-green mb-6 flex items-center gap-2">
            <i className="fa-solid fa-book-open text-harvest" /> Our Story / History
          </h3>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Main Content</label>
              <p className="text-xs text-gray-500 mb-2">Separate paragraphs with a blank line.</p>
              <textarea 
                name="storyText"
                value={formData.storyText}
                onChange={handleChange}
                rows="8"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-harvest/20 focus:border-harvest transition-all" 
              ></textarea>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Story Image</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-harvest hover:bg-harvest/5 transition-all group cursor-pointer relative overflow-hidden">
                <div className="space-y-2 text-center">
                  <i className="fa-solid fa-cloud-arrow-up text-3xl text-gray-400 group-hover:text-harvest transition-colors" />
                  <div className="text-sm text-gray-600">
                    <span className="font-medium text-harvest">Upload a file</span> or drag and drop
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Executive Team Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-deep-green flex items-center gap-2">
              <i className="fa-solid fa-users text-blue-500" /> Executive Team
            </h3>
            <button type="button" className="text-sm font-bold text-blue-500 hover:text-blue-600 flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-lg">
              <i className="fa-solid fa-plus" /> Add Member
            </button>
          </div>
          
          <div className="space-y-4">
            {leaders.map((leader) => (
              <div key={leader.id} className="p-5 border border-gray-200 rounded-2xl bg-gray-50/50 flex flex-col md:flex-row gap-6 relative group">
                <button 
                  type="button" 
                  onClick={() => removeLeader(leader.id)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                >
                  <i className="fa-solid fa-trash" />
                </button>
                
                <label className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center border-4 border-white shadow-sm overflow-hidden cursor-pointer hover:opacity-80 transition-opacity relative group">
                  <input type="file" className="sr-only" accept="image/*" />
                  <i className="fa-solid fa-camera text-gray-400 text-xl group-hover:scale-110 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] text-white font-bold uppercase tracking-wider text-center px-2">Upload Photo</span>
                  </div>
                </label>
                
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Name</label>
                      <input type="text" defaultValue={leader.name} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Role / Position</label>
                      <input type="text" defaultValue={leader.role} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Short Bio</label>
                    <textarea rows="2" defaultValue={leader.desc} className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"></textarea>
                  </div>
                </div>
              </div>
            ))}
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
