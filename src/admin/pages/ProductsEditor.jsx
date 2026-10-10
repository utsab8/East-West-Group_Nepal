import { useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import toast from 'react-hot-toast';

export default function ProductsEditor() {
  const { products, updateProduct, addProduct, deleteProduct } = useProducts();

  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState(null);

  const categories = ['Seed', 'Fungicide', 'Insecticide', 'Fertilizer', 'Growth Promoter'];

  const handleAddNew = () => {
    const newProduct = {
      id: `p${Date.now()}`,
      name: 'New Product',
      category: 'Seed',
      sub: '',
      desc: '',
      ingredients: '',
      targetCrops: '',
      dosage: '',
      phi: '',
      safety: '',
      img: ''
    };
    addProduct(newProduct);
    startEditing(newProduct);
    toast.success('New product created!');
  };

  const startEditing = (product) => {
    setEditingId(product.id);
    setEditForm({ ...product });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditForm(null);
  };

  const saveProduct = () => {
    updateProduct(editForm);
    setEditingId(null);
    setEditForm(null);
    toast.success('Product saved successfully!');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
      if (editingId === id) cancelEditing();
      toast.success('Product deleted.');
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditForm(prev => ({ ...prev, img: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-6xl">
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-display font-black text-deep-green tracking-tight">Products Management</h2>
          <p className="text-gray-500 mt-2">Manage your entire catalogue of seeds, chemicals, and fertilizers.</p>
        </div>
        <button 
          onClick={handleAddNew}
          className="px-5 py-2.5 bg-growth-green text-white font-bold rounded-lg shadow-sm hover:bg-growth-green-hover transition-colors flex items-center gap-2"
        >
          <i className="fa-solid fa-plus" /> Add New Product
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Left Column: Product List */}
        <div className="lg:col-span-1 space-y-3">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-3">
            <i className="fa-solid fa-search text-gray-400" />
            <input type="text" placeholder="Search products..." className="w-full bg-transparent focus:outline-none text-sm" />
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden max-h-[700px] overflow-y-auto">
            {products.map(p => (
              <div 
                key={p.id} 
                className={`p-4 border-b border-gray-100 flex items-center justify-between group cursor-pointer transition-colors ${editingId === p.id ? 'bg-growth-green/5 border-l-4 border-l-growth-green' : 'hover:bg-gray-50 border-l-4 border-l-transparent'}`}
                onClick={() => startEditing(p)}
              >
                <div>
                  <h5 className="font-bold text-deep-green text-sm line-clamp-1">{p.name}</h5>
                  <span className="text-xs font-semibold text-gray-400">{p.category}</span>
                </div>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleDelete(p.id); }}
                  className="text-gray-300 hover:text-red-500 transition-colors p-2"
                >
                  <i className="fa-solid fa-trash text-sm" />
                </button>
              </div>
            ))}
            {products.length === 0 && (
              <div className="p-8 text-center text-gray-400 text-sm">No products found.</div>
            )}
          </div>
        </div>

        {/* Right Column: Editor */}
        <div className="lg:col-span-2">
          {editingId && editForm ? (
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 animate-fade-in-up">
              <div className="flex justify-between items-center mb-6 border-b border-gray-100 pb-4">
                <h3 className="text-xl font-bold text-deep-green">Edit Product Details</h3>
                <button onClick={cancelEditing} className="text-gray-400 hover:text-gray-600"><i className="fa-solid fa-times text-xl" /></button>
              </div>
              
              <div className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Product Image</label>
                    <div className="flex items-center gap-6">
                      <div className="w-24 h-24 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden">
                        {editForm.img ? (
                          <img src={editForm.img} alt="Product" className="w-full h-full object-cover" />
                        ) : (
                          <i className="fa-solid fa-box text-3xl text-gray-300" />
                        )}
                      </div>
                      <label className="flex-1 flex justify-center px-4 py-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-growth-green hover:bg-growth-green/5 transition-colors cursor-pointer group relative">
                        <input type="file" className="sr-only" accept="image/*" onChange={handleImageUpload} />
                        <div className="text-center">
                          <i className="fa-solid fa-image text-gray-400 group-hover:text-growth-green mb-1" />
                          <div className="text-xs text-gray-600">
                            <span className="font-semibold text-growth-green">Upload new image</span>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Product Name</label>
                    <input type="text" name="name" value={editForm.name} onChange={handleFormChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-growth-green/20 focus:border-growth-green font-bold text-deep-green" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Category</label>
                    <select name="category" value={editForm.category} onChange={handleFormChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-growth-green/20 focus:border-growth-green bg-white">
                      {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Subtitle / Tagline</label>
                    <input type="text" name="sub" value={editForm.sub} onChange={handleFormChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-growth-green/20 focus:border-growth-green" placeholder="e.g. F1 Hybrid, Indeterminate" />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Main Description</label>
                    <textarea name="desc" value={editForm.desc} onChange={handleFormChange} rows="3" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-growth-green/20 focus:border-growth-green resize-none"></textarea>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Active Ingredients</label>
                    <input type="text" name="ingredients" value={editForm.ingredients} onChange={handleFormChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Target Crops</label>
                    <input type="text" name="targetCrops" value={editForm.targetCrops} onChange={handleFormChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Dosage / Application Rate</label>
                    <input type="text" name="dosage" value={editForm.dosage} onChange={handleFormChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Safety Interval (PHI)</label>
                    <input type="text" name="phi" value={editForm.phi} onChange={handleFormChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green" />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Safety Precautions</label>
                    <textarea name="safety" value={editForm.safety} onChange={handleFormChange} rows="2" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green resize-none"></textarea>
                  </div>
                </div>

                <div className="flex justify-end pt-6 border-t border-gray-100 gap-3">
                  <button onClick={cancelEditing} className="px-6 py-2.5 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 transition-colors">Cancel</button>
                  <button onClick={saveProduct} className="px-6 py-2.5 bg-growth-green text-white font-bold rounded-xl shadow-md hover:bg-growth-green-hover transition-colors flex items-center gap-2">
                    <i className="fa-solid fa-save" /> Save Product
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl h-full min-h-[400px] flex flex-col items-center justify-center text-gray-400 p-8 text-center">
              <i className="fa-solid fa-boxes-stacked text-5xl mb-4 text-gray-300" />
              <h3 className="font-bold text-lg text-gray-500 mb-1">No Product Selected</h3>
              <p className="text-sm">Select a product from the list on the left to edit its details, or click "Add New Product" to create one.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
