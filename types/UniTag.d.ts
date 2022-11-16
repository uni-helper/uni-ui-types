import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 大小尺寸
 * @desc normal 正常
 * @desc small 小
 */
export type UniTagSize = 'normal' | 'small';

/**
 * @desc 颜色类型
 * @desc default 灰色
 * @desc primary 蓝色
 * @desc success 绿色
 * @desc warning 黄色
 * @desc error 红色
 * @desc royal 紫色
 */
export type UniTagType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'royal';

export interface UniTagProps {
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
  size: UniTagSize;
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
  type: UniTagType;
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
  onClick: (event: BaseEvent) => void;
}

/**
 * @desc 用于展示一个或多个文字标签，可点击切换选中、不选中的状态
 */
export type UniTag = Component<Partial<UniTagProps>>;
