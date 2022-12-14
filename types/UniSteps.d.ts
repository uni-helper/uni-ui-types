import { Component } from '@uni-helper/uni-app-types';

/**
 * 排列方向
 *
 * Row 横向
 *
 * Column 纵向
 */
type _UniStepsDirection = 'row' | 'column';

/** 数据源 */
interface _UniStepsOption {
  /** 标题 */
  title: string;
  /** 描述 */
  desc: string;
}

/** 步骤条属性 */
interface _UniStepsProps {
  /**
   * 当前步骤
   *
   * 默认为 0
   */
  active: number;
  /**
   * 排列方向
   *
   * Row 横向
   *
   * Column 纵向
   *
   * 默认为 row
   */
  direction: _UniStepsDirection;
  /**
   * 选中状态的颜色
   *
   * 默认为 #1aad19
   */
  activeColor: string;
  /** 数据源 */
  options: _UniStepsOption[];
}

/** 步骤条，常用于显示进度 */
type _UniSteps = Component<Partial<_UniStepsProps>>;

export {
  _UniStepsDirection as UniStepsDirection,
  _UniStepsOption as UniStepsOption,
  _UniStepsProps as UniStepsProps,
  _UniSteps as UniSteps,
};

declare global {
  namespace UniHelper {
    /**
     * 排列方向
     *
     * Row 横向
     *
     * Column 纵向
     */
    export type UniStepsDirection = _UniStepsDirection;
    /** 数据源 */
    export interface UniStepsOption extends _UniStepsOption {}
    /** 步骤条属性 */
    export interface UniStepsProps extends _UniStepsProps {}
    /** 步骤条，常用于显示进度 */
    export type UniSteps = _UniSteps;
  }
}
