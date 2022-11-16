import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 对齐方式
 */
export type UniThAlign = 'left' | 'center' | 'right';

/**
 * @desc 筛选类型
 */
export type UniThFilterType = 'search' | 'select' | 'range' | 'date';

/**
 * @desc 筛选数据
 */
export interface UniThFilterData {
  /**
   * @desc 显示内容
   */
  text: string;
  /**
   * @desc 值
   */
  value: string;
}

export interface UniThProps {
  /**
   * @desc 单元格宽度
   */
  width: string;
  /**
   * @desc 对齐方式
   * @desc 默认为 left
   */
  align: UniThAlign;
  /**
   * @desc 筛选类型
   */
  filterType: UniThFilterType;
  /**
   * @desc 筛选数据
   */
  filterData: UniThFilterData[];
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
  onSortChange: (event: { order: 'ascending' | 'descending' | null }) => void;
  /**
   * @desc 筛选数据时触发
   */
  onFilterChange: (event: { filterType: UniThFilterType; filter: string | string[] }) => void;
}

export type UniTh = Component<Partial<UniThProps>>;
