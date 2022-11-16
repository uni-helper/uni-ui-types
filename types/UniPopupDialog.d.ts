import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 消息提示主题
 * @desc success 成功
 * @desc warn 警告
 * @desc error 失败
 * @desc info 消息
 */
export type UniPopupDialogType = 'success' | 'warn' | 'error' | 'info';

/**
 * @desc 对话框模式
 * @desc base 提示对话框
 * @desc input 可输入对话框
 */
export type UniPopupDialogMode = 'base' | 'input';

export interface UniPopupDialogProps {
  /**
   * @desc 对话框标题主题
   * @desc success 成功
   * @desc warn 警告
   * @desc error 失败
   * @desc info 消息
   * @desc 默认为 success
   */
  type: UniPopupDialogType;
  /**
   * @desc 对话框模式
   * @desc base 提示对话框
   * @desc input 可输入对话框
   * @desc 默认为 base
   */
  mode: UniPopupDialogMode;
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
  value: string | number;
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
  onClose: () => void;
  /**
   * @desc 点击确定时触发
   */
  onConfirm: (event: { value: UniPopupDialogProps['value'] }) => void;
}

export type UniPopupDialog = Component<Partial<UniPopupDialogProps>>;
