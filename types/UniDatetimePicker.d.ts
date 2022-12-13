import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 选择器类型
 * @desc date 日期
 * @desc daterange 日期范围
 * @desc datetime 日期时间
 * @desc datetimerange 日期时间范围
 */
type _UniDatetimePickerType = 'date' | 'daterange' | 'datetime' | 'datetimerange';

/**
 * @desc 值类型
 */
type _UniDatetimePickerValue = string | number | Date | string[] | number[] | Date[];

/**
 * @desc 最小值
 * @desc string 日期字符串
 * @desc number 时间戳
 */
type _UniDatetimePickerStart = string | number;

/**
 * @desc 最大值
 * @desc string 日期字符串
 * @desc number 时间戳
 */
type _UniDatetimePickerEnd = string | number;

/**
 * @desc 返回值类型
 */
type _UniDatetimePickerReturnType = 'timestamp' | 'string' | 'date';

/**
 * @desc 打开弹出层
 */
interface _UniDatetimePickerShow {
  (): void;
}

/**
 * @desc 关闭弹出层
 */
interface _UniDatetimePickerClose {
  (): void;
}

/**
 * @desc 清除上次选中的状态和值
 */
interface _UniDatetimePickerClear {
  (): void;
}

/**
 * @desc 确定日期时间时触发的事件
 */
interface _UniDatetimePickerOnChange {
  (value: _UniDatetimePickerValue): void;
}

/**
 * @desc 点击遮罩层触发
 */
interface _UniDatetimePickerOnMaskClick {
  (value: _UniDatetimePickerValue): void;
}

interface _UniDatetimePickerProps {
  /**
   * @desc 选择器类型
   * @desc date 日期
   * @desc daterange 日期范围
   * @desc datetime 日期时间
   * @desc datetimerange 日期时间范围
   * @desc 默认为 datetime
   */
  type: _UniDatetimePickerType;
  /**
   * @desc 输入框当前值
   */
  value: _UniDatetimePickerValue;
  /**
   * @desc 最小值
   */
  start: _UniDatetimePickerStart;
  /**
   * @desc 最大值
   */
  end: _UniDatetimePickerEnd;
  /**
   * @desc 返回值格式
   * @desc 默认为 string
   */
  returnType: _UniDatetimePickerReturnType;
  /**
   * @desc 是否显示边框
   * @desc 默认为 true
   */
  border: boolean;
  /**
   * @desc 选择范围时的分隔符
   * @desc 默认为 -
   */
  rangeSeparator: string;
  /**
   * @desc 非范围选择时的占位内容
   */
  placeholder: string;
  /**
   * @desc 范围选择时开始日期的占位内容
   */
  startPlaceholder: string;
  /**
   * @desc 范围选择时结束日期的占位内容
   */
  endPlaceholder: string;
  /**
   * @desc 是否不可选择
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 是否显示清除按钮
   * @desc 默认为 true
   */
  clearIcon: boolean;
  /**
   * @desc 是否不显示秒，只显示时分
   * @desc 默认为 false
   */
  hideSecond: boolean;
  /**
   * @desc 打开弹出层
   */
  show: _UniDatetimePickerShow;
  /**
   * @desc 关闭弹出层
   */
  close: _UniDatetimePickerClose;
  /**
   * @desc 清除上次选中的状态和值
   */
  clear: _UniDatetimePickerClear;
  /**
   * @desc 确定日期时间时触发的事件
   */
  onChange: _UniDatetimePickerOnChange;
  /**
   * @desc 点击遮罩层触发
   */
  onMaskClick: _UniDatetimePickerOnMaskClick;
}

/**
 * @desc 支持时间戳输入和输出（起始时间、终止时间也支持时间戳），可同时选择日期和时间
 */
type _UniDatetimePicker = Component<Partial<_UniDatetimePickerProps>>;

export {
  _UniDatetimePickerType as UniDatetimePickerType,
  _UniDatetimePickerValue as UniDatetimePickerValue,
  _UniDatetimePickerStart as UniDatetimePickerStart,
  _UniDatetimePickerEnd as UniDatetimePickerEnd,
  _UniDatetimePickerReturnType as UniDatetimePickerReturnType,
  _UniDatetimePickerShow as UniDatetimePickerShow,
  _UniDatetimePickerClose as UniDatetimePickerClose,
  _UniDatetimePickerClear as UniDatetimePickerClear,
  _UniDatetimePickerOnChange as UniDatetimePickerOnChange,
  _UniDatetimePickerOnMaskClick as UniDatetimePickerOnMaskClick,
  _UniDatetimePickerProps as UniDatetimePickerProps,
  _UniDatetimePicker as UniDatetimePicker,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 选择器类型
     * @desc date 日期
     * @desc daterange 日期范围
     * @desc datetime 日期时间
     * @desc datetimerange 日期时间范围
     */
    export type UniDatetimePickerType = _UniDatetimePickerType;
    /**
     * @desc 值类型
     */
    export type UniDatetimePickerValue = _UniDatetimePickerValue;
    /**
     * @desc 最小值
     * @desc string 日期字符串
     * @desc number 时间戳
     */
    export type UniDatetimePickerStart = _UniDatetimePickerStart;
    /**
     * @desc 最大值
     * @desc string 日期字符串
     * @desc number 时间戳
     */
    export type UniDatetimePickerEnd = _UniDatetimePickerEnd;
    /**
     * @desc 返回值类型
     */
    export type UniDatetimePickerReturnType = _UniDatetimePickerReturnType;
    /**
     * @desc 打开弹出层
     */
    export interface UniDatetimePickerShow extends _UniDatetimePickerShow {}
    /**
     * @desc 关闭弹出层
     */
    export interface UniDatetimePickerClose extends _UniDatetimePickerClose {}
    /**
     * @desc 清除上次选中的状态和值
     */
    export interface UniDatetimePickerClear extends _UniDatetimePickerClear {}
    /**
     * @desc 确定日期时间时触发的事件
     */
    export interface UniDatetimePickerOnChange extends _UniDatetimePickerOnChange {}
    /**
     * @desc 点击遮罩层触发
     */
    export interface UniDatetimePickerOnMaskClick extends _UniDatetimePickerOnMaskClick {}
    export interface UniDatetimePickerProps extends _UniDatetimePickerProps {}
    /**
     * @desc 支持时间戳输入和输出（起始时间、终止时间也支持时间戳），可同时选择日期和时间
     */
    export type UniDatetimePicker = _UniDatetimePicker;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 支持时间戳输入和输出（起始时间、终止时间也支持时间戳），可同时选择日期和时间
     */
    UniDatetimePicker: _UniDatetimePicker;
  }
}
