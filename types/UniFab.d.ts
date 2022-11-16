import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 可选样式配置项
 */
export interface UniFabPattern {
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
export type UniFabHorizontal = 'left' | 'right';

/**
 * @desc 垂直对齐方式
 * @desc bottom 下对齐
 * @desc top 上对齐
 */
export type UniFabVertical = 'bottom' | 'right';

/**
 * @desc 展开菜单显示方式
 * @desc horizontal 水平显示
 * @desc vertical 垂直显示
 */
export type UniFabDirection = 'horizontal' | 'vertical';

/**
 * @desc 展开菜单内容配置项
 */
export interface UniFabContent {
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

export interface UniFabProps {
  /**
   * @desc 可选样式配置项
   */
  pattern: UniFabPattern;
  /**
   * @desc 水平对齐方式
   * @desc left 左对齐
   * @desc right 右对齐
   * @desc 默认为 left
   */
  horizontal: UniFabHorizontal;
  /**
   * @desc 垂直对齐方式
   * @desc bottom 下对齐
   * @desc top 上对齐
   * @desc 默认为 bottom
   */
  vertical: UniFabVertical;
  /**
   * @desc 展开菜单显示方式
   * @desc horizontal 水平显示
   * @desc vertical 垂直显示
   * @desc 默认为 horizontal
   */
  direction: UniFabDirection;
  /**
   * @desc 是否使用弹出菜单
   * @desc 默认为 true
   */
  popMenu: boolean;
  /**
   * @desc 展开菜单内容配置
   */
  content: UniFabContent[];
  /**
   * @desc 展开菜单点击事件，返回点击信息
   */
  onTrigger: ({ index, item }: { index: number; item: UniFabContent }) => void;
  /**
   * @desc 悬浮按钮点击事件
   */
  onFabClick: (event: BaseEvent) => void;
}

/**
 * @desc 点击可展开一个图形按钮菜单
 */
export type UniFab = Component<Partial<UniFabProps>>;
