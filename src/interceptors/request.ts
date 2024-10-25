import { useUserStore } from "@/store";
import qs from "qs";

const httpInterceptor = {
  invoke(options: CustomRequestOptions) {
    if (options.query) {
      const queryStr = qs.stringify(options.query);
      if (options.url.includes("?")) {
        options.url += `&${queryStr}`;
      } else {
        options.url += `?${queryStr}`;
      }
    }

    if (!options.url.startsWith("http")) {
      if (!JSON.parse(import.meta.env.VITE_APP_PROXY)) {
        options.url = `${import.meta.env.VITE_REQUEST_BASEURL}${options.url}`;
      }
    }

    options.timeout = 10000;

    // 添加 token
    const userStore = useUserStore();
    const { token } = userStore.userInfo as unknown as UserInfo;
    token && (options.header.Authorization = `Bearer ${token}`);
  },
};

export const requestInterceptor = {
  install() {
    uni.addInterceptor("request", httpInterceptor);
    uni.addInterceptor("uploadFile", httpInterceptor);
  },
};
