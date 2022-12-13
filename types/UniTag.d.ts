import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 大小尺寸
 * @desc normal 正常
 * @desc small 小
 */
type _UniTagSize = 'normal' | 'small';

/**
 * @desc 颜色类型
 * @desc default 灰色
 * @desc primary 蓝色
 * @desc success 绿色
 * @desc warning 黄色
 * @desc error 红色
 * @desc royal 紫色
 */
type _UniTagType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'royal';

/**
 * @desc 点击触发
 */
interface _UniTagOnClick {
  (event: BaseEvent): void;
}

interface _UniTagProps {
  /**
   * @desc 标签内容
   */
  text: string;
  /**
   * @desc 大小尺寸
   * @desc normal 正常
   * @desc small 小
   * @desc 默认为 normal
   */
  size: _UniTagSize;
  /**
   * @desc 颜色类型
   * @desc default 灰色
   * @desc primary 蓝色
   * @desc success 绿色
   * @desc warning 黄色
   * @desc error 红色
   * @desc royal 紫色
   * @desc 默认为 default
   */
  type: _UniTagType;
  /**
   * @desc 是否为禁用状态
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 是否无需背景颜色
   * @desc 默认为 false
   */
  inverted: boolean;
  /**
   * @desc 是否为圆角
   * @desc 默认为 false
   */
  circle: boolean;
  /**
   * @desc 点击触发
   */
  onClick: _UniTagOnClick;
}

/**
 * @desc 用于展示一个或多个文字标签，可点击切换选中、不选中的状态
 */
type _UniTag = Component<Partial<_UniTagProps>>;

export {
  _UniTagSize as UniTagSize,
  _UniTagType as UniTagType,
  _UniTagOnClick as UniTagOnClick,
  _UniTagProps as UniTagProps,
  _UniTag as UniTag,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 大小尺寸
     * @desc normal 正常
     * @desc small 小
     */
    export type UniTagSize = _UniTagSize;
    /**
     * @desc 颜色类型
     * @desc default 灰色
     * @desc primary 蓝色
     * @desc success 绿色
     * @desc warning 黄色
     * @desc error 红色
     * @desc royal 紫色
     */
    export type UniTagType = _UniTagType;
    /**
     * @desc 点击触发
     */
    export interface UniTagOnClick extends _UniTagOnClick {}
    export interface UniTagProps extends _UniTagProps {}
    /**
     * @desc 用于展示一个或多个文字标签，可点击切换选中、不选中的状态
     */
    export type UniTag = _UniTag;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 用于展示一个或多个文字标签，可点击切换选中、不选中的状态
     */
    UniTag: _UniTag;
  }
}
