import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/** 值 */
type _UniNumberBoxValue = number;

/** 值改变时触发 */
interface _UniNumberBoxOnChange {
  (value: _UniNumberBoxValue): void;
}

/** 聚焦时触发 */
interface _UniNumberBoxOnFocus {
  (event: BaseEvent): void;
}

/** 失焦时触发 */
interface _UniNumberBoxOnBlur {
  (event: BaseEvent): void;
}

/** 数字输入框属性 */
type _UniNumberBoxProps = Partial<{
  /**
   * 输入框当前值
   *
   * 默认为 0
   */
  value: _UniNumberBoxValue;
  /**
   * 最小值
   *
   * 默认为 0
   */
  min: number;
  /**
   * 最大值
   *
   * 默认为 100
   */
  max: number;
  /**
   * 每次点击改变的间隔大小
   *
   * 默认为 1
   */
  step: number;
  /**
   * 是否为禁用状态
   *
   * 默认为 false
   */
  disabled: boolean;
  /** 值改变时触发 */
  onChange: _UniNumberBoxOnChange;
  /** 聚焦时触发 */
  onFocus: _UniNumberBoxOnFocus;
  /** 失焦时触发 */
  onBlur: _UniNumberBoxOnBlur;
}>;

/** 带加减按钮的数字输入框 */
type _UniNumberBox = Component<_UniNumberBoxProps>;

/** 带加减按钮的数字输入框实例 */
type _UniNumberBoxInstance = InstanceType<_UniNumberBox>;

export {
  _UniNumberBoxValue as UniNumberBoxValue,
  _UniNumberBoxOnChange as UniNumberBoxOnChange,
  _UniNumberBoxOnFocus as UniNumberBoxOnFocus,
  _UniNumberBoxOnBlur as UniNumberBoxOnBlur,
  _UniNumberBoxProps as UniNumberBoxProps,
  _UniNumberBox as UniNumberBox,
  _UniNumberBoxInstance as UniNumberBoxInstance,
};

declare global {
  namespace UniHelper {
    /** 值 */
    export type UniNumberBoxValue = _UniNumberBoxValue;
    /** 值改变时触发 */
    export interface UniNumberBoxOnChange extends _UniNumberBoxOnChange {}
    /** 聚焦时触发 */
    export interface UniNumberBoxOnFocus extends _UniNumberBoxOnFocus {}
    /** 失焦时触发 */
    export interface UniNumberBoxOnBlur extends _UniNumberBoxOnBlur {}
    /** 数字输入框属性 */
    export type UniNumberBoxProps = _UniNumberBoxProps;
    /** 带加减按钮的数字输入框 */
    export type UniNumberBox = _UniNumberBox;
    /** 带加减按钮的数字输入框实例 */
    export type UniNumberBoxInstance = _UniNumberBoxInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 带加减按钮的数字输入框 */
    UniNumberBox: _UniNumberBox;
  }
}
