import { Component } from '@uni-helper/uni-app-types';
import { UniIconsType } from './UniIcons';

/** 选项 */
interface _UniGoodsNavOption {
  /** 文字 */
  text: string;
  /** 图标 */
  icon: UniIconsType;
  /** 右上角数字角标 */
  info: number;
  /** 角标背景色 */
  infoBackgroundColor: string;
  /** 角标前景色 */
  infoColor: string;
}

interface _UniGoodsNavOnClickDetail {
  index: number;
  content: _UniGoodsNavOption;
}

/** 左侧点击触发 */
interface _UniGoodsNavOnClick {
  (detail: _UniGoodsNavOnClickDetail): void;
}

/** 按钮 */
interface _UniGoodsNavButton {
  /** 文字 */
  text: string;
  /** 按钮背景色 */
  backgroundColor: string;
  /** 字体颜色 */
  color: string;
}

interface _UniGoodsNavOnButtonClickDetail {
  index: number;
  content: _UniGoodsNavButton;
}

/** 右侧点击触发 */
interface _UniGoodsNavOnButtonClick {
  (detail: _UniGoodsNavOnButtonClickDetail): void;
}

interface _UniGoodsNavProps {
  /** 选项 */
  options: _UniGoodsNavOption[];
  /** 组件按钮组 */
  buttonGroup: _UniGoodsNavButton[];
  /**
   * 按钮是否平铺
   *
   * 默认为 false
   */
  fill: boolean;
  /** 左侧点击触发 */
  onClick: _UniGoodsNavOnClick;
  /** 右侧点击触发 */
  onButtonClick: _UniGoodsNavOnButtonClick;
}

/** 商品加入购物车，立即购买 */
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
    /** 选项 */
    export interface UniGoodsNavOption extends _UniGoodsNavOption {}
    export interface UniGoodsNavOnClickDetail extends _UniGoodsNavOnClickDetail {}
    /** 左侧点击触发 */
    export interface UniGoodsNavOnClick extends _UniGoodsNavOnClick {}
    /** 按钮 */
    export interface UniGoodsNavButton extends _UniGoodsNavButton {}
    export interface UniGoodsNavOnButtonClickDetail extends _UniGoodsNavOnButtonClickDetail {}
    /** 右侧点击触发 */
    export interface UniGoodsNavOnButtonClick extends _UniGoodsNavOnButtonClick {}

    export interface UniGoodsNavProps extends _UniGoodsNavProps {}
    /** 商品加入购物车，立即购买 */
    export type UniGoodsNav = _UniGoodsNav;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 商品加入购物车，立即购买 */
    UniGoodsNav: _UniGoodsNav;
  }
}
