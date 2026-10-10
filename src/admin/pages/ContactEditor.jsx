import { useState } from 'react';
import { useContact } from '../../context/ContactContext';
import toast from 'react-hot-toast';

export default function ContactEditor() {
  const { contactData, updateContactData } = useContact();
  const [formData, setFormData] = useState(contactData);
  const [activeTab, setActiveTab] = useState('offices');

  const handleOfficeChange = (index, field, value) => {
    const newOffices = [...formData.offices];
    newOffices[index] = { ...newOffices[index], [field]: value };
    setFormData({ ...formData, offices: newOffices });
  };

  const handleWarehouseChange = (index, field, value) => {
    const newWarehouses = [...formData.warehouses];
    newWarehouses[index] = { ...newWarehouses[index], [field]: value };
    setFormData({ ...formData, warehouses: newWarehouses });
  };

  const addWarehouse = () => {
    setFormData({
      ...formData,
      warehouses: [
        ...formData.warehouses,
        { id: `w${Date.now()}`, city: 'New City', address: 'New Address', size: '0 sq.ft.' }
      ]
    });
  };

  const removeWarehouse = (index) => {
    const newWarehouses = formData.warehouses.filter((_, i) => i !== index);
    setFormData({ ...formData, warehouses: newWarehouses });
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateContactData(formData);
    toast.success('Contact information saved successfully!');
  };

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h2 className="text-3xl font-display font-black text-deep-green tracking-tight">Contact Information</h2>
        <p className="text-gray-500 mt-2">Manage the contact details, map location, and warehouse addresses displayed on the site.</p>
      </div>

      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setActiveTab('offices')} 
          className={`px-6 py-3 font-bold rounded-lg transition-colors ${activeTab === 'offices' ? 'bg-deep-green text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
        >
          <i className="fa-solid fa-building mr-2" /> Primary Contact Info
        </button>
        <button 
          onClick={() => setActiveTab('warehouses')} 
          className={`px-6 py-3 font-bold rounded-lg transition-colors ${activeTab === 'warehouses' ? 'bg-deep-green text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
        >
          <i className="fa-solid fa-boxes-stacked mr-2" /> Warehouses
        </button>
        <button 
          onClick={() => setActiveTab('map')} 
          className={`px-6 py-3 font-bold rounded-lg transition-colors ${activeTab === 'map' ? 'bg-deep-green text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
        >
          <i className="fa-solid fa-map-location-dot mr-2" /> Google Map Location
        </button>
        <button 
          onClick={() => setActiveTab('social')} 
          className={`px-6 py-3 font-bold rounded-lg transition-colors ${activeTab === 'social' ? 'bg-deep-green text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
        >
          <i className="fa-solid fa-share-nodes mr-2" /> Social Media
        </button>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        {activeTab === 'offices' && (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 animate-fade-in-up">
            <h3 className="text-xl font-bold text-deep-green mb-6 border-b border-gray-100 pb-4">Primary Contact Cards</h3>
            
            <div className="space-y-8">
              {formData.offices.map((office, index) => (
                <div key={office.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-100 rounded-xl bg-gray-50">
                  <div className="col-span-2">
                    <h4 className="font-bold text-gray-700 mb-2 flex items-center gap-2">
                      <i className={`fa-solid ${office.icon} text-${office.color === 'harvest' ? 'orange-500' : 'growth-green'}`} />
                      {office.title}
                    </h4>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Card Title</label>
                    <input 
                      type="text" 
                      value={office.title} 
                      onChange={(e) => handleOfficeChange(index, 'title', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-growth-green" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Icon (e.g., 'building', 'phone')</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className={`fa-solid ${office.icon.startsWith('fa-') ? office.icon : (office.icon ? `fa-${office.icon}` : 'fa-circle-question')} text-gray-400`} />
                      </div>
                      <input 
                        type="text" 
                        value={office.icon.replace(/^fa-/, '')} 
                        onChange={(e) => {
                          const val = e.target.value.trim();
                          handleOfficeChange(index, 'icon', val ? `fa-${val}` : '');
                        }}
                        className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-growth-green font-mono text-sm" 
                        placeholder="building"
                      />
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Description (Use line breaks for multiple lines)</label>
                    <textarea 
                      rows="2"
                      value={office.desc} 
                      onChange={(e) => handleOfficeChange(index, 'desc', e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-growth-green resize-none" 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'warehouses' && (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 animate-fade-in-up">
            <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
              <h3 className="text-xl font-bold text-deep-green">Regional Warehouses</h3>
              <button 
                type="button"
                onClick={addWarehouse}
                className="px-4 py-2 bg-blue-500/10 text-blue-600 font-bold rounded-lg hover:bg-blue-500 hover:text-white transition-colors text-sm"
              >
                <i className="fa-solid fa-plus mr-1" /> Add Warehouse
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {formData.warehouses.map((w, index) => (
                <div key={w.id} className="p-5 border border-gray-200 rounded-xl bg-gray-50 relative group">
                  <button 
                    type="button"
                    onClick={() => removeWarehouse(index)}
                    className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-600"
                  >
                    <i className="fa-solid fa-times" />
                  </button>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">City / Region</label>
                      <input 
                        type="text" 
                        value={w.city} 
                        onChange={(e) => handleWarehouseChange(index, 'city', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 text-sm font-bold text-deep-green" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Address</label>
                      <input 
                        type="text" 
                        value={w.address} 
                        onChange={(e) => handleWarehouseChange(index, 'address', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 text-sm" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Size / Capacity</label>
                      <input 
                        type="text" 
                        value={w.size} 
                        onChange={(e) => handleWarehouseChange(index, 'size', e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 text-sm" 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'map' && (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 animate-fade-in-up">
            <h3 className="text-xl font-bold text-deep-green mb-6 border-b border-gray-100 pb-4">Google Maps Location</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Google Maps Embed URL (src attribute)</label>
                <input 
                  type="text" 
                  value={formData.mapUrl}
                  onChange={(e) => setFormData({ ...formData, mapUrl: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green transition-all" 
                />
                <p className="text-xs text-gray-500 mt-2">
                  Go to Google Maps, find your location, click "Share" -&gt; "Embed a map", copy the HTML, and extract the URL inside the <code>src="..."</code> attribute.
                </p>
              </div>

              <div className="rounded-lg overflow-hidden shadow-sm border-2 border-gray-200 h-[300px]">
                <iframe 
                  src={formData.mapUrl} 
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map Preview"
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === 'social' && (
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 animate-fade-in-up">
            <h3 className="text-xl font-bold text-deep-green mb-6 border-b border-gray-100 pb-4">Social Media Links</h3>
            
            <div className="space-y-6 max-w-lg">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <i className="fa-brands fa-facebook text-[#1877F2] text-xl" /> Facebook URL
                </label>
                <input 
                  type="url" 
                  value={formData.socialLinks?.facebook || ''}
                  onChange={(e) => setFormData({ ...formData, socialLinks: { ...formData.socialLinks, facebook: e.target.value } })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#1877F2] transition-all" 
                  placeholder="https://facebook.com/..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <i className="fa-brands fa-whatsapp text-[#25D366] text-xl" /> WhatsApp URL
                </label>
                <input 
                  type="url" 
                  value={formData.socialLinks?.whatsapp || ''}
                  onChange={(e) => setFormData({ ...formData, socialLinks: { ...formData.socialLinks, whatsapp: e.target.value } })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#25D366] transition-all" 
                  placeholder="https://wa.me/977..."
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                  <i className="fa-brands fa-youtube text-[#FF0000] text-xl" /> YouTube URL
                </label>
                <input 
                  type="url" 
                  value={formData.socialLinks?.youtube || ''}
                  onChange={(e) => setFormData({ ...formData, socialLinks: { ...formData.socialLinks, youtube: e.target.value } })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#FF0000] transition-all" 
                  placeholder="https://youtube.com/..."
                />
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex justify-end pt-4">
          <button 
            type="submit" 
            className="px-8 py-4 bg-gradient-to-r from-growth-green to-deep-green hover:from-growth-green-hover hover:to-deep-green text-white font-bold rounded-xl shadow-lg shadow-growth-green/30 transition-all hover:-translate-y-1 active:scale-[0.98] flex items-center gap-2"
          >
            <i className="fa-solid fa-cloud-arrow-up" /> Save Contact Info
          </button>
        </div>

      </form>
    </div>
  );
}
