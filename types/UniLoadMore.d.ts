import { CustomEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc loading 的状态
 * @desc more 加载前
 * @desc loading 加载中
 * @desc noMore 没有更多数据
 */
type _UniLoadMoreStatus = 'more' | 'loading' | 'noMore';

/**
 * @desc 图标样式
 * @desc snow iOS 雪花加载样式
 * @desc circle Android 环形加载样式
 * @desc auto 根据平台自动选择加载样式
 */
type _UniLoadMoreIconType = 'auto' | 'snow' | 'circle';

/**
 * @desc 各状态文字说明
 */
interface _UniLoadMoreContentText {
  /**
   * @desc 默认为 上拉显示更多
   */
  contentdown: string;
  /**
   * @desc 默认为 正在加载
   */
  contentrefresh: string;
  /**
   * @desc 默认为 没有更多数据了
   */
  contentnomore: string;
}

interface _UniLoadMoreOnClickLoadMoreDetail {
  status: _UniLoadMoreStatus;
}

/**
 * @desc 点击加载更多时触发
 */
interface _UniLoadMoreOnClickLoadMore {
  (event: CustomEvent<_UniLoadMoreOnClickLoadMoreDetail>): void;
}

interface _UniLoadMoreProps {
  /**
   * @desc 图标大小
   * @desc 默认为 24
   */
  iconSize: number;
  /**
   * @desc loading 的状态
   * @desc 默认为 more
   */
  status: _UniLoadMoreStatus;
  /**
   * @desc 是否显示 loading 图标
   * @desc 默认为 true
   */
  showIcon: boolean;
  /**
   * @desc 是否显示文本
   * @desc 默认为 true
   */
  showText: boolean;
  /**
   * @desc 图标样式
   * @desc 默认为 auto
   */
  iconType: _UniLoadMoreIconType;
  /**
   * @desc 图标和文字颜色
   * @desc 默认为 #777777
   */
  color: string;
  /**
   * @desc 各状态文字说明
   */
  contentText: _UniLoadMoreContentText;
  /**
   * @desc 点击加载更多时触发
   */
  onClickLoadMore: _UniLoadMoreOnClickLoadMore;
}

/**
 * @desc 用于列表中，做滚动加载使用，展示 loading 的各种状态
 */
type _UniLoadMore = Component<Partial<_UniLoadMoreProps>>;

export {
  _UniLoadMoreStatus as UniLoadMoreStatus,
  _UniLoadMoreIconType as UniLoadMoreIconType,
  _UniLoadMoreContentText as UniLoadMoreContentText,
  _UniLoadMoreOnClickLoadMoreDetail as UniLoadMoreOnClickLoadMoreDetail,
  _UniLoadMoreOnClickLoadMore as UniLoadMoreOnClickLoadMore,
  _UniLoadMore as UniLoadMore,
};

declare global {
  namespace UniHelper {
    /**
     * @desc loading 的状态
     * @desc more 加载前
     * @desc loading 加载中
     * @desc noMore 没有更多数据
     */
    export type UniLoadMoreStatus = _UniLoadMoreStatus;
    /**
     * @desc 图标样式
     * @desc snow iOS 雪花加载样式
     * @desc circle Android 环形加载样式
     * @desc auto 根据平台自动选择加载样式
     */
    export type UniLoadMoreIconType = _UniLoadMoreIconType;
    /**
     * @desc 各状态文字说明
     */
    export interface UniLoadMoreContentText extends _UniLoadMoreContentText {}
    export interface UniLoadMoreOnClickLoadMoreDetail extends _UniLoadMoreOnClickLoadMoreDetail {}
    /**
     * @desc 点击加载更多时触发
     */
    export interface UniLoadMoreOnClickLoadMore extends _UniLoadMoreOnClickLoadMore {}
    export interface UniLoadMoreProps extends _UniLoadMoreProps {}
    /**
     * @desc 用于列表中，做滚动加载使用，展示 loading 的各种状态
     */
    export type UniLoadMore = _UniLoadMore;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 用于列表中，做滚动加载使用，展示 loading 的各种状态
     */
    UniLoadMore: _UniLoadMore;
  }
}
