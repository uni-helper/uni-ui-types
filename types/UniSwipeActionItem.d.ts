import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 关闭组件
 * @desc autoClose 为 false 时有效
 */
export type UniSwipeActionItemShow = 'left' | 'right' | 'none';

/**
 * @desc 选项内容及样式
 */
export interface UniSwipeActionItemOption {
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

export interface UniSwipeActionItemProps {
  /**
   * @desc 其他组件开启的时候，当前组件是否自动关闭
   * @desc 默认为 true
   */
  autoClose: boolean;
  /**
   * @desc 关闭组件
   * @desc autoClose 为 false 时有效
   */
  show: UniSwipeActionItemShow;
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
  leftOptions: UniSwipeActionItemOption | UniSwipeActionItemOption[];
  /**
   * @desc 右侧选项内容及样式
   */
  rightOptions: UniSwipeActionItemOption | UniSwipeActionItemOption[];
  /**
   * @desc 点击时触发
   */
  onClick: (event: { content: UniSwipeActionItemOption; index: number }) => void;
  /**
   * @desc 打开或关闭时触发
   */
  onChange: (show: UniSwipeActionItemShow) => void;
}

export type UniSwipeActionItem = Component<Partial<UniSwipeActionItemProps>>;
