import { Component } from '@uni-helper/uni-app-types';

export interface UniTooltipProps {
  /**
   * @desc 显示内容
   */
  content: string;
}

/**
 * @desc 提示文字
 */
export type UniTooltip = Component<Partial<UniTooltipProps>>;
