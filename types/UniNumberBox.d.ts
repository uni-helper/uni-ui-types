import { BaseEvent, Component } from '@uni-helper/uni-app-types';

export interface UniNumberBoxProps {
  /**
   * @desc 输入框当前值
   * @desc 默认为 0
   */
  value: number;
  /**
   * @desc 最小值
   * @desc 默认为 0
   */
  min: number;
  /**
   * @desc 最大值
   * @desc 默认为 100
   */
  max: number;
  /**
   * @desc 每次点击改变的间隔大小
   * @desc 默认为 1
   */
  step: number;
  /**
   * @desc 是否为禁用状态
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 值改变时触发
   */
  onChange: (value: UniNumberBoxProps['value']) => void;
  /**
   * @desc 聚焦时触发
   */
  onFocus: (event: BaseEvent) => void;
  /**
   * @desc 失焦时触发
   */
  onBlur: (event: BaseEvent) => void;
}

/**
 * @desc 带加减按钮的数字输入框
 */
export type UniNumberBox = Component<Partial<UniNumberBoxProps>>;
