import { AnyRecord, BaseEvent, Component } from '@uni-helper/uni-app-types';

export interface UniCalendarProps {
  /**
   * @desc 自定义当前时间
   * @desc 格式为 YYYY-MM-DD
   * @desc 默认为 今天
   */
  date: string;
  /**
   * @desc 是否显示农历
   * @desc 默认为 false
   */
  lunar: boolean;
  /**
   * @desc 日期范围的开始日期
   * @desc 格式为 YYYY-MM-DD
   */
  startDate: string;
  /**
   * @desc 日期范围的结束日期
   * @desc 格式为 YYYY-MM-DD
   */
  endDate: string;
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
  selected: {
    /**
     * @desc 日期
     */
    date: UniCalendarProps['date'];
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
  }[];
  /**
   * @desc 弹出日历组件
   * @desc insert 为 true 时有效
   */
  open: (event: BaseEvent) => void;
  onClose: (event: BaseEvent) => void;
  onConfirm: (event: BaseEvent) => void;
  onChange: (event: {
    range: UniCalendarProps['range'];
    year: number;
    month: number;
    date: UniCalendarProps['date'];
    fulldate: UniCalendarProps['date'];
    lunar: UniCalendarProps['lunar'];
    extraInfo: AnyRecord;
  }) => void;
  onMonthSwitch: (event: { year: number; month: number }) => void;
}

/**
 * @desc 日历组件可以查看日期，选择任意范围内的日期，打点操作
 * @desc 常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
 */
export type UniCalendar = Component<Partial<UniCalendarProps>>;
