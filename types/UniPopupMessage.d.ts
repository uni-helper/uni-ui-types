import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 消息提示主题
 * @desc success 成功
 * @desc warn 警告
 * @desc error 失败
 * @desc info 消息
 */
export type UniPopupMessageType = 'success' | 'warn' | 'error' | 'info';

export interface UniPopupMessageProps {
  /**
   * @desc 消息提示主题
   * @desc success 成功
   * @desc warn 警告
   * @desc error 失败
   * @desc info 消息
   * @desc 默认为 success
   */
  type: UniPopupMessageType;
  /**
   * @desc 消息提示文字
   */
  message: string;
  /**
   * @desc 消息显示时间，超过后自动关闭
   * @desc 设置为 0 不会自动关闭，需手动调用 close 关闭
   * @desc 默认为 3000
   */
  duration: number;
}

export type UniPopupMessage = Component<Partial<UniPopupMessageProps>>;
