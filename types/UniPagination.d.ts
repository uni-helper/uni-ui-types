import { Component } from '@uni-helper/uni-app-types';

type _UniPaginationOnChangeType = 'prev' | 'next';

interface _UniPaginationOnChangeDetail {
  type: _UniPaginationOnChangeType;
  current: number;
}

/**
 * @desc 点击页码按钮时触发
 */
interface _UniPaginationOnChange {
  (detail: _UniPaginationOnChangeDetail): void;
}

/**
 * @desc 分页器属性
 */
interface _UniPaginationProps {
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
  onChange: _UniPaginationOnChange;
}

/**
 * @desc 分页器组件，用于展示页码、请求数据等
 */
type _UniPagination = Component<Partial<_UniPaginationProps>>;

export {
  _UniPaginationOnChangeType as UniPaginationOnChangeType,
  _UniPaginationOnChangeDetail as UniPaginationOnChangeDetail,
  _UniPaginationOnChange as UniPaginationOnChange,
  _UniPaginationProps as UniPaginationProps,
  _UniPagination as UniPagination,
};

declare global {
  namespace UniHelper {
    export type UniPaginationOnChangeType = _UniPaginationOnChangeType;
    export interface UniPaginationOnChangeDetail extends _UniPaginationOnChangeDetail {}
    /**
     * @desc 点击页码按钮时触发
     */
    export interface UniPaginationOnChange extends _UniPaginationOnChange {}
    /**
     * @desc 分页器属性
     */
    export interface UniPaginationProps extends _UniPaginationProps {}
    /**
     * @desc 分页器组件，用于展示页码、请求数据等
     */
    export type UniPagination = _UniPagination;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 分页器组件，用于展示页码、请求数据等
     */
    UniPagination: _UniPagination;
  }
}
