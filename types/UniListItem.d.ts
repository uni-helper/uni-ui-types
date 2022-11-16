import { Component } from '@uni-helper/uni-app-types';
import { UniBadgeProps } from './UniBadge';
import { UniIconsProps, UniIconsType } from './UniIcons';

/**
 * @desc title 是否溢出隐藏
 * @desc 0 默认
 * @desc 1 显示一行
 * @desc 2 显示两行
 */
export type UniListItemEllipsis = 0 | 1 | 2;

/**
 * @desc 缩略图尺寸
 * @desc lg 大图
 * @desc base 一般
 * @desc sm 小图
 */
export type UniListItemThumbSize = 'lg' | 'base' | 'sm';

/**
 * @desc 新页面的跳转方式
 */
export type UniListItemLink = 'navigateTo' | 'redirectTo' | 'reLaunch' | 'switchTab';

/**
 * @desc 排版方向
 * @desc row 横向
 * @desc column 纵向
 */
export type UniListItemDirection = 'row' | 'column';

export interface UniListItemProps {
  /**
   * @desc 标题
   */
  title: string;
  /**
   * @desc 描述
   */
  note: string;
  /**
   * @desc title 是否溢出隐藏
   * @desc 0 默认
   * @desc 1 显示一行
   * @desc 2 显示两行
   * @desc 默认为 0
   */
  ellipsis: UniListItemEllipsis;
  /**
   * @desc 左侧缩略图
   * @desc 如果设置了，扩展图标就不会显示
   */
  thumb: string;
  /**
   * @desc 缩略图尺寸
   * @desc lg 大图
   * @desc base 一般
   * @desc sm 小图
   * @desc 默认为 base
   */
  thumbSize: UniListItemThumbSize;
  /**
   * @desc 是否显示数字角标
   * @desc 默认为 false
   */
  showBadge: boolean;
  /**
   * @desc 数字角标内容
   */
  badgeText: string;
  /**
   * @desc 数字角标类型
   */
  badgeType: UniIconsType;
  /**
   * @desc 数字角标样式
   */
  badgeStyle: UniBadgeProps['customStyle'];
  /**
   * @desc 右侧文字内容
   */
  rightText: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 是否显示箭头图标
   * @desc 默认为 true
   */
  showArrow: boolean;
  /**
   * @desc 新页面的跳转方式
   * @desc 默认为 navigateTo
   */
  link: UniListItemLink;
  /**
   * @desc 新页面跳转地址
   * @desc 如填写此属性，click 会返回页面是否跳转成功
   */
  to: string;
  /**
   * @desc 是否开启点击反馈
   * @desc 默认为 false
   */
  clickable: boolean;
  /**
   * @desc 是否显示 switch
   * @desc 默认为 false
   */
  showSwitch: boolean;
  /**
   * @desc switch 是否被选中
   * @desc 默认为 false
   */
  switchChecked: boolean;
  /**
   * @desc 左侧是否显示扩展图标
   * @desc 默认为 false
   */
  showExtraIcon: boolean;
  /**
   * @desc 扩展图标参数
   */
  extraIcon: Omit<UniIconsProps, 'customPrefix'>;
  /**
   * @desc 排版方向
   * @desc row 横向
   * @desc column 纵向
   * @desc 默认为 row
   */
  direction: UniListItemDirection;
  /**
   * @desc 点击 uni-list-item 触发，需开启点击反馈
   */
  onClick: (event?: Record<string, any>) => void;
  /**
   * @desc 点击切换 switch 时触发，需显示 switch
   */
  switchChange: (event: { value: UniListItemProps['switchChecked'] }) => void;
}

export type UniListItem = Component<Partial<UniListItemProps>>;
