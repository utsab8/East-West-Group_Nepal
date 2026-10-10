import { createContext, useState, useEffect, useContext } from 'react';

const GalleryContext = createContext();

const initialGallery = [
  { id: 'g1', type: 'warehouse', title: 'Central Warehouse — Balaju', img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2833?q=80&w=800' },
  { id: 'g2', type: 'field', title: 'Tomato Trial Plot — Kavre', img: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=800' },
  { id: 'g3', type: 'lab', title: 'Seed Germination Lab', img: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=800' },
  { id: 'g4', type: 'team', title: 'Field Team Advisory', img: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=800' },
  { id: 'g5', type: 'warehouse', title: 'Regional Hub — Butwal', img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2833?q=80&w=800' },
  { id: 'g6', type: 'field', title: 'Maize Demo Plot — Chitwan', img: 'https://images.unsplash.com/photo-1595841696677-6489ffa3e5af?q=80&w=800' },
  { id: 'g7', type: 'lab', title: 'Chemical QC Laboratory', img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800' },
  { id: 'g8', type: 'team', title: 'Dealer Training Session', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800' },
  { id: 'g9', type: 'field', title: 'Paddy Harvest', img: 'https://images.unsplash.com/photo-1584282806653-565d70f1a196?q=80&w=800' },
  { id: 'g10', type: 'warehouse', title: 'Cold Storage Unit', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800' },
];

export function GalleryProvider({ children }) {
  const [galleryItems, setGalleryItems] = useState(() => {
    const saved = localStorage.getItem('ew_gallery');
    return saved ? JSON.parse(saved) : initialGallery;
  });

  useEffect(() => {
    localStorage.setItem('ew_gallery', JSON.stringify(galleryItems));
  }, [galleryItems]);

  const addGalleryItem = (item) => setGalleryItems(prev => [item, ...prev]);
  const updateGalleryItem = (item) => setGalleryItems(prev => prev.map(g => g.id === item.id ? item : g));
  const deleteGalleryItem = (id) => setGalleryItems(prev => prev.filter(g => g.id !== id));

  return (
    <GalleryContext.Provider value={{ galleryItems, addGalleryItem, updateGalleryItem, deleteGalleryItem }}>
      {children}
    </GalleryContext.Provider>
  );
}

export function useGallery() {
  return useContext(GalleryContext);
}
