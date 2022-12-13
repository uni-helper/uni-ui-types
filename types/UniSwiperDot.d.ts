import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 指示点的类型
 */
type _UniSwiperDotMode = 'default' | 'round' | 'nav' | 'indexes';

/**
 * @desc 指示点样式
 */
interface _UniSwiperDotDotsStyles {
  /**
   * @desc 指示点宽度
   * @desc mode="nav"、mode="indexes" 时无效
   * @desc 默认为 8
   */
  width: number;
  /**
   * @desc 指示点距 swiper 底部的高度
   * @desc 默认为 10
   */
  bottom: number;
  /**
   * @desc 指示点前景色
   * @desc mode="nav"、mode="indexes" 时有效
   * @desc 默认为 #ffffff
   */
  color: string;
  /**
   * @desc 未选择指示点背景色
   * @desc 默认为 rgba(0, 0, 0, 0.3)
   */
  backgroundColor: string;
  /**
   * @desc 未选择指示点边框样式
   * @desc 默认为 1px rgba(0, 0, 0, 0.3) solid
   */
  border: string;
  /**
   * @desc 已选择指示点背景色
   * @desc mode="nav" 时无效
   * @desc 默认为 #333333
   */
  selectedBackgroundColor: string;
  /**
   * @desc 已选择指示点边框样式
   * @desc mode="nav" 时无效
   * @desc 默认为 1px rgba(0, 0, 0, 0.9) solid
   */
  selectedBorder: string;
}

interface _UniSwiperDotProps {
  /**
   * @desc 当前指示点索引
   * @desc 必须是通过 swiper 的 change 事件获取到的 e.detail.current
   */
  current: number;
  /**
   * @desc 指示点类型
   */
  mode: _UniSwiperDotMode;
  /**
   * @desc 显示的内容字段
   * @desc mode="nav" 时有效
   */
  field: string;
  /**
   * @desc 轮播图数据
   */
  info: any[];
  /**
   * @desc 指示点样式
   */
  dotsStyles: _UniSwiperDotDotsStyles;
}

/**
 * @desc 轮播图指示点
 */
type _UniSwiperDot = Component<Partial<_UniSwiperDotProps>>;

export {
  _UniSwiperDotMode as UniSwiperDotMode,
  _UniSwiperDotDotsStyles as UniSwiperDotDotsStyles,
  _UniSwiperDotProps as UniSwiperDotProps,
  _UniSwiperDot as UniSwiperDot,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 指示点的类型
     */
    export type UniSwiperDotMode = _UniSwiperDotMode;
    /**
     * @desc 指示点样式
     */
    export interface UniSwiperDotDotsStyles extends _UniSwiperDotDotsStyles {}
    export interface UniSwiperDotProps extends _UniSwiperDotProps {}
    export type UniSwiperDot = _UniSwiperDot;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniSwiperDot: _UniSwiperDot;
  }
}
