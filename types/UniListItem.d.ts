import { AnyRecord, Component } from '@uni-helper/uni-app-types';
import { UniBadgeCustomStyle } from './UniBadge';
import { UniIconsProps, UniIconsType } from './UniIcons';

/**
 * Title 是否溢出隐藏
 *
 * 0 默认
 *
 * 1 显示一行
 *
 * 2 显示两行
 */
type _UniListItemEllipsis = 0 | 1 | 2;

/**
 * 缩略图尺寸
 *
 * Lg 大图
 *
 * Base 一般
 *
 * Sm 小图
 */
type _UniListItemThumbSize = 'lg' | 'base' | 'sm';

/** 新页面的跳转方式 */
type _UniListItemLink = 'navigateTo' | 'redirectTo' | 'reLaunch' | 'switchTab';

/**
 * 排版方向
 *
 * Row 横向
 *
 * Column 纵向
 */
type _UniListItemDirection = 'row' | 'column';

/** Switch 是否被选中 */
type _UniListItemSwitchChecked = boolean;

/** 扩展图标参数 */
interface _UniListItemExtraIcon extends Omit<UniIconsProps, 'customPrefix'> {}

/** 点击 uni-list-item 触发，需开启点击反馈 */
interface _UniListItemOnClick {
  (detail?: AnyRecord): void;
}

interface _UniListItemOnSwitchChangeDetail {
  /** Switch 是否被选中 */
  value: _UniListItemSwitchChecked;
}

/** 点击切换 switch 时触发，需显示 switch */
interface _UniListItemOnSwitchChange {
  (detail: _UniListItemOnSwitchChangeDetail): void;
}

interface _UniListItemProps {
  /** 标题 */
  title: string;
  /** 描述 */
  note: string;
  /**
   * Title 是否溢出隐藏
   *
   * 0 默认
   *
   * 1 显示一行
   *
   * 2 显示两行
   *
   * 默认为 0
   */
  ellipsis: _UniListItemEllipsis;
  /**
   * 左侧缩略图
   *
   * 如果设置了，扩展图标就不会显示
   */
  thumb: string;
  /**
   * 缩略图尺寸
   *
   * Lg 大图
   *
   * Base 一般
   *
   * Sm 小图
   *
   * 默认为 base
   */
  thumbSize: _UniListItemThumbSize;
  /**
   * 是否显示数字角标
   *
   * 默认为 false
   */
  showBadge: boolean;
  /** 数字角标内容 */
  badgeText: string;
  /** 数字角标类型 */
  badgeType: UniIconsType;
  /** 数字角标样式 */
  badgeStyle: UniBadgeCustomStyle;
  /** 右侧文字内容 */
  rightText: string;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 是否显示箭头图标
   *
   * 默认为 true
   */
  showArrow: boolean;
  /**
   * 新页面的跳转方式
   *
   * 默认为 navigateTo
   */
  link: _UniListItemLink;
  /**
   * 新页面跳转地址
   *
   * 如填写此属性，click 会返回页面是否跳转成功
   */
  to: string;
  /**
   * 是否开启点击反馈
   *
   * 默认为 false
   */
  clickable: boolean;
  /**
   * 是否显示 switch
   *
   * 默认为 false
   */
  showSwitch: boolean;
  /**
   * Switch 是否被选中
   *
   * 默认为 false
   */
  switchChecked: _UniListItemSwitchChecked;
  /**
   * 左侧是否显示扩展图标
   *
   * 默认为 false
   */
  showExtraIcon: boolean;
  /** 扩展图标参数 */
  extraIcon: _UniListItemExtraIcon;
  /**
   * 排版方向
   *
   * Row 横向
   *
   * Column 纵向
   *
   * 默认为 row
   */
  direction: _UniListItemDirection;
  /** 点击 uni-list-item 触发，需开启点击反馈 */
  onClick: _UniListItemOnClick;
  /** 点击切换 switch 时触发，需显示 switch */
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
     * Title 是否溢出隐藏
     *
     * 0 默认
     *
     * 1 显示一行
     *
     * 2 显示两行
     */
    export type UniListItemEllipsis = _UniListItemEllipsis;
    /**
     * 缩略图尺寸
     *
     * Lg 大图
     *
     * Base 一般
     *
     * Sm 小图
     */
    export type UniListItemThumbSize = _UniListItemThumbSize;
    /** 新页面的跳转方式 */
    export type UniListItemLink = _UniListItemLink;
    /**
     * 排版方向
     *
     * Row 横向
     *
     * Column 纵向
     */
    export type UniListItemDirection = _UniListItemDirection;
    /** Switch 是否被选中 */
    export type UniListItemSwitchChecked = _UniListItemSwitchChecked;
    /** 扩展图标参数 */
    export interface UniListItemExtraIcon extends _UniListItemExtraIcon {}
    /** 点击 uni-list-item 触发，需开启点击反馈 */
    export interface UniListItemOnClick extends _UniListItemOnClick {}
    export interface UniListItemOnSwitchChangeDetail extends _UniListItemOnSwitchChangeDetail {}
    /** 点击切换 switch 时触发，需显示 switch */
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
