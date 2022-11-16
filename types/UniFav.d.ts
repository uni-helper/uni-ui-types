import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 收藏按钮文字
 */
export interface UniFavContentText {
  /**
   * @desc 未收藏文字
   * @desc 默认为 收藏
   */
  contentDefault: string;
  /**
   * @desc 已收藏文字
   * @desc 默认为 已收藏
   */
  contentFav: string;
}

export interface UniFavProps {
  /**
   * @desc 按钮是否带星
   * @desc 默认为 true
   */
  star: boolean;
  /**
   * @desc 未收藏时背景色
   * @desc 默认为 #eeeeee
   */
  bgColor: string;
  /**
   * @desc 已收藏时背景色
   * @desc 默认为 #007aff
   */
  bgColorChecked: string;
  /**
   * @desc 未收藏时文字颜色
   * @desc 默认为 #666666
   */
  fgColor: string;
  /**
   * @desc 已收藏时文字颜色
   * @desc 默认为 #ffffff
   */
  fgColorChecked: string;
  /**
   * @desc 是否为圆角
   * @desc 默认为 false
   */
  circle: boolean;
  /**
   * @desc 是否为已收藏
   * @desc 默认为 false
   */
  checked: boolean;
  /**
   * @desc 收藏按钮文字
   */
  contentText: UniFavContentText;
  /**
   * @desc 点击触发
   */
  onClick: (event: BaseEvent) => void;
}

/**
 * @desc 用于收藏功能，可点击切换选中、不选中的状态
 */
export type UniFav = Component<Partial<UniFavProps>>;
