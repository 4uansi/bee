import { ref } from "vue";

const UPLOAD_BASEURL = import.meta.env.VITE_UPLOAD_BASEURL;

function uploadFile<T>({
  temFilePath,
  formData,
  data,
  error,
  loading,
}: {
  temFilePath: string;
  formData: Record<string, unknown> | undefined;
  data: { value: T | undefined };
  error: { value: boolean };
  loading: { value: boolean };
}) {
  uni.uploadFile({
    url: UPLOAD_BASEURL,
    filePath: temFilePath,
    name: "file",
    formData,
    success: (res) => {
      data.value = res.data as T;
    },
    fail: (err) => {
      console.error("uni.uploadFile err -> ", err);
      error.value = true;
    },
    complete: () => {
      loading.value = false;
    },
  });
}

export default function useUpload<T = string>(
  formData?: Record<string, unknown>
) {
  const loading = ref(false);
  const error = ref(false);
  const data = ref<T>();

  const run = async () => {
    // #ifdef MP-WEIXIN
    uni.chooseMedia({
      count: 1,
      mediaType: ["image"],
      success: (res) => {
        loading.value = true;
        const temFilePath = res.tempFiles[0].tempFilePath;
        uploadFile<T>({ temFilePath, formData, data, error, loading });
      },
      fail: (err) => {
        console.error("uni.chooseMedia err->", err);
        error.value = true;
      },
    });
    // #endif
    // #ifndef MP-WEIXIN
    uni.chooseImage({
      count: 1,
      success: (res) => {
        loading.value = true;
        const temFilePath = res.tempFilePaths[0];
        uploadFile<T>({ temFilePath, formData, data, error, loading });
      },
      fail: (err) => {
        console.error("uni.chooseImage err->", err);
        error.value = true;
      },
    });
    // #endif
  };

  return { loading, error, data, run };
}
