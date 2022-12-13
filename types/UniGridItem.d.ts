import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 宫格项属性
 */
interface _UniGridItemProps {
  /**
   * @desc 子组件唯一标识
   */
  index: number;
}

/**
 * @desc 宫格项
 */
type _UniGridItem = Component<Partial<U_niGridItemProps>>;

export { _UniGridItemProps as UniGridItemProps, _UniGridItem as UniGridItem };

declare global {
  namespace UniHelper {
    /**
     * @desc 宫格项属性
     */
    export interface UniGridItemProps extends _UniGridItemProps {}
    /**
     * @desc 宫格项
     */
    export type UniGridItem = _UniGridItem;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 宫格项
     */
    UniGridItem: _UniGridItem;
  }
}
