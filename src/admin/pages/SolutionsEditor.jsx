import { useState } from 'react';
import toast from 'react-hot-toast';

export default function SolutionsEditor() {
  const [formData, setFormData] = useState({
    heroTitle: 'Solutions & Farmer Advisory',
    heroSubtitle: 'Comprehensive agronomic support from seed selection through harvest.'
  });

  const [protocols, setProtocols] = useState([
    { 
      id: 1, 
      title: 'Tomato Growth Protocol', 
      season: 'Feb–Sep',
      steps: [
        { id: 101, phase: 'Week 1–3: Nursery Stage', desc: 'Sow EW Srijana Hybrid seeds in raised nursery beds. Apply Carbendazim seed treatment.', milestone: false },
        { id: 102, phase: 'Week 4–5: Transplanting', desc: 'Transplant 25-day-old seedlings at 60×45cm spacing.', milestone: false }
      ]
    },
    { 
      id: 2, 
      title: 'Rice Yield Program', 
      season: 'Jun–Nov',
      steps: [
        { id: 201, phase: 'Week 1–3: Nursery Preparation', desc: 'Prepare wet-bed nursery. Sow pre-soaked EW paddy seed.', milestone: false }
      ]
    }
  ]);

  const [editingProtocolId, setEditingProtocolId] = useState(null);

  const [clinics, setClinics] = useState([
    { id: 1, title: 'Soil Testing Camps', desc: 'Free soil pH, nutrient, and organic matter analysis conducted at dealer points.' },
    { id: 2, title: 'Leaf Pathology Diagnostics', desc: 'Farmers bring infected leaf samples for on-spot diagnosis.' }
  ]);

  const [modules, setModules] = useState([
    { id: 1, title: 'Product Knowledge', desc: 'Comprehensive training on seed varieties, chemical formulations, application methods.' },
    { id: 2, title: 'Farmer Advisory Skills', desc: 'How to diagnose field problems, recommend integrated solutions.' }
  ]);

  const handleSave = (e) => {
    e.preventDefault();
    toast.success('Solutions settings saved successfully!');
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addProtocolStep = (protocolId) => {
    setProtocols(protocols.map(p => {
      if (p.id === protocolId) {
        return {
          ...p,
          steps: [...p.steps, { id: Date.now(), phase: 'New Phase', desc: 'Phase description...', milestone: false }]
        };
      }
      return p;
    }));
  };

  const updateProtocolStep = (protocolId, stepId, field, value) => {
    setProtocols(protocols.map(p => {
      if (p.id === protocolId) {
        return {
          ...p,
          steps: p.steps.map(s => s.id === stepId ? { ...s, [field]: value } : s)
        };
      }
      return p;
    }));
  };

  const removeProtocolStep = (protocolId, stepId) => {
    setProtocols(protocols.map(p => {
      if (p.id === protocolId) {
        return {
          ...p,
          steps: p.steps.filter(s => s.id !== stepId)
        };
      }
      return p;
    }));
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-display font-black text-deep-green tracking-tight">Solutions & Advisory</h2>
        <p className="text-gray-500 mt-2">Manage your seasonal crop calendars, farmer clinics, and dealer training programs.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        
        {/* Hero Section */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-growth-green"></div>
          <h3 className="text-xl font-bold text-deep-green mb-6">Hero Section</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Page Title</label>
              <input type="text" name="heroTitle" value={formData.heroTitle} onChange={handleFormChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Subtitle</label>
              <textarea name="heroSubtitle" value={formData.heroSubtitle} onChange={handleFormChange} rows="2" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green resize-none" />
            </div>
          </div>
        </div>

        {/* Crop Protocols */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-harvest"></div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-deep-green">Crop Calendars / Protocols</h3>
            <button type="button" className="text-sm font-bold text-harvest-hover bg-harvest/10 px-3 py-1.5 rounded-lg flex items-center gap-1">
              <i className="fa-solid fa-plus" /> Add Protocol
            </button>
          </div>
          
          <div className="space-y-4">
            {protocols.map((p, index) => (
              <div key={p.id} className="border border-gray-200 rounded-xl bg-gray-50 overflow-hidden">
                <div className="p-4 flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-harvest text-white flex items-center justify-center font-bold">{index + 1}</div>
                  <div className="flex-1">
                    <input type="text" defaultValue={p.title} className="w-full px-3 py-2 bg-transparent border-b border-gray-300 focus:border-harvest focus:outline-none font-bold text-deep-green" placeholder="Protocol Name" />
                    <input type="text" defaultValue={p.season} className="w-full px-3 py-1 bg-transparent border-b border-transparent focus:border-gray-300 focus:outline-none text-xs text-gray-500 mt-1" placeholder="Season (e.g. Feb-Sep)" />
                  </div>
                  <button 
                    type="button" 
                    onClick={() => setEditingProtocolId(editingProtocolId === p.id ? null : p.id)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors ${editingProtocolId === p.id ? 'bg-harvest text-white shadow-md' : 'text-blue-500 bg-blue-50 hover:bg-blue-100'}`}
                  >
                    <i className={`fa-solid ${editingProtocolId === p.id ? 'fa-times' : 'fa-list-ol'} mr-1`} /> 
                    {editingProtocolId === p.id ? 'Close Steps' : 'Edit Steps'}
                  </button>
                  <button type="button" className="text-gray-400 hover:text-red-500 px-2"><i className="fa-solid fa-trash" /></button>
                </div>

                {/* Steps Editor (Expanded state) */}
                {editingProtocolId === p.id && (
                  <div className="bg-white border-t border-gray-200 p-6 animate-fade-in-up">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-gray-700 text-sm uppercase tracking-wider">Protocol Steps</h4>
                      <button type="button" onClick={() => addProtocolStep(p.id)} className="text-xs font-bold text-growth-green bg-growth-green/10 px-2 py-1 rounded">
                        <i className="fa-solid fa-plus mr-1" /> Add Step
                      </button>
                    </div>
                    
                    <div className="space-y-4 relative pl-4 border-l-2 border-harvest/30">
                      {p.steps.map((step, sIndex) => (
                        <div key={step.id} className="relative bg-gray-50 p-4 rounded-lg border border-gray-200 group">
                          <div className="absolute -left-5 top-4 w-2 h-2 bg-harvest rounded-full ring-4 ring-white" />
                          <button type="button" onClick={() => removeProtocolStep(p.id, step.id)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 hidden group-hover:block"><i className="fa-solid fa-trash text-xs" /></button>
                          
                          <div className="space-y-2 pr-4">
                            <input 
                              type="text" 
                              value={step.phase}
                              onChange={(e) => updateProtocolStep(p.id, step.id, 'phase', e.target.value)}
                              className="w-full px-2 py-1 text-sm font-bold text-deep-green bg-transparent border-b border-gray-300 focus:border-harvest focus:outline-none" 
                              placeholder="e.g. Week 1-3: Nursery Stage"
                            />
                            <textarea 
                              value={step.desc}
                              onChange={(e) => updateProtocolStep(p.id, step.id, 'desc', e.target.value)}
                              rows="2" 
                              className="w-full px-2 py-1 text-xs text-gray-600 bg-transparent border-b border-transparent focus:border-gray-300 focus:outline-none resize-none" 
                              placeholder="Step description..."
                            />
                            <label className="flex items-center gap-2 text-xs font-bold text-gray-500 mt-2 cursor-pointer w-fit">
                              <input 
                                type="checkbox" 
                                checked={step.milestone}
                                onChange={(e) => updateProtocolStep(p.id, step.id, 'milestone', e.target.checked)}
                                className="rounded text-harvest focus:ring-harvest accent-harvest" 
                              />
                              Is Milestone Step <i className="fa-solid fa-trophy text-harvest" />
                            </label>
                          </div>
                        </div>
                      ))}
                      {p.steps.length === 0 && <p className="text-xs text-gray-400 italic">No steps added yet.</p>}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Clinics & Services */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-deep-green">Farmer Clinics</h3>
            <button type="button" className="text-sm font-bold text-blue-500 bg-blue-50 px-3 py-1.5 rounded-lg flex items-center gap-1">
              <i className="fa-solid fa-plus" /> Add Clinic
            </button>
          </div>
          
          <div className="space-y-4">
            {clinics.map(c => (
              <div key={c.id} className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm relative group">
                <button type="button" className="absolute top-3 right-3 text-gray-400 hover:text-red-500 hidden group-hover:block"><i className="fa-solid fa-trash" /></button>
                <input type="text" defaultValue={c.title} className="w-full px-2 py-1 focus:outline-none font-bold text-deep-green mb-1" />
                <textarea defaultValue={c.desc} rows="2" className="w-full px-2 py-1 focus:outline-none text-sm text-gray-500 resize-none" />
              </div>
            ))}
          </div>
        </div>

        {/* Dealer Training */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-purple-500"></div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-deep-green">Dealer Training Modules</h3>
            <button type="button" className="text-sm font-bold text-purple-500 bg-purple-50 px-3 py-1.5 rounded-lg flex items-center gap-1">
              <i className="fa-solid fa-plus" /> Add Module
            </button>
          </div>
          
          <div className="space-y-4">
            {modules.map(m => (
              <div key={m.id} className="p-4 border border-gray-200 rounded-xl bg-white shadow-sm relative group">
                <button type="button" className="absolute top-3 right-3 text-gray-400 hover:text-red-500 hidden group-hover:block"><i className="fa-solid fa-trash" /></button>
                <input type="text" defaultValue={m.title} className="w-full px-2 py-1 focus:outline-none font-bold text-deep-green mb-1" />
                <textarea defaultValue={m.desc} rows="2" className="w-full px-2 py-1 focus:outline-none text-sm text-gray-500 resize-none" />
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
            <i className="fa-solid fa-cloud-arrow-up" /> Save Solutions Settings
          </button>
        </div>

      </form>
    </div>
  )
}
