import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 折叠面板标题分隔线
 * @desc auto 分隔线自动显示
 * @desc none 不显示分隔线
 * @desc show 一直显示分隔线
 */
type _UniCollapseItemTitleBorder = 'auto' | 'none' | 'show';

interface _UniCollapseItemProps {
  /**
   * @desc 标题文字
   */
  title: string;
  /**
   * @desc 标题左侧缩略图
   */
  thumb: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 是否展开面板
   * @desc 不要和 uni-collapse value / v-model 一起使用
   * @desc 默认为 false
   */
  open: boolean;
  /**
   * @desc 是否开启动画
   * @desc 默认为 false
   */
  showAnimation: boolean;
  /**
   * @desc 是否显示分隔线
   * @desc 默认为 true
   */
  border: boolean;
  /**
   * @desc 折叠面板标题分隔线
   * @desc auto 分隔线自动显示
   * @desc none 不显示分隔线
   * @desc show 一直显示分隔线
   * @desc 默认为 auto
   */
  titleBorder: _UniCollapseItemTitleBorder;
  /**
   * @desc 是否显示右侧箭头
   * @desc 默认为 true
   */
  showArrow: boolean;
}

type _UniCollapseItem = Component<Partial<_UniCollapseItemProps>>;

export { _UniCollapseItemProps as UniCollapseItemProps, _UniCollapseItem as UniCollapseItem };

declare global {
  namespace UniHelper {
    export interface UniCollapseItemProps extends _UniCollapseItemProps {}
    export type UniCollapseItem = _UniCollapseItem;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniCollapseItem: _UniCollapseItem;
  }
}
