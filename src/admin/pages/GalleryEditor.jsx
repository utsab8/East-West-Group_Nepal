import { useState } from 'react';
import { useGallery } from '../../context/GalleryContext';
import toast from 'react-hot-toast';

export default function GalleryEditor() {
  const { galleryItems, addGalleryItem, updateGalleryItem, deleteGalleryItem } = useGallery();
  
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState(null);

  const filterOptions = [
    { value: 'warehouse', label: 'Infrastructure' },
    { value: 'field', label: 'Field Trials' },
    { value: 'lab', label: 'R&D Labs' },
    { value: 'team', label: 'Our People' }
  ];

  const handleAddNew = () => {
    const newItem = {
      id: `g${Date.now()}`,
      type: 'warehouse',
      title: 'New Gallery Image',
      img: ''
    };
    addGalleryItem(newItem);
    setEditingId(newItem.id);
    setForm(newItem);
    toast.success('New gallery item created!');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setForm(prev => ({ ...prev, img: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const saveItem = () => {
    updateGalleryItem(form);
    setEditingId(null);
    setForm(null);
    toast.success('Photo details saved!');
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this image from the gallery?')) {
      deleteGalleryItem(id);
      if (editingId === id) setEditingId(null);
      toast.success('Photo deleted.');
    }
  };

  return (
    <div className="max-w-6xl">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-display font-black text-deep-green tracking-tight">Gallery Management</h2>
          <p className="text-gray-500 mt-2">Manage the multimedia gallery photos and their categories.</p>
        </div>
        <button 
          onClick={handleAddNew}
          className="px-5 py-2.5 bg-growth-green text-white font-bold rounded-lg shadow-sm hover:bg-growth-green-hover transition-colors flex items-center gap-2"
        >
          <i className="fa-solid fa-plus" /> Add New Photo
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column: Image List */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[600px]">
          <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
            <h3 className="font-bold text-gray-700">All Photos ({galleryItems.length})</h3>
          </div>
          <div className="overflow-y-auto flex-1 p-4 grid grid-cols-2 gap-3">
            {galleryItems.map(item => (
              <div 
                key={item.id} 
                className={`relative rounded-lg overflow-hidden cursor-pointer group border-2 transition-all ${editingId === item.id ? 'border-growth-green shadow-md' : 'border-transparent hover:border-gray-300'}`}
                onClick={() => { setEditingId(item.id); setForm({ ...item }); }}
              >
                <div className="h-24 w-full bg-gray-100 relative">
                  {item.img ? (
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-300"><i className="fa-solid fa-image text-2xl" /></div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <i className="fa-solid fa-pen text-white" />
                  </div>
                </div>
                <div className="absolute top-1 right-1">
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }} 
                    className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600 shadow-sm"
                  >
                    <i className="fa-solid fa-trash" />
                  </button>
                </div>
              </div>
            ))}
            {galleryItems.length === 0 && (
              <div className="col-span-2 text-center py-10 text-gray-400 text-sm">No photos found.</div>
            )}
          </div>
        </div>

        {/* Right Column: Editor Form */}
        <div className="lg:col-span-2">
          {editingId && form ? (
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 animate-fade-in-up">
              <h3 className="text-xl font-bold text-deep-green mb-6 border-b border-gray-100 pb-4">Edit Photo Details</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Photo Upload</label>
                  <div className="flex gap-6 items-center">
                    <div className="w-64 h-40 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative border border-gray-200">
                      {form.img ? (
                        <img src={form.img} alt="" className="w-full h-full object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300"><i className="fa-solid fa-image text-4xl" /></div>
                      )}
                    </div>
                    <label className="flex-1 flex justify-center px-4 py-12 border-2 border-dashed border-gray-300 rounded-lg hover:border-growth-green hover:bg-growth-green/5 transition-colors cursor-pointer group h-40">
                      <input type="file" className="sr-only" accept="image/*" onChange={handleImageUpload} />
                      <div className="text-center">
                        <i className="fa-solid fa-cloud-arrow-up text-gray-400 group-hover:text-growth-green mb-2 text-2xl" />
                        <div className="text-sm font-semibold text-gray-600 group-hover:text-growth-green">Upload new image</div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Photo Caption / Title</label>
                    <input 
                      type="text" 
                      name="title" 
                      value={form.title} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green font-bold text-lg" 
                    />
                  </div>

                  <div className="col-span-2 md:col-span-1">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Category (Filter Tab)</label>
                    <select 
                      name="type" 
                      value={form.type} 
                      onChange={handleChange} 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green bg-white font-medium"
                    >
                      {filterOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-end pt-6 border-t border-gray-100">
                  <button onClick={saveItem} className="px-8 py-3 bg-growth-green text-white font-bold rounded-xl shadow-md hover:bg-growth-green-hover transition-colors">
                    <i className="fa-solid fa-check mr-2" /> Save Photo
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl h-[600px] flex flex-col items-center justify-center text-gray-400">
              <i className="fa-solid fa-images text-5xl mb-4 text-gray-300" />
              <h3 className="font-bold text-lg text-gray-500 mb-1">No Photo Selected</h3>
              <p className="text-sm">Select a photo from the grid on the left to edit its caption and category, or click "Add New Photo".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
