// vite.config.js
import { defineConfig } from "file:///D:/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/GitHub/Laravel/authorization_and_login/node_modules/vite/dist/node/index.js";
import laravel from "file:///D:/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/GitHub/Laravel/authorization_and_login/node_modules/laravel-vite-plugin/dist/index.js";
import vue from "file:///D:/%D0%A0%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0/GitHub/Laravel/authorization_and_login/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    laravel({
      input: [
        "resources/sass/app.scss",
        "resources/js/app.js"
      ],
      refresh: true
    }),
    vue({
      template: {
        transformAssetUrls: {
          base: null,
          includeAbsolute: false
        }
      }
    })
  ],
  resolve: {
    alias: {
      vue: "vue/dist/vue.esm-bundler.js"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxcdTA0MjBcdTA0MzBcdTA0MzdcdTA0NDBcdTA0MzBcdTA0MzFcdTA0M0VcdTA0NDJcdTA0M0FcdTA0MzBcXFxcR2l0SHViXFxcXExhcmF2ZWxcXFxcYXV0aG9yaXphdGlvbl9hbmRfbG9naW5cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFx1MDQyMFx1MDQzMFx1MDQzN1x1MDQ0MFx1MDQzMFx1MDQzMVx1MDQzRVx1MDQ0Mlx1MDQzQVx1MDQzMFxcXFxHaXRIdWJcXFxcTGFyYXZlbFxcXFxhdXRob3JpemF0aW9uX2FuZF9sb2dpblxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovJUQwJUEwJUQwJUIwJUQwJUI3JUQxJTgwJUQwJUIwJUQwJUIxJUQwJUJFJUQxJTgyJUQwJUJBJUQwJUIwL0dpdEh1Yi9MYXJhdmVsL2F1dGhvcml6YXRpb25fYW5kX2xvZ2luL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBsYXJhdmVsIGZyb20gJ2xhcmF2ZWwtdml0ZS1wbHVnaW4nO1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIGxhcmF2ZWwoe1xyXG4gICAgICAgICAgICBpbnB1dDogW1xyXG4gICAgICAgICAgICAgICAgJ3Jlc291cmNlcy9zYXNzL2FwcC5zY3NzJyxcclxuICAgICAgICAgICAgICAgICdyZXNvdXJjZXMvanMvYXBwLmpzJyxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgcmVmcmVzaDogdHJ1ZSxcclxuICAgICAgICB9KSxcclxuICAgICAgICB2dWUoe1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtQXNzZXRVcmxzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFzZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBpbmNsdWRlQWJzb2x1dGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSxcclxuICAgIF0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgICAgYWxpYXM6IHtcclxuICAgICAgICAgICAgdnVlOiAndnVlL2Rpc3QvdnVlLmVzbS1idW5kbGVyLmpzJyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFksU0FBUyxvQkFBb0I7QUFDdmEsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sU0FBUztBQUVoQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDSixPQUFPO0FBQUEsUUFDSDtBQUFBLFFBQ0E7QUFBQSxNQUNKO0FBQUEsTUFDQSxTQUFTO0FBQUEsSUFDYixDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDTixvQkFBb0I7QUFBQSxVQUNoQixNQUFNO0FBQUEsVUFDTixpQkFBaUI7QUFBQSxRQUNyQjtBQUFBLE1BQ0o7QUFBQSxJQUNKLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxLQUFLO0FBQUEsSUFDVDtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
