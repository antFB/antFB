---
order: 1
title: 三种大小
---

三种大小的数字输入框，当 size 分别为 `large` 和 `small` 时，输入框高度为 `32px` 和 `22px` ，默认高度为 `28px`

````jsx
import { InputNumber } from 'antd';

function onChange(value) {
  console.log('changed', value);
}

ReactDOM.render(
  <div>
    <InputNumber size="large" min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber min={1} max={100000} defaultValue={3} onChange={onChange} />
    <InputNumber size="small" min={1} max={100000} defaultValue={3} onChange={onChange} />
  </div>
, mountNode);
````

````css
.ant-input-number {
  margin-right: 10px;
}
````
