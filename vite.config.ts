import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({  
      // strategies: 'injectManifest',
      registerType: 'autoUpdate',  
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],  
      // filename: 'firebase-messaging-sw.js',
      manifest: {  
        name: 'udin-notif',  
        short_name: 'udin-notif',  
        description: 'Website description(Could be same with index.html file)',  
        theme_color: '#ffffff',  
        start_url: '/',  
        icons: [  
          {  
            src: 'pwa-192x192.png',  
            sizes: '192x192',  
            type: 'image/png',  
          },  
        ],  
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true
      },
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html'
        /* other options */
      }
    }), 
  ],
})
