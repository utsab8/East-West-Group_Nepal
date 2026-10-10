import { useState } from 'react';
import { useNews } from '../../context/NewsContext';
import toast from 'react-hot-toast';

export default function NewsEditor() {
  const { news, addNews, updateNews, deleteNews, events, addEvent, updateEvent, deleteEvent } = useNews();
  
  const [activeTab, setActiveTab] = useState('news');

  const [editingNewsId, setEditingNewsId] = useState(null);
  const [newsForm, setNewsForm] = useState(null);

  const [editingEventId, setEditingEventId] = useState(null);
  const [eventForm, setEventForm] = useState(null);

  // --- NEWS HANDLERS ---
  const handleAddNewNews = () => {
    const newNews = {
      id: `n${Date.now()}`,
      title: 'New Article Title',
      date: 'Oct 2026',
      tag: 'News',
      desc: '',
      fullContent: '',
      img: ''
    };
    addNews(newNews);
    setEditingNewsId(newNews.id);
    setNewsForm(newNews);
    toast.success('New article created!');
  };

  const handleNewsChange = (e) => {
    const { name, value } = e.target;
    setNewsForm(prev => ({ ...prev, [name]: value }));
  };

  const handleNewsImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setNewsForm(prev => ({ ...prev, img: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const saveNews = () => {
    updateNews(newsForm);
    setEditingNewsId(null);
    setNewsForm(null);
    toast.success('Article saved successfully!');
  };

  const handleDeleteNews = (id) => {
    if (window.confirm('Delete this news article?')) {
      deleteNews(id);
      if (editingNewsId === id) setEditingNewsId(null);
      toast.success('Article deleted.');
    }
  };

  // --- EVENTS HANDLERS ---
  const handleAddNewEvent = () => {
    const newEvent = {
      id: `e${Date.now()}`,
      title: 'New Event',
      icon: 'fa-calendar-days',
      desc: '',
      stats: ['Stat 1', 'Stat 2', 'Stat 3'],
      img: ''
    };
    addEvent(newEvent);
    setEditingEventId(newEvent.id);
    setEventForm(newEvent);
    toast.success('New event created!');
  };

  const handleEventChange = (e) => {
    const { name, value } = e.target;
    setEventForm(prev => ({ ...prev, [name]: value }));
  };

  const handleEventStatChange = (index, value) => {
    const newStats = [...eventForm.stats];
    newStats[index] = value;
    setEventForm(prev => ({ ...prev, stats: newStats }));
  };

  const handleEventImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setEventForm(prev => ({ ...prev, img: reader.result }));
      reader.readAsDataURL(file);
    }
  };

  const saveEvent = () => {
    updateEvent(eventForm);
    setEditingEventId(null);
    setEventForm(null);
    toast.success('Event saved successfully!');
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm('Delete this event?')) {
      deleteEvent(id);
      if (editingEventId === id) setEditingEventId(null);
      toast.success('Event deleted.');
    }
  };

  return (
    <div className="max-w-6xl">
      <div className="mb-8">
        <h2 className="text-3xl font-display font-black text-deep-green tracking-tight">News & Activities</h2>
        <p className="text-gray-500 mt-2">Manage your corporate news, press releases, and event coverage.</p>
      </div>

      <div className="flex gap-4 mb-8">
        <button 
          onClick={() => setActiveTab('news')} 
          className={`px-6 py-3 font-bold rounded-lg transition-colors ${activeTab === 'news' ? 'bg-deep-green text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
        >
          <i className="fa-solid fa-newspaper mr-2" /> News & Press Releases
        </button>
        <button 
          onClick={() => setActiveTab('events')} 
          className={`px-6 py-3 font-bold rounded-lg transition-colors ${activeTab === 'events' ? 'bg-deep-green text-white' : 'bg-white text-gray-500 hover:bg-gray-50'}`}
        >
          <i className="fa-solid fa-calendar-star mr-2" /> Event Coverage
        </button>
      </div>

      {activeTab === 'news' && (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[700px]">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-700">All News</h3>
              <button onClick={handleAddNewNews} className="text-xs font-bold bg-growth-green/10 text-growth-green px-3 py-1.5 rounded hover:bg-growth-green hover:text-white transition-colors">
                <i className="fa-solid fa-plus mr-1" /> Add
              </button>
            </div>
            <div className="overflow-y-auto flex-1">
              {news.map(n => (
                <div 
                  key={n.id} 
                  className={`p-4 border-b border-gray-100 cursor-pointer transition-colors group ${editingNewsId === n.id ? 'bg-gray-50 border-l-4 border-l-growth-green' : 'hover:bg-gray-50 border-l-4 border-l-transparent'}`}
                  onClick={() => { setEditingNewsId(n.id); setNewsForm({ ...n }); }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400">{n.date}</span>
                      <h4 className="font-bold text-deep-green text-sm line-clamp-2 mt-1 leading-tight">{n.title}</h4>
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); handleDeleteNews(n.id); }} className="text-gray-300 hover:text-red-500 hidden group-hover:block"><i className="fa-solid fa-trash" /></button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            {editingNewsId && newsForm ? (
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 animate-fade-in-up">
                <h3 className="text-xl font-bold text-deep-green mb-6 border-b border-gray-100 pb-4">Edit News Article</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Cover Image</label>
                      <div className="flex gap-6 items-center">
                        <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative border border-gray-200">
                          {newsForm.img ? <img src={newsForm.img} alt="" className="w-full h-full object-cover" /> : <div className="absolute inset-0 flex items-center justify-center text-gray-300"><i className="fa-solid fa-image text-3xl" /></div>}
                        </div>
                        <label className="flex-1 flex justify-center px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-growth-green hover:bg-growth-green/5 transition-colors cursor-pointer group">
                          <input type="file" className="sr-only" accept="image/*" onChange={handleNewsImageUpload} />
                          <div className="text-center">
                            <i className="fa-solid fa-cloud-arrow-up text-gray-400 group-hover:text-growth-green mb-2 text-xl" />
                            <div className="text-sm font-semibold text-gray-600 group-hover:text-growth-green">Click to upload image</div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Article Title</label>
                      <input type="text" name="title" value={newsForm.title} onChange={handleNewsChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green font-bold text-lg" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Date</label>
                      <input type="text" name="date" value={newsForm.date} onChange={handleNewsChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green" placeholder="e.g. Aug 2026" />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Tag / Category</label>
                      <input type="text" name="tag" value={newsForm.tag} onChange={handleNewsChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green" placeholder="e.g. Seed Innovation" />
                    </div>

                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Short Description (Card View)</label>
                      <textarea name="desc" value={newsForm.desc} onChange={handleNewsChange} rows="2" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green resize-none" />
                    </div>

                    <div className="col-span-2">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Content (Markdown supported)</label>
                      <textarea name="fullContent" value={newsForm.fullContent} onChange={handleNewsChange} rows="10" className="w-full px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:border-growth-green font-mono text-sm leading-relaxed" />
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button onClick={saveNews} className="px-8 py-3 bg-growth-green text-white font-bold rounded-xl shadow-md hover:bg-growth-green-hover transition-colors">
                      <i className="fa-solid fa-check mr-2" /> Save Article
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl h-[700px] flex flex-col items-center justify-center text-gray-400">
                <i className="fa-solid fa-newspaper text-5xl mb-4 text-gray-300" />
                <p>Select a news article to edit.</p>
              </div>
            )}
          </div>
        </div>
      )}

      {activeTab === 'events' && (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-[700px]">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="font-bold text-gray-700">Events</h3>
              <button onClick={handleAddNewEvent} className="text-xs font-bold bg-blue-500/10 text-blue-500 px-3 py-1.5 rounded hover:bg-blue-500 hover:text-white transition-colors">
                <i className="fa-solid fa-plus mr-1" /> Add
              </button>
            </div>
            <div className="overflow-y-auto flex-1">
              {events.map(e => (
                <div 
                  key={e.id} 
                  className={`p-4 border-b border-gray-100 cursor-pointer transition-colors group flex gap-3 ${editingEventId === e.id ? 'bg-gray-50 border-l-4 border-l-blue-500' : 'hover:bg-gray-50 border-l-4 border-l-transparent'}`}
                  onClick={() => { setEditingEventId(e.id); setEventForm({ ...e }); }}
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center flex-shrink-0">
                    <i className={`fa-solid ${e.icon}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-deep-green text-sm leading-tight">{e.title}</h4>
                  </div>
                  <button onClick={(ev) => { ev.stopPropagation(); handleDeleteEvent(e.id); }} className="text-gray-300 hover:text-red-500 hidden group-hover:block"><i className="fa-solid fa-trash" /></button>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            {editingEventId && eventForm ? (
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 animate-fade-in-up">
                <h3 className="text-xl font-bold text-deep-green mb-6 border-b border-gray-100 pb-4">Edit Event</h3>
                
                <div className="space-y-6">
                  <div className="col-span-2">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Event Image</label>
                    <div className="flex gap-6 items-center">
                      <div className="w-48 h-32 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative border border-gray-200">
                        {eventForm.img ? <img src={eventForm.img} alt="" className="w-full h-full object-cover" /> : <div className="absolute inset-0 flex items-center justify-center text-gray-300"><i className="fa-solid fa-image text-3xl" /></div>}
                      </div>
                      <label className="flex-1 flex justify-center px-4 py-8 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors cursor-pointer group">
                        <input type="file" className="sr-only" accept="image/*" onChange={handleEventImageUpload} />
                        <div className="text-center">
                          <i className="fa-solid fa-cloud-arrow-up text-gray-400 group-hover:text-blue-500 mb-2 text-xl" />
                          <div className="text-sm font-semibold text-gray-600 group-hover:text-blue-500">Upload Event Photo</div>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Event Title</label>
                      <input type="text" name="title" value={eventForm.title} onChange={handleEventChange} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 font-bold text-deep-green" />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Icon (e.g., 'calendar', 'star')</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i className={`fa-solid ${eventForm.icon?.startsWith('fa-') ? eventForm.icon : (eventForm.icon ? `fa-${eventForm.icon}` : 'fa-circle-question')} text-gray-400`} />
                        </div>
                        <input 
                          type="text" 
                          name="icon" 
                          value={eventForm.icon?.replace(/^fa-/, '') || ''} 
                          onChange={(e) => {
                            const val = e.target.value.trim();
                            handleEventChange({ target: { name: 'icon', value: val ? `fa-${val}` : '' } });
                          }}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500" 
                          placeholder="calendar" 
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Event Description</label>
                    <textarea name="desc" value={eventForm.desc} onChange={handleEventChange} rows="3" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-blue-500 resize-none" />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Event Stats (Max 3)</label>
                    <div className="grid grid-cols-3 gap-4">
                      {eventForm.stats.map((stat, i) => (
                        <input 
                          key={i}
                          type="text" 
                          value={stat} 
                          onChange={(e) => handleEventStatChange(i, e.target.value)} 
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-blue-500 text-sm font-bold text-growth-green text-center" 
                          placeholder={`Stat ${i+1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button onClick={saveEvent} className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-md hover:bg-blue-700 transition-colors">
                      <i className="fa-solid fa-check mr-2" /> Save Event
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-3xl h-[700px] flex flex-col items-center justify-center text-gray-400">
                <i className="fa-solid fa-calendar-star text-5xl mb-4 text-gray-300" />
                <p>Select an event to edit.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
