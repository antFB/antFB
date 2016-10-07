---
order: 0
title: Ant Fable of React
---

We supply a react implementation `antFB` following Ant Fable specification, which designed to help developing RIA such as dashboards or other enterprise-like complex UI needs.

<div class="pic-plus">
  <img width="150" src="https://t.alipayobjects.com/images/rmsweb/T11aVgXc4eXXXXXXXX.svg">
  <span>+</span>
  <img width="160" src="https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg">
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
$ npm install antFB-init
antFB-init --ie8
```

## Example

```jsx
import { DatePicker } from 'antFB';
ReactDOM.render(<DatePicker />, mountNode);
```
