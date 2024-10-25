<br />

<p align="center">
  <a href="https://github.com/4uansi/bee">
    <img src="src/static/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Bee</h3>
</p>
## 目录

- [上手指南](#上手指南)
  - [安装步骤](#安装步骤)
- [开发前的配置要求](#开发前的配置要求)
- [文件目录说明](#文件目录说明)
- [版本控制](#版本控制)

### 上手指南

###### **安装步骤**

1. 首先克隆该项目
   ```sh
   git clone https://github.com/shaojintian/Best_README_template.git
   ```
2. 克隆完成后进入项目目录安装依赖
   ```bash
   cd your_project_name
   pnpm install
   pnpm run dev:h5
   ```

###### 开发前的配置要求

在项目根目录下 `.env` 文件进行以下配置

```env
# 是否开启代理
VITE_APP_PROXY=false
# 代理前缀
VITE_APP_PROXY_PRETIX="/api"
# 请求基础路径
VITE_REQUEST_BASEURL=""
# 上传基础路径
VITE_UPLOAD_BASEURL=""
```

### 文件目录说明

```
filetree
.
├── README.md
├── env
├── index.html
├── package.json
├── pnpm-lock.yaml
├── shims-uni.d.ts
├── src
│   ├── App.vue
│   ├── env.d.ts
│   ├── hooks
│   │   ├── useRequest.ts
│   │   └── useUpload.ts
│   ├── interceptors
│   │   ├── index.ts
│   │   └── request.ts
│   ├── main.ts
│   ├── manifest.json
│   ├── pages
│   │   └── index
│   ├── pages.json
│   ├── shime-uni.d.ts
│   ├── static
│   │   └── logo.png
│   ├── store
│   │   ├── index.ts
│   │   └── user.ts
│   ├── types
│   │   ├── auto-import.d.ts
│   │   └── global.d.ts
│   ├── uni.scss
│   └── utils
│       └── http.ts
├── tsconfig.json
├── uno.config.ts
└── vite.config.ts

```

### 版本控制

该项目使用 Git 进行版本管理。您可以在 repository 参看当前可用版本。
