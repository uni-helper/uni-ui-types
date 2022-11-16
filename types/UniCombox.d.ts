import { Component } from '@uni-helper/uni-app-types';

export interface UniComboxProps {
  /**
   * @desc 标签文字
   */
  label: string;
  /**
   * @desc 值
   */
  value: string;
  /**
   * @desc 标签宽度
   */
  labelWidth: string;
  /**
   * @desc 输入框占位符
   */
  placeholder: string;
  /**
   * @desc 候选字段
   * @desc 默认为 []
   */
  candidates: string | string[];
  /**
   * @desc 无匹配项时的提示语
   * @desc 默认为 无匹配项
   */
  emptyTips: string;
  /**
   * @desc 输入时触发
   */
  onInput: (value: UniComboxProps['value']) => void;
}

/**
 * @desc 组合框组件，一般用于可以选择也可以输入的表单项
 */
export type UniCombox = Component<Partial<UniComboxProps>>;
