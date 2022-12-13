import { AnyRecord, Component } from '@uni-helper/uni-app-types';
import { UniBadgeCustomStyle } from './UniBadge';
import { UniIconsProps, UniIconsType } from './UniIcons';

/**
 * @desc title 是否溢出隐藏
 * @desc 0 默认
 * @desc 1 显示一行
 * @desc 2 显示两行
 */
type _UniListItemEllipsis = 0 | 1 | 2;

/**
 * @desc 缩略图尺寸
 * @desc lg 大图
 * @desc base 一般
 * @desc sm 小图
 */
type _UniListItemThumbSize = 'lg' | 'base' | 'sm';

/**
 * @desc 新页面的跳转方式
 */
type _UniListItemLink = 'navigateTo' | 'redirectTo' | 'reLaunch' | 'switchTab';

/**
 * @desc 排版方向
 * @desc row 横向
 * @desc column 纵向
 */
type _UniListItemDirection = 'row' | 'column';

/**
 * @desc switch 是否被选中
 */
type _UniListItemSwitchChecked = boolean;

/**
 * @desc 扩展图标参数
 */
interface _UniListItemExtraIcon extends Omit<UniIconsProps, 'customPrefix'> {}

/**
 * @desc 点击 uni-list-item 触发，需开启点击反馈
 */
interface _UniListItemOnClick {
  (detail?: AnyRecord): void;
}

interface _UniListItemOnSwitchChangeDetail {
  /**
   * @desc switch 是否被选中
   */
  value: _UniListItemSwitchChecked;
}

/**
 * @desc 点击切换 switch 时触发，需显示 switch
 */
interface _UniListItemOnSwitchChange {
  (detail: _UniListItemOnSwitchChangeDetail): void;
}

interface _UniListItemProps {
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
  ellipsis: _UniListItemEllipsis;
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
  thumbSize: _UniListItemThumbSize;
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
  badgeStyle: UniBadgeCustomStyle;
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
  link: _UniListItemLink;
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
  switchChecked: _UniListItemSwitchChecked;
  /**
   * @desc 左侧是否显示扩展图标
   * @desc 默认为 false
   */
  showExtraIcon: boolean;
  /**
   * @desc 扩展图标参数
   */
  extraIcon: _UniListItemExtraIcon;
  /**
   * @desc 排版方向
   * @desc row 横向
   * @desc column 纵向
   * @desc 默认为 row
   */
  direction: _UniListItemDirection;
  /**
   * @desc 点击 uni-list-item 触发，需开启点击反馈
   */
  onClick: _UniListItemOnClick;
  /**
   * @desc 点击切换 switch 时触发，需显示 switch
   */
  onSwitchChange: _UniListItemOnSwitchChange;
}

type _UniListItem = Component<Partial<_UniListItemProps>>;

export {
  _UniListItemEllipsis as UniListItemEllipsis,
  _UniListItemThumbSize as UniListItemThumbSize,
  _UniListItemLink as UniListItemLink,
  _UniListItemDirection as UniListItemDirection,
  _UniListItemSwitchChecked as UniListItemSwitchChecked,
  _UniListItemExtraIcon as UniListItemExtraIcon,
  _UniListItemOnClick as UniListItemOnClick,
  _UniListItemOnSwitchChangeDetail as UniListItemOnSwitchChangeDetail,
  _UniListItemOnSwitchChange as UniListItemOnSwitchChange,
  _UniListItemProps as UniListItemProps,
  _UniListItem as UniListItem,
};

declare global {
  namespace UniHelper {
    /**
     * @desc title 是否溢出隐藏
     * @desc 0 默认
     * @desc 1 显示一行
     * @desc 2 显示两行
     */
    export type UniListItemEllipsis = _UniListItemEllipsis;
    /**
     * @desc 缩略图尺寸
     * @desc lg 大图
     * @desc base 一般
     * @desc sm 小图
     */
    export type UniListItemThumbSize = _UniListItemThumbSize;
    /**
     * @desc 新页面的跳转方式
     */
    export type UniListItemLink = _UniListItemLink;
    /**
     * @desc 排版方向
     * @desc row 横向
     * @desc column 纵向
     */
    export type UniListItemDirection = _UniListItemDirection;
    /**
     * @desc switch 是否被选中
     */
    export type UniListItemSwitchChecked = _UniListItemSwitchChecked;
    /**
     * @desc 扩展图标参数
     */
    export interface UniListItemExtraIcon extends _UniListItemExtraIcon {}
    /**
     * @desc 点击 uni-list-item 触发，需开启点击反馈
     */
    export interface UniListItemOnClick extends _UniListItemOnClick {}
    export interface UniListItemOnSwitchChangeDetail extends _UniListItemOnSwitchChangeDetail {}
    /**
     * @desc 点击切换 switch 时触发，需显示 switch
     */
    export interface UniListItemOnSwitchChange extends _UniListItemOnSwitchChange {}
    export interface UniListItemProps extends _UniListItemProps {}
    export type UniListItem = _UniListItem;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniListItem: _UniListItem;
  }
}
