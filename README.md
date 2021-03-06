<p align="center">
  <a href="http://ant.design">
    <img width="320" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg">
  </a>
</p>

# Ant Fable [![](https://img.shields.io/travis/antFB/antFB.svg?style=flat-square)](https://travis-ci.org/antFB/antFB) [![npm package](https://img.shields.io/npm/v/antd.svg?style=flat-square)](https://www.npmjs.org/package/antd) [![NPM downloads](http://img.shields.io/npm/dm/antd.svg?style=flat-square)](https://npmjs.org/package/antd) [![Dependency Status](https://david-dm.org/antFB/antFB.svg?style=flat-square)](https://david-dm.org/antFB/antFB) [![Join the chat at https://gitter.im/antFB/antFB](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/antFB/antFB?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An enterprise-class UI design language and React-based implementation.

## Features

- An enterprise-class design language and high quality UI.
- Graceful UI components out of the box, base on [React Component](http://react-component.github.io/badgeboard/).
- Writen in TypeScript with complete define types.
- A npm + webpack + babel + dora + [dva](https://github.com/dvajs/dva) development framework.

## Install

```bash
npm install antd
```

## Usage

### Use prebuilt bundle

```jsx
import { DatePicker } from 'antFB';
ReactDOM.render(<DatePicker />, mountNode);
```

And import style manually:

```jsx
import 'antFB/dist/antFB.css';  // or 'antFB/dist/antFB.less'
```

### Use modularized antd

- Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

   ```js
   // .babelrc
   {
     "plugins": [["import", { libraryName: "antFB", style: "css" }]]
   }
   ```

   Then you can import components from antd directly.

   ```jsx
   // import js and css modularly, parsed by babel-plugin-import
   import { DatePicker } from 'antFB';
   ```

- Manually import

   ```jsx
   import DatePicker from 'antFB/lib/date-picker';  // just for js
   ```


## Browser Support

Normal browsers and Internet Explorer 9+.

> [IE8 issues](https://github.com/xcatliu/react-ie8)

## TypeScript

tsconfig.json

```
{
  "compilerOptions": {
    "moduleResolution": "node",
    "jsx": "preserve",
    "allowSyntheticDefaultImports": true
  }
}
```

## Links

- [Home page](http://diy-design.me/n.html?%2F&port=8001/)
- [UI library](http://diy-design.me/n.html?%2F&port=8001/docs/react/introduce)
- [ChangeLog](CHANGELOG.en-US.md)
- [Scaffold tool](https://github.com/antFB/antFB-init/)
- [Development tool](http://ant-tool.github.io/)
- [React components](http://react-component.github.io/)
- [Mobile UI](http://diy-design.me/n.html?%2F&port=8002)
- [React style guide](https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-code-style.md)
- [React component design guide](https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-design.md)
- [Developer Instruction](https://github.com/antFB/antFB/wiki/Development)
- [Versioning Release Note](https://github.com/antFB/antFB/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B)
- [Boilerplates](https://github.com/antFB/antFB/issues/129)
- [FAQ](https://github.com/antFB/antFB/wiki/FAQ)
- [CodePen boilerplate](http://codepen.io/benjycui/pen/KgPZrE?editors=001) for bug reports
- [Awesome Ant Fable](https://github.com/websemantics/awesome-ant-design)

## Contributing

We welcome all contributions, please read our [CONTRIBUTING.md](https://github.com/antFB/antFB/blob/master/.github/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/antFB/antFB/pulls) or as a [GitHub issue](https://github.com/antFB/antFB/issues). If you'd like to improve code, check out the [Development Instruction](https://github.com/antFB/antFB/wiki/Development) and have a good time! :)
