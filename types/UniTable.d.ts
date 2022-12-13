import { CustomEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 空字符串 单选
 * @desc selection 多选
 */
type _UniTableType = '' | 'selection';

/**
 * @desc 选中全部行
 */
interface _UniTableSelectionAll {
  (): void;
}

/**
 * @desc 用于多选表格，切换某一行的选中状态
 * @desc 如果使用了第二个参数，则要设置这一行选中与否
 */
interface _UniTableToggleRowSelection {
  (indexes: number[], selected?: boolean): void;
}

/**
 * @desc 用于多选表格，清空用户的选择
 */
interface _UniTableClearSelection {
  (): void;
}

/**
 * @desc 用于多选表格，切换所有行的选中状态
 */
interface _UniTableToggleAllSelection {
  (): void;
}

interface _UniTableOnSelectionChangeDetail {
  value: any[];
  index: any[];
}

/**
 * @desc 开启多选时，当选择项发生变化时会触发该事件
 */
interface _UniTableOnSelectionChange {
  (event: CustomEvent<_UniTableOnSelectionChangeDetail>): void;
}

/**
 * @desc 表格属性
 */
interface _UniTableProps {
  /**
   * @desc 是否带有纵向边框
   * @desc 默认为 false
   */
  border: boolean;
  /**
   * @desc 是否显示斑马线样式
   * @desc 默认为 true
   */
  stripe: boolean;
  /**
   * @desc 空字符串 单选
   * @desc selection 多选
   * @desc 默认为 空字符串
   */
  type?: _UniTableType;
  /**
   * @desc 空数据时显示的文本内容
   * @desc 默认为 没有更多数据
   */
  emptyText: string;
  /**
   * @desc 是否显示加载中
   * @desc 默认为 false
   */
  loading: boolean;
  /**
   * @desc 选中全部行
   */
  selectionAll: _UniTableSelectionAll;
  /**
   * @desc 用于多选表格，切换某一行的选中状态
   * @desc 如果使用了第二个参数，则要设置这一行选中与否
   */
  toggleRowSelection: _UniTableToggleRowSelection;
  /**
   * @desc 用于多选表格，清空用户的选择
   */
  clearSelection: _UniTableClearSelection;
  /**
   * @desc 用于多选表格，切换所有行的选中状态
   */
  toggleAllSelection: _UniTableToggleAllSelection;
  /**
   * @desc 开启多选时，当选择项发生变化时会触发该事件
   */
  onSelectionChange: _UniTableOnSelectionChange;
}

/**
 * @desc 表格
 */
type _UniTable = Component<Partial<_UniTableProps>>;

export {
  _UniTableType as UniTableType,
  _UniTableSelectionAll as UniTableSelectionAll,
  _UniTableToggleRowSelection as UniTableToggleRowSelection,
  _UniTableClearSelection as UniTableClearSelection,
  _UniTableToggleAllSelection as UniTableToggleAllSelection,
  _UniTableOnSelectionChangeDetail as UniTableOnSelectionChangeDetail,
  _UniTableOnSelectionChange as UniTableOnSelectionChange,
  _UniTableProps as UniTableProps,
  _UniTable as UniTable,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 空字符串 单选
     * @desc selection 多选
     */
    export type UniTableType = _UniTableType;
    /**
     * @desc 选中全部行
     */
    export interface UniTableSelectionAll extends _UniTableSelectionAll {}
    /**
     * @desc 用于多选表格，切换某一行的选中状态
     * @desc 如果使用了第二个参数，则要设置这一行选中与否
     */
    export interface UniTableToggleRowSelection extends _UniTableToggleRowSelection {}
    /**
     * @desc 用于多选表格，清空用户的选择
     */
    export interface UniTableClearSelection extends _UniTableClearSelection {}
    /**
     * @desc 用于多选表格，切换所有行的选中状态
     */
    export interface UniTableToggleAllSelection extends _UniTableToggleAllSelection {}
    export interface UniTableOnSelectionChangeDetail extends _UniTableOnSelectionChangeDetail {}
    /**
     * @desc 开启多选时，当选择项发生变化时会触发该事件
     */
    export interface UniTableOnSelectionChange extends _UniTableOnSelectionChange {}
    /**
     * @desc 表格属性
     */
    export interface UniTableProps extends _UniTableProps {}
    /**
     * @desc 表格
     */
    export type UniTable = _UniTable;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 表格
     */
    UniTable: _UniTable;
  }
}
