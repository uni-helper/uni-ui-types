import { Component } from '@uni-helper/uni-app-types';

/** 对齐方式 */
type _UniThAlign = 'left' | 'center' | 'right';

/** 筛选类型 */
type _UniThFilterType = 'search' | 'select' | 'range' | 'date';

/** 筛选数据 */
interface _UniThFilterData {
  /** 显示内容 */
  text: string;
  /** 值 */
  value: string;
}

interface _UniThOnSortChangeDetail {
  order: 'ascending' | 'descending' | null;
}

/** 点击排序时触发 */
interface _UniThOnSortChange {
  (detail: _UniThOnSortChangeDetail): void;
}

interface _UniThOnFilterChangeDetail {
  filterType: _UniThFilterType;
  filter: string | string[];
}

/** 筛选数据时触发 */
interface _UniThOnFilterChange {
  (detail: _UniThOnFilterChangeDetail): void;
}

interface _UniThProps {
  /** 单元格宽度 */
  width: string;
  /**
   * 对齐方式
   *
   * 默认为 left
   */
  align: _UniThAlign;
  /** 筛选类型 */
  filterType: _UniThFilterType;
  /** 筛选数据 */
  filterData: _UniThFilterData[];
  /**
   * 是否启用排序
   *
   * 默认为 false
   */
  sortable: boolean;
  /**
   * 行合并
   *
   * 默认为 1
   */
  rowspan: number | string;
  /**
   * 列合并
   *
   * 默认为 1
   */
  colspan: number | string;
  /** 点击排序时触发 */
  onSortChange: _UniThOnSortChange;
  /** 筛选数据时触发 */
  onFilterChange: _UniThOnFilterChange;
}

type _UniTh = Component<Partial<_UniThProps>>;

export {
  _UniThAlign as UniThAlign,
  _UniThFilterType as UniThFilterType,
  _UniThFilterData as UniThFilterData,
  _UniThOnSortChangeDetail as UniThOnSortChangeDetail,
  _UniThOnSortChange as UniThOnSortChange,
  _UniThOnFilterChangeDetail as UniThOnFilterChangeDetail,
  _UniThOnFilterChange as UniThOnFilterChange,
  _UniThProps as UniThProps,
  _UniTh as UniTh,
};

declare global {
  namespace UniHelper {
    /** 对齐方式 */
    export type UniThAlign = _UniThAlign;
    /** 筛选类型 */
    export type UniThFilterType = _UniThFilterType;
    /** 筛选数据 */
    export interface UniThFilterData extends _UniThFilterData {}
    export interface UniThOnSortChangeDetail extends _UniThOnSortChangeDetail {}
    /** 点击排序时触发 */
    export interface UniThOnSortChange extends _UniThOnSortChange {}
    export interface UniThOnFilterChangeDetail extends _UniThOnFilterChangeDetail {}
    /** 筛选数据时触发 */
    export interface UniThOnFilterChange extends _UniThOnFilterChange {}
    export interface UniThProps extends _UniThProps {}
    export type UniTh = _UniTh;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 用于展示一个或多个文字标签，可点击切换选中、不选中的状态 */
    UniTh: _UniTh;
  }
}
