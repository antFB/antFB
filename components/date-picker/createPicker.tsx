import React from 'react';
import moment from 'moment';
import MonthCalendar from 'rc-calendar/lib/MonthCalendar';
import RcDatePicker from 'rc-calendar/lib/Picker';
import classNames from 'classnames';
import assign from 'object-assign';
import Icon from '../icon';

export interface PickerProps {
  value?: moment.Moment;
  prefixCls: string;
}

export default function createPicker(TheCalendar) {
  // use class typescript error
  const CalenderWrapper = React.createClass({
    getDefaultProps() {
      return {
        prefixCls: 'ant-calendar',
      };
    },

    getInitialState() {
      const props = this.props;
      return {
        value: props.value || props.defaultValue,
      };
    },

    componentWillReceiveProps(nextProps: PickerProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.value,
        });
      }
    },

    clearSelection(e) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({ value: null });
      this.handleChange(null);
    },

    handleChange(value) {
      const props = this.props;
      if (!('value' in props)) {
        this.setState({ value });
      }
      props.onChange(value, (value && value.format(props.format)) || '');
    },

    render() {
      const props = this.props;
      const prefixCls = props.prefixCls;
      const locale = props.locale;

      const placeholder = ('placeholder' in props)
        ? props.placeholder : locale.lang.placeholder;

      const disabledTime = props.showTime ? props.disabledTime : null;

      const calendarClassName = classNames({
        [`${prefixCls}-time`]: props.showTime,
        [`${prefixCls}-month`]: MonthCalendar === TheCalendar,
      });

      // 需要选择时间时，点击 ok 时才触发 onChange
      let pickerChangeHandler: Object = {
        onChange: this.handleChange,
      };
      let calendarHandler: Object = {
        onOk: this.handleChange,
        // fix https://github.com/antFB/antFB/issues/1902
        onSelect: (value, cause) => {
          if (cause && cause.source === 'todayButton') {
            this.handleChange(value);
          }
        },
      };
      if (props.showTime) {
        pickerChangeHandler = {};
      } else {
        calendarHandler = {};
      }

      const calendar = (
        <TheCalendar
          disabledDate={props.disabledDate}
          disabledTime={disabledTime}
          locale={locale.lang}
          timePicker={props.timePicker}
          defaultValue={props.defaultPickerValue || moment()}
          dateInputPlaceholder={placeholder}
          prefixCls={prefixCls}
          className={calendarClassName}
          onOk={props.onOk}
          {...calendarHandler}
        />
      );

      // default width for showTime
      const pickerStyle = { width: undefined };
      if (props.showTime) {
        pickerStyle.width = 180;
      }

      const clearIcon = (!props.disabled && this.state.value) ?
        <Icon type="cross-circle"
          className={`${prefixCls}-picker-clear`}
          onClick={this.clearSelection}
        /> : null;
      return (
        <span className={props.pickerClass} style={assign({}, pickerStyle, props.style)}>
          <RcDatePicker
            {...pickerChangeHandler}
            transitionName={props.transitionName}
            disabled={props.disabled}
            calendar={calendar}
            value={this.state.value}
            prefixCls={`${prefixCls}-picker-container`}
            style={props.popupStyle}
            align={props.align}
            getCalendarContainer={props.getCalendarContainer}
            open={props.open}
            onOpen={props.toggleOpen}
            onClose={props.toggleOpen}
          >
            {
              ({ value }) => {
                return (
                  <span>
                    <input
                      disabled={props.disabled}
                      readOnly
                      value={(value && value.format(props.format)) || ''}
                      placeholder={placeholder}
                      className={props.pickerInputClass}
                    />
                    {clearIcon}
                    <span className={`${prefixCls}-picker-icon`} />
                  </span>
                );
              }
            }
          </RcDatePicker>
        </span>
      );
    },
  });

  return CalenderWrapper;
}
