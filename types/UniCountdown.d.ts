import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/** 动态更新时间后，刷新组件显示 */
interface _UniCountdownOnUpdate {
  (): void;
}

/** 倒计时时间到触发事件 */
interface _UniCountdownOnTimeup {
  (event: BaseEvent): void;
}

/** 倒计时属性 */
interface _UniCountdownProps {
  /**
   * 背景色
   *
   * 默认为 #ffffff
   */
  backgroundColor: string;
  /**
   * 文字颜色
   *
   * 默认为 #000000
   */
  color: string;
  /**
   * 分隔符颜色
   *
   * 默认为 #000000
   */
  splitorColor: string;
  /**
   * 天数
   *
   * 默认为 0
   */
  day: number;
  /**
   * 小时数
   *
   * 默认为 0
   */
  hour: number;
  /**
   * 分钟数
   *
   * 默认为 0
   */
  minute: number;
  /**
   * 秒数
   *
   * 默认为 0
   */
  second: number;
  /**
   * 目标时间戳
   *
   * 默认为 0
   */
  timestamp: number;
  /**
   * 是否显示天数
   *
   * 默认为 true
   */
  showDay: true;
  /**
   * 是否以冒号为分隔符
   *
   * 默认为 true
   */
  showColon: boolean;
  /**
   * 是否初始化组件后就开始倒计时
   *
   * 默认为 true
   */
  start: boolean;
  /** 动态更新时间后，刷新组件显示 */
  update: _UniCountdownOnUpdate;
  /** 倒计时时间到触发事件 */
  onTimeup: _UniCountdownOnTimeup;
}

/** 倒计时 */
type _UniCountdown = Component<Partial<_UniCountdownProps>>;

export {
  _UniCountdownOnUpdate as UniCountdownOnUpdate,
  _UniCountdownOnTimeup as UniCountdownOnTimeup,
  _UniCountdownProps as UniCountdownProps,
  _UniCountdown as UniCountdown,
};

declare global {
  namespace UniHelper {
    /** 动态更新时间后，刷新组件显示 */
    export interface UniCountdownOnUpdate extends _UniCountdownOnUpdate {}
    /** 倒计时时间到触发事件 */
    export interface UniCountdownOnTimeup extends _UniCountdownOnTimeup {}
    /** 倒计时属性 */
    export interface UniCountdownProps extends _UniCountdownProps {}
    /** 倒计时 */
    export type UniCountdown = _UniCountdown;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 倒计时 */
    UniCountdown: _UniCountdown;
  }
}
