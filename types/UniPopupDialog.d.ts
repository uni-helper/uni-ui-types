import { Component } from '@uni-helper/uni-app-types';

/**
 * 消息提示主题
 *
 * success 成功
 *
 * warn 警告
 *
 * error 失败
 *
 * info 消息
 */
type _UniPopupDialogType = 'success' | 'warn' | 'error' | 'info';

/**
 * 对话框模式
 *
 * base 提示对话框
 *
 * input 可输入对话框
 */
type _UniPopupDialogMode = 'base' | 'input';

/**
 * 输入框值
 *
 * mode="input" 时有效
 */
type _UniPopupDialogValue = string | number;

/** 点击取消时触发 */
interface _UniPopupDialogOnClose {
  (): void;
}

interface _UniPopupDialogOnConfirmDetail {
  value: _UniPopupDialogValue;
}

/** 点击确定时触发 */
interface _UniPopupDialogOnConfirm {
  (detail?: _UniPopupDialogOnConfirmDetail): void;
}

interface _UniPopupDialogProps {
  /**
   * 对话框标题主题
   *
   * success 成功
   *
   * warn 警告
   *
   * error 失败
   *
   * info 消息
   *
   * 默认为 success
   */
  type: _UniPopupDialogType;
  /**
   * 对话框模式
   *
   * base 提示对话框
   *
   * input 可输入对话框
   *
   * 默认为 base
   */
  mode: _UniPopupDialogMode;
  /** 对话框标题 */
  title: string;
  /**
   * 对话框内容
   *
   * mode="base" 时有效
   */
  content: string;
  /** 确定按钮文本 */
  confirmText: string;
  /** 取消按钮文本 */
  cancelText: string;
  /**
   * 输入框默认值
   *
   * mode="input" 时有效
   */
  value: _UniPopupDialogValue;
  /**
   * 输入框提示文字
   *
   * mode="input" 时有效
   */
  placeholder: string;
  /**
   * 是否拦截按钮事件
   *
   * true 不会关闭对话框，手动调用 close 以关闭
   *
   * 默认为 false
   */
  beforeClose: boolean;
  /** 点击取消时触发 */
  onClose: _UniPopupDialogOnClose;
  /** 点击确定时触发 */
  onConfirm: _UniPopupDialogOnConfirm;
}

type _UniPopupDialog = Component<Partial<_UniPopupDialogProps>>;

export {
  _UniPopupDialogType as UniPopupDialogType,
  _UniPopupDialogMode as UniPopupDialogMode,
  _UniPopupDialogValue as UniPopupDialogValue,
  _UniPopupDialogOnClose as UniPopupDialogOnClose,
  _UniPopupDialogOnConfirmDetail as UniPopupDialogOnConfirmDetail,
  _UniPopupDialogOnConfirm as UniPopupDialogOnConfirm,
  _UniPopupDialogProps as UniPopupDialogProps,
  _UniPopupDialog as UniPopupDialog,
};

declare global {
  namespace UniHelper {
    /**
     * 消息提示主题
     *
     * success 成功
     *
     * warn 警告
     *
     * error 失败
     *
     * info 消息
     */
    export type UniPopupDialogType = _UniPopupDialogType;
    /**
     * 对话框模式
     *
     * base 提示对话框
     *
     * input 可输入对话框
     */
    export type UniPopupDialogMode = _UniPopupDialogMode;
    /**
     * 输入框值
     *
     * mode="input" 时有效
     */
    export type UniPopupDialogValue = _UniPopupDialogValue;
    /** 点击取消时触发 */
    export interface UniPopupDialogOnClose extends _UniPopupDialogOnClose {}
    export interface UniPopupDialogOnConfirmDetail extends _UniPopupDialogOnConfirmDetail {}
    /** 点击确定时触发 */
    export interface UniPopupDialogOnConfirm extends _UniPopupDialogOnConfirm {}
    export interface UniPopupDialogProps extends _UniPopupDialogProps {}
    export type UniPopupDialog = _UniPopupDialog;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniPopupDialog: _UniPopupDialog;
  }
}
