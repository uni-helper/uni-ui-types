import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 数据对象
 */
export interface UniIndexedListOption {
  /**
   * @desc 索引标题
   */
  letter: string;
  /**
   * @desc 索引
   */
  data: string[];
}

export interface UniIndexedListProps {
  /**
   * @desc 索引列表需要的数据对象
   */
  options: UniIndexedListOption[];
  /**
   * @desc 展示模式
   * @desc true 展示默认
   * @desc false 展示选择
   * @desc 默认为 false
   */
  showSelect: boolean;
  /**
   * @desc 点击触发
   */
  onClick: (event: { item: UniIndexedListOption; select: UniIndexedListOption[] }) => void;
}

/**
 * @desc 展示索引列表
 */
export type UniIndexedList = Component<Partial<UniIndexedListProps>>;
