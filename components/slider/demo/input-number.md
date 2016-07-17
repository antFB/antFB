---
order: 1
title: 带输入框的滑块
---

和 [数字输入框](/components/input-number/) 组件保持同步。

````jsx
import { Slider, InputNumber, Row, Col } from 'antd';

const IntegerStep = React.createClass({
  getInitialState() {
    return {
      inputValue: 1,
    };
  },
  onChange(value) {
    this.setState({
      inputValue: value,
    });
  },
  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
        </Col>
        <Col span={4}>
          <InputNumber min={1} max={20} style={{ marginLeft: '16px' }}
            value={this.state.inputValue} onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  },
});

const DecimalStep = React.createClass({
  getInitialState() {
    return {
      inputValue: 0,
    };
  },
  onChange(value) {
    this.setState({
      inputValue: value,
    });
  },
  render() {
    return (
      <Row>
        <Col span={12}>
          <Slider min={0} max={1} onChange={this.onChange} value={this.state.inputValue} step={0.01} />
        </Col>
        <Col span={4}>
          <InputNumber min={0} max={1} style={{ marginLeft: '16px' }} step={0.01}
            value={this.state.inputValue} onChange={this.onChange}
          />
        </Col>
      </Row>
    );
  },
});

ReactDOM.render(<div>
  <IntegerStep />
  <DecimalStep />
</div>, mountNode);
````
