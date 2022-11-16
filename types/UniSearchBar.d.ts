import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 清除按钮的显示方式
 * @desc always 一直显示
 * @desc auto 输入框不为空时显示
 * @desc none 一直不显示
 */
export type UniSearchBarClearButton = 'always' | 'auto' | 'none';

/**
 * @desc 取消按钮的显示方式
 * @desc always 一直显示
 * @desc auto 输入框不为空时显示
 * @desc none 一直不显示
 */
export type UniSearchBarCancelButton = 'always' | 'auto' | 'none';

export interface UniSearchBarProps {
  /**
   * @desc 绑定值
   */
  value: string | number;
  /**
   * @desc 占位文字
   * @desc 默认为 搜索
   */
  placeholder: string;
  /**
   * @desc 搜索栏圆角
   * @desc 单位为 px
   * @desc 默认为 10
   */
  radius: number;
  /**
   * @desc 清除按钮的显示方式
   * @desc always 一直显示
   * @desc auto 输入框不为空时显示
   * @desc none 一直不显示
   * @desc 默认为 auto
   */
  clearButton: UniSearchBarClearButton;
  /**
   * @desc 取消按钮的显示方式
   * @desc always 一直显示
   * @desc auto 输入框不为空时显示
   * @desc none 一直不显示
   * @desc 默认为 auto
   */
  cancelButton: UniSearchBarCancelButton;
  /**
   * @desc 取消按钮的文字
   * @desc 默认为 取消
   */
  cancelText: string;
  /**
   * @desc 输入框背景颜色
   * @desc 默认为 #f8f8f8
   */
  bgColor: string;
  /**
   * @desc 最大长度
   * @desc 默认为 100
   */
  maxlength: number;
  /**
   * @desc 是否自动聚焦
   * @desc 默认为 false
   */
  focus: boolean;
  /**
   * @desc 确认时触发
   */
  onConfirm: (event: { value: UniSearchBarProps['value'] }) => void;
  /**
   * @desc value 改变时触发
   */
  onInput: (value: UniSearchBarProps['value']) => void;
  /**
   * @desc 取消时触发
   */
  onCancel: (event: { value: UniSearchBarProps['value'] }) => void;
  /**
   * @desc 清除时触发
   */
  onClear: (event: { value: UniSearchBarProps['value'] }) => void;
  /**
   * @desc 聚焦时触发
   */
  onFocus: (event: { value: UniSearchBarProps['value'] }) => void;
  /**
   * @desc 失焦时触发
   */
  onBlur: (event: { value: UniSearchBarProps['value'] }) => void;
}

/**
 * @desc 搜索栏
 */
export type UniSearchBar = Component<Partial<UniSearchBarProps>>;
