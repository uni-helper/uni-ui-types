import { Component } from '@uni-helper/uni-app-types';

export interface UniPaginationProps {
  /**
   * @desc 左侧按钮文字
   * @desc 默认为 上一页
   */
  prevText: string;
  /**
   * @desc 右侧按钮文字
   * @desc 默认为 下一页
   */
  nextText: string;
  /**
   * @desc 当前页，优先级比 current 低
   * @desc 默认为 1
   */
  value: number;
  /**
   * @desc 当前页，优先级比 value 高
   * @desc 默认为 1
   */
  current: number;
  /**
   * @desc 数据总量
   * @desc 默认为 0
   */
  total: number;
  /**
   * @desc 每页数据量
   * @desc 默认为 10
   */
  pageSize: number;
  /**
   * @desc 是否以 icon 展示按钮
   * @desc 默认为 boolean
   */
  showIcon: boolean;
  /**
   * @desc 点击页码按钮时触发
   */
  onChange: (event: { type: 'prev' | 'next'; current: number }) => void;
}

/**
 * @desc 分页器组件，用于展示页码、请求数据等
 */
export type UniPagination = Component<Partial<UniPaginationProps>>;
