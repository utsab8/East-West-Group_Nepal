import { createContext, useState, useEffect, useContext } from 'react';

const ContactContext = createContext();

const initialContactData = {
  offices: [
    { id: 'o1', icon: 'fa-building', title: 'Head Office', desc: 'Balaju Industrial Area\nKathmandu, Nepal 44600', color: 'growth-green' },
    { id: 'o2', icon: 'fa-phone-volume', title: 'Phone & Email', desc: '+977-1-555-1234\ninfo@eastwestgroup.com.np', color: 'harvest' },
    { id: 'o3', icon: 'fa-clock', title: 'Business Hours', desc: 'Sunday – Friday\n9:00 AM – 6:00 PM', color: 'deep-green' },
  ],
  warehouses: [
    { id: 'w1', city: 'Kathmandu (HQ)', address: 'Balaju Industrial Area', size: '20,000 sq.ft.' },
    { id: 'w2', city: 'Butwal', address: 'Siddharthanagar Road', size: '8,000 sq.ft.' },
    { id: 'w3', city: 'Janakpur', address: 'Ramdaiya Chowk', size: '5,000 sq.ft.' },
    { id: 'w4', city: 'Biratnagar', address: 'Main Road, Morang', size: '6,000 sq.ft.' },
  ],
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.5!2d85.3!3d27.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBalaju+Industrial+Area!5e0!3m2!1sen!2snp!4v1600000000000!5m2!1sen!2snp",
  socialLinks: {
    facebook: "https://facebook.com",
    whatsapp: "https://wa.me/97715551234",
    youtube: "https://youtube.com"
  }
};

export function ContactProvider({ children }) {
  const [contactData, setContactData] = useState(() => {
    const saved = localStorage.getItem('ew_contact');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Merge to ensure new fields like socialLinks are added to old localStorage data
      return { ...initialContactData, ...parsed, socialLinks: parsed.socialLinks || initialContactData.socialLinks };
    }
    return initialContactData;
  });

  useEffect(() => {
    localStorage.setItem('ew_contact', JSON.stringify(contactData));
  }, [contactData]);

  const updateContactData = (newData) => {
    setContactData(prev => ({ ...prev, ...newData }));
  };

  return (
    <ContactContext.Provider value={{ contactData, updateContactData }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  return useContext(ContactContext);
}
