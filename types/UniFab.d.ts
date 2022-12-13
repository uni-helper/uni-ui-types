import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 可选样式配置项
 */
interface _UniFabPattern {
  /**
   * @desc 文字默认颜色
   * @desc 默认为 #3c3e49
   */
  color: string;
  /**
   * @desc 文字选中时的颜色
   * @desc 默认为 #007aff
   */
  selectedColor: string;
  /**
   * @desc 背景色
   * @desc 默认为 #ffffff
   */
  backgroundColor: string;
  /**
   * @desc 按钮背景色
   * @desc 默认为 #3c3e49
   */
  buttonColor: string;
}

/**
 * @desc 水平对齐方式
 * @desc left 左对齐
 * @desc right 右对齐
 */
type _UniFabHorizontal = 'left' | 'right';

/**
 * @desc 垂直对齐方式
 * @desc bottom 下对齐
 * @desc top 上对齐
 */
type _UniFabVertical = 'bottom' | 'right';

/**
 * @desc 展开菜单显示方式
 * @desc horizontal 水平显示
 * @desc vertical 垂直显示
 */
type _UniFabDirection = 'horizontal' | 'vertical';

/**
 * @desc 展开菜单内容配置项
 */
interface _UniFabContentElement {
  /**
   * @desc 图片路径
   */
  iconPath: string;
  /**
   * @desc 选中后图片路径
   */
  selectedIconPath: string;
  /**
   * @desc 文字
   */
  text: string;
  /**
   * @desc 是否选中当前
   */
  active: boolean;
}

/**
 * @desc 展开菜单内容配置
 */
type _UniFabContent = _UniFabContentElement[];

interface _UniFabOnTriggerDetail {
  index: number;
  item: _UniFabContentElement;
}

/**
 * @desc 展开菜单点击事件，返回点击信息
 */
interface _UniFabOnTrigger {
  (detail: _UniFabOnTriggerDetail): void;
}

/**
 * @desc 悬浮按钮点击事件
 */
interface _UniFabOnFabClick {
  (event: BaseEvent): void;
}

interface _UniFabProps {
  /**
   * @desc 可选样式配置项
   */
  pattern: _UniFabPattern;
  /**
   * @desc 水平对齐方式
   * @desc left 左对齐
   * @desc right 右对齐
   * @desc 默认为 left
   */
  horizontal: _UniFabHorizontal;
  /**
   * @desc 垂直对齐方式
   * @desc bottom 下对齐
   * @desc top 上对齐
   * @desc 默认为 bottom
   */
  vertical: _UniFabVertical;
  /**
   * @desc 展开菜单显示方式
   * @desc horizontal 水平显示
   * @desc vertical 垂直显示
   * @desc 默认为 horizontal
   */
  direction: _UniFabDirection;
  /**
   * @desc 是否使用弹出菜单
   * @desc 默认为 true
   */
  popMenu: boolean;
  /**
   * @desc 展开菜单内容配置
   */
  content: _UniFabContent;
  /**
   * @desc 展开菜单点击事件，返回点击信息
   */
  onTrigger: _UniFabOnTrigger;
  /**
   * @desc 悬浮按钮点击事件
   */
  onFabClick: _UniFabOnFabClick;
}

/**
 * @desc 点击可展开一个图形按钮菜单
 */
type _UniFab = Component<Partial<_UniFabProps>>;

export {
  _UniFabPattern as UniFabPattern,
  _UniFabHorizontal as UniFabHorizontal,
  _UniFabVertical as UniFabVertical,
  _UniFabDirection as UniFabDirection,
  _UniFabContentElement as UniFabContentElement,
  _UniFabContent as UniFabContent,
  _UniFabOnTriggerDetail as UniFabOnTriggerDetail,
  _UniFabOnTrigger as UniFabOnTrigger,
  _UniFabOnFabClick as UniFabOnFabClick,
  _UniFabProps as UniFabProps,
  _UniFab as UniFab,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 可选样式配置项
     */
    export type UniFabPattern = _UniFabPattern;
    /**
     * @desc 水平对齐方式
     * @desc left 左对齐
     * @desc right 右对齐
     */
    export type UniFabHorizontal = _UniFabHorizontal;
    /**
     * @desc 垂直对齐方式
     * @desc bottom 下对齐
     * @desc top 上对齐
     */
    export type UniFabVertical = _UniFabVertical;
    /**
     * @desc 展开菜单显示方式
     * @desc horizontal 水平显示
     * @desc vertical 垂直显示
     */
    export type UniFabDirection = _UniFabDirection;
    /**
     * @desc 展开菜单内容配置项
     */
    export interface UniFabContentElement extends _UniFabContentElement {}
    /**
     * @desc 展开菜单内容配置
     */
    export type UniFabContent = _UniFabContent;
    export interface UniFabOnTriggerDetail extends _UniFabOnTriggerDetail {}
    /**
     * @desc 展开菜单点击事件，返回点击信息
     */
    export interface UniFabOnTrigger extends _UniFabOnTrigger {}
    /**
     * @desc 悬浮按钮点击事件
     */
    export interface UniFabOnFabClick extends _UniFabOnFabClick {}
    export interface UniFabProps extends _UniFabProps {}
    /**
     * @desc 点击可展开一个图形按钮菜单
     */
    export type UniFab = _UniFab;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 点击可展开一个图形按钮菜单
     */
    UniFab: _UniFab;
  }
}
