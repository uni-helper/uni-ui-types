import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * 大小尺寸
 *
 * Normal 正常
 *
 * Small 小
 */
type _UniTagSize = 'normal' | 'small';

/**
 * 颜色类型
 *
 * Default 灰色
 *
 * Primary 蓝色
 *
 * Success 绿色
 *
 * Warning 黄色
 *
 * Error 红色
 *
 * Royal 紫色
 */
type _UniTagType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'royal';

/** 点击触发 */
interface _UniTagOnClick {
  (event: BaseEvent): void;
}

interface _UniTagProps {
  /** 标签内容 */
  text: string;
  /**
   * 大小尺寸
   *
   * Normal 正常
   *
   * Small 小
   *
   * 默认为 normal
   */
  size: _UniTagSize;
  /**
   * 颜色类型
   *
   * Default 灰色
   *
   * Primary 蓝色
   *
   * Success 绿色
   *
   * Warning 黄色
   *
   * Error 红色
   *
   * Royal 紫色
   *
   * 默认为 default
   */
  type: _UniTagType;
  /**
   * 是否为禁用状态
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 是否无需背景颜色
   *
   * 默认为 false
   */
  inverted: boolean;
  /**
   * 是否为圆角
   *
   * 默认为 false
   */
  circle: boolean;
  /** 点击触发 */
  onClick: _UniTagOnClick;
}

/** 用于展示一个或多个文字标签，可点击切换选中、不选中的状态 */
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
     * 大小尺寸
     *
     * Normal 正常
     *
     * Small 小
     */
    export type UniTagSize = _UniTagSize;
    /**
     * 颜色类型
     *
     * Default 灰色
     *
     * Primary 蓝色
     *
     * Success 绿色
     *
     * Warning 黄色
     *
     * Error 红色
     *
     * Royal 紫色
     */
    export type UniTagType = _UniTagType;
    /** 点击触发 */
    export interface UniTagOnClick extends _UniTagOnClick {}
    export interface UniTagProps extends _UniTagProps {}
    /** 用于展示一个或多个文字标签，可点击切换选中、不选中的状态 */
    export type UniTag = _UniTag;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 用于展示一个或多个文字标签，可点击切换选中、不选中的状态 */
    UniTag: _UniTag;
  }
}
