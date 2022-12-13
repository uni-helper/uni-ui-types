import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 单元格对齐方式
 */
type _UniTdAlign = 'left' | 'center' | 'right';

interface _UniTdProps {
  /**
   * @desc 单元格宽度
   */
  width: string;
  /**
   * @desc 对齐方式
   * @desc 默认为 left
   */
  align: _UniTdAlign;
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

type _UniTd = Component<Partial<_UniTdProps>>;

export { _UniTdAlign as UniTdAlign, _UniTdProps as UniTdProps, _UniTd as UniTd };

declare global {
  namespace UniHelper {
    /**
     * @desc 单元格对齐方式
     */
    export type UniTdAlign = _UniTdAlign;
    export interface UniTdProps extends _UniTdProps {}
    export type UniTd = _UniTd;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniTd: _UniTd;
  }
}
