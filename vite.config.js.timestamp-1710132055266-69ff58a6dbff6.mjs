// vite.config.js
import { defineConfig } from "file:///C:/Users/meyer/OneDrive/Documentos/web-projects/elder-meyer/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/meyer/OneDrive/Documentos/web-projects/elder-meyer/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()]
  // server: {
  //   host: '192.168.3.2',
  //   port: 5173,
  // },
  //EL SIGUIENTE CONTENIDO ES SOLO PAR LOS TESTS,
  //COMENTAR ANTES DE SUBIR A PRODUCCIÓN, HACER BUILD O EJECUTAR
  /* test: {
    environment: 'jsdom',
    globals: true
  },
  server: {
    fs: {
      // Incluir archivos de prueba con extensión .test.js para que se procesen con JSX
      allow: ['../*']
    }
  } */
  //HASTA AQUÍ TERMINA LO QUE SE DEBE DE COMENTAR
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxtZXllclxcXFxPbmVEcml2ZVxcXFxEb2N1bWVudG9zXFxcXHdlYi1wcm9qZWN0c1xcXFxlbGRlci1tZXllclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcbWV5ZXJcXFxcT25lRHJpdmVcXFxcRG9jdW1lbnRvc1xcXFx3ZWItcHJvamVjdHNcXFxcZWxkZXItbWV5ZXJcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL21leWVyL09uZURyaXZlL0RvY3VtZW50b3Mvd2ViLXByb2plY3RzL2VsZGVyLW1leWVyL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgLy8gc2VydmVyOiB7XG4gIC8vICAgaG9zdDogJzE5Mi4xNjguMy4yJyxcbiAgLy8gICBwb3J0OiA1MTczLFxuICAvLyB9LFxuXG4gIC8vRUwgU0lHVUlFTlRFIENPTlRFTklETyBFUyBTT0xPIFBBUiBMT1MgVEVTVFMsXG4gIC8vQ09NRU5UQVIgQU5URVMgREUgU1VCSVIgQSBQUk9EVUNDSVx1MDBEM04sIEhBQ0VSIEJVSUxEIE8gRUpFQ1VUQVJcbiAgICAgIC8qIHRlc3Q6IHtcbiAgICAgICAgZW52aXJvbm1lbnQ6ICdqc2RvbScsXG4gICAgICAgIGdsb2JhbHM6IHRydWVcbiAgICAgIH0sXG4gICAgICBzZXJ2ZXI6IHtcbiAgICAgICAgZnM6IHtcbiAgICAgICAgICAvLyBJbmNsdWlyIGFyY2hpdm9zIGRlIHBydWViYSBjb24gZXh0ZW5zaVx1MDBGM24gLnRlc3QuanMgcGFyYSBxdWUgc2UgcHJvY2VzZW4gY29uIEpTWFxuICAgICAgICAgIGFsbG93OiBbJy4uLyonXVxuICAgICAgICB9XG4gICAgICB9ICovXG4gIC8vSEFTVEEgQVFVXHUwMENEIFRFUk1JTkEgTE8gUVVFIFNFIERFQkUgREUgQ09NRU5UQVJcbn0pXG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVgsU0FBUyxvQkFBb0I7QUFDOVksT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbUJuQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
