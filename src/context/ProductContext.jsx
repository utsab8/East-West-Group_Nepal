import { createContext, useState, useEffect, useContext } from 'react';

const ProductContext = createContext();

const initialProducts = [
  { id: 'p1', name: 'EW Hybrid Tomato – Srijana', category: 'Seed', img: '/images/products/tomato.jpg', sub: 'F1 Hybrid, Indeterminate', badgeColor: 'bg-growth-green/10 text-growth-green', desc: 'High-yield F1 hybrid tomato variety bred for disease tolerance and extended shelf life.', ingredients: 'F1 Hybrid, Indeterminate', targetCrops: 'Tomato', dosage: '200–250g/ropani', phi: 'N/A (Seed)', safety: 'Store in cool, dry place. Use treated seed with gloves.' },
  { id: 'p2', name: 'EW Hybrid Cauliflower – Snow White', category: 'Seed', img: '/images/products/cabbage.jpg', sub: 'F1 Hybrid, Early Maturity', badgeColor: 'bg-growth-green/10 text-growth-green', desc: 'Premium cauliflower hybrid producing dense, white curds with excellent uniformity.', ingredients: 'F1 Hybrid, Early Maturity', targetCrops: 'Cauliflower', dosage: '100–150g/ropani', phi: 'N/A (Seed)', safety: 'Protect from moisture. Sow within season window.' },
  { id: 'p3', name: 'Mancozeb 75% WP – EW Shield', category: 'Fungicide', img: '/images/products/chemical.jpg', sub: 'Mancozeb 75% WP', badgeColor: 'bg-deep-green/10 text-deep-green', desc: 'Broad-spectrum protective fungicide effective against blight and downy mildew.', ingredients: 'Mancozeb 75% WP', targetCrops: 'Tomato, Potato, Rice, Maize', dosage: '2.5g/L water', phi: '14 days', safety: 'Wear protective clothing. Do not spray near water sources.' },
  { id: 'p4', name: 'NPK 19:19:19 – EW GrowMax', category: 'Fertilizer', img: '/images/products/chemical.jpg', sub: 'N 19%, P₂O₅ 19%, K₂O 19%', badgeColor: 'bg-harvest/10 text-harvest-hover', desc: 'Water-soluble complex fertilizer for balanced vegetative and reproductive growth.', ingredients: 'N 19%, P₂O₅ 19%, K₂O 19%', targetCrops: 'All Crops', dosage: '5g/L foliar spray', phi: 'N/A', safety: 'Store in dry conditions.' },
];

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('ew_products');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem('ew_products', JSON.stringify(products));
  }, [products]);

  const updateProduct = (product) => {
    setProducts(prev => prev.map(p => p.id === product.id ? product : p));
  };

  const addProduct = (product) => {
    // Add appropriate badgeColor based on category
    let badgeColor = 'bg-gray-100 text-gray-800';
    if (product.category === 'Seed') badgeColor = 'bg-growth-green/10 text-growth-green';
    if (product.category === 'Fungicide' || product.category === 'Insecticide') badgeColor = 'bg-deep-green/10 text-deep-green';
    if (product.category === 'Fertilizer' || product.category === 'Growth Promoter') badgeColor = 'bg-harvest/10 text-harvest-hover';
    
    setProducts(prev => [{ ...product, badgeColor }, ...prev]);
  };

  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, setProducts, updateProduct, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
