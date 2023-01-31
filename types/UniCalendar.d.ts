import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * 日期
 *
 * 格式为 YYYY-MM-DD
 */
type _UniCalendarDate = string;

/** 打点项 */
interface _UniCalendarSelectedElement {
  /** 日期 */
  date: _UniCalendarDate;
  /** 信息 */
  info: string;
  /** 自定义数据 */
  data: {
    /** 自定义信息 */
    custom: string;
    /** 自定义信息头 */
    name: string;
  };
}

/** 打点 */
type _UniCalendarSelected = _UniCalendarSelectedElement[];

/**
 * 弹出日历组件
 *
 * insert 为 true 时有效
 */
interface _UniCalendarOnOpen {
  (event: BaseEvent): void;
}

interface _UniCalendarBaseDetail {
  /** 选择的范围 */
  range: {
    /** 范围开始日期 */
    before: _UniCalendarDate;
    // 范围结束日期
    after: _UniCalendarDate;
    // 范围日期数组
    data: _UniCalendarDate[];
  };
  /** 当前年 */
  year: number;
  /** 当前月 */
  month: number;
  /** 当前日 */
  date: number;
  /** 农历信息 */
  lunar: {
    /** 农历当前年 */
    lYear: number;
    /** 农历当前月 */
    lMonth: number;
    /** 农历当前日 */
    lDay: number;
    /** 生肖 */
    Animal: string;
    /** 农历当前月中文表示 */
    IMonthCn: string;
    /** 农历当前日中文表示 */
    IDayCn: string;
    /** 公历当前年 */
    cYear: number;
    /** 公历当前月 */
    cMonth: number;
    /** 公历当前日 */
    cDay: number;
    /** 农历当前年中文天干地支表示 */
    gzYear: string;
    /** 农历当前月中文天干地支表示 */
    gzMonth: string;
    /** 农历当前日中文天干地支表示 */
    gzDay: string;
    /** 是否今天 */
    isToday: boolean;
    /** 是否闰年 */
    isLeap: boolean;
    /** 周几 */
    nWeek: number;
    /** 周几中文表示 */
    ncWeek: string;
    /** 是否节气 */
    isTerm: false;
    /** 节气名 */
    term: string | null | undefined;
    /** 星座 */
    astro: string;
  };
  /** 打点信息 */
  extraInfo: _UniCalendarSelectedElement;
  /** 当前完整日期 */
  fulldate: _UniCalendarDate;
}

interface _UniCalendarOnChangeDetail extends _UniCalendarBaseDetail {}

/**
 * 日期改变时触发
 *
 * insert 为 true 时有效
 */
interface _UniCalendarOnChange {
  (detail: _UniCalendarOnChangeDetail): void;
}

interface _UniCalendarOnConfirmDetail extends _UniCalendarBaseDetail {}

/**
 * 确认选择时触发
 *
 * insert 为 false 时有效
 */
interface _UniCalendarOnConfirm {
  (detail: _UniCalendarOnConfirmDetail): void;
}

interface _UniCalendarOnMonthSwitchDetail extends _UniCalendarBaseDetail {}

/** 切换月份时触发 */
interface _UniCalendarOnMonthSwitch {
  (detail: _UniCalendarOnMonthSwitchDetail): void;
}

interface _UniCalendarOnCloseDetail extends _UniCalendarBaseDetail {}

/** 关闭日历组件时触发 */
interface _UniCalendarOnClose {
  (detail: _UniCalendarOnCloseDetail): void;
}

/** 日历组件属性 */
interface _UniCalendarProps {
  /**
   * 自定义当前时间
   *
   * 格式为 YYYY-MM-DD
   *
   * 默认为 今天
   */
  date: _UniCalendarDate;
  /**
   * 是否显示农历
   *
   * 默认为 false
   */
  lunar: boolean;
  /**
   * 日期范围的开始日期
   *
   * 格式为 YYYY-MM-DD
   */
  startDate: _UniCalendarDate;
  /**
   * 日期范围的结束日期
   *
   * 格式为 YYYY-MM-DD
   */
  endDate: _UniCalendarDate;
  /**
   * 是否为范围选择
   *
   * 默认为 false
   */
  range: boolean;
  /**
   * 插入模式
   *
   * true 插入模式
   *
   * false 弹窗模式
   *
   * 默认为 true
   */
  insert: boolean;
  /**
   * 弹窗模式下是否清空上次选择内容
   *
   * insert 为 true 时有效
   *
   * 默认为 true
   */
  clearDate: boolean;
  /**
   * 是否显示月份为背景
   *
   * 默认为 true
   */
  showMonth: boolean;
  /** 打点 */
  selected: _UniCalendarSelected;
  /**
   * 弹出日历组件
   *
   * insert 为 true 时有效
   */
  open: _UniCalendarOnOpen;
  /**
   * 日期改变时触发
   *
   * insert 为 true 时有效
   */
  onChange: _UniCalendarOnChange;
  /**
   * 确认选择时触发
   *
   * insert 为 false 时有效
   */
  onConfirm: _UniCalendarOnConfirm;
  /** 切换月份时触发 */
  onMonthSwitch: _UniCalendarOnMonthSwitch;
  /** 关闭日历组件时触发 */
  onClose: _UniCalendarOnClose;
}

/**
 * 日历组件可以查看日期，选择任意范围内的日期，打点操作
 *
 * 常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
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
     * 日期
     *
     * 格式为 YYYY-MM-DD
     */
    export type UniCalendarDate = _UniCalendarDate;
    /** 打点项 */
    export interface UniCalendarSelectedElement extends _UniCalendarSelectedElement {}
    /** 打点 */
    export interface UniCalendarSelected extends _UniCalendarSelected {}
    /**
     * 弹出日历组件
     *
     * insert 为 true 时有效
     */
    export interface UniCalendarOnOpen extends _UniCalendarOnOpen {}
    export interface UniCalendarBaseDetail extends _UniCalendarBaseDetail {}
    export interface UniCalendarOnChangeDetail extends _UniCalendarOnChangeDetail {}
    /**
     * 日期改变时触发
     *
     * insert 为 true 时有效
     */
    export interface UniCalendarOnChange extends _UniCalendarOnChange {}
    export interface UniCalendarOnConfirmDetail extends _UniCalendarOnConfirmDetail {}
    /**
     * 确认选择时触发
     *
     * insert 为 false 时有效
     */
    export interface UniCalendarOnConfirm extends _UniCalendarOnConfirm {}
    export interface UniCalendarOnMonthSwitchDetail extends _UniCalendarOnMonthSwitchDetail {}
    /** 切换月份时触发 */
    export interface UniCalendarOnMonthSwitch extends _UniCalendarOnMonthSwitch {}
    export interface UniCalendarOnCloseDetail extends _UniCalendarOnCloseDetail {}
    /** 关闭日历组件时触发 */
    export interface UniCalendarOnClose extends _UniCalendarOnClose {}
    /** 日历组件属性 */
    export interface UniCalendarProps extends _UniCalendarProps {}
    /**
     * 日历组件可以查看日期，选择任意范围内的日期，打点操作
     *
     * 常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
     */
    export type UniCalendar = _UniCalendar;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * 日历组件可以查看日期，选择任意范围内的日期，打点操作
     *
     * 常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
     */
    UniCalendar: _UniCalendar;
  }
}
