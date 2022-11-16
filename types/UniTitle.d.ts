import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 标题类型
 */
export type UniTitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

/**
 * @desc 对齐方式
 * @desc left 左对齐
 * @desc center 居中对齐
 * @desc right 右对齐
 */
export type UniTitleAlign = 'left' | 'center' | 'right';

export interface UniTitleProps {
  /**
   * @desc 标题类型
   */
  type: UniTitleType;
  /**
   * @desc 章节标题内容
   */
  title: string;
  /**
   * @desc 对齐方式
   * @desc left 左对齐
   * @desc center 居中对齐
   * @desc right 右对齐
   */
  align: UniTitleAlign;
  /**
   * @desc 字体颜色
   */
  color: string;
  /**
   * @desc 是否开启统计
   */
  stat: boolean;
}

/**
 * @desc 章节标题，通常用于记录页面标题
 * @desc 使用当前组件，uni-app 如果开启统计，将会自动统计页面标题
 */
export type UniTitle = Component<Partial<UniTitleProps>>;
