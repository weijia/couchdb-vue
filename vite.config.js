import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/*
import builtins from 'rollup-plugin-node-builtins';

const builtinsPlugin = { ...builtins({ crypto: true }), name: 'rollup-plugin-node-builtins' };*/

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()//, builtinsPlugin
  ],
  //define: {global: "window", "process.env": "import.meta.env"},   // <--- Add "window" here
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      zlib: "browserify-zlib",
      util: 'util'
    }
  }
})
