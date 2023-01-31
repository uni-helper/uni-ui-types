import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/** 点击触发 */
interface _UniNoticeBarOnClick {
  (event: BaseEvent): void;
}

/** 关闭触发 */
interface _UniNoticeBarOnClose {
  (event: BaseEvent): void;
}

/** 查看更多触发 */
interface _UniNoticeBarOnGetmore {
  (event: BaseEvent): void;
}

/** 通告栏属性 */
interface _UniNoticeBarProps {
  /**
   * 文字滚动的速度
   *
   * 单位为 px
   *
   * 默认为 100
   */
  speed: number;
  /** 显示文字 */
  text: string;
  /**
   * 背景颜色
   *
   * 默认为 #fffbe8
   */
  backgroundColor: string;
  /**
   * 文字颜色
   *
   * 默认为 #de8c17
   */
  color: string;
  /**
   * 查看更多的文字颜色
   *
   * 默认为 #999999
   */
  moreColor: string;
  /** 查看更多的文本 */
  moreText: string;
  /**
   * 是否单行
   *
   * 默认为 false
   */
  single: boolean;
  /**
   * 是否滚动
   *
   * true 滚动，单行
   *
   * false 不滚动
   *
   * 默认为 false
   */
  scrollable: boolean;
  /**
   * 是否显示左侧喇叭图标
   *
   * 默认为 false
   */
  showIcon: boolean;
  /**
   * 是否显示左侧关闭按钮
   *
   * 默认为 false
   */
  showClose: boolean;
  /**
   * 是否显示右侧查看更多图标
   *
   * 默认为 false
   */
  showGetMore: boolean;
  /** 点击触发 */
  onClick: _UniNoticeBarOnClick;
  /** 关闭触发 */
  onClose: _UniNoticeBarOnClose;
  /** 查看更多触发 */
  onGetmore: _UniNoticeBarOnGetmore;
}

/** 通告栏 */
type _UniNoticeBar = Component<Partial<_UniNoticeBarProps>>;

export {
  _UniNoticeBarOnClick as UniNoticeBarOnClick,
  _UniNoticeBarOnClose as UniNoticeBarOnClose,
  _UniNoticeBarOnGetmore as UniNoticeBarOnGetmore,
  _UniNoticeBarProps as UniNoticeBarProps,
  _UniNoticeBar as UniNoticeBar,
};

declare global {
  namespace UniHelper {
    /** 点击触发 */
    export interface UniNoticeBarOnClick extends _UniNoticeBarOnClick {}
    /** 关闭触发 */
    export interface UniNoticeBarOnClose extends _UniNoticeBarOnClose {}
    /** 查看更多触发 */
    export interface UniNoticeBarOnGetmore extends _UniNoticeBarOnGetmore {}
    /** 通告栏属性 */
    export interface UniNoticeBarProps extends _UniNoticeBarProps {}
    /** 通告栏 */
    export type UniNoticeBar = _UniNoticeBar;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 通告栏 */
    UniNoticeBar: _UniNoticeBar;
  }
}
