import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const unocss = await import("unocss/vite").then((i) => i.default);

  return {
    envDir: "./env",
    plugins: [
      uni(),
      unocss(),
      AutoImport({
        imports: ["vue", "uni-app"],
        dts: "src/types/auto-import.d.ts",
        dirs: ["src/hooks"],
        eslintrc: { enabled: true },
        vueTemplate: true,
      }),
    ],
  };
});
