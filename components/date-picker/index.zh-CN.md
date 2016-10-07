---
category: Components
type: Form Controls
title: DatePicker
subtitle: 日期选择框
---

输入或选择日期的控件。

## 何时使用

当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## API

### DatePicker

```jsx
import moment from 'moment-timezone/moment-timezone';

// 推荐在入口文件全局设置 locale 与时区
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
// 从 https://github.com/moment/moment-timezone/blob/develop/data/packed/latest.json 复制
moment.tz.add('Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6');
moment.tz.setDefault('Asia/Shanghai')

<DatePicker defaultValue={moment('2015-01-01', 'YYYY-MM-DD')} />
```

| 参数         | 说明           | 类型     | 默认值       |
|--------------|----------------|----------|--------------|
| value        | 日期           | [moment](http://momentjs.com/)   | 无           |
| defaultValue | 默认日期       | [moment](http://momentjs.com/)   | 无           |
| format       | 展示的日期格式，配置参考 [moment.js](http://momentjs.com/) | string   | "YYYY-MM-DD" |
| disabledDate | 不可选择的日期 | function | 无           |
| onChange     | 时间发生变化的回调 | function(date: moment, dateString: string) | 无           |
| disabled     | 禁用           | bool     | false        |
| style        | 自定义输入框样式     | object     | {}   |
| popupStyle   | 格外的弹出日历样式   | object     | {}   |
| size         | 输入框大小，`large` 高度为 32px，`small` 为 22px，默认是 28px | string   | 无  |
| locale       | 国际化配置 | object   | [默认配置](https://github.com/antFB/antFB/issues/424)  |
| open | 控制弹层是否展开 | bool | - |
| onOpenChange   | 弹出日历和关闭日历的回调 | function(status) | 无 |
| getCalendarContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | 无 |
| showTime     | 增加时间选择功能  | Object or Boolean | [TimePicker Options](/components/time-picker/#api) |

### MonthPicker

| 参数         | 说明           | 类型     | 默认值       |
|--------------|----------------|----------|--------------|
| value        | 日期           | moment   | 无           |
| defaultValue | 默认日期       | moment   | 无           |
| format       | 展示的日期格式，配置参考 [moment.js](http://momentjs.com/) | string   | "YYYY-MM" |
| disabledDate | 不可选择的日期 | function | 无           |
| onChange     | 时间发生变化的回调，发生在用户选择时间时 | function(date: moment, dateString: string) | 无           |
| disabled     | 禁用           | bool     | false        |
| style        | 自定义输入框样式     | object     | {}   |
| popupStyle   | 格外的弹出日历样式   | object     | {}   |
| size         | 输入框大小，`large` 高度为 32px，`small` 为 22px，默认是 28px | string   | 无  |
| locale       | 国际化配置 | object   | [默认配置](https://github.com/antFB/antFB/issues/424)  |
| getCalendarContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | 无 |

### RangePicker

| 参数         | 说明           | 类型     | 默认值       |
|--------------|----------------|----------|--------------|
| value        | 日期          | [moment, moment]   | 无           |
| defaultValue | 默认日期       | [moment, moment]   | 无           |
| format       | 展示的日期格式  | string    | "YYYY-MM-DD HH:mm:ss" |
| onChange     | 时间发生变化的回调，发生在用户选择时间时 | function(dates: [moment, moment], dateStrings: [string, string]) | 无           |
| showTime     | 增加时间选择功能  | Object or Boolean | [TimePicker Options](/components/time-picker/#api) |

`disabled` `style` `popupStyle` `size` `locale` `showTime` `onOk` `getCalendarContainer` 属性与 DatePicker 的一致。

<style>
.code-box-demo .ant-calendar-picker {
  margin: 0 8px 12px 0;
}
</style>
