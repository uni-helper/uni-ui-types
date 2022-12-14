import { Component } from '@uni-helper/uni-app-types';

type _UniPaginationOnChangeType = 'prev' | 'next';

interface _UniPaginationOnChangeDetail {
  type: _UniPaginationOnChangeType;
  current: number;
}

/** 点击页码按钮时触发 */
interface _UniPaginationOnChange {
  (detail: _UniPaginationOnChangeDetail): void;
}

/** 分页器属性 */
interface _UniPaginationProps {
  /**
   * 左侧按钮文字
   *
   * 默认为 上一页
   */
  prevText: string;
  /**
   * 右侧按钮文字
   *
   * 默认为 下一页
   */
  nextText: string;
  /**
   * 当前页，优先级比 current 低
   *
   * 默认为 1
   */
  value: number;
  /**
   * 当前页，优先级比 value 高
   *
   * 默认为 1
   */
  current: number;
  /**
   * 数据总量
   *
   * 默认为 0
   */
  total: number;
  /**
   * 每页数据量
   *
   * 默认为 10
   */
  pageSize: number;
  /**
   * 是否以 icon 展示按钮
   *
   * 默认为 boolean
   */
  showIcon: boolean;
  /** 点击页码按钮时触发 */
  onChange: _UniPaginationOnChange;
}

/** 分页器组件，用于展示页码、请求数据等 */
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
    /** 点击页码按钮时触发 */
    export interface UniPaginationOnChange extends _UniPaginationOnChange {}
    /** 分页器属性 */
    export interface UniPaginationProps extends _UniPaginationProps {}
    /** 分页器组件，用于展示页码、请求数据等 */
    export type UniPagination = _UniPagination;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 分页器组件，用于展示页码、请求数据等 */
    UniPagination: _UniPagination;
  }
}
