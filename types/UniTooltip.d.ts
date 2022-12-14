import { Component } from '@uni-helper/uni-app-types';

interface _UniTooltipProps {
  /** 显示内容 */
  content: string;
}

/** 提示文字 */
type _UniTooltip = Component<Partial<_UniTooltipProps>>;

export { _UniTooltipProps as UniTooltipProps, _UniTooltip as UniTooltip };

declare global {
  namespace UniHelper {
    export interface UniTooltipProps extends _UniTooltipProps {}
    /** 提示文字 */
    export type UniTooltip = _UniTooltip;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 提示文字 */
    UniTooltip: _UniTooltip;
  }
}
