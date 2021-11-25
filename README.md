# FrontendTemplateVite

## TODO

### README.md
- [ ] 如何貢獻程式碼
- [ ] 如何做程式碼審核
- [ ] 如何做 QA 測試
...

### 架構
在同一個專案下把 Client、Dashboard 切分不同資料夾出來。
### 框架
- [x] Vite
- [x] Vue3
### 工具 Tool
#### 測試 Test
**靜態檢查 Static Check**
在還沒跑程式之前，讓你知道你的程式碼有問題。
- [ ] 語法風格 Prettier & ESLint
- [ ] 語法檢查 ESlint

**動態測試 Dynamic Test**
程式跑起來看有沒有正常運作。
- [x] Unit Test ([Jest](https://jestjs.io/))
- [ ] E2E ([Cypress](https://www.cypress.io/))

### 流程控制 Workflow
建立測試到正式環境之前的自動流程，減少人為檢查、發布造成的錯誤可能。
- 採用 [GitHub Actions](https://github.com/features/actions)
  - [ ] Test 測試流程 (希望可以支援 Netlify Preview Mode)
  - [ ] Staging 展示流程
  - [ ] Production 產品流程

### 發布環境 Publish
前端要發布至哪個平台。
- 採用 [Netlify](https://www.netlify.com/)

### 預裝套件
**通用 General**
- [x] [lodash](https://lodash.com/)
- [x] [axios](https://github.com/axios/axios)
- [x] [day.js](https://dayjs.gitee.io/zh-CN/) - 日期計算
- [x] [big.js](https://mikemcl.github.io/big.js/) - 數字精準運算（包含小數點）
- [x] [nprogress](https://ricostacruz.com/nprogress/) - 能做出 `Nuxt` 一樣的 `Loading` 效果
- [x] [js-cookie](https://github.com/js-cookie/js-cookie#readme) - Cookie 套件
- [x] [async-validator](https://github.com/yiminghe/async-validator) - 資料校驗：需要想一個一致的使用方式
- [x] [Numeral.js](http://numeraljs.com/) - 格式化數字

**Vue & Vite**
- [x] [vue-router](https://next.router.vuejs.org/zh/introduction.html)
- [x] [vueuse/head](https://github.com/vueuse/head) - 動態設定 `<head>` 標籤
- [x] [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - 自動 `import` 元件
- [x] [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages) - 依據資料夾自動引入 `Router`，可以做到像 `Nuxt` 自動生成路徑。
- [x] [vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - 方便的設定 `Layout`
- [x] [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) - 圖像化分析 `bundle` 檔案的大小
- [x] [vite-plugin-windicss](https://github.com/windicss/vite-plugin-windicss) - 設計給 `Vite` 用，近似 `tailwind.css` 的套件
- [x] [vite-plugin-vue-i18n](https://github.com/intlify/vite-plugin-vue-i18n) - i18n 套件

**介面 UI**
- [x] [Windi CSS](https://windicss.org/) - 用於前台樣式
- [x] [https://2x.antdv.com/docs/vue/introduce/](https://2x.antdv.com/docs/vue/introduce/) - 用於後台樣式
- [x] [@ant-design/icons-vue](https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-vue) - 用於後台樣式 `Ant Design` Icon 載入
- [x] [antd-dayjs-vite-plugin](https://github.com/nekocode/antd-dayjs-vite-plugin) - 用於後台樣式把 `Ant Design` 的 `moment.js` 換成 `day.js`

### 常用設定
- Alias `@` to src/client/src
- Alias `~` to src/dashboard/src

### 常用功能
- 公用程式 Utils
  - [x] delay
  - [x] handleDate
  - [x] 後台專用／createQueryString
  - [x] 後台專用／handleTableChange
  - [x] 後台專用／checkIsAdmin
- 後台 Dashboard
  - [ ] 登入 Login Page
  - [ ] 忘記密碼 Forgot Password Page
  - [ ] 歡迎介面 Welcome Page
- 文件 Document
  - [ ] [storybook](https://storybook.js.org/docs/vue/get-started/introduction)
  - [ ] [JSDoc](https://jsdoc.app/)

### 協作
- [x] [約定式提交](https://www.conventionalcommits.org/zh-hant/v1.0.0-beta.4/)
- [x] [husky](https://github.com/typicode/husky)
- [x] [cz](https://github.com/commitizen/cz-cli)
- [x] GitHub PR Template
