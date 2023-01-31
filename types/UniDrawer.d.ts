import { Component } from '@uni-helper/uni-app-types';

/**
 * 抽屉滑出位置
 *
 * left 从左侧滑出
 *
 * right 从右侧滑出
 */
type _UniDrawerMode = 'left' | 'right';

/** 打开抽屉 */
interface _UniDrawerOpen {
  (): void;
}

/** 关闭抽屉 */
interface _UniDrawerClose {
  (): void;
}

/** 抽屉状态发生变化时触发 */
interface _UniDrawerOnChange {
  (isDrawerOpen: boolean): void;
}

interface _UniDrawerProps {
  /**
   * 是否显示遮罩
   *
   * 默认为 true
   */
  mask: boolean;
  /**
   * 点击遮罩是否可以关闭抽屉
   *
   * 默认为 true
   */
  maskClick: boolean;
  /**
   * 抽屉滑出位置
   *
   * left 从左侧滑出
   *
   * right 从右侧滑出
   *
   * 默认为 left
   */
  mode: _UniDrawerMode;
  /**
   * 宽度
   *
   * 默认为 200
   */
  width: number;
  /** 打开抽屉 */
  open: _UniDrawerOpen;
  /** 关闭抽屉 */
  close: _UniDrawerClose;
  /** 抽屉状态发生变化时触发 */
  onChange: _UniDrawerOnChange;
}

/** 抽屉侧滑菜单 */
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
     * 抽屉滑出位置
     *
     * left 从左侧滑出
     *
     * right 从右侧滑出
     */
    export type UniDrawerMode = _UniDrawerMode;
    /** 打开抽屉 */
    export interface UniDrawerOpen extends _UniDrawerOpen {}
    /** 关闭抽屉 */
    export interface UniDrawerClose extends _UniDrawerClose {}
    /** 抽屉状态发生变化时触发 */
    export interface UniDrawerOnChange extends _UniDrawerOnChange {}
    export interface UniDrawerProps extends _UniDrawerProps {}
    /** 抽屉侧滑菜单 */
    export type UniDrawer = _UniDrawer;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 抽屉侧滑菜单 */
    UniDrawer: _UniDrawer;
  }
}
