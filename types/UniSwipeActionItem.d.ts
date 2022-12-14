import { Component } from '@uni-helper/uni-app-types';

/**
 * 关闭组件
 *
 * AutoClose 为 false 时有效
 */
type _UniSwipeActionItemShow = 'left' | 'right' | 'none';

/** 选项内容及样式 */
interface _UniSwipeActionItemOption {
  /** 按钮文字 */
  text: string;
  /** 按钮样式 */
  style: {
    /**
     * 背景音乐
     *
     * 默认为 #c7c6cd
     */
    backgroundColor: string;
    /**
     * 文字颜色
     *
     * 默认为 #ffffff
     */
    color: string;
    /**
     * 字体尺寸
     *
     * 默认为 14px
     */
    fontSize: string;
  };
}

interface _UniSwipeActionItemOnClickDetail {
  content: _UniSwipeActionItemOption;
  index: number;
}

/** 点击时触发 */
interface _UniSwipeActionItemOnClick {
  (detail: _UniSwipeActionItemOnClickDetail): void;
}

/** 打开或关闭时触发 */
interface _UniSwipeActionItemOnChange {
  (show: _UniSwipeActionItemShow): void;
}

interface _UniSwipeActionItemProps {
  /**
   * 其他组件开启的时候，当前组件是否自动关闭
   *
   * 默认为 true
   */
  autoClose: boolean;
  /**
   * 关闭组件
   *
   * AutoClose 为 false 时有效
   */
  show: _UniSwipeActionItemShow;
  /**
   * 滑动阈值
   *
   * 默认为 20
   */
  threshold: number;
  /**
   * 是否禁止滑动
   *
   * 默认为 false
   */
  disabled: boolean;
  /** 左侧选项内容及样式 */
  leftOptions: _UniSwipeActionItemOption | _UniSwipeActionItemOption[];
  /** 右侧选项内容及样式 */
  rightOptions: _UniSwipeActionItemOption | _UniSwipeActionItemOption[];
  /** 点击时触发 */
  onClick: _UniSwipeActionItemOnClick;
  /** 打开或关闭时触发 */
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
     * 关闭组件
     *
     * AutoClose 为 false 时有效
     */
    export type UniSwipeActionItemShow = _UniSwipeActionItemShow;
    /** 选项内容及样式 */
    export interface UniSwipeActionItemOption extends _UniSwipeActionItemOption {}
    export interface UniSwipeActionItemOnClickDetail extends _UniSwipeActionItemOnClickDetail {}
    /** 点击时触发 */
    export interface UniSwipeActionItemOnClick extends _UniSwipeActionItemOnClick {}
    /** 打开或关闭时触发 */
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
