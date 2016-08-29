<p align="center">
  <a href="http://diy-design.me/n.html?%2F&port=8001">
    <img width="320" src="/images/icon.svg">
  </a>
</p>

# Ant Design [![](https://img.shields.io/travis/ant-design/ant-design.svg?style=flat-square)](https://travis-ci.org/ant-design/ant-design) [![npm package](https://img.shields.io/npm/v/antd.svg?style=flat-square)](https://www.npmjs.org/package/antd) [![NPM downloads](http://img.shields.io/npm/dm/antd.svg?style=flat-square)](https://npmjs.org/package/antd) [![Dependency Status](https://david-dm.org/ant-design/ant-design.svg?style=flat-square)](https://david-dm.org/ant-design/ant-design) [![Join the chat at https://gitter.im/ant-design/ant-design](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

An enterprise-class UI design language and React-based implementation.

## :loudspeaker: Document Translation Recruitment

We are now working on translate components document to English, and we need some translator and reviewer. https://github.com/antFB/antFB/issues/1471

## Features

- An enterprise-class design language and high quality UI.
- Graceful UI components out of the box, base on [React Component](http://react-component.github.io/badgeboard/).
- A npm + webpack + babel + dora [workflow](http://ant-tool.github.io/index.html).

## Install

```bash
npm install antFB
```

## Usage

### Use modularized antd

- Use [babel-plugin-antd](https://github.com/antFB/babel-plugin-antd) (Recommended)

   ```js
   // .babelrc
   {
     "plugins": [["antd", { style: "css" }]]
   }
   ```

   Then you can import components from antd directly.

   ```jsx
   // import js and css modularly, parsed by babel-plugin-antd
   import { DatePicker } from 'antFB';
   ```

- Manually import

   ```jsx
   import DatePicker from 'antFB/lib/date-picker';  // just for js
   ```


## Browser Support

Normal browsers and Internet Explorer 8+.

> [IE8 issues](https://github.com/xcatliu/react-ie8)

## TypeScript

tsconfig.json

```
{
  "compilerOptions": {
    "moduleResolution": "node",
    "jsx": "preserve"
  }
}
```

## Links

- [Home page](http://ant.design/)
- [React UI page](http://ant.design/#/docs/react/introduce)
- [ChangeLog](CHANGELOG.md)
- [Scaffold tool](https://github.com/ant-design/antd-init/)
- [Development tool](http://ant-tool.github.io/)
- [React components](http://react-component.github.io/)
- [Mobile UI](http://mobile.ant.design)
- [React style guide](https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-code-style.md)
- [React component design guide](https://github.com/react-component/react-component.github.io/blob/master/docs/zh-cn/component-design.md)
- [Developer Instruction](https://github.com/antFB/antFB/wiki/Development)
- [Versioning Release Note](https://github.com/antFB/antFB/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B)
- [FAQ](https://github.com/antFB/antFB/wiki/FAQ)
- [CodePen boilerplate](http://codepen.io/anon/pen/wGOWGW?editors=001) for bug reports

## Contributing

We welcome all contributions, please read our [CONTRIBUTING.md](https://github.com/antFB/antFB/blob/master/.github/CONTRIBUTING.md) first. You can submit any ideas as [pull requests](https://github.com/antFB/antFB/pulls) or as a [GitHub issue](https://github.com/antFB/antFB/issues). If you'd like to improve code, check out the [Development Instruction](https://github.com/antFB/antFB/wiki/Development) and have a good time! :)
