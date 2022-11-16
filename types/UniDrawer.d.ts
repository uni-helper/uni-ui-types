import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 抽屉滑出位置
 * @desc left 从左侧滑出
 * @desc right 从右侧滑出
 */
export type UniDrawerMode = 'left' | 'right';

export interface UniDrawerProps {
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
  mode: UniDrawerMode;
  /**
   * @desc 宽度
   * @desc 默认为 200
   */
  width: number;
  /**
   * @desc 打开抽屉
   */
  open: () => void;
  /**
   * @desc 关闭抽屉
   */
  close: () => void;
  /**
   * @desc 抽屉状态发生变化时触发
   */
  onChange: (isDrawerOpen: boolean) => void;
}

/**
 * @desc 抽屉侧滑菜单
 */
export type UniDrawer = Component<Partial<UniDrawerProps>>;
