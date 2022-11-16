import { CustomEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 空字符串 单选
 * @desc selection 多选
 */
export type UniTableType = '' | 'selection';

export interface UniTableProps {
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
  type?: UniTableType;
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
  selectionAll: () => void;
  /**
   * @desc 用于多选表格，切换某一行的选中状态
   * @desc 如果使用了第二个参数，则要设置这一行选中与否
   */
  toggleRowSelection: (indexes: number[], selected?: boolean) => void;
  /**
   * @desc 用于多选表格，清空用户的选择
   */
  clearSelection: () => void;
  /**
   * @desc 用于多选表格，切换所有行的选中状态
   */
  toggleAllSelection: () => void;
  /**
   * @desc 开启多选时，当选择项发生变化时会触发该事件
   */
  onSelectionChange: (
    event: CustomEvent<{
      value: any[];
      index: any[];
    }>,
  ) => void;
}

/**
 * @desc 表格
 */
export type UniTable = Component<Partial<UniTableProps>>;
