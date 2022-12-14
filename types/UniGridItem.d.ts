import { Component } from '@uni-helper/uni-app-types';

/** 宫格项属性 */
interface _UniGridItemProps {
  /** 子组件唯一标识 */
  index: number;
}

/** 宫格项 */
type _UniGridItem = Component<Partial<U_niGridItemProps>>;

export { _UniGridItemProps as UniGridItemProps, _UniGridItem as UniGridItem };

declare global {
  namespace UniHelper {
    /** 宫格项属性 */
    export interface UniGridItemProps extends _UniGridItemProps {}
    /** 宫格项 */
    export type UniGridItem = _UniGridItem;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 宫格项 */
    UniGridItem: _UniGridItem;
  }
}
