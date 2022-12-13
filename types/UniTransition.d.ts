import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 内置过渡动画类型
 * @desc fade 渐隐渐出过渡
 * @desc slide-top 由上至下过渡
 * @desc slide-right 由右至左过渡
 * @desc slide-bottom 由下至上过渡
 * @desc slide-left 由左至右过渡
 * @desc zoom-in 由小到大过渡
 * @desc zoom-out 由大到小过渡
 */
type _UniTransitionModeClass =
  | 'fade'
  | 'slide-top'
  | 'slide-right'
  | 'slide-bottom'
  | 'slide-left'
  | 'zoom-in'
  | 'zoom-out';

/**
 * @desc 动画效果
 * @desc linear 动画从头到尾的速度是相同的
 * @desc ease 动画以低速开始，然后加快，在结束前变慢
 * @desc ease-in 动画以低速开始
 * @desc ease-in-out 动画以低速开始和结束
 * @desc ease-out 动画以低速结束
 * @desc step-start 动画第一帧就跳至结束状态直到结束
 * @desc step-end 动画一直保持开始状态，最后一帧跳到结束状态
 */
type _UniTransitionTimingFunction =
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-in-out'
  | 'ease-out'
  | 'step-start'
  | 'step-end';

interface _UniTransitionConfig {
  /**
   * @desc 动画持续时间
   * @desc 单位为 ms
   * @desc 默认为 400
   */
  duration: number;
  /**
   * @desc 动画效果
   * @desc linear 动画从头到尾的速度是相同的
   * @desc ease 动画以低速开始，然后加快，在结束前变慢
   * @desc ease-in 动画以低速开始
   * @desc ease-in-out 动画以低速开始和结束
   * @desc ease-out 动画以低速结束
   * @desc step-start 动画第一帧就跳至结束状态直到结束
   * @desc step-end 动画一直保持开始状态，最后一帧跳到结束状态
   * @desc 默认为 linear
   */
  timingFunction: _UniTransitionTimingFunction;
  /**
   * @desc 动画延迟时间
   * @desc 单位为 ms
   * @desc 默认为 0
   */
  delay: number;
  /**
   * @desc 动画执行是否影响布局
   * @desc 默认为 false
   */
  needLayout: boolean;
  /**
   * @desc 设置 transform-origin
   * @desc 默认为 center center
   */
  transformOrigin: string;
}

interface _UniTransitionType {
  /**
   * @desc 透明度
   * @desc 取值范围为 0 - 1
   */
  opacity: number;
  /**
   * @desc 背景颜色
   */
  backgroundColor: string;
  /**
   * @desc 宽度
   * @desc 如果传入 number 默认使用 px
   * @desc 可传入其他自定义单位的宽度值
   */
  width: number | string;
  /**
   * @desc 高度
   * @desc 如果传入 number 默认使用 px
   * @desc 可传入其他自定义单位的高度值
   */
  height: number | string;
  top: number | string;
  right: number | string;
  bottom: number | string;
  left: number | string;
  /**
   * @desc 从原点顺时针旋转一个角度
   * @desc 取值范围 -180 - 180
   */
  rotate: number;
  /**
   * @desc 在 X 轴旋转一个角度
   * @desc 取值范围 -180 - 180
   */
  rotateX: number;
  /**
   * @desc 在 Y 轴旋转一个角度
   * @desc 取值范围 -180 - 180
   */
  rotateY: number;
  /**
   * @desc 在 Z 轴旋转一个角度
   * @desc 取值范围 -180 - 180
   */
  rotateZ: number;
  /**
   * @desc 同 transform-function rotate3d
   */
  rotate3d: string;
  /**
   * @desc 一个参数时表示在 X 轴、Y 轴同时缩放 sx 倍数
   * @desc 两个参数时表示在 X 轴缩放 sx 倍数，在 Y 轴缩放 sy 倍数
   */
  scale: [number] | [number, number];
  /**
   * @desc 在 X 轴缩放的倍数
   */
  scaleX: number;
  /**
   * @desc 在 Y 轴缩放的倍数
   */
  scaleY: number;
  /**
   * @desc 在 Z 轴缩放的倍数
   */
  scaleZ: number;
  /**
   * @desc 在 X 轴、Y 轴和 Z 轴缩放的倍数
   */
  scale3d: string;
  /**
   * @desc 一个参数时表示在 X 轴、Y 轴同时偏移
   * @desc 两个参数时表示在 X 轴、Y 轴分别偏移
   * @desc 单位为 px
   */
  translate: [string] | [string, string];
  /**
   * @desc 在 X 轴的偏移
   * @desc 单位为 px
   */
  scaleX: string;
  /**
   * @desc 在 Y 轴的偏移
   * @desc 单位为 px
   */
  scaleY: string;
  /**
   * @desc 在 Z 轴的偏移
   * @desc 单位为 px
   */
  scaleZ: string;
  /**
   * @desc 在 X 轴、Y 轴和 Z 轴的偏移
   * @desc 单位为 px
   */
  scale3d: string;
}

