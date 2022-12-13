import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 收藏按钮文字
 */
interface _UniFavContentText {
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

/**
 * @desc 点击触发
 */
interface _UniFavOnClick {
  (event: BaseEvent): void;
}

interface _UniFavProps {
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
  contentText: _UniFavContentText;
  /**
   * @desc 点击触发
   */
  onClick: _UniFavOnClick;
}

/**
 * @desc 用于收藏功能，可点击切换选中、不选中的状态
 */
type _UniFav = Component<Partial<_UniFavProps>>;

export {
  _UniFavContentText as UniFavContentText,
  _UniFavOnClick as UniFavOnClick,
  _UniFavProps as UniFavProps,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 收藏按钮文字
     */
    export interface UniFavContentText extends _UniFavContentText {}
    /**
     * @desc 点击触发
     */
    export interface UniFavOnClick extends _UniFavOnClick {}
    export interface UniFavProps extends _UniFavProps {}
    /**
     * @desc 用于收藏功能，可点击切换选中、不选中的状态
     */
    export type UniFav = _UniFav;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 用于收藏功能，可点击切换选中、不选中的状态
     */
    UniFav: _UniFav;
  }
}
