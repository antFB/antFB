---
category: Components
type: Other
chinese: 置顶
english: BackTop
---

使用置顶组件可以方便地回到页面顶部。

## 何时使用

- 当页面内容区域比较长时；
- 当用户需要频繁返回顶部查看相关内容时。

## API

> 有默认样式，距离底部 `50px`，可覆盖。

> 自定义样式宽高不大于 40px * 40px。

| 参数        | 说明           | 类型               | 默认值       |
|-------------|----------------|--------------------|--------------|
| visibilityHeight    | 滚动高度达到此参数值才出现 `BackTop`   | Number | 400        |
| onClick | 点击按钮的回调函数   | Function | -        |
