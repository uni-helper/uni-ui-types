import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/** 点击事件 */
interface _UniCardOnClick {
  (event: BaseEvent): void;
}

/** 卡片组件属性 */
interface _UniCardProps {
  /** 标题文字 */
  title: string;
  /** 副标题文字 */
  subTitle: string;
  /** 标题额外信息 */
  extra: string;
  /**
   * 标题左侧缩略图，支持网络图片和本地图片
   *
   * 本地图片需要传入绝对路径
   */
  thumbnail: string;
  /**
   * 封面图，支持网络图片和本地图片
   *
   * 本图片需要传入绝对路径
   */
  cover: string;
  /**
   * 卡片内容是否通栏
   *
   * True 去除 padding
   *
   * False 保留 padding
   *
   * 默认为 false
   */
  isFull: boolean;
  /**
   * 是否开启阴影
   *
   * 默认为 false
   */
  isShadow: boolean;
  /**
   * 卡片阴影
   *
   * 默认为 0px 0px 3px 1px rgba(0, 0, 0, 0.08)
   */
  shadow: string;
  /**
   * 是否显示卡片边框
   *
   * 默认为 true
   */
  border: boolean;
  /**
   * 卡片外边距
   *
   * 默认为 10px
   */
  margin: string;
  /**
   * 卡片内边距
   *
   * 默认为 10px
   */
  spacing: string;
  /**
   * 卡片内容内边距
   *
   * 默认为 10px
   */
  padding: string;
  /** 点击事件 */
  onClick: _UniCardOnClick;
}

/**
 * 卡片组件通用来显示完整独立的一段信息，同时让用户理解它的作用
 *
 * 例如一篇文章的预览图、作者信息、时间等
 *
 * 卡片通常是更复杂和更详细信息的入口点
 */
type _UniCard = Component<Partial<_UniCardProps>>;

export { _UniCardOnClick as UniCardOnClick, _UniCardProps as UniCardProps, _UniCard as UniCard };

declare global {
  namespace UniHelper {
    /** 点击事件 */
    export interface UniCardOnClick extends _UniCardOnClick {}
    /** 卡片组件属性 */
    export interface UniCardProps extends _UniCardProps {}
    /**
     * 卡片组件通用来显示完整独立的一段信息，同时让用户理解它的作用
     *
     * 例如一篇文章的预览图、作者信息、时间等
     *
     * 卡片通常是更复杂和更详细信息的入口点
     */
    export type UniCard = _UniCard;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * 卡片组件通用来显示完整独立的一段信息，同时让用户理解它的作用
     *
     * 例如一篇文章的预览图、作者信息、时间等
     *
     * 卡片通常是更复杂和更详细信息的入口点
     */
    UniCard: _UniCard;
  }
}
