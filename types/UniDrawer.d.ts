import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 抽屉滑出位置
 * @desc left 从左侧滑出
 * @desc right 从右侧滑出
 */
type _UniDrawerMode = 'left' | 'right';

/**
 * @desc 打开抽屉
 */
interface _UniDrawerOpen {
  (): void;
}

/**
 * @desc 关闭抽屉
 */
interface _UniDrawerClose {
  (): void;
}

/**
 * @desc 抽屉状态发生变化时触发
 */
interface _UniDrawerOnChange {
  (isDrawerOpen: boolean): void;
}

interface _UniDrawerProps {
  /**
   * @desc 是否显示遮罩
   * @desc 默认为 true
   */
  mask: boolean;
  /**
   * @desc 点击遮罩是否可以关闭抽屉
   * @desc 默认为 true
   */
  maskClick: boolean;
  /**
   * @desc 抽屉滑出位置
   * @desc left 从左侧滑出
   * @desc right 从右侧滑出
   * @desc 默认为 left
   */
  mode: _UniDrawerMode;
  /**
   * @desc 宽度
   * @desc 默认为 200
   */
  width: number;
  /**
   * @desc 打开抽屉
   */
  open: _UniDrawerOpen;
  /**
   * @desc 关闭抽屉
   */
  close: _UniDrawerClose;
  /**
   * @desc 抽屉状态发生变化时触发
   */
  onChange: _UniDrawerOnChange;
}

/**
 * @desc 抽屉侧滑菜单
 */
type _UniDrawer = Component<Partial<_UniDrawerProps>>;

export {
  _UniDrawerMode as UniDrawerMode,
  _UniDrawerOpen as UniDrawerOpen,
  _UniDrawerClose as UniDrawerClose,
  _UniDrawerOnChange as UniDrawerOnChange,
  _UniDrawerProps as UniDrawerProps,
  _UniDrawer as UniDrawer,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 抽屉滑出位置
     * @desc left 从左侧滑出
     * @desc right 从右侧滑出
     */
    export type UniDrawerMode = _UniDrawerMode;
    /**
     * @desc 打开抽屉
     */
    export interface UniDrawerOpen extends _UniDrawerOpen {}
    /**
     * @desc 关闭抽屉
     */
    export interface UniDrawerClose extends _UniDrawerClose {}
    /**
     * @desc 抽屉状态发生变化时触发
     */
    export interface UniDrawerOnChange extends _UniDrawerOnChange {}
    export interface UniDrawerProps extends _UniDrawerProps {}
    /**
     * @desc 抽屉侧滑菜单
     */
    export type UniDrawer = _UniDrawer;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 抽屉侧滑菜单
     */
    UniDrawer: _UniDrawer;
  }
}
