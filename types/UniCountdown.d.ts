import { BaseEvent, Component } from '@uni-helper/uni-app-types';

export interface UniCountdownProps {
  /**
   * @desc 背景色
   * @desc 默认为 #ffffff
   */
  backgroundColor: string;
  /**
   * @desc 文字颜色
   * @desc 默认为 #000000
   */
  color: string;
  /**
   * @desc 分隔符颜色
   * @desc 默认为 #000000
   */
  splitorColor: string;
  /**
   * @desc 天数
   * @desc 默认为 0
   */
  day: number;
  /**
   * @desc 小时数
   * @desc 默认为 0
   */
  hour: number;
  /**
   * @desc 分钟数
   * @desc 默认为 0
   */
  minute: number;
  /**
   * @desc 秒数
   * @desc 默认为 0
   */
  second: number;
  /**
   * @desc 目标时间戳
   * @desc 默认为 0
   */
  timestamp: number;
  /**
   * @desc 是否显示天数
   * @desc 默认为 true
   */
  showDay: true;
  /**
   * @desc 是否以冒号为分隔符
   * @desc 默认为 true
   */
  showColon: boolean;
  /**
   * @desc 是否初始化组件后就开始倒计时
   * @desc 默认为 true
   */
  start: boolean;
  /**
   * @desc 动态更新时间后，刷新组件显示
   */
  update: () => void;
  /**
   * @desc 倒计时时间到触发事件
   */
  onTimeup: (event: BaseEvent) => void;
}

/**
 * @desc 倒计时
 */
export type UniCountdown = Component<Partial<UniCountdownProps>>;
