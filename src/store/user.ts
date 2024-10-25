import { defineStore } from "pinia";
import { computed, ref } from "vue";

const initState = { nickname: "", avatar: "" };

export const useUserStore = defineStore(
  "user",
  () => {
    const userInfo = ref<UserInfo>({ ...initState });

    const setUserInfo = (val: UserInfo) => (userInfo.value = val);

    const clearUserInfo = () => (userInfo.value = { ...initState });

    const isLogin = computed(() => userInfo.value.token);

    return { userInfo, setUserInfo, clearUserInfo, isLogin };
  },
  {
    persist: true,
  }
);
