import { Component } from '@uni-helper/uni-app-types';

/**
 * 格式化使用的语言
 *
 * Zh 中文
 *
 * En 英文
 */
type _UniDateformatLocale = 'zh' | 'en';

/** 要格式化的日期对象/日期字符串/时间戳 */
type _UniDateformatData = Date | string | number;

/** 日期格式化组件属性 */
interface _UniDateformatProps {
  /**
   * 要格式化的日期对象/日期字符串/时间戳
   *
   * 默认为 Date.now()
   */
  date: _UniDateformatData;
  /**
   * 转化类型阈值
   *
   * 默认为 [0, 0]
   */
  threshold: [number, number];
  /**
   * 格式字符串
   *
   * Yyyy 四位年份
   *
   * Yy 两位年份
   *
   * MM 两位月份，不足则在前面补 0
   *
   * M 月份，不自动补 0
   *
   * Dd 两位天，不足则在前面补 0
   *
   * D 天，不自动补 0
   *
   * Hh 两位小时，不足则在前面补 0
   *
   * H 小时，不自动补 0
   *
   * Mm 两位分钟，不足则在前面补 0
   *
   * M 分钟，不自动补 0
   *
   * Ss 两位秒，不足则在前面补 0
   *
   * S 秒，不自动补 0
   *
   * SSS 三位毫秒，不足则在前面补 0
   *
   * S 毫秒，不自动补 0
   *
   * 默认为 yyyy/MM/dd hh:mm:ss
   */
  format: string;
  /**
   * 格式化使用的语言
   *
   * Zh 中文
   *
   * En 英文
   *
   * 默认为 zh
   */
  locale: _UniDateformatLocale;
}

/** 日期格式化组件 */
type _UniDateformat = Component<Partial<_UniDateformatProps>>;

export {
  _UniDateformatLocale as UniDateformatLocale,
  _UniDateformatData as UniDateformatData,
  _UniDateformatProps as UniDateformatProps,
  _UniDateformat as UniDateformat,
};

declare global {
  namespace UniHelper {
    /** 格式化使用的语言 */
    export type UniDateformatLocale = _UniDateformatLocale;
    /** 要格式化的日期对象/日期字符串/时间戳 */
    export type UniDateformatData = _UniDateformatData;
    /** 日期格式化组件属性 */
    export interface UniDateformatProps extends _UniDateformatProps {}
    /** 日期格式化组件 */
    export type UniDateformat = _UniDateformat;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 日期格式化组件 */
    UniDateformat: _UniDateformat;
  }
}
