---
order: 2
title:
  zh-CN: 所有组件
  en-US: All components
---

## zh-CN

此处列出 Ant Design 中需要国际化支持的组件，你可以在演示里切换语言。

## en-US

Components which need localization support are listed here, you can toggle the language in the demo.

````jsx
import { LocaleProvider, Pagination, DatePicker, TimePicker, Calendar,
         Popconfirm, Table, Modal, Button, Select, Transfer, Radio } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
const Option = Select.Option;
const RangePicker = DatePicker.RangePicker;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  filters: [{
    text: 'filter1',
    value: 'filter1',
  }],
}, {
  title: 'Age',
  dataIndex: 'age',
}];

const Page = React.createClass({
  getInitialState() {
    return {
      visible: false,
    };
  },
  showModal() {
    this.setState({ visible: true });
  },
  hideModal() {
    this.setState({ visible: false });
  },
  render() {
    const info = () => {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    };
    const confirm = () => {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    };
    return (
      <div className="locale-components">
        <div className="example">
          <Pagination defaultCurrent={1} total={50} showSizeChanger />
        </div>
        <div className="example">
          <Select showSearch style={{ width: 200 }}>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
          </Select>
          <DatePicker />
          <TimePicker />
          <RangePicker style={{ width: 200 }} />
        </div>
        <div className="example">
          <Button type="primary" onClick={this.showModal}>Show Modal</Button>
          <Button onClick={info}>Show info</Button>
          <Button onClick={confirm}>Show confirm</Button>
          <Popconfirm title="Question?">
            <a href="#">Click to confirm</a>
          </Popconfirm>
        </div>
        <div className="example">
          <Transfer
            dataSource={[]}
            showSearch
            titles={['', '']}
            targetKeys={[]}
            render={item => item.title}
          />
        </div>
        <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar fullscreen={false} />
        </div>
        <div className="example">
          <Table dataSource={[]} columns={columns} />
        </div>
        <Modal title="Locale Modal" visible={this.state.visible} onCancel={this.hideModal}>
          <p>Locale Modal</p>
        </Modal>
      </div>
    );
  },
});

const App = React.createClass({
  getInitialState() {
    return {
      locale: enUS,
    };
  },
  changeLocale(e) {
    this.setState({ locale: e.target.value });
  },
  render() {
    return (
      <div>
        <div className="change-locale">
          <span style={{ marginRight: 16 }}>Change locale of components: </span>
          <Radio.Group defaultValue={enUS} onChange={this.changeLocale}>
            <Radio.Button key="en" value={enUS}>English</Radio.Button>
            <Radio.Button key="cn">中文</Radio.Button>
          </Radio.Group>
        </div>
        <LocaleProvider locale={this.state.locale}><Page /></LocaleProvider>
      </div>
    );
  },
});

ReactDOM.render(<App />, mountNode);
````

````css
.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
````
