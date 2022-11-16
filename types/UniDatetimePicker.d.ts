import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 选择器类型
 * @desc date 日期
 * @desc daterange 日期范围
 * @desc datetime 日期时间
 * @desc datetimerange 日期时间范围
 */
export type UniDatetimePickerType = 'date' | 'daterange' | 'datetime' | 'datetimerange';

/**
 * @desc 值类型
 */
export type UniDatetimePickerValue = string | number | Date;

/**
 * @desc 返回值类型
 */
export type UniDatetimePickerReturnType = 'timestamp' | 'string' | 'date';

export interface UniDatetimePickerProps {
  /**
   * @desc 选择器类型
   * @desc date 日期
   * @desc daterange 日期范围
   * @desc datetime 日期时间
   * @desc datetimerange 日期时间范围
   * @desc 默认为 datetime
   */
  type: UniDatetimePickerType;
  /**
   * @desc 输入框当前值
   */
  value: UniDatetimePickerValue | UniDatetimePickerValue[];
  /**
   * @desc 最小值
   */
  start: string | number;
  /**
   * @desc 最大值
   */
  end: string | number;
  /**
   * @desc 返回值格式
   * @desc 默认为 string
   */
  returnType: UniDatetimePickerReturnType;
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
  show: () => void;
  /**
   * @desc 关闭弹出层
   */
  close: () => void;
  /**
   * @desc 清除上次选中的状态和值
   */
  clear: () => void;
  /**
   * @desc 确定日期时间时触发的事件
   */
  onChange: (value: UniDatetimePickerProps['value']) => void;
  /**
   * @desc 点击遮罩层触发
   */
  onMaskClick: (value: UniDatetimePickerProps['value']) => void;
}

/**
 * @desc 支持时间戳输入和输出（起始时间、终止时间也支持时间戳），可同时选择日期和时间
 */
export type UniDatetimePicker = Component<Partial<UniDatetimePickerProps>>;
