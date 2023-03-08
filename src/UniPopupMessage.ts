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
type _UniPopupMessageType = 'success' | 'warn' | 'error' | 'info';

type _UniPopupMessageProps = Partial<{
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
   *
   * 默认为 success
   */
  type: _UniPopupMessageType;
  /** 消息提示文字 */
  message: string;
  /**
   * 消息显示时间，超过后自动关闭
   *
   * 设置为 0 不会自动关闭，需手动调用 close 关闭
   *
   * 默认为 3000
   */
  duration: number;
}>;

type _UniPopupMessage = Component<_UniPopupMessageProps>;

type _UniPopupMessageInstance = InstanceType<_UniPopupMessage>;

export {
  _UniPopupMessageType as UniPopupMessageType,
  _UniPopupMessageProps as UniPopupMessageProps,
  _UniPopupMessage as UniPopupMessage,
  _UniPopupMessageInstance as UniPopupMessageInstance,
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
    export type UniPopupMessageType = _UniPopupMessageType;
    export type UniPopupMessageProps = _UniPopupMessageProps;
    export type UniPopupMessage = _UniPopupMessage;
    export type UniPopupMessageInstance = _UniPopupMessageInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniPopupMessage: _UniPopupMessage;
  }
}
