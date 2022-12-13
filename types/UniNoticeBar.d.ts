import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 点击触发
 */
interface _UniNoticeBarOnClick {
  (event: BaseEvent): void;
}

/**
 * @desc 关闭触发
 */
interface _UniNoticeBarOnClose {
  (event: BaseEvent): void;
}

/**
 * @desc 查看更多触发
 */
interface _UniNoticeBarOnGetmore {
  (event: BaseEvent): void;
}

/**
 * @desc 通告栏属性
 */
interface _UniNoticeBarProps {
  /**
   * @desc 文字滚动的速度
   * @desc 单位为 px
   * @desc 默认为 100
   */
  speed: number;
  /**
   * @desc 显示文字
   */
  text: string;
  /**
   * @desc 背景颜色
   * @desc 默认为 #fffbe8
   */
  backgroundColor: string;
  /**
   * @desc 文字颜色
   * @desc 默认为 #de8c17
   */
  color: string;
  /**
   * @desc 查看更多的文字颜色
   * @desc 默认为 #999999
   */
  moreColor: string;
  /**
   * @desc 查看更多的文本
   */
  moreText: string;
  /**
   * @desc 是否单行
   * @desc 默认为 false
   */
  single: boolean;
  /**
   * @desc 是否滚动
   * @desc true 滚动，单行
   * @desc false 不滚动
   * @desc 默认为 false
   */
  scrollable: boolean;
  /**
   * @desc 是否显示左侧喇叭图标
   * @desc 默认为 false
   */
  showIcon: boolean;
  /**
   * @desc 是否显示左侧关闭按钮
   * @desc 默认为 false
   */
  showClose: boolean;
  /**
   * @desc 是否显示右侧查看更多图标
   * @desc true 单行
   * @desc 默认为 false
   */
  showGetMore: boolean;
  /**
   * @desc 点击触发
   */
  onClick: _UniNoticeBarOnClick;
  /**
   * @desc 关闭触发
   */
  onClose: _UniNoticeBarOnClose;
  /**
   * @desc 查看更多触发
   */
  onGetmore: _UniNoticeBarOnGetmore;
}

/**
 * @desc 通告栏
 */
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
    /**
     * @desc 点击触发
     */
    export interface UniNoticeBarOnClick extends _UniNoticeBarOnClick {}
    /**
     * @desc 关闭触发
     */
    export interface UniNoticeBarOnClose extends _UniNoticeBarOnClose {}
    /**
     * @desc 查看更多触发
     */
    export interface UniNoticeBarOnGetmore extends _UniNoticeBarOnGetmore {}
    /**
     * @desc 通告栏属性
     */
    export interface UniNoticeBarProps extends _UniNoticeBarProps {}
    /**
     * @desc 通告栏
     */
    export type UniNoticeBar = _UniNoticeBar;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 通告栏
     */
    UniNoticeBar: _UniNoticeBar;
  }
}
