import { Component } from '@uni-helper/uni-app-types';

export interface UniRateProps {
  /**
   * @desc 当前评分
   * @desc 默认为 0
   */
  value: number;
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
  onChange: (event: { value: UniRateProps['value'] }) => void;
}

/**
 * @desc 评分组件，多用于购买商品后，对商品进行评价等场景
 */
export type UniRate = Component<Partial<UniRateProps>>;
