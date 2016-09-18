import React from 'react';
import moment from 'moment';
import RangeCalendar from 'rc-calendar/lib/RangeCalendar';
import RcDatePicker from 'rc-calendar/lib/Picker';
import classNames from 'classnames';
import Icon from '../icon';

export default class RangePicker extends React.Component<any, any> {
  static defaultProps = {
    defaultValue: [],
    prefixCls: 'ant-calendar',
  };

  constructor(props) {
    super(props);
    const { value, defaultValue } = this.props;
    const start = (value && value[0]) || defaultValue[0];
    const end = (value && value[1]) || defaultValue[1];
    this.state = {
      value: [start, end],
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value || [],
      });
    }
  }

  clearSelection = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ value: [] });
    this.handleChange([]);
  }

  handleChange = (value) => {
    const props = this.props;
    if (!('value' in props)) {
      this.setState({ value });
    }
    props.onChange(value, [
      (value[0] && value[0].format(props.format)) || '',
      (value[1] && value[1].format(props.format)) || '',
    ]);
  }

  render() {
    const props = this.props;
    const locale = props.locale;

    const { disabledDate, showTime, getCalendarContainer, prefixCls,
      transitionName, disabled, popupStyle, align, style, onOk } = this.props;
    const state = this.state;

    const calendarClassName = classNames({
      [`${prefixCls}-time`]: showTime,
    });

    // 需要选择时间时，点击 ok 时才触发 onChange
    let pickerChangeHandler = {
      onChange: this.handleChange,
    };
    let calendarHandler: Object = {
      onOk: this.handleChange,
    };
    if (props.timePicker) {
      pickerChangeHandler.onChange = (value) => {
        this.handleChange(value);
      };
    } else {
      calendarHandler = {};
    }

    const startPlaceholder = ('startPlaceholder' in this.props)
      ? props.startPlaceholder : locale.lang.rangePlaceholder[0];
    const endPlaceholder = ('endPlaceholder' in props)
      ? props.endPlaceholder : locale.lang.rangePlaceholder[1];

    const calendar = (
      <RangeCalendar
        {...calendarHandler}
        prefixCls={prefixCls}
        className={calendarClassName}
        timePicker={props.timePicker}
        disabledDate={disabledDate}
        dateInputPlaceholder={[startPlaceholder, endPlaceholder]}
        locale={locale.lang}
        onOk={onOk}
        defaultValue={props.defaultPickerValue || [moment(), moment()]}
      />
    );

    const clearIcon = (!props.disabled && state.value && (state.value[0] || state.value[1]))
      ? <Icon
        type="cross-circle"
        className={`${prefixCls}-picker-clear`}
        onClick={this.clearSelection}
      /> : null;

    return (<span className={props.pickerClass} style={style}>
      <RcDatePicker
        {...pickerChangeHandler}
        transitionName={transitionName}
        disabled={disabled}
        calendar={calendar}
        value={state.value}
        prefixCls={`${prefixCls}-picker-container`}
        style={popupStyle}
        align={align}
        getCalendarContainer={getCalendarContainer}
        onOpen={props.toggleOpen}
        onClose={props.toggleOpen}
      >
        {
          ({ value }) => {
            const start = value[0];
            const end = value[1];
            return (
              <span className={props.pickerInputClass} disabled={disabled}>
                <input
                  disabled={disabled}
                  readOnly
                  value={(start && start.format(props.format)) || ''}
                  placeholder={startPlaceholder}
                  className={`${prefixCls}-range-picker-input`}
                />
                <span className={`${prefixCls}-range-picker-separator`}> ~ </span>
                <input
                  disabled={disabled}
                  readOnly
                  value={(end && end.format(props.format)) || ''}
                  placeholder={endPlaceholder}
                  className={`${prefixCls}-range-picker-input`}
                />
                {clearIcon}
                <span className={`${prefixCls}-picker-icon`} />
              </span>
            );
          }
        }
      </RcDatePicker>
    </span>);
  }
}
