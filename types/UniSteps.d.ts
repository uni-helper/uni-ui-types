import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 排列方向
 * @desc row 横向
 * @desc column 纵向
 */
export type UniStepsDirection = 'row' | 'column';

/**
 * @desc 数据源
 */
export interface UniStepsOption {
  /**
   * @desc 标题
   */
  title: string;
  /**
   * @desc 描述
   */
  desc: string;
}

export interface UniStepsProps {
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
  direction: UniStepsDirection;
  /**
   * @desc 选中状态的颜色
   * @desc 默认为 #1aad19
   */
  activeColor: string;
  /**
   * @desc 数据源
   */
  options: UniStepsOption[];
}

/**
 * @desc 步骤条，常用于显示进度
 */
export type UniSteps = Component<Partial<UniStepsProps>>;
