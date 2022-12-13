import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 评分
 */
type _UniRateValue = number;

interface _UniRateOnChangeDetail {
  value: _UniRateValue;
}

/**
 * @desc 值改变时触发
 */
interface _UniRateOnChange {
  (detail: _UniRateOnChangeDetail): void;
}

/**
 * @desc 评分属性
 */
interface _UniRateProps {
  /**
   * @desc 当前评分
   * @desc 默认为 0
   */
  value: _UniRateValue;
  /**
   * @desc 未选中状态的星星颜色
   * @desc 默认为 #ececec
   */
  color: string;
  /**
   * @desc 选中状态的星星颜色
   * @desc 默认为 #ffca3e
   */
  activeColor: string;
  /**
   * @desc 禁用状态的星星颜色
   * @desc 默认为 #c0c0c0
   */
  disabledColor: string;
  /**
   * @desc 星星的大小
   * @desc 默认为 24
   */
  size: number;
  /**
   * @desc 最大评分评分数量
   * @desc 默认为 5
   */
  max: number;
  /**
   * @desc margin 星星的间距
   * @desc 单位为 px
   * @desc 默认为 0
   */
  margin: number;
  /**
   * @desc 是否显示实心星星
   * @desc 默认为 true
   */
  isFill: boolean;
  /**
   * @desc 是否为禁用状态
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 是否为只读状态
   * @desc 默认为 false
   */
  readonly: boolean;
  /**
   * @desc 是否展示半星
   * @desc 默认为 false
   */
  allowHalf: boolean;
  /**
   * @desc 是否支持滑动手势
   * @desc 默认为 true
   */
  touchable: boolean;
  /**
   * @desc 值改变时触发
   */
  onChange: _UniRateOnChange;
}

/**
 * @desc 评分组件，多用于购买商品后，对商品进行评价等场景
 */
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
    /**
     * @desc 评分
     */
    export type UniRateValue = _UniRateValue;
    export interface UniRateOnChangeDetail extends _UniRateOnChangeDetail {}
    /**
     * @desc 值改变时触发
     */
    export interface UniRateOnChange extends _UniRateOnChange {}
    /**
     * @desc 评分属性
     */
    export interface UniRateProps extends _UniRateProps {}
    /**
     * @desc 评分组件，多用于购买商品后，对商品进行评价等场景
     */
    export type UniRate = _UniRate;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 评分组件，多用于购买商品后，对商品进行评价等场景
     */
    UniRate: _UniRate;
  }
}
