import { Component } from '@uni-helper/uni-app-types';

/**
 * 弹出方式
 *
 * Top 顶部弹出
 *
 * Center 居中弹出
 *
 * Bottom 底部弹出
 *
 * Left 左侧弹出
 *
 * Right 右侧弹出
 *
 * Message 预置样式，消息提示
 *
 * Dialog 预置样式，对话框
 *
 * Share 预置样式，底部弹出分享
 */
type _UniPopupType =
  | 'top'
  | 'center'
  | 'bottom'
  | 'left'
  | 'right'
  | 'message'
  | 'dialog'
  | 'share';

interface _UniPopupOnChangeDetail {
  show: boolean;
  type: _UniPopupType;
}

/** 状态变化时触发 */
interface _UniPopupOnChange {
  (detail: _UniPopupOnChangeDetail): void;
}

/** 点击遮罩层触发 */
interface _UniPopupOnMaskClick {
  (): void;
}

interface _UniPopupProps {
  /**
   * 是否开启动画
   *
   * 默认为 true
   */
  animation: boolean;
  /**
   * 弹出方式
   *
   * Top 顶部弹出
   *
   * Center 居中弹出
   *
   * Bottom 底部弹出
   *
   * Left 左侧弹出
   *
   * Right 右侧弹出
   *
   * Message 预置样式，消息提示
   *
   * Dialog 预置样式，对话框
   *
   * Share 预置样式，底部弹出分享
   *
   * 默认为 center
   */
  type: _UniPopupType;
  /**
   * 蒙版点击是否关闭弹窗
   *
   * 默认为 true
   */
  isMaskClick: boolean;
  /**
   * 蒙版颜色
   *
   * 默认为 rgba(0, 0, 0, 0.4)
   */
  maskBackgroundColor: string;
  /**
   * 主窗口背景色
   *
   * 默认为 none
   */
  backgroundColor: string;
  /**
   * 是否适配底部安全区
   *
   * 默认为 true
   */
  safeArea: boolean;
  /** 打开弹出层 */
  open: (type?: _UniPopupType) => void;
  /** 关闭弹出层 */
  close: () => void;
  /** 状态变化时触发 */
  onChange: _UniPopupOnChange;
  /** 点击遮罩层触发 */
  onMaskClick: _UniPopupOnMaskClick;
}

/** 弹出层，在应用中弹出一个消息提示窗口、提示框等 */
type _UniPopup = Component<Partial<_UniPopupProps>>;

export {
  _UniPopupType as UniPopupType,
  _UniPopupOnChangeDetail as UniPopupOnChangeDetail,
  _UniPopupOnChange as UniPopupOnChange,
  _UniPopupOnMaskClick as UniPopupOnMaskClick,
  _UniPopupProps as UniPopupProps,
  _UniPopup as UniPopup,
};

declare global {
  namespace UniHelper {
    /**
     * 弹出方式
     *
     * Top 顶部弹出
     *
     * Center 居中弹出
     *
     * Bottom 底部弹出
     *
     * Left 左侧弹出
     *
     * Right 右侧弹出
     *
     * Message 预置样式，消息提示
     *
     * Dialog 预置样式，对话框
     *
     * Share 预置样式，底部弹出分享
     */
    export type UniPopupType = _UniPopupType;
    export interface UniPopupOnChangeDetail extends _UniPopupOnChangeDetail {}
    /** 状态变化时触发 */
    export interface UniPopupOnChange extends _UniPopupOnChange {}
    /** 点击遮罩层触发 */
    export interface UniPopupOnMaskClick extends _UniPopupOnMaskClick {}
    export interface UniPopupProps extends _UniPopupProps {}
    /** 弹出层，在应用中弹出一个消息提示窗口、提示框等 */
    export type UniPopup = _UniPopup;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniPopup: _UniPopup;
  }
}
