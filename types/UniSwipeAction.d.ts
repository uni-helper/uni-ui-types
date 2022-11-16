import { Component } from '@uni-helper/uni-app-types';

export interface UniSwipeActionProps {
  /**
   * @desc 动态添加数据后，如不能正常滑动，需要主动调用此方法
   */
  resize: () => void;
  /**
   * @desc 关闭所有已经打开的组件
   */
  closeAll: () => void;
}

/**
 * @desc 滑动操作
 * @desc 通过滑动触发选项的容器
 */
export type UniSwipeAction = Component<Partial<UniSwipeActionProps>>;
