// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'



// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ['react-paginate']
//     }
//   }
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-paginate']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias '@' to the 'src' directory
    },
  },
});
