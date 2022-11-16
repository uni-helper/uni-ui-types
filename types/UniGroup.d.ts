import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 模式
 * @desc default 默认
 * @desc card 卡片
 */
export type UniGroupMode = 'default' | 'card';

export interface UniGroupProps {
  /**
   * @desc 主标题
   */
  title: string;
  /**
   * @desc 分组间隔
   */
  top: number;
  /**
   * @desc 模式
   * @desc default 默认
   * @desc card 卡片
   * @desc 默认为 default
   */
  mode: UniGroupMode;
}

/**
 * @desc 分组组件可用于将组件分组，添加间隔，以产生明显的区块
 */
export type UniGroup = Component<Partial<UniGroupProps>>;
