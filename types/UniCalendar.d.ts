import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 日期
 * @desc 格式为 YYYY-MM-DD
 */
type _UniCalendarDate = string;

/**
 * @desc 打点项
 */
interface _UniCalendarSelectedElement {
  /**
   * @desc 日期
   */
  date: _UniCalendarDate;
  /**
   * @desc 信息
   */
  info: string;
  /**
   * @desc 自定义数据
   */
  data: {
    /**
     * @desc 自定义信息
     */
    custom: string;
    /**
     * @desc 自定义信息头
     */
    name: string;
  };
}

/**
 * @desc 打点
 */
type _UniCalendarSelected = _UniCalendarSelectedElement[];

/**
 * @desc 弹出日历组件
 * @desc insert 为 true 时有效
 */
interface _UniCalendarOnOpen {
  (event: BaseEvent): void;
}

interface _UniCalendarBaseDetail {
  /**
   * @desc 选择的范围
   */
  range: {
    /**
     * @desc 范围开始日期
     */
    before: _UniCalendarDate;
    // 范围结束日期
    after: _UniCalendarDate;
    // 范围日期数组
    data: _UniCalendarDate[];
  };
  /**
   * @desc 当前年
   */
  year: number;
  /**
   * @desc 当前月
   */
  month: number;
  /**
   * @desc 当前日
   */
  date: number;
  /**
   * @desc 农历信息
   */
  lunar: {
    /**
     * @desc 农历当前年
     */
    lYear: number;
    /**
     * @desc 农历当前月
     */
    lMonth: number;
    /**
     * @desc 农历当前日
     */
    lDay: number;
    /**
     * @desc 生肖
     */
    Animal: string;
    /**
     * @desc 农历当前月中文表示
     */
    IMonthCn: string;
    /**
     * @desc 农历当前日中文表示
     */
    IDayCn: string;
    /**
     * @desc 公历当前年
     */
    cYear: number;
    /**
     * @desc 公历当前月
     */
    cMonth: number;
    /**
     * @desc 公历当前日
     */
    cDay: number;
    /**
     * @desc 农历当前年中文天干地支表示
     */
    gzYear: string;
    /**
     * @desc 农历当前月中文天干地支表示
     */
    gzMonth: string;
    /**
     * @desc 农历当前日中文天干地支表示
     */
    gzDay: string;
    /**
     * @desc 是否今天
     */
    isToday: boolean;
    /**
     * @desc 是否闰年
     */
    isLeap: boolean;
    /**
     * @desc 周几
     */
    nWeek: number;
    /**
     * @desc 周几中文表示
     */
    ncWeek: string;
    /**
     * @desc 是否节气
     */
    isTerm: false;
    /**
     * @desc 节气名
     */
    term: string | null | undefined;
    /**
     * @desc 星座
     */
    astro: string;
  };
  /**
   * @desc 打点信息
   */
  extraInfo: _UniCalendarSelectedElement;
  /**
   * @desc 当前完整日期
   */
  fulldate: _UniCalendarDate;
}

interface _UniCalendarOnChangeDetail extends _UniCalendarBaseDetail {}

/**
 * @desc 日期改变时触发
 * @desc insert 为 true 时有效
 */
interface _UniCalendarOnChange {
  (detail: _UniCalendarOnChangeDetail): void;
}

interface _UniCalendarOnConfirmDetail extends _UniCalendarBaseDetail {}

/**
 * @desc 确认选择时触发
 * @desc insert 为 false 时有效
 */
interface _UniCalendarOnConfirm {
  (detail: _UniCalendarOnConfirmDetail): void;
}

interface _UniCalendarOnMonthSwitchDetail extends _UniCalendarBaseDetail {}

/**
 * @desc 切换月份时触发
 */
interface _UniCalendarOnMonthSwitch {
  (detail: _UniCalendarOnMonthSwitchDetail): void;
}

interface _UniCalendarOnCloseDetail extends _UniCalendarBaseDetail {}

/**
 * @desc 关闭日历组件时触发
 */
interface _UniCalendarOnClose {
  (detail: _UniCalendarOnCloseDetail): void;
}

/**
 * @desc 日历组件属性
 */
