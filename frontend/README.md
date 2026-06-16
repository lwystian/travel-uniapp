# travel-uniapp

一个面向旅游业务的 uni-app 跨端前端工程骨架，目标端为微信小程序 `mp-weixin` 和 H5 移动端。当前阶段先完成企业级工程结构、基础业务骨架、mock service、平台适配层、请求层、路由层、Pinia 状态和页面骨架。

## 技术栈

- uni-app + Vue3 + TypeScript + Vite
- Pinia
- SCSS
- uview-plus
- ESLint / Prettier / Stylelint
- Husky / lint-staged / commitlint

uview-plus 更贴近 uni-app 生态和小程序/H5 组件适配，所以当前优先采用它。uni-app 模板版本族保持官方模板一致，Vue 固定在 `3.4.21`，Pinia 固定在兼容 Vue 3.4 的 `2.1.7`，减少 peer 依赖波动。

## 目录结构

```text
src/
  adapters/        # auth/payment/share/platform 跨端适配
  components/      # base/business/layout 组件
  constants/       # routes、api、storageKeys、枚举
  env/             # dev/test/prod 环境配置
  hooks/           # usePagination、useShare、useAuthGuard 等
  mock/            # 无后端阶段 mock 数据
  pages/           # 主包页面
  services/        # request 层与业务接口模块
  stores/          # Pinia modules
  styles/          # 变量、重置、安全区、主题
  subpackages/     # marketing/content 分包
  types/           # 核心业务类型
  utils/           # storage、router、format、analytics 等
```

## 启动命令

```bash
pnpm install
pnpm dev:h5
pnpm dev:mp-weixin
pnpm build:h5
pnpm build:mp-weixin
pnpm typecheck
pnpm lint
pnpm lint:style
```

微信小程序运行：执行 `pnpm dev:mp-weixin` 后，用微信开发者工具打开 `dist/dev/mp-weixin`。

H5 运行：执行 `pnpm dev:h5`，按终端输出地址访问移动端页面。

## 环境与 Mock

环境配置位于 `src/env`。`appEnv.useMock` 控制是否走 mock，开发环境默认开启，也可通过 `VITE_USE_MOCK=true/false` 覆盖。

接真实后端时优先替换 `src/services/modules` 中的接口实现或关闭 mock，不要在页面里直接写 API 地址，也不要直接调用 `uni.request`。

## 请求与路由

请求统一使用：

```ts
const detail = await tourApi.getTourDetail({ id: 'tour-1001' })
```

路由统一使用：

```ts
router.navigateTo(ROUTES.TOUR_DETAIL, { id: 'tour-1001' })
```

所有路径在 `src/constants/routes.ts` 维护，登录拦截由 router/auth store/hook 配合处理。

## Store 与平台适配

状态按业务拆分为 `auth/user/search/order/favorite/app`，每个 store 都包含 state、getters、actions 和 reset。

平台差异集中在 `src/adapters`：

- `authAdapter.login()`
- `paymentAdapter.pay(orderInfo)`
- `shareAdapter.sharePage(shareInfo)`
- `platformAdapter.openCustomerService()`

页面不要写 `window/document/localStorage/sessionStorage`，也不要直接写微信或 H5 专属代码。

## 页面与组件开发规范

页面只组织业务流程，接口走 `services`，状态走 `stores`，跳转走 `router`，平台能力走 `adapters`。

组件使用 Vue3 `script setup` 和 TypeScript，基础组件放 `components/base`，业务组件放 `components/business`，页面布局放 `components/layout`。组件不直接请求接口，除非明确是容器组件。

## 后续迭代方式

后续发首页截图时，只修改首页相关页面、组件和样式，不破坏架构。

后续发线路详情图时，先按业务拆组件，再写样式。

后续接后端时，只需要替换 `services/modules` 中的接口实现，并补充 `types`。

后续增加页面时，必须遵循当前目录、路由、类型、service、store、adapter 规范。

后续做真实登录、支付、订单时，先补齐接口类型，再接业务逻辑，并继续保持微信小程序和 H5 的平台差异隔离。
