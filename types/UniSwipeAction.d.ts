import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 动态添加数据后，如不能正常滑动，需要主动调用此方法
 */
interface _UniSwipeActionResize {
  (): void;
}

/**
 * @desc 关闭所有已经打开的组件
 */
interface _UniSwipeActionCloseAll {
  (): void;
}

interface _UniSwipeActionProps {
  /**
   * @desc 动态添加数据后，如不能正常滑动，需要主动调用此方法
   */
  resize: _UniSwipeActionResize;
  /**
   * @desc 关闭所有已经打开的组件
   */
  closeAll: _UniSwipeActionCloseAll;
}

/**
 * @desc 滑动操作
 * @desc 通过滑动触发选项的容器
 */
type _UniSwipeAction = Component<Partial<_UniSwipeActionProps>>;

export {
  _UniSwipeActionResize as UniSwipeActionResize,
  _UniSwipeActionCloseAll as UniSwipeActionCloseAll,
  _UniSwipeActionProps as UniSwipeActionProps,
  _UniSwipeAction as UniSwipeAction,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 动态添加数据后，如不能正常滑动，需要主动调用此方法
     */
    export interface UniSwipeActionResize extends _UniSwipeActionResize {}
    /**
     * @desc 关闭所有已经打开的组件
     */
    export interface UniSwipeActionCloseAll extends _UniSwipeActionCloseAll {}
    export interface UniSwipeActionProps extends _UniSwipeActionProps {}
    /**
     * @desc 滑动操作
     * @desc 通过滑动触发选项的容器
     */
    export type UniSwipeAction = _UniSwipeAction;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 滑动操作
     * @desc 通过滑动触发选项的容器
     */
    UniSwipeAction: _UniSwipeAction;
  }
}
