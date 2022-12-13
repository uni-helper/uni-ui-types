import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 模式
 * @desc default 默认
 * @desc card 卡片
 */
type _UniGroupMode = 'default' | 'card';

/**
 * @desc 分组属性
 */
interface _UniGroupProps {
  /**
   * @desc 主标题
   */
  title: string;
  /**
   * @desc 分组间隔
   */
  top: number;
  /**
   * @desc 模式
   * @desc default 默认
   * @desc card 卡片
   * @desc 默认为 default
   */
  mode: _UniGroupMode;
}

/**
 * @desc 分组组件可用于将组件分组，添加间隔，以产生明显的区块
 */
type _UniGroup = Component<Partial<_UniGroupProps>>;

export { _UniGroupMode as UniGroupMode, _UniGroupProps as UniGroupProps, _UniGroup as UniGroup };

declare global {
  namespace UniHelper {
    /**
     * @desc 模式
     * @desc default 默认
     * @desc card 卡片
     */
    export type UniGroupMode = _UniGroupMode;
    /**
     * @desc 分组属性
     */
    export interface UniGroupProps extends _UniGroupProps {}
    /**
     * @desc 分组组件可用于将组件分组，添加间隔，以产生明显的区块
     */
    export type UniGroup = _UniGroup;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 分组组件可用于将组件分组，添加间隔，以产生明显的区块
     */
    UniGroup: _UniGroup;
  }
}
