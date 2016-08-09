---
order: 1
title: Getting Started
---

Ant Design React is dedicated to providing a **good development experience** for programmers.

---

Before delving into Ant Design React, a good knowledge of [React](http://facebook.github.io/react/) and [JavaScript ES2015](http://babeljs.io/docs/learn-es2015/) is needed.

## First Example

The following CodePen demo is the simplest usage case, and it's also a good habit to fork this demo to provide a re-producible demo while reporting a bug. Please don't use this demo as a scaffold in real world.

- [antd CodePen](http://codepen.io/anon/pen/wGOWGW?editors=001)

## Standard Development Flow

During development, you may need to compile and debug JSX and ES2015 code, and even proxy some of the request to mocked data or some external services. And all of these to be done with a quick feedback provided through hot reloading of changes.

Such features, together with packaging the production version are covered in this work flow.

### 1. Installation

> Please make sure that you had installed [Node.js](https://nodejs.org/en/)(> v4.x) before using `antd-init`.

```bash
$ npm install antd-init -g
```

Read [the documentation of `antd-init`](https://github.com/ant-design/antd-init/) and [the documentation of `ant-tool`](http://ant-tool.github.io/) to explore more features.

> Also, you can use scaffold/demo which is provided by community:
>
>   - [react-redux-antd](https://github.com/okoala/react-redux-antd)
>   - [react-antd-admin](https://github.com/fireyy/react-antd-admin)
>   - [react-antd-redux-router-starter](https://github.com/yuzhouisme/react-antd-redux-router-starter)
>   - [react-redux-antd-starter](https://github.com/BetaRabbit/react-redux-antd-starter)
>   - [more](https://github.com/antFB/antFB/issues/129)

### 2. Create a New Project

A new project can be created using CLI tools.

```bash
$ mkdir antd-demo && cd antd-demo
$ antd-init --type plain-react
```

`antd-init` will run `npm install` after a project is created. If it fails, you can run `npm install` by yourself.

### 3. Use antd's Components

By default, besides the scaffolding needed to start the development, a fully working Todo application is created.
You may study this example later. For now, just follow this guide in order to get some experience working with the result of `antd-init`.

Replace the content of `src/entries/index.js` with the following code.
As you can see, there is no difference between antd's components and usual React components.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('Selected Date: ' + date.toString());
    this.setState({ date });
  }
  render() {
    return (
      <div style={{ width: 400, margin: '100px auto' }}>
        <DatePicker onChange={value => this.handleChange(value)} />
        <div style={{ marginTop: 20 }}>Date: {this.state.date.toString()}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

> All the components in antd are listed in the sidebar.

### 4. Development & Debugging

Run your project and visit http://127.0.0.1:8989

```bash
$ npm start
```

### 5. Building & Deployment

```bash
$ npm run build
```

Entry files will be built and generated in `dist` directory, then we can deploy it to different environments.

> This guide is designed to help you to understand how to use antd, so it may not be similar to what you do in the real world.
> But you can use those tools in your project, depending on your context and needs.

## Compatibility

Ant Design React supports all the modern browsers and IE8+.

But we need to provide [es5-shim](https://facebook.github.io/react/docs/working-with-the-browser.html#browser-support) and other polyfills for IE8/9, and [babel-polyfill](https://babeljs.io/docs/usage/polyfill/) is a better choice. What's more, use [react@0.14.x](https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html) to support IE8.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <!-- import stylesheet -->
    <link rel="stylesheet" href="/index.css">
    <!-- Polyfills -->
    <!--[if lt IE 10]>
    <script src="https://as.alipayobjects.com/g/component/??console-polyfill/0.2.2/index.js,es5-shim/4.5.7/es5-shim.min.js,es5-shim/4.5.7/es5-sham.min.js,html5shiv/3.7.2/html5shiv.min.js,media-match/2.0.2/media.match.min.js"></script>
    <![endif]-->
  </head>
  <body>
  </body>
  <!-- import common dependencies -->
  <script src="/common.js"></script>
  <!-- import entry file -->
  <script src="/index.js"></script>
</html>
```

You may encounter problems like [#28](https://github.com/ant-tool/atool-build/issues/28) and [#858](https://github.com/antFB/antFB/issues/858), since `babel@6.x` doesn't support IE8.

[antd-init](http://github.com/ant-design/antd-init) had solved those problems and you can refer to this [webpack config](https://github.com/ant-design/antd-init/blob/f5fb9479ca973fade51fd6754e50f8b3fafbb1df/boilerplate/webpack.config.js#L4-L8).

> More about how to use React in IE8: https://github.com/xcatliu/react-ie8

## Customized Work Flow

If you want to customize your work flow, we recommend to use [webpack](http://webpack.github.io/) to build and debug code.

Also, you can use any [scaffold](https://github.com/enaqx/awesome-react#boilerplates) available in React ecosystem. If you encounter problems, you can use our [webpack config](https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js) and [modify it](http://ant-tool.github.io/webpack-config.html).

There are some [scaffolds](https://github.com/antFB/antFB/issues/129) which have already integrated antd, so you can try and start with one of these, and even contribute.

## Import on Demand

If we import a component like this `import { Button } from 'antd';`, then all the components of antd will be imported. But, we can import component on demand:

```jsx
import Button from 'antd/lib/button';
```

If you use `babel`, we recommend to use [babel-plugin-antd](https://github.com/ant-design/babel-plugin-antd). This plugin will convert the following code to the above form:

```jsx
import { Button } from 'antd';
```

And this plugin can also load styles on demand. See the [usage](https://github.com/ant-design/babel-plugin-antd#usage) for further details.

## Customization

- [Customize Theme](https://github.com/ant-design/antd-init/tree/master/examples/customize-antd-theme)
- [Local Iconfont](https://github.com/ant-design/antd-init/tree/master/examples/local-iconfont)

## Tips

- You can use any `npm` modules.
- We recommend to write code in [ES2015](http://babeljs.io/blog/2015/06/07/react-on-es6-plus) as `babel` has been integrated in our work flow.
