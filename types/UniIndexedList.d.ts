import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 数据对象
 */
interface _UniIndexedListOption {
  /**
   * @desc 索引标题
   */
  letter: string;
  /**
   * @desc 索引
   */
  data: string[];
}

interface _UniIndexedListOnClickDetail {
  item: _UniIndexedListOption;
  select: _UniIndexedListOption[];
}

/**
 * @desc 点击触发
 */
interface _UniIndexedListOnClick {
  (detail: _UniIndexedListOnClickDetail): void;
}

/**
 * @desc 索引列表属性
 */
interface _UniIndexedListProps {
  /**
   * @desc 索引列表需要的数据对象
   */
  options: _UniIndexedListOption[];
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
  onClick: _UniIndexedListOnClick;
}

/**
 * @desc 索引列表
 */
type _UniIndexedList = Component<Partial<_UniIndexedListProps>>;

export {
  _UniIndexedListOption as UniIndexedListOption,
  _UniIndexedListOnClickDetail as UniIndexedListOnClickDetail,
  _UniIndexedListOnClick as UniIndexedListOnClick,
  _UniIndexedListProps as UniIndexedListProps,
  _UniIndexedList as UniIndexedList,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 数据对象
     */
    export interface UniIndexedListOption extends _UniIndexedListOption {}
    export interface UniIndexedListOnClickDetail extends _UniIndexedListOnClickDetail {}
    /**
     * @desc 点击触发
     */
    export interface _UniIndexedListOnClick extends _UniIndexedListOnClick {}
    /**
     * @desc 索引列表属性
     */
    export interface UniIndexedListProps extends _UniIndexedListProps {}
    /**
     * @desc 索引列表
     */
    export type UniIndexedList = _UniIndexedList;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 索引列表
     */
    UniIndexedList: _UniIndexedList;
  }
}
