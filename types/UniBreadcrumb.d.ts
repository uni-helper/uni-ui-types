import { Component } from '@uni-helper/uni-app-types';

/** 面包屑属性 */
interface _UniBreadcrumbProps {
  /**
   * 分隔符
   *
   * 默认为 /
   */
  separator: string;
  /** 分隔符类名 */
  separatorClass: string;
}

/**
 * 面包屑
 *
 * 显示当前页面的路径，快速返回之前的任意页面
 */
type _UniBreadcrumb = Component<Partial<_UniBreadcrumbProps>>;

export { _UniBreadcrumbProps as UniBreadcrumbProps, _UniBreadcrumb as UniBreadcrumb };

declare global {
  namespace UniHelper {
    /** 面包屑属性 */
    export interface UniBreadcrumbProps extends _UniBreadcrumbProps {}
    /**
     * 面包屑
     *
     * 显示当前页面的路径，快速返回之前的任意页面
     */
    export type UniBreadcrumb = _UniBreadcrumb;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * 面包屑
     *
     * 显示当前页面的路径，快速返回之前的任意页面
     */
    UniBreadcrumb: _UniBreadcrumb;
  }
}
