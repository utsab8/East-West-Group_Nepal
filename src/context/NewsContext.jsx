import { createContext, useState, useEffect, useContext } from 'react';

const NewsContext = createContext();

const initialNews = [
  { 
    id: 'n1',
    img: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?q=80&w=800&auto=format&fit=crop', 
    date: 'Aug 2026', 
    tag: 'Seed Innovation', 
    title: 'New Hybrid Tomato Variety Registered', 
    desc: 'East West Agro Seed receives registration for EW Srijana-2, an improved blight-tolerant tomato hybrid developed for mid-hill cultivation.',
    fullContent: `After three years of rigorous multi-location trials across Nepal's mid-hills, East West Agro Seed is proud to announce the official national registration of our newest F1 hybrid tomato variety: **EW Srijana-2**. \n\nBuilding upon the success of the original Srijana variety, this improved genetic line offers enhanced resistance to Late Blight (Phytophthora infestans) and Tomato Yellow Leaf Curl Virus (TYLCV), two of the most devastating diseases affecting tomato farmers in the region.\n\n"EW Srijana-2 represents a major breakthrough in local breeding programs," said Dr. Sunita Sharma, Head of R&D. "Farmers in our trial plots saw a 25% increase in marketable yield simply due to the reduced need for chemical fungicide applications."\n\nSeeds will be available for commercial distribution through our authorized dealer network starting next month, well in time for the upcoming planting season.`
  },
  { 
    id: 'n2',
    img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2833?q=80&w=800&auto=format&fit=crop', 
    date: 'Jul 2026', 
    tag: 'Infrastructure', 
    title: 'Warehouse Expansion in Province 2', 
    desc: 'New 5,000 sq.ft. climate-controlled warehouse inaugurated in Janakpur to serve growing dealer network in the Terai region.',
    fullContent: `To meet the rapidly growing demand for quality agricultural inputs in the Terai region, East West Group has successfully inaugurated a state-of-the-art, 5,000 square foot climate-controlled warehouse facility in Janakpur.\n\nThis new regional hub will drastically reduce supply chain bottlenecks for our dealers in Province 2, ensuring that time-sensitive products like hybrid seeds and bio-stimulants reach farmers in peak condition.\n\nThe facility features advanced dehumidification and temperature management systems, which are critical for preserving the germination viability of seeds during the harsh, humid summers of the Terai.\n\n"Our investment in this infrastructure directly translates to better outcomes for farmers. When seeds are stored correctly, germination rates remain above 95%, ensuring a uniform and healthy crop," stated Prakash Gurung, Chief Operations Officer.`
  }
];

const initialEvents = [
  { id: 'e1', icon: 'fa-building-columns', title: 'Annual Dealer Convention 2026', desc: 'Three-day event featuring 12 product launches, technical workshops, and the prestigious "Dealer of the Year" awards ceremony.', stats: ['300+ Dealers', '12 New Products', '5 Sessions'], img: '/images/convention.jpg' },
  { id: 'e2', icon: 'fa-users', title: 'Regional Farmer Meetups', desc: 'Quarterly farmer engagement events across all 7 provinces showcasing best practices and new product demonstrations.', stats: ['28 Events/Year', '7 Provinces', '5000+ Farmers'], img: '/images/field-demo.jpg' },
];

export function NewsProvider({ children }) {
  const [news, setNews] = useState(() => {
    const saved = localStorage.getItem('ew_news');
    return saved ? JSON.parse(saved) : initialNews;
  });

  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('ew_events');
    return saved ? JSON.parse(saved) : initialEvents;
  });

  useEffect(() => {
    localStorage.setItem('ew_news', JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem('ew_events', JSON.stringify(events));
  }, [events]);

  const addNews = (item) => setNews(prev => [item, ...prev]);
  const updateNews = (item) => setNews(prev => prev.map(n => n.id === item.id ? item : n));
  const deleteNews = (id) => setNews(prev => prev.filter(n => n.id !== id));

  const addEvent = (item) => setEvents(prev => [item, ...prev]);
  const updateEvent = (item) => setEvents(prev => prev.map(e => e.id === item.id ? item : e));
  const deleteEvent = (id) => setEvents(prev => prev.filter(e => e.id !== id));

  return (
    <NewsContext.Provider value={{ 
      news, addNews, updateNews, deleteNews,
      events, addEvent, updateEvent, deleteEvent 
    }}>
      {children}
    </NewsContext.Provider>
  );
}

export function useNews() {
  return useContext(NewsContext);
}
