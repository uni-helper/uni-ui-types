import { Component } from '@uni-helper/uni-app-types';

/** 单元格对齐方式 */
type _UniTdAlign = 'left' | 'center' | 'right';

interface _UniTdProps {
  /** 单元格宽度 */
  width: string;
  /**
   * 对齐方式
   *
   * 默认为 left
   */
  align: _UniTdAlign;
  /**
   * 行合并
   *
   * 默认为 1
   */
  rowspan: number | string;
  /**
   * 列合并
   *
   * 默认为 1
   */
  colspan: number | string;
}

type _UniTd = Component<Partial<_UniTdProps>>;

export { _UniTdAlign as UniTdAlign, _UniTdProps as UniTdProps, _UniTd as UniTd };

declare global {
  namespace UniHelper {
    /** 单元格对齐方式 */
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
