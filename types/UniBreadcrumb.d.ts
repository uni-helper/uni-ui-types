import { Component } from '@uni-helper/uni-app-types';

export interface UniBreadcrumbProps {
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
 * @desc 显示当前页面的路径，快速返回之前的任意页面
 */
export type UniBreadcrumb = Component<Partial<UniBreadcrumbProps>>;
