import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 当前选中的索引
 */
type _UniSegmentedControlCurrent = number;

/**
 * @desc 分段器样式类型
 * @desc button 按钮
 * @desc text 文字
 */
type _UniSegmentedControlStyleType = 'button' | 'text';

interface _UniSegmentedControlOnClickItemDetail {
  currentIndex: _UniSegmentedControlCurrent;
}

/**
 * @desc 点击时触发
 */
interface _UniSegmentedControlOnClickItem {
  (detail: _UniSegmentedControlOnClickItemDetail): void;
}

/**
 * @desc 分段器属性
 */
interface _UniSegmentedControlProps {
  /**
   * @desc 当前选中的索引
   * @desc 默认为 0
   */
  current: _UniSegmentedControlCurrent;
  /**
   * @desc 分段器样式类型
   * @desc button 按钮
   * @desc text 文字
   * @desc 默认为 button
   */
  styleType: _UniSegmentedControlStyleType;
  /**
   * @desc 选中的标签背景色与边框颜色
   * @desc 默认为 #007aff
   */
  activeColor: string;
  /**
   * @desc 选项
   */
  values: string[];
  /**
   * @desc 点击时触发
   */
  onClickItem: _UniSegmentedControlOnClickItem;
}

/**
 * @desc 分段器，用作不同视图的显示
 */
type _UniSegmentedControl = Component<Partial<_UniSegmentedControlProps>>;

export {
  _UniSegmentedControlCurrent as UniSegmentedControlCurrent,
  _UniSegmentedControlStyleType as UniSegmentedControlStyleType,
  _UniSegmentedControlOnClickItemDetail as UniSegmentedControlOnClickItemDetail,
  _UniSegmentedControlOnClickItem as UniSegmentedControlOnClickItem,
  _UniSegmentedControlProps as UniSegmentedControlProps,
  _UniSegmentedControl as UniSegmentedControl,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 当前选中的索引
     */
    export type UniSegmentedControlCurrent = _UniSegmentedControlCurrent;
    /**
     * @desc 分段器样式类型
     * @desc button 按钮
     * @desc text 文字
     */
    export type UniSegmentedControlStyleType = _UniSegmentedControlStyleType;
    export interface UniSegmentedControlOnClickItemDetail
      extends _UniSegmentedControlOnClickItemDetail {}
    /**
     * @desc 点击时触发
     */
    export interface UniSegmentedControlOnClickItem extends _UniSegmentedControlOnClickItem {}
    /**
     * @desc 分段器属性
     */
    export interface UniSegmentedControlProps extends _UniSegmentedControlProps {}
    /**
     * @desc 分段器，用作不同视图的显示
     */
    export type UniSegmentedControl = _UniSegmentedControl;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 分段器，用作不同视图的显示
     */
    UniSegmentedControl: _UniSegmentedControl;
  }
}