/**
 * @desc 手动设置动画配置
 */
interface _UniTransitionInit {
  (config: _UniTransitionConfig): void;
}

/**
 * @desc 调用表示一组动画完成
 */
interface _UniTransitionStep {
  (type: _UniTransitionType, config?: _UniTransitionConfig): void;
}

/**
 * @desc 执行动画
 * @param callback 所有动画执行完毕后回调
 */
interface _UniTransitionRun {
  (callback: () => void): void;
}

/**
 * @desc 点击触发
 */
interface _UniTransitionOnClick {
  (event: BaseEvent): void;
}

interface _UniTransitionOnChangeDetail {
  detail: boolean;
}

/**
 * @desc 过渡动画结束时触发
 */
interface _UniTransitionOnChange {
  (detail: _UniTransitionOnChangeDetail): void;
}

interface _UniTransitionProps {
  /**
   * @desc 控制组件是否显示
   * @desc 默认为 false
   */
  show: boolean;
  /**
   * @desc 内置过渡动画类型
   * @desc fade 渐隐渐出过渡
   * @desc slide-top 由上至下过渡
   * @desc slide-right 由右至左过渡
   * @desc slide-bottom 由下至上过渡
   * @desc slide-left 由左至右过渡
   * @desc zoom-in 由小到大过渡
   * @desc zoom-out 由大到小过渡
   */
  modeClass: _UniTransitionModeClass | _UniTransitionModeClass[];
  /**
   * @desc 自定义类名
   */
  customClass: string;
  /**
   * @desc 过渡动画持续时间
   * @desc 默认为 300
   */
  duration: number;
  /**
   * @desc 手动设置动画配置
   */
  init: _UniTransitionStep;
  /**
   * @desc 调用表示一组动画完成
   */
  step: _UniTransitionStep;
  /**
   * @desc 执行动画
   * @param 所有动画执行完毕后回调
   */
  run: _UniTransitionRun;
  /**
   * @desc 点击触发
   */
  onClick: _UniTransitionOnClick;
  /**
   * @desc 过渡动画结束时触发
   */
  onChange: _UniTransitionOnChange;
}

/**
 * @desc 元素过渡动画
 */
type _UniTransition = Component<Partial<_UniTransitionProps>>;

export {
  _UniTransitionModeClass as UniTransitionModeClass,
  _UniTransitionTimingFunction as UniTransitionTimingFunction,
  _UniTransitionConfig as UniTransitionConfig,
  _UniTransitionType as UniTransitionType,
  _UniTransitionInit as UniTransitionInit,
  _UniTransitionStep as UniTransitionStep,
  _UniTransitionRun as UniTransitionRun,
  _UniTransitionOnClick as UniTransitionOnClick,
  _UniTransitionOnChangeDetail as UniTransitionOnChangeDetail,
  _UniTransitionOnChange as UniTransitionOnChange,
  _UniTransitionProps as UniTransitionProps,
  _UniTransition as UniTransition,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 内置过渡动画类型
     * @desc fade 渐隐渐出过渡
     * @desc slide-top 由上至下过渡
     * @desc slide-right 由右至左过渡
     * @desc slide-bottom 由下至上过渡
     * @desc slide-left 由左至右过渡
     * @desc zoom-in 由小到大过渡
     * @desc zoom-out 由大到小过渡
     */
    export type UniTransitionModeClass = _UniTransitionModeClass;
    /**
     * @desc 动画效果
     * @desc linear 动画从头到尾的速度是相同的
     * @desc ease 动画以低速开始，然后加快，在结束前变慢
     * @desc ease-in 动画以低速开始
     * @desc ease-in-out 动画以低速开始和结束
     * @desc ease-out 动画以低速结束
     * @desc step-start 动画第一帧就跳至结束状态直到结束
     * @desc step-end 动画一直保持开始状态，最后一帧跳到结束状态
     */
    export type UniTransitionTimingFunction = _UniTransitionTimingFunction;
    export interface UniTransitionConfig extends _UniTransitionConfig {}
    export interface UniTransitionType extends _UniTransitionType {}
    /**
     * @desc 手动设置动画配置
     */
    export interface UniTransitionInit extends _UniTransitionInit {}
    /**
     * @desc 调用表示一组动画完成
     */
    export interface UniTransitionStep extends _UniTransitionStep {}
    /**
     * @desc 执行动画
     * @param callback 所有动画执行完毕后回调
     */
    export interface UniTransitionRun extends _UniTransitionRun {}
    /**
     * @desc 点击触发
     */
    export interface UniTransitionOnClick extends _UniTransitionOnClick {}
    export interface UniTransitionOnChangeDetail extends _UniTransitionOnChangeDetail {}
    /**
     * @desc 过渡动画结束时触发
     */
    export interface UniTransitionOnChange extends _UniTransitionOnChange {}
    export interface UniTransitionProps extends _UniTransitionProps {}
    /**
     * @desc 元素过渡动画
     */
    export type UniTransition = _UniTransition;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 元素过渡动画
     */
    UniTransition: _UniTransition;
  }
}
