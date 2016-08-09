---
order: 0
title: 基本
---

## zh-CN

默认选中第一项。

## en-US

Default activate first tab.

````jsx
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

function callback(key) {
  console.log(key);
}

ReactDOM.render(
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Tab 1" key="1">Conten of Tab Pane 1</TabPane>
    <TabPane tab="Tab 2" key="2">Conten of Tab Pane 2</TabPane>
    <TabPane tab="Tab 3" key="3">Conten of Tab Pane 2</TabPane>
  </Tabs>
, mountNode);
````
