import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const unocss = await import("unocss/vite").then((i) => i.default);

  return {
    plugins: [uni(), unocss()],
  };
});
