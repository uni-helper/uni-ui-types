import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 点击事件
 */
interface _UniCardOnClick {
  (event: BaseEvent): void;
}

/**
 * @desc 卡片组件属性
 */
interface _UniCardProps {
  /**
   * @desc 标题文字
   */
  title: string;
  /**
   * @desc 副标题文字
   */
  subTitle: string;
  /**
   * @desc 标题额外信息
   */
  extra: string;
  /**
   * @desc 标题左侧缩略图，支持网络图片和本地图片
   * @desc 本地图片需要传入绝对路径
   */
  thumbnail: string;
  /**
   * @desc 封面图，支持网络图片和本地图片
   * @desc 本图片需要传入绝对路径
   */
  cover: string;
  /**
   * @desc 卡片内容是否通栏
   * @desc true 去除 padding
   * @desc false 保留 padding
   * @desc 默认为 false
   */
  isFull: boolean;
  /**
   * @desc 是否开启阴影
   * @desc 默认为 false
   */
  isShadow: boolean;
  /**
   * @desc 卡片阴影
   * @desc 默认为 0px 0px 3px 1px rgba(0, 0, 0, 0.08)
   */
  shadow: string;
  /**
   * @desc 是否显示卡片边框
   * @desc 默认为 true
   */
  border: boolean;
  /**
   * @desc 卡片外边距
   * @desc 默认为 10px
   */
  margin: string;
  /**
   * @desc 卡片内边距
   * @desc 默认为 10px
   */
  spacing: string;
  /**
   * @desc 卡片内容内边距
   * @desc 默认为 10px
   */
  padding: string;
  /**
   * @desc 点击事件
   */
  onClick: _UniCardOnClick;
}

/**
 * @desc 卡片组件通用来显示完整独立的一段信息，同时让用户理解它的作用
 * @desc 例如一篇文章的预览图、作者信息、时间等
 * @desc 卡片通常是更复杂和更详细信息的入口点
 */
type _UniCard = Component<Partial<_UniCardProps>>;

export { _UniCardOnClick as UniCardOnClick, _UniCardProps as UniCardProps, _UniCard as UniCard };

declare global {
  namespace UniHelper {
    /**
     * @desc 点击事件
     */
    export interface UniCardOnClick extends _UniCardOnClick {}
    /**
     * @desc 卡片组件属性
     */
    export interface UniCardProps extends _UniCardProps {}
    /**
     * @desc 卡片组件通用来显示完整独立的一段信息，同时让用户理解它的作用
     * @desc 例如一篇文章的预览图、作者信息、时间等
     * @desc 卡片通常是更复杂和更详细信息的入口点
     */
    export type UniCard = _UniCard;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 卡片组件通用来显示完整独立的一段信息，同时让用户理解它的作用
     * @desc 例如一篇文章的预览图、作者信息、时间等
     * @desc 卡片通常是更复杂和更详细信息的入口点
     */
    UniCard: _UniCard;
  }
}
