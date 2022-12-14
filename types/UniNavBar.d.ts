import { Component } from '@uni-helper/uni-app-types';
import { UniIconsType } from './UniIcons';

/** 导航栏属性 */
interface _UniNavBarProps {
  /** 标题文字 */
  title: string;
  /** 左侧按钮文本 */
  leftText: string;
  /** 右侧按钮文本 */
  rightText: string;
  /** 左侧按钮图标 */
  leftIcon: UniIconsType;
  /** 右侧按钮图标 */
  rightIcon: UniIconsType;
  /**
   * 图标和文字颜色
   *
   * 默认为 #000000
   */
  color: string;
  /**
   * 导航栏背景颜色
   *
   * 默认为 #ffffff
   */
  backgroundColor: string;
  /**
   * 是否固定顶部
   *
   * 默认为 false
   */
  fixed: boolean;
  /**
   * 是否包含状态栏
   *
   * 默认为 false
   */
  statusBar: boolean;
  /**
   * 导航栏下是否有阴影
   *
   * 默认为 false
   */
  shadow: boolean;
  /**
   * 导航栏下是否有边框
   *
   * 默认为 true
   */
  border: boolean;
  /**
   * 导航栏高度
   *
   * 默认为 44
   */
  height: number | string;
  /** 导航栏是否开启暗黑模式 */
  dark: boolean;
  /**
   * 导航栏左侧插槽宽度
   *
   * 默认为 120rpx
   */
  leftWidth: number | string;
  /**
   * 导航栏右侧插槽宽度
   *
   * 默认为 120rpx
   */
  rightWidth: number | string;
  /** 是否开启统计标题功能 */
  stat: boolean | string;
}

/** 导航栏组件，主要用于头部导航 */
type _UniNavBar = Component<Partial<_UniNavBarProps>>;

export { _UniNavBarProps as UniNavBarProps, _UniNavBar as UniNavBar };

declare global {
  namespace UniHelper {
    /** 导航栏属性 */
    export interface UniNavBarProps extends _UniNavBarProps {}
    /** 导航栏组件，主要用于头部导航 */
    export type UniNavBar = _UniNavBar;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 导航栏组件，主要用于头部导航 */
    UniNavBar: _UniNavBar;
  }
}
