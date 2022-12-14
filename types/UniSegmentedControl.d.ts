import { Component } from '@uni-helper/uni-app-types';

/** 当前选中的索引 */
type _UniSegmentedControlCurrent = number;

/**
 * 分段器样式类型
 *
 * Button 按钮
 *
 * Text 文字
 */
type _UniSegmentedControlStyleType = 'button' | 'text';

interface _UniSegmentedControlOnClickItemDetail {
  currentIndex: _UniSegmentedControlCurrent;
}

/** 点击时触发 */
interface _UniSegmentedControlOnClickItem {
  (detail: _UniSegmentedControlOnClickItemDetail): void;
}

/** 分段器属性 */
interface _UniSegmentedControlProps {
  /**
   * 当前选中的索引
   *
   * 默认为 0
   */
  current: _UniSegmentedControlCurrent;
  /**
   * 分段器样式类型
   *
   * Button 按钮
   *
   * Text 文字
   *
   * 默认为 button
   */
  styleType: _UniSegmentedControlStyleType;
  /**
   * 选中的标签背景色与边框颜色
   *
   * 默认为 #007aff
   */
  activeColor: string;
  /** 选项 */
  values: string[];
  /** 点击时触发 */
  onClickItem: _UniSegmentedControlOnClickItem;
}

/** 分段器，用作不同视图的显示 */
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
    /** 当前选中的索引 */
    export type UniSegmentedControlCurrent = _UniSegmentedControlCurrent;
    /**
     * 分段器样式类型
     *
     * Button 按钮
     *
     * Text 文字
     */
    export type UniSegmentedControlStyleType = _UniSegmentedControlStyleType;
    export interface UniSegmentedControlOnClickItemDetail
      extends _UniSegmentedControlOnClickItemDetail {}
    /** 点击时触发 */
    export interface UniSegmentedControlOnClickItem extends _UniSegmentedControlOnClickItem {}
    /** 分段器属性 */
    export interface UniSegmentedControlProps extends _UniSegmentedControlProps {}
    /** 分段器，用作不同视图的显示 */
    export type UniSegmentedControl = _UniSegmentedControl;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 分段器，用作不同视图的显示 */
    UniSegmentedControl: _UniSegmentedControl;
  }
}
