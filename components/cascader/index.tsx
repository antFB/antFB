import React from 'react';
import RcCascader from 'rc-cascader';
import Input from '../input';
import Icon from '../icon';
import arrayTreeFilter from 'array-tree-filter';
import classNames from 'classnames';
import splitObject from '../_util/splitObject';
import omit from 'omit.js';

export interface CascaderOptionType {
  value: string;
  label: string;
  disabled?: boolean;
  children?: Array<CascaderOptionType>;
}

export type CascaderExpandTrigger = 'click' | 'hover'

export interface ShowSearchType {
  filter?: (inputValue: string, path: CascaderOptionType[]) => boolean;
  render?: (inputValue: string, path: CascaderOptionType[], prefixCls: string) => React.ReactNode;
  sort?: (a: CascaderOptionType[], b: CascaderOptionType[], inputValue: string) => number;
  matchInputWidth?: boolean;
}

export interface CascaderProps {
  /** 可选项数据源 */
  options: Array<CascaderOptionType>;
  /** 默认的选中项 */
  defaultValue?: Array<CascaderOptionType>;
  /** 指定选中项 */
  value?: Array<CascaderOptionType>;
  /** 选择完成后的回调 */
  onChange?: (value: string, selectedOptions?: Array<CascaderOptionType>) => void;
  /** 选择后展示的渲染函数 */
  displayRender?: (label: Array<string>, selectedOptions?: Array<CascaderOptionType>) => React.ReactNode;
  /** 自定义样式 */
  style?: React.CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 自定义浮层类名 */
  popupClassName?: string;
  /** 浮层预设位置：`bottomLeft` `bottomRight` `topLeft` `topRight` */
  popupPlacement?: string;
  /** 输入框占位文本*/
  placeholder?: string;
  /** 输入框大小，可选 `large` `default` `small` */
  size?: string;
  /** 禁用*/
  disabled?: boolean;
  /** 是否支持清除*/
  allowClear?: boolean;
  showSearch?: boolean | ShowSearchType;
  notFoundContent?: React.ReactNode;
  /** 次级菜单的展开方式，可选 'click' 和 'hover' */
  expandTrigger?: CascaderExpandTrigger;
  /** 当此项为 true 时，点选每级菜单选项值都会发生变化 */
  changeOnSelect?: boolean;
  /** 浮层可见变化时回调 */
  onPopupVisibleChange?: (popupVisible: boolean) => void;
  prefixCls?: string;
  inputPrefixCls?: string;
}

function highlightKeyword(str: string, keyword: string, prefixCls: string) {
  return str.split(keyword)
    .map((node: string, index: number) => index === 0 ? node : [
      <span className={`${prefixCls}-menu-item-keyword`} key="seperator">{keyword}</span>,
      node,
    ]);
}

function defaultFilterOption(inputValue, path) {
  return path.some(option => option.label.indexOf(inputValue) > -1);
}

function defaultRenderFilteredOption(inputValue, path, prefixCls) {
  return path.map(({ label }, index) => {
    const node = label.indexOf(inputValue) > -1 ? highlightKeyword(label, inputValue, prefixCls) : label;
    return index === 0 ? node : [' / ', node];
  });
}

function defaultSortFilteredOption(a, b, inputValue) {
  function callback(elem) {
    return elem.label.indexOf(inputValue) > -1;
  }

  return a.findIndex(callback) - b.findIndex(callback);
}

export default class Cascader extends React.Component<CascaderProps, any> {
  static defaultProps = {
    prefixCls: 'ant-cascader',
    inputPrefixCls: 'ant-input',
    placeholder: 'Please select',
    transitionName: 'slide-up',
    popupPlacement: 'bottomLeft',
    onChange() {},
    options: [],
    displayRender: label => label.join(' / '),
    disabled: false,
    allowClear: true,
    showSearch: false,
    notFoundContent: 'Not Found',
    onPopupVisibleChange() {},
  };

  cachedOptions: CascaderOptionType[];
  refs: {
    [key: string]: any;
    input: {
      refs: { input: HTMLElement }
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.value || props.defautValue || [],
      inputValue: '',
      inputFocused: false,
      popupVisible: false,
      flattenOptions: props.showSearch && this.flattenTree(props.options, props.changeOnSelect),
    };
  }

  componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({ value: nextProps.value || [] });
    }
    if (nextProps.showSearch && this.props.options !== nextProps.options) {
      this.setState({ flattenOptions: this.flattenTree(nextProps.options, nextProps.changeOnSelect) });
    }
  }

  handleChange = (value, selectedOptions) => {
    const unwrappedValue = Array.isArray(value[0]) ? value[0] : value;
    this.setState({ inputValue: '' });
    this.setValue(unwrappedValue, selectedOptions);
  }

  handlePopupVisibleChange = (popupVisible) => {
    this.setState({
      popupVisible,
      inputFocused: popupVisible,
      inputValue: popupVisible ? this.state.inputValue : '',
     });
    this.props.onPopupVisibleChange(popupVisible);
  }

  handleInputBlur = () => {
    this.setState({
      inputFocused: false,
    });
  }

  handleInputClick = (e) => {
    const { inputFocused, popupVisible } = this.state;
    // Prevent `Trigger` behaviour.
    if (inputFocused || popupVisible) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
  }

  handleInputChange = (e) => {
    const inputValue = e.target.value;
    this.setState({ inputValue });
  }

  setValue = (value, selectedOptions = []) => {
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    this.props.onChange(value, selectedOptions);
  }

  getLabel() {
    const { options, displayRender } = this.props;
    const value = this.state.value;
    const unwrappedValue = Array.isArray(value[0]) ? value[0] : value;
    const selectedOptions = arrayTreeFilter(options, (o, level) => o.value === unwrappedValue[level]);
    const label = selectedOptions.map(o => o.label);
    return displayRender(label, selectedOptions);
  }

  clearSelection = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!this.state.inputValue) {
      this.setValue([]);
      this.setState({ popupVisible: false });
    } else {
      this.setState({ inputValue: '' });
    }
  }

  flattenTree(options, changeOnSelect, ancestor = []) {
    let flattenOptions = [];
    options.forEach((option) => {
      const path = ancestor.concat(option);
      if (changeOnSelect || !option.children) {
        flattenOptions.push(path);
      }
      if (option.children) {
        flattenOptions = flattenOptions.concat(this.flattenTree(option.children, changeOnSelect, path));
      }
    });
    return flattenOptions;
  }

  generateFilteredOptions(prefixCls) {
    const { showSearch, notFoundContent } = this.props;
    const {
      filter = defaultFilterOption,
      render = defaultRenderFilteredOption,
      sort = defaultSortFilteredOption,
    } = showSearch as ShowSearchType;
    const { flattenOptions, inputValue } = this.state;
    const filtered = flattenOptions.filter((path) => filter(this.state.inputValue, path))
      .sort((a, b) => sort(a, b, inputValue));

    if (filtered.length > 0) {
      return filtered.map((path) => {
        return {
          label: render(inputValue, path, prefixCls),
          value: path.map(o => o.value),
        };
      });
    }
    return [{ label: notFoundContent, value: 'ANT_CASCADER_NOT_FOUND', disabled: true }];
  }

  render() {
    const props = this.props;
    const state = this.state;
    const [{ prefixCls, inputPrefixCls, children, placeholder, size, disabled,
      className, style, allowClear, showSearch }, otherProps] = splitObject(props,
      ['prefixCls', 'inputPrefixCls', 'children', 'placeholder', 'size', 'disabled',
        'className', 'style', 'allowClear', 'showSearch']);
    const value = state.value;

    const sizeCls = classNames({
      [`${inputPrefixCls}-lg`]: size === 'large',
      [`${inputPrefixCls}-sm`]: size === 'small',
    });
    const clearIcon = (allowClear && !disabled && value.length > 0) || state.inputValue ?
      <Icon type="cross-circle"
        className={`${prefixCls}-picker-clear`}
        onClick={this.clearSelection}
      /> : null;
    const arrowCls = classNames({
      [`${prefixCls}-picker-arrow`]: true,
      [`${prefixCls}-picker-arrow-expand`]: state.popupVisible,
    });
    const pickerCls = classNames({
      [className]: !!className,
      [`${prefixCls}-picker`]: true,
      [`${prefixCls}-picker-with-value`]: state.inputValue,
      [`${prefixCls}-picker-disabled`]: disabled,
    });

    // Fix bug of https://github.com/facebook/react/pull/5004
    // and https://fb.me/react-unknown-prop
    const inputProps = omit(otherProps, [
      'onChange',
      'options',
      'popupPlacement',
      'transitionName',
      'displayRender',
      'onPopupVisibleChange',
      'changeOnSelect',
      'expandTrigger',
      'popupVisible',
      'getPopupContainer',
      'loadData',
      'popupClassName',
      'filterOption',
      'renderFilteredOption',
      'sortFilteredOption',
      'notFoundContent',
    ]);

    let options = props.options;
    if (state.inputValue) {
      options = this.generateFilteredOptions(prefixCls);
    }
    // Dropdown menu should keep previous status until it is fully closed.
    if (!state.popupVisible) {
      options = this.cachedOptions;
    } else {
      this.cachedOptions = options;
    }

    const dropdownMenuColumnStyle = {
      width: undefined,
      height: undefined,
    };
    const isNotFound = (options || []).length === 1 && options[0].value === 'ANT_CASCADER_NOT_FOUND';
    if (isNotFound) {
      dropdownMenuColumnStyle.height = 'auto'; // Height of one row.
    }
    // The default value of `matchInputWidth` is `true`
    const resultListMatchInputWidth = showSearch.matchInputWidth === false ? false : true;
    if (resultListMatchInputWidth && state.inputValue && this.refs.input) {
      dropdownMenuColumnStyle.width = this.refs.input.refs.input.offsetWidth;
    }
    return (
      <RcCascader {...props}
        options={options}
        value={value}
        popupVisible={state.popupVisible}
        onPopupVisibleChange={this.handlePopupVisibleChange}
        onChange={this.handleChange}
        dropdownMenuColumnStyle={dropdownMenuColumnStyle}
      >
        {children ||
          <span
            style={style}
            className={pickerCls}
          >
            <Input {...inputProps}
              ref="input"
              placeholder={value && value.length > 0 ? null : placeholder}
              className={`${prefixCls}-input ${sizeCls}`}
              value={state.inputValue}
              disabled={disabled}
              readOnly={!showSearch}
              onClick={showSearch ? this.handleInputClick : null}
              onBlur={showSearch ? this.handleInputBlur : null}
              onChange={showSearch ? this.handleInputChange : null}
            />
            <span className={`${prefixCls}-picker-label`}>{this.getLabel()}</span>
            {clearIcon}
            <Icon type="down" className={arrowCls} />
          </span>
        }
      </RcCascader>
    );
  }
}
