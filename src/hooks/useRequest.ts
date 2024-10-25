import { ref, type UnwrapRef } from "vue";

type UseRequestOptions<T> = {
  // 是否立即执行
  immediate?: boolean;
  // 初始化数据
  initialData?: T;
};

/**
 *
 * @param func 异步执行请求函数
 * @param options 请求配置
 * @param options.immediate 是否立即执行请求，默认 false
 * @param options.initialData 初始化数据，默认 undefined
 * @returns 返回 { loading, error, data, run }，包含请求的加载状态、错误信息、响应数据和手动触发请求的函数
 */
export default function useRequest<T>(
  func: () => Promise<ResData<T>>,
  options: UseRequestOptions<T> = { immediate: false }
) {
  const loading = ref(false);
  const error = ref(false);
  const data = ref<T>(options.initialData as T);
  const run = async () => {
    loading.value = true;
    return func()
      .then((res) => {
        data.value = res.data as UnwrapRef<T>;
        error.value = false;
        return data.value;
      })
      .catch((err) => {
        error.value = err;
        throw err;
      })
      .finally(() => {
        loading.value = false;
      });
  };

  options.immediate && run();
  return { loading, error, data, run };
}
