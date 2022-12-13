import { Component } from '@uni-helper/uni-app-types';
import { UniIconsType } from './UniIcons';

/**
 * @desc 选项
 */
interface _UniGoodsNavOption {
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

interface _UniGoodsNavOnClickDetail {
  index: number;
  content: _UniGoodsNavOption;
}

/**
 * @desc 左侧点击触发
 */
interface _UniGoodsNavOnClick {
  (detail: _UniGoodsNavOnClickDetail): void;
}

/**
 * @desc 按钮
 */
interface _UniGoodsNavButton {
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

interface _UniGoodsNavOnButtonClickDetail {
  index: number;
  content: _UniGoodsNavButton;
}

/**
 * @desc 右侧点击触发
 */
interface _UniGoodsNavOnButtonClick {
  (detail: _UniGoodsNavOnButtonClickDetail): void;
}

interface _UniGoodsNavProps {
  /**
   * @desc 选项
   */
  options: _UniGoodsNavOption[];
  /**
   * @desc 组件按钮组
   */
  buttonGroup: _UniGoodsNavButton[];
  /**
   * @desc 按钮是否平铺
   * @desc 默认为 false
   */
  fill: boolean;
  /**
   * @desc 左侧点击触发
   */
  onClick: _UniGoodsNavOnClick;
  /**
   * @desc 右侧点击触发
   */
  onButtonClick: _UniGoodsNavOnButtonClick;
}

/**
 * @desc 商品加入购物车，立即购买
 */
type _UniGoodsNav = Component<Partial<_UniGoodsNavProps>>;

export {
  _UniGoodsNavOption as UniGoodsNavOption,
  _UniGoodsNavOnClickDetail as UniGoodsNavOnClickDetail,
  _UniGoodsNavOnClick as UniGoodsNavOnClick,
  _UniGoodsNavOnButtonClickDetail as UniGoodsNavOnButtonClickDetail,
  _UniGoodsNavOnButtonClick as UniGoodsNavOnButtonClick,
  _UniGoodsNavButton as UniGoodsNavButton,
  _UniGoodsNavProps as UniGoodsNavProps,
  _UniGoodsNav as UniGoodsNav,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 选项
     */
    export interface UniGoodsNavOption extends _UniGoodsNavOption {}
    export interface UniGoodsNavOnClickDetail extends _UniGoodsNavOnClickDetail {}
    /**
     * @desc 左侧点击触发
     */
    export interface UniGoodsNavOnClick extends _UniGoodsNavOnClick {}
    /**
     * @desc 按钮
     */
    export interface UniGoodsNavButton extends _UniGoodsNavButton {}
    export interface UniGoodsNavOnButtonClickDetail extends _UniGoodsNavOnButtonClickDetail {}
    /**
     * @desc 右侧点击触发
     */
    export interface UniGoodsNavOnButtonClick extends _UniGoodsNavOnButtonClick {}

    export interface _UniGoodsNavProps extends _UniGoodsNavProps {}
    /**
     * @desc 商品加入购物车，立即购买
     */
    export type UniGoodsNav = _UniGoodsNav;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 商品加入购物车，立即购买
     */
    UniGoodsNav: _UniGoodsNav;
  }
}
