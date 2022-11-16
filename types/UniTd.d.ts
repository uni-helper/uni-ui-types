import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 单元格对齐方式
 */
export type UniTdAlign = 'left' | 'center' | 'right';

export interface UniTdProps {
  /**
   * @desc 单元格宽度
   */
  width: string;
  /**
   * @desc 对齐方式
   * @desc 默认为 left
   */
  align: UniTdAlign;
  /**
   * @desc 行合并
   * @desc 默认为 1
   */
  rowspan: number | string;
  /**
   * @desc 列合并
   * @desc 默认为 1
   */
  colspan: number | string;
}

export type UniTd = Component<Partial<UniTdProps>>;
