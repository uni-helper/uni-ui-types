import { CustomEvent, Component } from '@uni-helper/uni-app-types';

interface _UniGridOnChangeDetail {
  index: number;
}

/**
 * @desc 点击触发
 */
interface _UniGridOnChange {
  (event: CustomEvent<_UniGridOnChangeDetail>): void;
}

/**
 * @desc 宫格属性
 */
interface _UniGridProps {
  /**
   * @desc 每列显示个数
   * @desc 默认为 3
   */
  column: number;
  /**
   * @desc 边框颜色
   * @desc 默认为 #d0dee5
   */
  borderColor: string;
  /**
   * @desc 是否显示边框
   * @desc 默认为 true
   */
  showBorder: boolean;
  /**
   * @desc 是否方形显示
   * @desc 默认为 true
   */
  square: boolean;
  /**
   * @desc 点击背景是否高亮
   * @desc 默认为 true
   */
  highlight: boolean;
  /**
   * @desc 点击触发
   */
  onChange: _UniGridOnChange;
}

/**
 * @desc 宫格
 */
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
    /**
     * @desc 点击触发
     */
    export interface UniGridOnChange extends _UniGridOnChange {}
    /**
     * @desc 宫格属性
     */
    export interface UniGridProps extends _UniGridProps {}
    /**
     * @desc 宫格
     */
    export type UniGrid = _UniGrid;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 宫格
     */
    UniGrid: _UniGrid;
  }
}
