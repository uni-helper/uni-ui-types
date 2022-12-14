import { Component } from '@uni-helper/uni-app-types';

/** 评分 */
type _UniRateValue = number;

interface _UniRateOnChangeDetail {
  value: _UniRateValue;
}

/** 值改变时触发 */
interface _UniRateOnChange {
  (detail: _UniRateOnChangeDetail): void;
}

/** 评分属性 */
interface _UniRateProps {
  /**
   * 当前评分
   *
   * 默认为 0
   */
  value: _UniRateValue;
  /**
   * 未选中状态的星星颜色
   *
   * 默认为 #ececec
   */
  color: string;
  /**
   * 选中状态的星星颜色
   *
   * 默认为 #ffca3e
   */
  activeColor: string;
  /**
   * 禁用状态的星星颜色
   *
   * 默认为 #c0c0c0
   */
  disabledColor: string;
  /**
   * 星星的大小
   *
   * 默认为 24
   */
  size: number;
  /**
   * 最大评分评分数量
   *
   * 默认为 5
   */
  max: number;
  /**
   * Margin 星星的间距
   *
   * 单位为 px
   *
   * 默认为 0
   */
  margin: number;
  /**
   * 是否显示实心星星
   *
   * 默认为 true
   */
  isFill: boolean;
  /**
   * 是否为禁用状态
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 是否为只读状态
   *
   * 默认为 false
   */
  readonly: boolean;
  /**
   * 是否展示半星
   *
   * 默认为 false
   */
  allowHalf: boolean;
  /**
   * 是否支持滑动手势
   *
   * 默认为 true
   */
  touchable: boolean;
  /** 值改变时触发 */
  onChange: _UniRateOnChange;
}

/** 评分组件，多用于购买商品后，对商品进行评价等场景 */
type _UniRate = Component<Partial<_UniRateProps>>;

export {
  _UniRateValue as UniRateValue,
  _UniRateOnChangeDetail as UniRateOnChangeDetail,
  _UniRateOnChange as UniRateOnChange,
  _UniRateProps as UniRateProps,
  _UniRate as UniRate,
};

declare global {
  namespace UniHelper {
    /** 评分 */
    export type UniRateValue = _UniRateValue;
    export interface UniRateOnChangeDetail extends _UniRateOnChangeDetail {}
    /** 值改变时触发 */
    export interface UniRateOnChange extends _UniRateOnChange {}
    /** 评分属性 */
    export interface UniRateProps extends _UniRateProps {}
    /** 评分组件，多用于购买商品后，对商品进行评价等场景 */
    export type UniRate = _UniRate;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 评分组件，多用于购买商品后，对商品进行评价等场景 */
    UniRate: _UniRate;
  }
}
