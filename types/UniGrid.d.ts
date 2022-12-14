import { CustomEvent, Component } from '@uni-helper/uni-app-types';

interface _UniGridOnChangeDetail {
  index: number;
}

/** 点击触发 */
interface _UniGridOnChange {
  (event: CustomEvent<_UniGridOnChangeDetail>): void;
}

/** 宫格属性 */
interface _UniGridProps {
  /**
   * 每列显示个数
   *
   * 默认为 3
   */
  column: number;
  /**
   * 边框颜色
   *
   * 默认为 #d0dee5
   */
  borderColor: string;
  /**
   * 是否显示边框
   *
   * 默认为 true
   */
  showBorder: boolean;
  /**
   * 是否方形显示
   *
   * 默认为 true
   */
  square: boolean;
  /**
   * 点击背景是否高亮
   *
   * 默认为 true
   */
  highlight: boolean;
  /** 点击触发 */
  onChange: _UniGridOnChange;
}

/** 宫格 */
type _UniGrid = Component<Partial<_UniGridProps>>;

export {
  _UniGridOnChangeDetail as UniGridOnChangeDetail,
  _UniGridOnChange as UniGridOnChange,
  _UniGridProps as UniGridProps,
  _UniGrid as UniGrid,
};

declare global {
  namespace UniHelper {
    export interface UniGridOnChangeDetail extends _UniGridOnChangeDetail {}
    /** 点击触发 */
    export interface UniGridOnChange extends _UniGridOnChange {}
    /** 宫格属性 */
    export interface UniGridProps extends _UniGridProps {}
    /** 宫格 */
    export type UniGrid = _UniGrid;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 宫格 */
    UniGrid: _UniGrid;
  }
}
