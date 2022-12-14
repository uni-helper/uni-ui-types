import { Component } from '@uni-helper/uni-app-types';

/** 栅格规则 */
interface _UniColRules {
  /**
   * 栅格占据的列数
   *
   * 默认为 24
   */
  span: number;
  /** 栅格左侧间隔格数 */
  offset: number;
  /** 栅格向右偏移格数 */
  push: number;
  /** 栅格向左偏移格数 */
  pull: number;
}

/** 列属性 */
interface _UniColProps extends _UniColRules {
  /** 屏幕宽度 <768px 时，要显示的栅格规则 */
  xs: number | UniColRules;
  /** 屏幕宽度 ≥768px 时，要显示的栅格规则 */
  sm: number | UniColRules;
  /** 屏幕宽度 ≥992px 时，要显示的栅格规则 */
  md: number | UniColRules;
  /** 屏幕宽度 ≥1200px 时，要显示的栅格规则 */
  lg: number | UniColRules;
  /** 屏幕宽度 ≥1920px 时，要显示的栅格规则 */
  xl: number | UniColRules;
}

/** 流式栅格系统中的列 */
type _UniCol = Component<Partial<_UniColProps>>;

export { _UniColRules as UniColRules, _UniColProps as UniColProps, _UniCol as UniCol };

declare global {
  namespace UniHelper {
    /** 栅格规则 */
    export interface UniColRules extends _UniColRules {}
    /** 列属性 */
    export interface UniColProps extends _UniColProps {}
    /** 流式栅格系统中的列 */
    export type UniCol = _UniCol;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 流式栅格系统中的列 */
    UniCol: _UniCol;
  }
}
