---
order: 10
title: 卡片式页签容器
---
## zh-CN

用于容器顶部，需要一点额外的样式覆盖。

## en-US

Should be used at the top of container, needs to override styles.

````jsx
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

ReactDOM.render(
  <div className="card-container">
    <Tabs type="card">
      <TabPane tab="Tab 1" key="1">Conten of Tab Pane 1</TabPane>
      <TabPane tab="Tab 2" key="2">Conten of Tab Pane 2</TabPane>
      <TabPane tab="Tab 3" key="3">Conten of Tab Pane 2</TabPane>
    </Tabs>
  </div>
, mountNode);
````

````css
#components-tabs-demo-card-top .code-box-demo {
  background: #ECECEC;
  overflow: hidden;
  padding: 24px;
}

.card-container > .ant-tabs-card > .ant-tabs-content {
  background: #fff;
  padding: 16px;
  height: 120px;
  margin-top: -16px;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  border-color: #fff;
}
````
