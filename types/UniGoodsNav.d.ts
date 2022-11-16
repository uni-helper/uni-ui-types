import { Component } from '@uni-helper/uni-app-types';
import { UniIconsType } from './UniIcons';

/**
 * @desc 选项
 */
export interface UniGoodsNavOption {
  /**
   * @desc 文字
   */
  text: string;
  /**
   * @desc 图标
   */
  icon: UniIconsType;
  /**
   * @desc 右上角数字角标
   */
  info: number;
  /**
   * @desc 角标背景色
   */
  infoBackgroundColor: string;
  /**
   * @desc 角标前景色
   */
  infoColor: string;
}

/**
 * @desc 按钮
 */
export interface UniGoodsNavButton {
  /**
   * @desc 文字
   */
  text: string;
  /**
   * @desc 按钮背景色
   */
  backgroundColor: string;
  /**
   * @desc 字体颜色
   */
  color: string;
}

export interface UniGoodsNavProps {
  /**
   * @desc 选项
   */
  options: UniGoodsNavOption[];
  /**
   * @desc 组件按钮组
   */
  buttonGroup: UniGoodsNavButton[];
  /**
   * @desc 按钮是否平铺
   * @desc 默认为 false
   */
  fill: boolean;
  /**
   * @desc 左侧点击触发
   */
  onClick: (event: { index: number; content: UniGoodsNavOption }) => void;
  /**
   * @desc 右侧点击触发
   */
  onnButtonClick: (event: { index: number; content: UniGoodsNavButton }) => void;
}

/**
 * @desc 商品加入购物车，立即购买
 */
export type UniGoodsNav = Component<Partial<UniGoodsNavProps>>;
