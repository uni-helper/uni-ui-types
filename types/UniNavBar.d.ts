import { Component } from '@uni-helper/uni-app-types';
import { UniIconsType } from './UniIcons';

/**
 * @desc 导航栏属性
 */
interface _UniNavBarProps {
  /**
   * @desc 标题文字
   */
  title: string;
  /**
   * @desc 左侧按钮文本
   */
  leftText: string;
  /**
   * @desc 右侧按钮文本
   */
  rightText: string;
  /**
   * @desc 左侧按钮图标
   */
  leftIcon: UniIconsType;
  /**
   * @desc 右侧按钮图标
   */
  rightIcon: UniIconsType;
  /**
   * @desc 图标和文字颜色
   * @desc 默认为 #000000
   */
  color: string;
  /**
   * @desc 导航栏背景颜色
   * @desc 默认为 #ffffff
   */
  backgroundColor: string;
  /**
   * @desc 是否固定顶部
   * @desc 默认为 false
   */
  fixed: boolean;
  /**
   * @desc 是否包含状态栏
   * @desc 默认为 false
   */
  statusBar: boolean;
  /**
   * @desc 导航栏下是否有阴影
   * @desc 默认为 false
   */
  shadow: boolean;
  /**
   * @desc 导航栏下是否有边框
   * @desc 默认为 true
   */
  border: boolean;
  /**
   * @desc 导航栏高度
   * @desc 默认为 44
   */
  height: number | string;
  /**
   * @desc 导航栏是否开启暗黑模式
   */
  dark: boolean;
  /**
   * @desc 导航栏左侧插槽宽度
   * @desc 默认为 120rpx
   */
  leftWidth: number | string;
  /**
   * @desc 导航栏右侧插槽宽度
   * @desc 默认为 120rpx
   */
  rightWidth: number | string;
  /**
   * @desc 是否开启统计标题功能
   */
  stat: boolean | string;
}

/**
 * @desc 导航栏组件，主要用于头部导航
 */
type _UniNavBar = Component<Partial<_UniNavBarProps>>;

export { _UniNavBarProps as UniNavBarProps, _UniNavBar as UniNavBar };

declare global {
  namespace UniHelper {
    /**
     * @desc 导航栏属性
     */
    export interface UniNavBarProps extends _UniNavBarProps {}
    /**
     * @desc 导航栏组件，主要用于头部导航
     */
    export type UniNavBar = _UniNavBar;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 导航栏组件，主要用于头部导航
     */
    UniNavBar: _UniNavBar;
  }
}
