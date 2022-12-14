import { Component } from '@uni-helper/uni-app-types';

/**
 * 折叠面板标题分隔线
 *
 * Auto 分隔线自动显示
 *
 * None 不显示分隔线
 *
 * Show 一直显示分隔线
 */
type _UniCollapseItemTitleBorder = 'auto' | 'none' | 'show';

interface _UniCollapseItemProps {
  /** 标题文字 */
  title: string;
  /** 标题左侧缩略图 */
  thumb: string;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 是否展开面板
   *
   * 不要和 uni-collapse value / v-model 一起使用
   *
   * 默认为 false
   */
  open: boolean;
  /**
   * 是否开启动画
   *
   * 默认为 false
   */
  showAnimation: boolean;
  /**
   * 是否显示分隔线
   *
   * 默认为 true
   */
  border: boolean;
  /**
   * 折叠面板标题分隔线
   *
   * Auto 分隔线自动显示
   *
   * None 不显示分隔线
   *
   * Show 一直显示分隔线
   *
   * 默认为 auto
   */
  titleBorder: _UniCollapseItemTitleBorder;
  /**
   * 是否显示右侧箭头
   *
   * 默认为 true
   */
  showArrow: boolean;
}

type _UniCollapseItem = Component<Partial<_UniCollapseItemProps>>;

export {
  _UniCollapseItemTitleBorder as UniCollapseItemTitleBorder,
  _UniCollapseItemProps as UniCollapseItemProps,
  _UniCollapseItem as UniCollapseItem,
};

declare global {
  namespace UniHelper {
    /**
     * 折叠面板标题分隔线
     *
     * Auto 分隔线自动显示
     *
     * None 不显示分隔线
     *
     * Show 一直显示分隔线
     */
    export type UniCollapseItemTitleBorder = _UniCollapseItemTitleBorder;
    export interface UniCollapseItemProps extends _UniCollapseItemProps {}
    export type UniCollapseItem = _UniCollapseItem;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniCollapseItem: _UniCollapseItem;
  }
}
