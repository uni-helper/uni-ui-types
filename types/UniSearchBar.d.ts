import { Component } from '@uni-helper/uni-app-types';

/** 绑定值 */
type _UniSearchBarValue = string | number;

/**
 * 清除按钮的显示方式
 *
 * always 一直显示
 *
 * auto 输入框不为空时显示
 *
 * none 一直不显示
 */
type _UniSearchBarClearButton = 'always' | 'auto' | 'none';

/**
 * 取消按钮的显示方式
 *
 * always 一直显示
 *
 * auto 输入框不为空时显示
 *
 * none 一直不显示
 */
type _UniSearchBarCancelButton = 'always' | 'auto' | 'none';

interface _UniSearchBarBaseDetail {
  value: _UniSearchBarValue;
}

interface _UniSearchBarOnConfirmDetail extends _UniSearchBarBaseDetail {}

/** 确认时触发 */
interface _UniSearchBarOnConfirm {
  (detail: _UniSearchBarOnConfirmDetail): void;
}

interface _UniSearchBarOnInputDetail extends _UniSearchBarBaseDetail {}

/** value 改变时触发 */
interface _UniSearchBarOnInput {
  (detail: _UniSearchBarOnInputDetail): void;
}

interface _UniSearchBarOnCancelDetail extends _UniSearchBarBaseDetail {}

/** 取消时触发 */
interface _UniSearchBarOnCancel {
  (detail: _UniSearchBarOnCancelDetail): void;
}

interface _UniSearchBarOnClearDetail extends _UniSearchBarBaseDetail {}

/** 清除时触发 */
interface _UniSearchBarOnClear {
  (detail: _UniSearchBarOnClearDetail): void;
}

interface _UniSearchBarOnFocusDetail extends _UniSearchBarBaseDetail {}

/** 聚焦时触发 */
interface _UniSearchBarOnFocus {
  (detail: _UniSearchBarOnFocusDetail): void;
}

interface _UniSearchBarOnBlurDetail extends _UniSearchBarBaseDetail {}

/** 失焦时触发 */
interface _UniSearchBarOnBlur {
  (detail: _UniSearchBarOnBlurDetail): void;
}

/** 搜索栏属性 */
interface _UniSearchBarProps {
  /** 绑定值 */
  value: _UniSearchBarValue;
  /**
   * 占位文字
   *
   * 默认为 搜索
   */
  placeholder: string;
  /**
   * 搜索栏圆角
   *
   * 单位为 px
   *
   * 默认为 10
   */
  radius: number;
  /**
   * 清除按钮的显示方式
   *
   * always 一直显示
   *
   * auto 输入框不为空时显示
   *
   * none 一直不显示
   *
   * 默认为 auto
   */
  clearButton: _UniSearchBarClearButton;
  /**
   * 取消按钮的显示方式
   *
   * always 一直显示
   *
   * auto 输入框不为空时显示
   *
   * none 一直不显示
   *
   * 默认为 auto
   */
  cancelButton: _UniSearchBarCancelButton;
  /**
   * 取消按钮的文字
   *
   * 默认为 取消
   */
  cancelText: string;
  /**
   * 输入框背景颜色
   *
   * 默认为 #f8f8f8
   */
  bgColor: string;
  /**
   * 最大长度
   *
   * 默认为 100
   */
  maxlength: number;
  /**
   * 是否自动聚焦
   *
   * 默认为 false
   */
  focus: boolean;
  /** 确认时触发 */
  onConfirm: _UniSearchBarOnConfirm;
  /** value 改变时触发 */
  onInput: _UniSearchBarOnInput;
  /** 取消时触发 */
  onCancel: _UniSearchBarOnCancel;
  /** 清除时触发 */
  onClear: _UniSearchBarOnClear;
  /** 聚焦时触发 */
  onFocus: _UniSearchBarOnFocus;
  /** 失焦时触发 */
  onBlur: _UniSearchBarOnBlur;
}

/** 搜索栏 */
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
    /** 绑定值 */
    export type UniSearchBarValue = _UniSearchBarValue;
    /**
     * 清除按钮的显示方式
     *
     * always 一直显示
     *
     * auto 输入框不为空时显示
     *
     * none 一直不显示
     */
    export type UniSearchBarClearButton = _UniSearchBarClearButton;
    /**
     * 取消按钮的显示方式
     *
     * always 一直显示
     *
     * auto 输入框不为空时显示
     *
     * none 一直不显示
     */
    export type UniSearchBarCancelButton = _UniSearchBarCancelButton;
    export interface UniSearchBarBaseDetail extends _UniSearchBarBaseDetail {}
    export interface UniSearchBarOnConfirmDetail extends _UniSearchBarOnConfirmDetail {}
    /** 确认时触发 */
    export interface UniSearchBarOnConfirm extends _UniSearchBarOnConfirm {}
    export interface UniSearchBarOnInputDetail extends _UniSearchBarOnInputDetail {}
    /** value 改变时触发 */
    export interface UniSearchBarOnInput extends _UniSearchBarOnInput {}
    export interface UniSearchBarOnCancelDetail extends _UniSearchBarOnCancelDetail {}
    /** 取消时触发 */
    export interface UniSearchBarOnCancel extends _UniSearchBarOnCancel {}
    export interface UniSearchBarOnClearDetail extends _UniSearchBarOnClearDetail {}
    /** 清除时触发 */
    export interface UniSearchBarOnClear extends _UniSearchBarOnClear {}
    export interface UniSearchBarOnFocusDetail extends _UniSearchBarOnFocusDetail {}
    /** 聚焦时触发 */
    export interface UniSearchBarOnFocus extends _UniSearchBarOnFocus {}
    export interface UniSearchBarOnBlurDetail extends _UniSearchBarOnBlurDetail {}
    /** 失焦时触发 */
    export interface UniSearchBarOnBlur extends _UniSearchBarOnBlur {}
    /** 搜索栏属性 */
    export interface UniSearchBarProps extends _UniSearchBarProps {}
    /** 搜索栏 */
    export type UniSearchBar = _UniSearchBar;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 搜索栏 */
    UniSearchBar: _UniSearchBar;
  }
}
