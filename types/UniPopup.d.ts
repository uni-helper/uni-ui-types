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
export type UniPopupType =
  | 'top'
  | 'center'
  | 'bottom'
  | 'left'
  | 'right'
  | 'message'
  | 'dialog'
  | 'share';

export interface UniPopupProps {
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
  type: UniPopupType;
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
  open: (type?: UniPopupType) => void;
  /**
   * @desc 关闭弹出层
   */
  close: () => void;
  /**
   * @desc 状态变化时触发
   */
  onChange: (event: { show: boolean; type: UniPopupType }) => void;
  /**
   * @desc 点击遮罩层触发
   */
  onMaskClick: () => void;
}

/**
 * @desc 弹出层，在应用中弹出一个消息提示窗口、提示框等
 */
export type UniPopup = Component<Partial<UniPopupProps>>;
