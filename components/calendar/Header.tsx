import React from 'react';
import { PropTypes } from 'react';
import { PREFIX_CLS } from './Constants';
import Select from '../select';
import { Group, Button } from '../radio';
const Option = Select.Option;

function noop() {}

export interface HeaderProps {
  prefixCls?: string;
  locale?: any;
  fullscreen?: boolean;
  yearSelectOffset?: number;
  yearSelectTotal?: number;
  type?: string;
  onValueChange?: (value) => void;
  onTypeChange?: (type: string) => void;
  value: any;
}

export default class Header extends React.Component<HeaderProps, any> {
  static defaultProps = {
    prefixCls: `${PREFIX_CLS}-header`,
    yearSelectOffset: 10,
    yearSelectTotal: 20,
    onValueChange: noop,
    onTypeChange: noop,
  };

  static propTypes = {
    value: PropTypes.object,
    locale: PropTypes.object,
    yearSelectOffset: PropTypes.number,
    yearSelectTotal: PropTypes.number,
    onValueChange: PropTypes.func,
    onTypeChange: PropTypes.func,
    prefixCls: PropTypes.string,
    selectPrefixCls: PropTypes.string,
    type: PropTypes.string,
    fullscreen: PropTypes.bool,
  };

  getYearSelectElement(year) {
    const { yearSelectOffset, yearSelectTotal, locale, prefixCls, fullscreen } = this.props;
    const start = year - yearSelectOffset;
    const end = start + yearSelectTotal;
    const suffix = locale.year === '年' ? '年' : '';

    const options = [];
    for (let index = start; index < end; index++) {
      options.push(<Option key={`${index}`}>{index + suffix}</Option>);
    }
    return (
      <Select
        size={fullscreen ? null : 'small'}
        dropdownMatchSelectWidth={false}
        className={`${prefixCls}-year-select`}
        onChange={this.onYearChange}
        value={String(year)}
      >
        {options}
      </Select>
    );
  }

  getMonthsLocale(value) {
    const current = value.clone();
    const localeData = value.localeData();
    const months = [];
    for (let i = 0; i < 12; i++) {
      current.month(i);
      months.push(localeData.monthsShort(current));
    }
    return months;
  }

  getMonthSelectElement(month, months) {
    const props = this.props;
    const { prefixCls, fullscreen } = props;
    const options = [];

    for (let index = 0; index < 12; index++) {
      options.push(<Option key={`${index}`}>{months[index]}</Option>);
    }

    return (
      <Select
        size={fullscreen ? null : 'small'}
        dropdownMatchSelectWidth={false}
        className={`${prefixCls}-month-select`}
        value={String(month)}
        onChange={this.onMonthChange}
      >
        {options}
      </Select>
    );
  }

  onYearChange = (year) => {
    const newValue = this.props.value.clone();
    newValue.year(parseInt(year, 10));
    this.props.onValueChange(newValue);
  }

  onMonthChange = (month) => {
    const newValue = this.props.value.clone();
    newValue.month(parseInt(month, 10));
    this.props.onValueChange(newValue);
  }

  onTypeChange = (e) => {
    this.props.onTypeChange(e.target.value);
  }

  render() {
    const { type, value, prefixCls, locale, fullscreen } = this.props;
    const yearSelect = this.getYearSelectElement(value.year());
    const monthSelect = type === 'date' ?
      this.getMonthSelectElement(value.month(), this.getMonthsLocale(value)) : null;
    const size = (fullscreen ? 'default' : 'small') as any;
    const typeSwitch = (
      <Group onChange={this.onTypeChange} value={type} size={size}>
        <Button value="date">{locale.month}</Button>
        <Button value="month">{locale.year}</Button>
      </Group>
    );

    return (
      <div className={`${prefixCls}-header`}>
        {yearSelect}
        {monthSelect}
        {typeSwitch}
      </div>
    );
  }
}
