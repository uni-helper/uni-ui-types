import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 弹出方式
 * @desc top 顶部弹出
 * @desc center 居中弹出
 * @desc bottom 底部弹出
 * @desc left 左侧弹出
 * @desc right 右侧弹出
 * @desc message 预置样式，消息提示
 * @desc dialog 预置样式，对话框
 * @desc share 预置样式，底部弹出分享
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

/**
 * @desc 状态变化时触发
 */
interface _UniPopupOnChange {
  (detail: _UniPopupOnChangeDetail): void;
}

/**
 * @desc 点击遮罩层触发
 */
interface _UniPopupOnMaskClick {
  (): void;
}

interface _UniPopupProps {
  /**
   * @desc 是否开启动画
   * @desc 默认为 true
   */
  animation: boolean;
  /**
   * @desc 弹出方式
   * @desc top 顶部弹出
   * @desc center 居中弹出
   * @desc bottom 底部弹出
   * @desc left 左侧弹出
   * @desc right 右侧弹出
   * @desc message 预置样式，消息提示
   * @desc dialog 预置样式，对话框
   * @desc share 预置样式，底部弹出分享
   * @desc 默认为 center
   */
  type: _UniPopupType;
  /**
   * @desc 蒙版点击是否关闭弹窗
   * @desc 默认为 true
   */
  isMaskClick: boolean;
  /**
   * @desc 蒙版颜色
   * @desc 默认为 rgba(0, 0, 0, 0.4)
   */
  maskBackgroundColor: string;
  /**
   * @desc 主窗口背景色
   * @desc 默认为 none
   */
  backgroundColor: string;
  /**
   * @desc 是否适配底部安全区
   * @desc 默认为 true
   */
  safeArea: boolean;
  /**
   * @desc 打开弹出层
   */
  open: (type?: _UniPopupType) => void;
  /**
   * @desc 关闭弹出层
   */
  close: () => void;
  /**
   * @desc 状态变化时触发
   */
  onChange: _UniPopupOnChange;
  /**
   * @desc 点击遮罩层触发
   */
  onMaskClick: _UniPopupOnMaskClick;
}

/**
 * @desc 弹出层，在应用中弹出一个消息提示窗口、提示框等
 */
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
     * @desc 弹出方式
     * @desc top 顶部弹出
     * @desc center 居中弹出
     * @desc bottom 底部弹出
     * @desc left 左侧弹出
     * @desc right 右侧弹出
     * @desc message 预置样式，消息提示
     * @desc dialog 预置样式，对话框
     * @desc share 预置样式，底部弹出分享
     */
    export type UniPopupType = _UniPopupType;
    export interface UniPopupOnChangeDetail extends _UniPopupOnChangeDetail {}
    /**
     * @desc 状态变化时触发
     */
    export interface UniPopupOnChange extends _UniPopupOnChange {}
    /**
     * @desc 点击遮罩层触发
     */
    export interface UniPopupOnMaskClick extends _UniPopupOnMaskClick {}
    export interface UniPopupProps extends _UniPopupProps {}
    /**
     * @desc 弹出层，在应用中弹出一个消息提示窗口、提示框等
     */
    export type UniPopup = _UniPopup;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniPopup: _UniPopup;
  }
}
