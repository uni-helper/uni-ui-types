import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 消息提示主题
 * @desc success 成功
 * @desc warn 警告
 * @desc error 失败
 * @desc info 消息
 */
type _UniPopupDialogType = 'success' | 'warn' | 'error' | 'info';

/**
 * @desc 对话框模式
 * @desc base 提示对话框
 * @desc input 可输入对话框
 */
type _UniPopupDialogMode = 'base' | 'input';

/**
 * @desc 输入框值
 * @desc mode="input" 时有效
 */
type _UniPopupDialogValue = string | number;

/**
 * @desc 点击取消时触发
 */
interface _UniPopupDialogOnClose {
  (): void;
}

interface _UniPopupDialogOnConfirmDetail {
  value: _UniPopupDialogValue;
}

/**
 * @desc 点击确定时触发
 */
interface _UniPopupDialogOnConfirm {
  (detail?: _UniPopupDialogOnConfirmDetail): void;
}

interface _UniPopupDialogProps {
  /**
   * @desc 对话框标题主题
   * @desc success 成功
   * @desc warn 警告
   * @desc error 失败
   * @desc info 消息
   * @desc 默认为 success
   */
  type: _UniPopupDialogType;
  /**
   * @desc 对话框模式
   * @desc base 提示对话框
   * @desc input 可输入对话框
   * @desc 默认为 base
   */
  mode: _UniPopupDialogMode;
  /**
   * @desc 对话框标题
   */
  title: string;
  /**
   * @desc 对话框内容
   * @desc mode="base" 时有效
   */
  content: string;
  /**
   * @desc 确定按钮文本
   */
  confirmText: string;
  /**
   * @desc 取消按钮文本
   */
  cancelText: string;
  /**
   * @desc 输入框默认值
   * @desc mode="input" 时有效
   */
  value: _UniPopupDialogValue;
  /**
   * @desc 输入框提示文字
   * @desc mode="input" 时有效
   */
  placeholder: string;
  /**
   * @desc 是否拦截按钮事件
   * @desc true 不会关闭对话框，手动调用 close 以关闭
   * @desc 默认为 false
   */
  beforeClose: boolean;
  /**
   * @desc 点击取消时触发
   */
  onClose: _UniPopupDialogOnClose;
  /**
   * @desc 点击确定时触发
   */
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
     * @desc 消息提示主题
     * @desc success 成功
     * @desc warn 警告
     * @desc error 失败
     * @desc info 消息
     */
    export type UniPopupDialogType = _UniPopupDialogType;
    /**
     * @desc 对话框模式
     * @desc base 提示对话框
     * @desc input 可输入对话框
     */
    export type UniPopupDialogMode = _UniPopupDialogMode;
    /**
     * @desc 输入框值
     * @desc mode="input" 时有效
     */
    export type UniPopupDialogValue = _UniPopupDialogValue;
    /**
     * @desc 点击取消时触发
     */
    export interface UniPopupDialogOnClose extends _UniPopupDialogOnClose {}
    export interface UniPopupDialogOnConfirmDetail extends _UniPopupDialogOnConfirmDetail {}
    /**
     * @desc 点击确定时触发
     */
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
