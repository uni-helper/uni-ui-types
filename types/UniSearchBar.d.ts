import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 绑定值
 */
type _UniSearchBarValue = string | number;

/**
 * @desc 清除按钮的显示方式
 * @desc always 一直显示
 * @desc auto 输入框不为空时显示
 * @desc none 一直不显示
 */
type _UniSearchBarClearButton = 'always' | 'auto' | 'none';

/**
 * @desc 取消按钮的显示方式
 * @desc always 一直显示
 * @desc auto 输入框不为空时显示
 * @desc none 一直不显示
 */
type _UniSearchBarCancelButton = 'always' | 'auto' | 'none';

interface _UniSearchBarBaseDetail {
  value: _UniSearchBarValue;
}

interface _UniSearchBarOnConfirmDetail extends _UniSearchBarBaseDetail {}

/**
 * @desc 确认时触发
 */
interface _UniSearchBarOnConfirm {
  (detail: _UniSearchBarOnConfirmDetail): void;
}

interface _UniSearchBarOnInputDetail extends _UniSearchBarBaseDetail {}

/**
 * @desc value 改变时触发
 */
interface _UniSearchBarOnInput {
  (detail: _UniSearchBarOnInputDetail): void;
}

interface _UniSearchBarOnCancelDetail extends _UniSearchBarBaseDetail {}

/**
 * @desc 取消时触发
 */
interface _UniSearchBarOnCancel {
  (detail: _UniSearchBarOnCancelDetail): void;
}

interface _UniSearchBarOnClearDetail extends _UniSearchBarBaseDetail {}

/**
 * @desc 清除时触发
 */
interface _UniSearchBarOnClear {
  (detail: _UniSearchBarOnClearDetail): void;
}

interface _UniSearchBarOnFocusDetail extends _UniSearchBarBaseDetail {}

/**
 * @desc 聚焦时触发
 */
interface _UniSearchBarOnFocus {
  (detail: _UniSearchBarOnFocusDetail): void;
}

interface _UniSearchBarOnBlurDetail extends _UniSearchBarBaseDetail {}

/**
 * @desc 失焦时触发
 */
interface _UniSearchBarOnBlur {
  (detail: _UniSearchBarOnBlurDetail): void;
}

/**
 * @desc 搜索栏属性
 */
interface _UniSearchBarProps {
  /**
   * @desc 绑定值
   */
  value: _UniSearchBarValue;
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
  clearButton: _UniSearchBarClearButton;
  /**
   * @desc 取消按钮的显示方式
   * @desc always 一直显示
   * @desc auto 输入框不为空时显示
   * @desc none 一直不显示
   * @desc 默认为 auto
   */
  cancelButton: _UniSearchBarCancelButton;
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
  onConfirm: _UniSearchBarOnConfirm;
  /**
   * @desc value 改变时触发
   */
  onInput: _UniSearchBarOnInput;
  /**
   * @desc 取消时触发
   */
  onCancel: _UniSearchBarOnCancel;
  /**
   * @desc 清除时触发
   */
  onClear: _UniSearchBarOnClear;
  /**
   * @desc 聚焦时触发
   */
  onFocus: _UniSearchBarOnFocus;
  /**
   * @desc 失焦时触发
   */
  onBlur: _UniSearchBarOnBlur;
}

/**
 * @desc 搜索栏
 */
type _UniSearchBar = Component<Partial<_UniSearchBarProps>>;

export {
  _UniSearchBarValue as UniSearchBarValue,
  _UniSearchBarClearButton as UniSearchBarClearButton,
  _UniSearchBarCancelButton as UniSearchBarCancelButton,
  _UniSearchBarBaseDetail as UniSearchBarBaseDetail,
  _UniSearchBarOnConfirmDetail as UniSearchBarOnConfirmDetail,
  _UniSearchBarOnConfirm as UniSearchBarOnConfirm,
  _UniSearchBarOnInputDetail as UniSearchBarOnInputDetail,
  _UniSearchBarOnInput as UniSearchBarOnInput,
  _UniSearchBarOnCancelDetail as UniSearchBarOnCancelDetail,
  _UniSearchBarOnCancel as UniSearchBarOnCancel,
  _UniSearchBarOnClearDetail as UniSearchBarOnClearDetail,
  _UniSearchBarOnClear as UniSearchBarOnClear,
  _UniSearchBarOnFocusDetail as UniSearchBarOnFocusDetail,
  _UniSearchBarOnFocus as UniSearchBarOnFocus,
  _UniSearchBarOnBlurDetail as UniSearchBarOnBlurDetail,
  _UniSearchBarOnBlur as UniSearchBarOnBlur,
  _UniSearchBarProps as UniSearchBarProps,
  _UniSearchBar as UniSearchBar,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 绑定值
     */
    export type UniSearchBarValue = _UniSearchBarValue;
    /**
     * @desc 清除按钮的显示方式
     * @desc always 一直显示
     * @desc auto 输入框不为空时显示
     * @desc none 一直不显示
     */
    export type UniSearchBarClearButton = _UniSearchBarClearButton;
    /**
     * @desc 取消按钮的显示方式
     * @desc always 一直显示
     * @desc auto 输入框不为空时显示
     * @desc none 一直不显示
     */
    export type UniSearchBarCancelButton = _UniSearchBarCancelButton;
    export interface UniSearchBarBaseDetail extends _UniSearchBarBaseDetail {}
    export interface UniSearchBarOnConfirmDetail extends _UniSearchBarOnConfirmDetail {}
    /**
     * @desc 确认时触发
     */
    export interface UniSearchBarOnConfirm extends _UniSearchBarOnConfirm {}
    export interface UniSearchBarOnInputDetail extends _UniSearchBarOnInputDetail {}
    /**
     * @desc value 改变时触发
     */
    export interface UniSearchBarOnInput extends _UniSearchBarOnInput {}
    export interface UniSearchBarOnCancelDetail extends _UniSearchBarOnCancelDetail {}
    /**
     * @desc 取消时触发
     */
    export interface UniSearchBarOnCancel extends _UniSearchBarOnCancel {}
    export interface UniSearchBarOnClearDetail extends _UniSearchBarOnClearDetail {}
    /**
     * @desc 清除时触发
     */
    export interface UniSearchBarOnClear extends _UniSearchBarOnClear {}
    export interface UniSearchBarOnFocusDetail extends _UniSearchBarOnFocusDetail {}
    /**
     * @desc 聚焦时触发
     */
    export interface UniSearchBarOnFocus extends _UniSearchBarOnFocus {}
    export interface UniSearchBarOnBlurDetail extends _UniSearchBarOnBlurDetail {}
    /**
     * @desc 失焦时触发
     */
    export interface UniSearchBarOnBlur extends _UniSearchBarOnBlur {}
    /**
     * @desc 搜索栏属性
     */
    export interface UniSearchBarProps extends _UniSearchBarProps {}
    /**
     * @desc 搜索栏
     */
    export type UniSearchBar = _UniSearchBar;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 搜索栏
     */
    UniSearchBar: _UniSearchBar;
  }
}
