import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 值
 */
type _UniNumberBoxValue = number;

/**
 * @desc 值改变时触发
 */
interface _UniNumberBoxOnChange {
  (value: _UniNumberBoxValue): void;
}

/**
 * @desc 聚焦时触发
 */
interface _UniNumberBoxOnFocus {
  (event: BaseEvent): void;
}

/**
 * @desc 失焦时触发
 */
interface _UniNumberBoxOnBlur {
  (event: BaseEvent): void;
}

/**
 * @desc 数字输入框属性
 */
interface _UniNumberBoxProps {
  /**
   * @desc 输入框当前值
   * @desc 默认为 0
   */
  value: _UniNumberBoxValue;
  /**
   * @desc 最小值
   * @desc 默认为 0
   */
  min: number;
  /**
   * @desc 最大值
   * @desc 默认为 100
   */
  max: number;
  /**
   * @desc 每次点击改变的间隔大小
   * @desc 默认为 1
   */
  step: number;
  /**
   * @desc 是否为禁用状态
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 值改变时触发
   */
  onChange: _UniNumberBoxOnChange;
  /**
   * @desc 聚焦时触发
   */
  onFocus: _UniNumberBoxOnFocus;
  /**
   * @desc 失焦时触发
   */
  onBlur: _UniNumberBoxOnBlur;
}

/**
 * @desc 带加减按钮的数字输入框
 */
type _UniNumberBox = Component<Partial<_UniNumberBoxProps>>;

export {
  _UniNumberBoxValue as UniNumberBoxValue,
  _UniNumberBoxOnChange as UniNumberBoxOnChange,
  _UniNumberBoxOnFocus as UniNumberBoxOnFocus,
  _UniNumberBoxOnBlur as UniNumberBoxOnBlur,
  _UniNumberBoxProps as UniNumberBoxProps,
  _UniNumberBox as UniNumberBox,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 值
     */
    export type UniNumberBoxValue = _UniNumberBoxValue;
    /**
     * @desc 值改变时触发
     */
    export interface UniNumberBoxOnChange extends _UniNumberBoxOnChange {}
    /**
     * @desc 聚焦时触发
     */
    export interface UniNumberBoxOnFocus extends _UniNumberBoxOnFocus {}
    /**
     * @desc 失焦时触发
     */
    export interface UniNumberBoxOnBlur extends _UniNumberBoxOnBlur {}
    /**
     * @desc 数字输入框属性
     */
    export interface UniNumberBoxProps extends _UniNumberBoxProps {}
    /**
     * @desc 带加减按钮的数字输入框
     */
    export type UniNumberBox = _UniNumberBox;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 带加减按钮的数字输入框
     */
    UniNumberBox: _UniNumberBox;
  }
}
