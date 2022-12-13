import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 组合框值
 */
type _UniComboxValue = string;

/**
 * @desc 输入时触发
 */
interface _UniComboxOnInput {
  (value: _UniComboxValue): void;
}

/**
 * @desc 组合框属性
 */
interface _UniComboxProps {
  /**
   * @desc 标签文字
   */
  label: string;
  /**
   * @desc 组合框值
   */
  value: _UniComboxValue;
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
  onInput: _UniComboxOnInput;
}

/**
 * @desc 组合框组件，一般用于可以选择也可以输入的表单项
 */
type _UniCombox = Component<Partial<_UniComboxProps>>;

export {
  _UniComboxValue as UniComboxValue,
  _UniComboxOnInput as UniComboxOnInput,
  _UniComboxProps as UniComboxProps,
  _UniCombox as UniCombox,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 组合框值
     */
    export type UniComboxValue = _UniComboxValue;
    /**
     * @desc 输入时触发
     */
    export interface UniComboxOnInput extends _UniComboxOnInput {}
    /**
     * @desc 组合框属性
     */
    export interface UniComboxProps extends _UniComboxProps {}
    /**
     * @desc 组合框组件，一般用于可以选择也可以输入的表单项
     */
    export type UniCombox = _UniCombox;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 组合框组件，一般用于可以选择也可以输入的表单项
     */
    UniCombox: _UniCombox;
  }
}
