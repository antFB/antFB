---
order: 3
title: 确认对话框
---

使用 `confirm()` 可以快捷地弹出确认框。

````jsx
import { Modal, Button } from 'antd';
const confirm = Modal.confirm;

function showConfirm() {
  confirm({
    title: '您是否确认要删除这项内容',
    content: '一些解释',
    onOk() {
      console.log('确定');
    },
    onCancel() {},
  });
}

ReactDOM.render(
  <Button onClick={showConfirm}>
    确认对话框
  </Button>
, mountNode);
````
