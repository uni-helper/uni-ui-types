import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 分段器样式类型
 * @desc button 按钮
 * @desc text 文字
 */
export type UniSegmentedControlStyleType = 'button' | 'text';

export interface UniSegmentedControlProps {
  /**
   * @desc 当前选中的索引
   * @desc 默认为 0
   */
  current: number;
  /**
   * @desc 分段器样式类型
   * @desc button 按钮
   * @desc text 文字
   * @desc 默认为 button
   */
  styleType: UniSegmentedControlStyleType;
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
  onClickItem: (event: { currentIndex: UniSegmentedControlProps['current'] }) => void;
}

/**
 * @desc 分段器，用作不同视图的显示
 */
export type UniSegmentedControl = Component<Partial<UniSegmentedControlProps>>;
