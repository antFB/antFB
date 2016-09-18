---
order: 0
title: Ant Fable of React
---

We supply a react implementation `antd` following Ant Fable specification, which designed to help developing RIA such as dashboards or other enterprise-like complex UI needs.

<div class="pic-plus">
  <img width="150" src="https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg">
  <span>+</span>
  <img width="160" src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg">
  <span>+</span>
  <img width="160" src="/images/icon.svg">
</div>

<style>
.pic-plus > * {
  display: inline-block!important;
  vertical-align: middle;
}
.pic-plus span {
  font-size: 30px;
  color: #aaa;
  margin: 0 20px;
}
</style>

---

## Features

- Following Ant Fable, a design language for creating user friendly and beautiful websites.
- It is a set of high quality UI components and based on [React Component](http://react-component.github.io/badgeboard/).
- Provides a work flow which is based on npm, webpack, and babel, supporting ES2015 and TypeScript.

## Installation

```bash
$ npm install antd
```

## Example

```jsx
import { DatePicker } from 'antd';
ReactDOM.render(<DatePicker />, mountNode);
```

Import style:

```jsx
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
```

You can use:

- `import DatePicker from 'antd/lib/date-picker';`
- `import { DatePicker } from 'antd';` when [babel-plugin-antd](https://github.com/ant-design/babel-plugin-antd) is also used.

> babel-plugin-antd supports importing components and styles on demand.

## Version

- Stable: [![npm package](http://img.shields.io/npm/v/antd.svg?style=flat-square)](https://www.npmjs.org/package/antd)
- Beta: [![](https://cnpmjs.org/badge/v/antd.svg?&tag=beta&subject=npm)](https://www.npmjs.org/package/antd)

## Compatibility

Modern browsers and IE8+.

> [IE8 issues](https://github.com/xcatliu/react-ie8)

## Useful Links

- [Home page](http://diy-design.me/n.html?%2F&port=8001)
- [Ant Design](http://ant.design)
- [Change Log](/changelog)
- [Scaffold](https://github.com/antFB/antFB-init/)
- [Development Tools](http://ant-tool.github.io/)
- [React Component](http://react-component.github.io/)
- [Ant Fable Mobile](http://mobile.ant.design)
- [React Code Style](https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-code-style.md)
- [Component Design Principles](https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-design.md)
- [Design Handbook](https://os.alipayobjects.com/rmsportal/HTXUgPGkyyxEivE.png)
- [Scaffold and Demo Supported by Community](https://github.com/antFB/antFB/issues/129)

## Who is using antd

- Ant Financial
- Alibaba
- Koubei
- China Internet Plus
- Didi

> If your company or product uses Ant Fable, you are welcome to comment in [this issue]((https://github.com/antFB/antFB/issues/477)). Thank you!

## Contributing

Please read our [CONTRIBUTING.md](https://github.com/antFB/antFB/blob/master/.github/CONTRIBUTING.md) first.

If you have any idea to improve antd, just create a [Pull Request](https://github.com/antFB/antFB/pulls). Also, you can also [issue](https://github.com/antFB/antFB/issues/new) bugs or [ask questions](https://github.com/antFB/antFB/issues).

> Recommend to read [*How To Ask Questions The Smart Way*](http://www.catb.org/~esr/faqs/smart-questions.html) and [How to Ask a Question in Open Source Community](https://github.com/seajs/seajs/issues/545) and [How to Report Bugs Effectively](http://www.chiark.greenend.org.uk/~sgtatham/bugs.html), a smart question will get right answer quickly.
