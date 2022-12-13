import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 动态更新时间后，刷新组件显示
 */
interface _UniCountdownOnUpdate {
  (): void;
}

/**
 * @desc 倒计时时间到触发事件
 */
interface _UniCountdownOnTimeup {
  (event: BaseEvent): void;
}

/**
 * @desc 倒计时属性
 */
interface _UniCountdownProps {
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
  update: _UniCountdownOnUpdate;
  /**
   * @desc 倒计时时间到触发事件
   */
  onTimeup: _UniCountdownOnTimeup;
}

/**
 * @desc 倒计时
 */
type _UniCountdown = Component<Partial<_UniCountdownProps>>;

export {
  _UniCountdownOnUpdate as UniCountdownOnUpdate,
  _UniCountdownOnTimeup as UniCountdownOnTimeup,
  _UniCountdownProps as UniCountdownProps,
  _UniCountdown as UniCountdown,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 动态更新时间后，刷新组件显示
     */
    export interface UniCountdownOnUpdate extends _UniCountdownOnUpdate {}
    /**
     * @desc 倒计时时间到触发事件
     */
    export interface UniCountdownOnTimeup extends _UniCountdownOnTimeup {}
    /**
     * @desc 倒计时属性
     */
    export interface UniCountdownProps extends _UniCountdownProps {}
    /**
     * @desc 倒计时
     */
    export type UniCountdown = _UniCountdown;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 倒计时
     */
    UniCountdown: _UniCountdown;
  }
}
