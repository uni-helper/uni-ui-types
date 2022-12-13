import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 排列方向
 * @desc row 横向
 * @desc column 纵向
 */
type _UniStepsDirection = 'row' | 'column';

/**
 * @desc 数据源
 */
interface _UniStepsOption {
  /**
   * @desc 标题
   */
  title: string;
  /**
   * @desc 描述
   */
  desc: string;
}

/**
 * @desc 步骤条属性
 */
interface _UniStepsProps {
  /**
   * @desc 当前步骤
   * @desc 默认为 0
   */
  active: number;
  /**
   * @desc 排列方向
   * @desc row 横向
   * @desc column 纵向
   * @desc 默认为 row
   */
  direction: _UniStepsDirection;
  /**
   * @desc 选中状态的颜色
   * @desc 默认为 #1aad19
   */
  activeColor: string;
  /**
   * @desc 数据源
   */
  options: _UniStepsOption[];
}

/**
 * @desc 步骤条，常用于显示进度
 */
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
     * @desc 排列方向
     * @desc row 横向
     * @desc column 纵向
     */
    export type UniStepsDirection = _UniStepsDirection;
    /**
     * @desc 数据源
     */
    export interface UniStepsOption extends _UniStepsOption {}
    /**
     * @desc 步骤条属性
     */
    export interface UniStepsProps extends _UniStepsProps {}
    /**
     * @desc 步骤条，常用于显示进度
     */
    export type UniSteps = _UniSteps;
  }
}
