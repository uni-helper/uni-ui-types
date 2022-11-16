import { Component } from '@uni-helper/uni-app-types';

export interface UniRowProps {
  /**
   * @desc 栅格间隔
   * @desc 默认为 0
   */
  gutter: number;
  /**
   * @desc nvue 中无百分比 width，使用 span 等属性时，需配置此项 rpx 值
   * @desc 此项不会影响其他平台展示效果
   * @desc 默认为 750rpx
   */
  width: number | string;
}

/**
 * @desc 流式栅格系统中的行
 */
export type UniRow = Component<Partial<UniRowProps>>;
