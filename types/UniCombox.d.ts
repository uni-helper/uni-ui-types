import { Component } from '@uni-helper/uni-app-types';

/** 组合框值 */
type _UniComboxValue = string;

/** 输入时触发 */
interface _UniComboxOnInput {
  (value: _UniComboxValue): void;
}

/** 组合框属性 */
interface _UniComboxProps {
  /** 标签文字 */
  label: string;
  /** 组合框值 */
  value: _UniComboxValue;
  /** 标签宽度 */
  labelWidth: string;
  /** 输入框占位符 */
  placeholder: string;
  /**
   * 候选字段
   *
   * 默认为 []
   */
  candidates: string | string[];
  /**
   * 无匹配项时的提示语
   *
   * 默认为 无匹配项
   */
  emptyTips: string;
  /** 输入时触发 */
  onInput: _UniComboxOnInput;
}

/** 组合框组件，一般用于可以选择也可以输入的表单项 */
type _UniCombox = Component<Partial<_UniComboxProps>>;

export {
  _UniComboxValue as UniComboxValue,
  _UniComboxOnInput as UniComboxOnInput,
  _UniComboxProps as UniComboxProps,
  _UniCombox as UniCombox,
};

declare global {
  namespace UniHelper {
    /** 组合框值 */
    export type UniComboxValue = _UniComboxValue;
    /** 输入时触发 */
    export interface UniComboxOnInput extends _UniComboxOnInput {}
    /** 组合框属性 */
    export interface UniComboxProps extends _UniComboxProps {}
    /** 组合框组件，一般用于可以选择也可以输入的表单项 */
    export type UniCombox = _UniCombox;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 组合框组件，一般用于可以选择也可以输入的表单项 */
    UniCombox: _UniCombox;
  }
}
