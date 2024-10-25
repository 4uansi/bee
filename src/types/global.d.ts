// 用户信息
type UserInfo = {
  nickname?: string;
  avatar?: string;
  openid?: string;
  token?: string;
};

// 上传文件配置信息
type UniUploadFileOptions = {
  file?: File;
  files?: UniApp.UploadFileOptionFiles[];
  filePath?: string;
  name?: string;
  formData?: Record<string, unknown>;
};

// 自定义请求配置信息
type CustomRequestOptions = UniApp.RequestOptions & {
  query?: Record<string, unknown>;
  hideErrorToast?: boolean;
} & UniUploadFileOptions;

type ResData<T> = {
  code: number;
  data: T;
  msg: string;
};
