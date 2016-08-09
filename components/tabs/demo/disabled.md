---
order: 1
title: 禁用
---

## zh-CN

禁用某一项。

## en-US

Disabled a tab.

````jsx
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

ReactDOM.render(
  <Tabs defaultActiveKey="1">
    <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
    <TabPane tab="Tab 2" disabled key="2">Tab 2</TabPane>
    <TabPane tab="Tav 3" key="3">Tab 3</TabPane>
  </Tabs>
, mountNode);
````
