---
order: 3
title: 表单控件
---

展示所有支持的表单控件。

`注`： 输入框：只有正确设置了 type 属性的输入控件才能被赋予正确的样式。

````jsx
import { Form, Input, Select, Checkbox, Radio } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;

function handleSelectChange(value) {
  console.log(`selected ${value}`);
}

ReactDOM.render(
  <Form horizontal>
    <FormItem
      id="control-input"
      label="输入框"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
    >
      <Input id="control-input" placeholder="Please enter..." />
    </FormItem>

    <FormItem
      id="control-textarea"
      label="文本域"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
    >
      <Input type="textarea" id="control-textarea" rows="3" />
    </FormItem>

    <FormItem
      id="select"
      label="Select 选择器"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 14 }}
    >
      <Select id="select" size="large" defaultValue="lucy" style={{ width: 200 }} onChange={handleSelectChange}>
        <Option value="jack">jack</Option>
        <Option value="lucy">lucy</Option>
        <Option value="disabled" disabled>disabled</Option>
        <Option value="yiminghe">yiminghe</Option>
      </Select>
    </FormItem>

    <FormItem
      label="Checkbox 多选框"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
    >
      <Checkbox className="ant-checkbox-vertical">选项一</Checkbox>
      <Checkbox className="ant-checkbox-vertical">选项二</Checkbox>
      <Checkbox className="ant-checkbox-vertical" disabled>选项三（不可选）</Checkbox>
    </FormItem>

    <FormItem
      label="Checkbox 多选框"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
    >
      <Checkbox className="ant-checkbox-inline">选项一</Checkbox>
      <Checkbox className="ant-checkbox-inline">选项二</Checkbox>
      <Checkbox className="ant-checkbox-inline">选项三</Checkbox>
    </FormItem>

    <FormItem
      label="Radio 单选框"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
    >
      <RadioGroup defaultValue="b">
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
        <Radio value="d">D</Radio>
      </RadioGroup>
    </FormItem>
  </Form>
, mountNode);
````