interface _UniCalendarProps {
  /**
   * @desc 自定义当前时间
   * @desc 格式为 YYYY-MM-DD
   * @desc 默认为 今天
   */
  date: _UniCalendarDate;
  /**
   * @desc 是否显示农历
   * @desc 默认为 false
   */
  lunar: boolean;
  /**
   * @desc 日期范围的开始日期
   * @desc 格式为 YYYY-MM-DD
   */
  startDate: _UniCalendarDate;
  /**
   * @desc 日期范围的结束日期
   * @desc 格式为 YYYY-MM-DD
   */
  endDate: _UniCalendarDate;
  /**
   * @desc 是否为范围选择
   * @desc 默认为 false
   */
  range: boolean;
  /**
   * @desc 插入模式
   * @desc true 插入模式
   * @desc false 弹窗模式
   * @desc 默认为 true
   */
  insert: boolean;
  /**
   * @desc 弹窗模式下是否清空上次选择内容
   * @desc insert 为 true 时有效
   * @desc 默认为 true
   */
  clearDate: boolean;
  /**
   * @desc 是否显示月份为背景
   * @desc 默认为 true
   */
  showMonth: boolean;
  /**
   * @desc 打点
   */
  selected: _UniCalendarSelected;
  /**
   * @desc 弹出日历组件
   * @desc insert 为 true 时有效
   */
  open: _UniCalendarOnOpen;
  /**
   * @desc 日期改变时触发
   * @desc insert 为 true 时有效
   */
  onChange: _UniCalendarOnChange;
  /**
   * @desc 确认选择时触发
   * @desc insert 为 false 时有效
   */
  onConfirm: _UniCalendarOnConfirm;
  /**
   * @desc 切换月份时触发
   */
  onMonthSwitch: _UniCalendarOnMonthSwitch;
  /**
   * @desc 关闭日历组件时触发
   */
  onClose: _UniCalendarOnClose;
}

/**
 * @desc 日历组件可以查看日期，选择任意范围内的日期，打点操作
 * @desc 常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
 */
type _UniCalendar = Component<Partial<_UniCalendarProps>>;

export {
  _UniCalendarDate as UniCalendarDate,
  _UniCalendarSelectedElement as UniCalendarSelectedElement,
  _UniCalendarSelected as UniCalendarSelected,
  _UniCalendarOnOpen as UniCalendarOnOpen,
  _UniCalendarBaseDetail as UniCalendarBaseDetail,
  _UniCalendarOnChangeDetail as UniCalendarOnChangeDetail,
  _UniCalendarOnChange as UniCalendarOnChange,
  _UniCalendarOnConfirmDetail as UniCalendarOnConfirmDetail,
  _UniCalendarOnConfirm as UniCalendarOnConfirm,
  _UniCalendarOnMonthSwitchDetail as UniCalendarOnMonthSwitchDetail,
  _UniCalendarOnMonthSwitch as UniCalendarOnMonthSwitch,
  _UniCalendarOnCloseDetail as UniCalendarOnCloseDetail,
  _UniCalendarOnClose as UniCalendarOnClose,
  _UniCalendarProps as UniCalendarProps,
  _UniCalendar as UniCalendar,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 日期
     * @desc 格式为 YYYY-MM-DD
     */
    export type UniCalendarDate = _UniCalendarDate;
    /**
     * @desc 打点项
     */
    export interface UniCalendarSelectedElement extends _UniCalendarSelectedElement {}
    /**
     * @desc 打点
     */
    export interface UniCalendarSelected extends _UniCalendarSelected {}
    /**
     * @desc 弹出日历组件
     * @desc insert 为 true 时有效
     */
    export interface UniCalendarOnOpen extends _UniCalendarOnOpen {}
    export interface UniCalendarBaseDetail extends _UniCalendarBaseDetail {}
    export interface UniCalendarOnChangeDetail extends _UniCalendarOnChangeDetail {}
    /**
     * @desc 日期改变时触发
     * @desc insert 为 true 时有效
     */
    export interface UniCalendarOnChange extends _UniCalendarOnChange {}
    export interface UniCalendarOnConfirmDetail extends _UniCalendarOnConfirmDetail {}
    /**
     * @desc 确认选择时触发
     * @desc insert 为 false 时有效
     */
    export interface UniCalendarOnConfirm extends _UniCalendarOnConfirm {}
    export interface UniCalendarOnMonthSwitchDetail extends _UniCalendarOnMonthSwitchDetail {}
    /**
     * @desc 切换月份时触发
     */
    export interface UniCalendarOnMonthSwitch extends _UniCalendarOnMonthSwitch {}
    export interface UniCalendarOnCloseDetail extends _UniCalendarOnCloseDetail {}
    /**
     * @desc 关闭日历组件时触发
     */
    export interface UniCalendarOnClose extends _UniCalendarOnClose {}
    /**
     * @desc 日历组件属性
     */
    export interface UniCalendarProps extends _UniCalendarProps {}
    /**
     * @desc 日历组件可以查看日期，选择任意范围内的日期，打点操作
     * @desc 常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
     */
    export type UniCalendar = _UniCalendar;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 日历组件可以查看日期，选择任意范围内的日期，打点操作
     * @desc 常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
     */
    UniCalendar: _UniCalendar;
  }
}
