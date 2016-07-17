---
order: 7
title: 响应式布局
---

参照 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设四个响应尺寸：`xs` `sm` `md` `lg`。

````jsx
import { Row, Col } from 'antd';

ReactDOM.render(
  <Row>
    <Col xs={2} sm={4} md={6} lg={8} />
    <Col xs={20} sm={16} md={12} lg={8} />
    <Col xs={2} sm={4} md={6} lg={8} />
  </Row>
, mountNode);
````
