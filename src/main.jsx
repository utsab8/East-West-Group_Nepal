import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import { ProductProvider } from './context/ProductContext'
import { NewsProvider } from './context/NewsContext'
import { GalleryProvider } from './context/GalleryContext'
import { ContactProvider } from './context/ContactContext'
import { AuthProvider } from './context/AuthContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <AuthProvider>
          <ContactProvider>
            <GalleryProvider>
              <NewsProvider>
                <ProductProvider>
                  <App />
                </ProductProvider>
              </NewsProvider>
            </GalleryProvider>
          </ContactProvider>
        </AuthProvider>
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)
