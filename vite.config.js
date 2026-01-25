import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import obfuscator from 'rollup-plugin-obfuscator';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    obfuscator({
      global: true,
      options: {
        // --- PERFORMANCE OPTIMIZED SETTINGS ---
        
        // Compact code (Essential)
        compact: true,
        
        // HEAVY FEATURES DISABLED (To save RAM & CPU)
        controlFlowFlattening: false, 
        deadCodeInjection: false,
        numbersToExpressions: false,
        simplify: false,
        splitStrings: false,
        stringArrayCallsTransform: false,
        
        // LIGHTWEIGHT PROTECTION (Good enough for most cases)
        identifierNamesGenerator: 'hexadecimal', // Renames variables to _0x1234
        stringArray: true,                       // Extracts strings to an array
        stringArrayRotate: true,
        stringArrayShuffle: true,
        stringArrayIndexShift: true,
        
        // Basic protections
        disableConsoleOutput: true,
        selfDefending: true,
        debugProtection: false,
        
        // Misc
        log: false,
        renameGlobals: false,
        transformObjectKeys: false, // Disabled to save RAM
        unicodeEscapeSequence: false
      }
    })
  ],
  build: {
    minify: 'terser',
    terserOptions: {
        compress: {
            drop_console: true,
            drop_debugger: true
        }
    }
  }
})