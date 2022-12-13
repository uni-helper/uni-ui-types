import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 面包屑属性
 */
interface _UniBreadcrumbProps {
  /**
   * @desc 分隔符
   * @desc 默认为 /
   */
  separator: string;
  /**
   * @desc 分隔符类名
   */
  separatorClass: string;
}

/**
 * @desc 面包屑
 * @desc 显示当前页面的路径，快速返回之前的任意页面
 */
type _UniBreadcrumb = Component<Partial<_UniBreadcrumbProps>>;

export { _UniBreadcrumbProps as UniBreadcrumbProps, _UniBreadcrumb as UniBreadcrumb };

declare global {
  namespace UniHelper {
    /**
     * @desc 面包屑属性
     */
    export interface UniBreadcrumbProps extends _UniBreadcrumbProps {}
    /**
     * @desc 面包屑
     * @desc 显示当前页面的路径，快速返回之前的任意页面
     */
    export type UniBreadcrumb = _UniBreadcrumb;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 面包屑
     * @desc 显示当前页面的路径，快速返回之前的任意页面
     */
    UniBreadcrumb: _UniBreadcrumb;
  }
}
