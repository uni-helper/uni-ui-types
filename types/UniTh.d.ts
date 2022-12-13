import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 对齐方式
 */
type _UniThAlign = 'left' | 'center' | 'right';

/**
 * @desc 筛选类型
 */
type _UniThFilterType = 'search' | 'select' | 'range' | 'date';

/**
 * @desc 筛选数据
 */
interface _UniThFilterData {
  /**
   * @desc 显示内容
   */
  text: string;
  /**
   * @desc 值
   */
  value: string;
}

interface _UniThOnSortChangeDetail {
  order: 'ascending' | 'descending' | null;
}

/**
 * @desc 点击排序时触发
 */
interface _UniThOnSortChange {
  (detail: _UniThOnSortChangeDetail): void;
}

interface _UniThOnFilterChangeDetail {
  filterType: _UniThFilterType;
  filter: string | string[];
}

/**
 * @desc 筛选数据时触发
 */
interface _UniThOnFilterChange {
  (detail: _UniThOnFilterChangeDetail): void;
}

interface _UniThProps {
  /**
   * @desc 单元格宽度
   */
  width: string;
  /**
   * @desc 对齐方式
   * @desc 默认为 left
   */
  align: _UniThAlign;
  /**
   * @desc 筛选类型
   */
  filterType: _UniThFilterType;
  /**
   * @desc 筛选数据
   */
  filterData: _UniThFilterData[];
  /**
   * @desc 是否启用排序
   * @desc 默认为 false
   */
  sortable: boolean;
  /**
   * @desc 行合并
   * @desc 默认为 1
   */
  rowspan: number | string;
  /**
   * @desc 列合并
   * @desc 默认为 1
   */
  colspan: number | string;
  /**
   * @desc 点击排序时触发
   */
  onSortChange: _UniThOnSortChange;
  /**
   * @desc 筛选数据时触发
   */
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
    /**
     * @desc 对齐方式
     */
    export type UniThAlign = _UniThAlign;
    /**
     * @desc 筛选类型
     */
    export type UniThFilterType = _UniThFilterType;
    /**
     * @desc 筛选数据
     */
    export interface UniThFilterData extends _UniThFilterData {}
    export interface UniThOnSortChangeDetail extends _UniThOnSortChangeDetail {}
    /**
     * @desc 点击排序时触发
     */
    export interface UniThOnSortChange extends _UniThOnSortChange {}
    export interface UniThOnFilterChangeDetail extends _UniThOnFilterChangeDetail {}
    /**
     * @desc 筛选数据时触发
     */
    export interface UniThOnFilterChange extends _UniThOnFilterChange {}
    export interface UniThProps extends _UniThProps {}
    export type UniTh = _UniTh;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 用于展示一个或多个文字标签，可点击切换选中、不选中的状态
     */
    UniTh: _UniTh;
  }
}
