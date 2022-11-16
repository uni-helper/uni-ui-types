import { Component } from '@uni-helper/uni-app-types';

export interface UniColRules {
  /**
   * @desc 栅格占据的列数
   * @desc 默认为 24
   */
  span: number;
  /**
   * @desc 栅格左侧间隔格数
   */
  offset: number;
  /**
   * @desc 栅格向右偏移格数
   */
  push: number;
  /**
   * @desc 栅格向左偏移格数
   */
  pull: number;
}

export interface UniColProps extends UniColRules {
  /**
   * @desc 屏幕宽度 <768px 时，要显示的栅格规则
   */
  xs: number | UniColRules;
  /**
   * @desc 屏幕宽度 ≥768px 时，要显示的栅格规则
   */
  sm: number | UniColRules;
  /**
   * @desc 屏幕宽度 ≥992px 时，要显示的栅格规则
   */
  md: number | UniColRules;
  /**
   * @desc 屏幕宽度 ≥1200px 时，要显示的栅格规则
   */
  lg: number | UniColRules;
  /**
   * @desc 屏幕宽度 ≥1920px 时，要显示的栅格规则
   */
  xl: number | UniColRules;
}

/**
 * @desc 流式栅格系统中的列
 */
export type UniCol = Component<Partial<UniColProps>>;
