# yfb-uniapp
uniapp做的易分宝商城


## 开发规范

- 页面文件遵循 [Vue 单文件组件 (SFC) 规范](https://vue-loader.vuejs.org/zh/spec.html)
- 组件标签靠近小程序规范，详见[uni-app 组件规范](https://uniapp.dcloud.io/component/README)
- 接口能力（JS API）靠近微信小程序规范，但需将前缀 wx 替换为 uni，详见[uni-app接口规范](https://uniapp.dcloud.io/api/README)
- 数据绑定及事件处理同 Vue.js 规范，同时补充了App及页面的生命周期
- 为兼容多端运行，建议使用flex布局进行开发


## 提交规范

- feat: 一个新功能
- fix: 一个 bug 修复
- docs: 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE 等
- style: 不影响代码逻辑的修改，比如空格、格式缩进、删除分号等
- refactor: 代码重构
- perf: 提升性能的改动
- test: 增加或修改测试
- chore: 改变构建流程、或者增加辅助工具、依赖库等
