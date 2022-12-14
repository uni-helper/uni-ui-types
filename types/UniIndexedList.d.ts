import { Component } from '@uni-helper/uni-app-types';

/** 数据对象 */
interface _UniIndexedListOption {
  /** 索引标题 */
  letter: string;
  /** 索引 */
  data: string[];
}

interface _UniIndexedListOnClickDetail {
  item: _UniIndexedListOption;
  select: _UniIndexedListOption[];
}

/** 点击触发 */
interface _UniIndexedListOnClick {
  (detail: _UniIndexedListOnClickDetail): void;
}

/** 索引列表属性 */
interface _UniIndexedListProps {
  /** 索引列表需要的数据对象 */
  options: _UniIndexedListOption[];
  /**
   * 展示模式
   *
   * True 展示默认
   *
   * False 展示选择
   *
   * 默认为 false
   */
  showSelect: boolean;
  /** 点击触发 */
  onClick: _UniIndexedListOnClick;
}

/** 索引列表 */
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
    /** 数据对象 */
    export interface UniIndexedListOption extends _UniIndexedListOption {}
    export interface UniIndexedListOnClickDetail extends _UniIndexedListOnClickDetail {}
    /** 点击触发 */
    export interface UniIndexedListOnClick extends _UniIndexedListOnClick {}
    /** 索引列表属性 */
    export interface UniIndexedListProps extends _UniIndexedListProps {}
    /** 索引列表 */
    export type UniIndexedList = _UniIndexedList;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 索引列表 */
    UniIndexedList: _UniIndexedList;
  }
}
