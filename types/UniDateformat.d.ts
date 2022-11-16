import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 格式化使用的语言
 * @desc zh 中文
 * @desc en 英文
 */
export type UniDateformatLocale = 'zh' | 'en';

export interface UniDateformatProps {
  /**
   * @desc 要格式化的日期对象/日期字符串/时间戳
   * @desc 默认为 Date.now()
   */
  date: Date | string | number;
  /**
   * @desc 转化类型阈值
   * @desc 默认为 [0, 0]
   */
  threshold: [number, number];
  /**
   * @desc 格式字符串
   * @desc yyyy 四位年份
   * @desc yy 两位年份
   * @desc MM 两位月份，不足则在前面补 0
   * @desc M 月份，不自动补 0
   * @desc dd 两位天，不足则在前面补 0
   * @desc d 天，不自动补 0
   * @desc hh 两位小时，不足则在前面补 0
   * @desc h 小时，不自动补 0
   * @desc mm 两位分钟，不足则在前面补 0
   * @desc m 分钟，不自动补 0
   * @desc ss 两位秒，不足则在前面补 0
   * @desc s 秒，不自动补 0
   * @desc SSS 三位毫秒，不足则在前面补 0
   * @desc S 毫秒，不自动补 0
   * @desc 默认为 yyyy/MM/dd hh:mm:ss
   */
  format: string;
  /**
   * @desc 格式化使用的语言
   * @desc zh 中文
   * @desc en 英文
   * @desc 默认为 zh
   */
  locale: UniDateformatLocale;
}

/**
 * @desc 日期格式化组件
 */
export type UniDateformat = Component<Partial<UniDateformatProps>>;
