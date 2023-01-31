import { Component } from '@uni-helper/uni-app-types';

/** 行属性 */
interface _UniRowProps {
  /**
   * 栅格间隔
   *
   * 默认为 0
   */
  gutter: number;
  /**
   * nvue 中无百分比 width，使用 span 等属性时，需配置此项 rpx 值
   *
   * 此项不会影响其他平台展示效果
   *
   * 默认为 750rpx
   */
  width: number | string;
}

/** 流式栅格系统中的行 */
type _UniRow = Component<Partial<_UniRowProps>>;

export { _UniRowProps as UniRowProps, _UniRow as UniRow };

declare global {
  namespace UniHelper {
    /** 行属性 */
    export interface UniRowProps extends _UniRowProps {}
    /** 流式栅格系统中的行 */
    export type UniRow = _UniRow;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 流式栅格系统中的行 */
    UniRow: _UniRow;
  }
}
