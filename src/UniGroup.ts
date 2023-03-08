import { Component } from '@uni-helper/uni-app-types';

/**
 * 模式
 *
 * default 默认
 *
 * card 卡片
 */
type _UniGroupMode = 'default' | 'card';

/** 分组属性 */
type _UniGroupProps = Partial<{
  /** 主标题 */
  title: string;
  /** 分组间隔 */
  top: number;
  /**
   * 模式
   *
   * default 默认
   *
   * card 卡片
   *
   * 默认为 default
   */
  mode: _UniGroupMode;
}>;

/** 分组组件可用于将组件分组，添加间隔，以产生明显的区块 */
type _UniGroup = Component<_UniGroupProps>;

/** 分组组件实例 */
type _UniGroupInstance = InstanceType<_UniGroup>;

export {
  _UniGroupMode as UniGroupMode,
  _UniGroupProps as UniGroupProps,
  _UniGroup as UniGroup,
  _UniGroupInstance as UniGroupInstance,
};

declare global {
  namespace UniHelper {
    /**
     * 模式
     *
     * default 默认
     *
     * card 卡片
     */
    export type UniGroupMode = _UniGroupMode;
    /** 分组属性 */
    export type UniGroupProps = _UniGroupProps;
    /** 分组组件可用于将组件分组，添加间隔，以产生明显的区块 */
    export type UniGroup = _UniGroup;
    /** 分组组件实例 */
    export type UniGroupInstance = _UniGroupInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 分组组件可用于将组件分组，添加间隔，以产生明显的区块 */
    UniGroup: _UniGroup;
  }
}
