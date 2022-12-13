import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 关闭组件
 * @desc autoClose 为 false 时有效
 */
type _UniSwipeActionItemShow = 'left' | 'right' | 'none';

/**
 * @desc 选项内容及样式
 */
interface _UniSwipeActionItemOption {
  /**
   * @desc 按钮文字
   */
  text: string;
  /**
   * @desc 按钮样式
   */
  style: {
    /**
     * @desc 背景音乐
     * @desc 默认为 #c7c6cd
     */
    backgroundColor: string;
    /**
     * @desc 文字颜色
     * @desc 默认为 #ffffff
     */
    color: string;
    /**
     * @desc 字体尺寸
     * @desc 默认为 14px
     */
    fontSize: string;
  };
}

interface _UniSwipeActionItemOnClickDetail {
  content: _UniSwipeActionItemOption;
  index: number;
}

/**
 * @desc 点击时触发
 */
interface _UniSwipeActionItemOnClick {
  (detail: _UniSwipeActionItemOnClickDetail): void;
}

/**
 * @desc 打开或关闭时触发
 */
interface _UniSwipeActionItemOnChange {
  (show: _UniSwipeActionItemShow): void;
}

interface _UniSwipeActionItemProps {
  /**
   * @desc 其他组件开启的时候，当前组件是否自动关闭
   * @desc 默认为 true
   */
  autoClose: boolean;
  /**
   * @desc 关闭组件
   * @desc autoClose 为 false 时有效
   */
  show: _UniSwipeActionItemShow;
  /**
   * @desc 滑动阈值
   * @desc 默认为 20
   */
  threshold: number;
  /**
   * @desc 是否禁止滑动
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 左侧选项内容及样式
   */
  leftOptions: _UniSwipeActionItemOption | _UniSwipeActionItemOption[];
  /**
   * @desc 右侧选项内容及样式
   */
  rightOptions: _UniSwipeActionItemOption | _UniSwipeActionItemOption[];
  /**
   * @desc 点击时触发
   */
  onClick: _UniSwipeActionItemOnClick;
  /**
   * @desc 打开或关闭时触发
   */
  onChange: _UniSwipeActionItemOnChange;
}

type _UniSwipeActionItem = Component<Partial<_UniSwipeActionItemProps>>;

export {
  _UniSwipeActionItemShow as UniSwipeActionItemShow,
  _UniSwipeActionItemOption as UniSwipeActionItemOption,
  _UniSwipeActionItemOnClickDetail as UniSwipeActionItemOnClickDetail,
  _UniSwipeActionItemOnClick as UniSwipeActionItemOnClick,
  _UniSwipeActionItemOnChange as UniSwipeActionItemOnChange,
  _UniSwipeActionItemProps as UniSwipeActionItemProps,
  _UniSwipeActionItem as UniSwipeActionItem,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 关闭组件
     * @desc autoClose 为 false 时有效
     */
    export type UniSwipeActionItemShow = _UniSwipeActionItemShow;
    /**
     * @desc 选项内容及样式
     */
    export interface UniSwipeActionItemOption extends _UniSwipeActionItemOption {}
    export interface UniSwipeActionItemOnClickDetail extends _UniSwipeActionItemOnClickDetail {}
    /**
     * @desc 点击时触发
     */
    export interface UniSwipeActionItemOnClick extends _UniSwipeActionItemOnClick {}
    /**
     * @desc 打开或关闭时触发
     */
    export interface UniSwipeActionItemOnChange extends _UniSwipeActionItemOnChange {}
    export interface UniSwipeActionItemProps extends _UniSwipeActionItemProps {}
    export interface UniSwipeActionItem extends _UniSwipeActionItem {}
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniSwipeActionItem: _UniSwipeActionItem;
  }
}
