export const http = <T>(options: CustomRequestOptions) => {
  return new Promise<ResData<T>>((resolve, reject) => {
    uni.request({
      ...options,
      dataType: "json",
      success: (res) => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res.data as ResData<T>);
        } else if (res.statusCode === 401) {
          // TODO: 401错误 -> 清理用户信息，跳转到登陆页面
          reject(res);
        } else {
          !options.hideErrorToast &&
            uni.showToast({
              icon: "none",
              title: (res.data as ResData<T>).msg || "请求错误",
            });
          reject(res);
        }
      },
      fail: (err) => {
        uni.showToast({
          icon: "none",
          title: "网络错误，换个网络试试",
        });
        reject(err);
      },
    });
  });
};

/**
 * GET请求
 * @param url - 请求地址
 * @param query - 请求参数
 * @returns Promise<ResData<T>>
 */
export const httpGet = <T>(url: string, query?: Record<string, unknown>) => {
  return http<T>({
    url,
    query,
    method: "GET",
  });
};

/**
 * POST请求
 * @param url - 请求地址
 * @param data - body 请求参数
 * @param query - query 请求参数
 * @returns Promise<ResData<T>>
 */
export const httpPost = <T>(
  url: string,
  data?: Record<string, unknown>,
  query?: Record<string, unknown>
) => {
  return http<T>({
    url,
    query,
    data,
    method: "POST",
  });
};

http.get = httpGet;
http.post = httpPost;
