<p align="center">
  <a href="http://diy-design.me/n.html?%2F&port=8001">
    <img width="320" src="http://diy-design.me/n.html?%2Fimages%2Ficon.svg&port=8001">
  </a>
</p>

# Ant Fable

一套企业级的 UI 设计语言和 React 实现, 基于ant-design。

## 特性

- 提炼和服务企业级中后台产品的交互语言和视觉风格。
- [React Component](http://react-component.github.io/badgeboard/) 基础上精心封装的高质量 UI 组件。
- 基于 npm + webpack + babel 的工作流，支持 ES2015 和 TypeScript。

## 安装

```bash
npm install antFB
```

## 示例

```jsx
import { DatePicker } from 'antFB';
ReactDOM.render(<DatePicker />, mountNode);
```

引入样式：

```jsx
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
```

按需加载可通过此写法 `import DatePicker from 'antd/lib/date-picker'` 或使用插件 [babel-plugin-antd](https://github.com/ant-design/babel-plugin-antd)。


## 浏览器支持

现代浏览器和 IE8 及以上。

使用 antFB-init 快速构建 ie8 项目;
npm install antFB-init
mkdir demoIe8 & cd demoIe8
antFB-init --ie8

> [IE8 issues](https://github.com/xcatliu/react-ie8)

## TypeScript

```js
///<reference path='./node_modules/antd/type-definitions/antd.d.ts'/>
...
```

## 链接

- [首页](http://diy-design.me/n.html?%2F&port=8001)
- [ant-design](http://ant.design)
- [React 实现](http://diy-design.me/n.html?%2F&port=8001/#/docs/react/introduce)
- [修改记录](CHANGELOG.md)
- [开发脚手架](https://github.com/antFB/antFB-init/)
- [开发工具文档](http://ant-tool.github.io/)
- [React 基础组件](http://react-component.github.io/)
- [移动端组件](http://diy-design.me/n.html?%2F&port=8002)
- [React 代码规范](https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-code-style.md)
- [组件设计原则](https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-design.md)
- [网站和组件开发说明](https://github.com/antFB/antFB/wiki/%E7%BD%91%E7%AB%99%E5%92%8C%E7%BB%84%E4%BB%B6%E5%BC%80%E5%8F%91%E8%AF%B4%E6%98%8E)
- [版本发布手册](https://github.com/antFB/antFB/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B)


## 如何贡献

我们欢迎任何形式的贡献，有任何建议或意见您可以进行 [Pull Request](https://github.com/antFB/antFB/pulls)，或者给我们 [提问](https://github.com/antFB/antFB/issues)。
