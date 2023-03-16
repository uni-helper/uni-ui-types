import { Component } from '@uni-helper/uni-app-types';

type _UniPopupShareOnSelectEvent = {
  item: {
    text: string;
    icon: string;
    name: string;
  };
  index: number;
};

/** 选择时触发 */
interface _UniPopupShareOnSelect {
  (event: _UniPopupShareOnSelectEvent): void;
}

/** 分享弹窗属性 */
type _UniPopupShareProps = Partial<{
  /** 分享弹窗标题 */
  title: string;
  /**
   * 是否拦截按钮事件
   *
   * true 不会关闭对话框，手动调用 close 以关闭
   *
   * 默认为 false
   */
  beforeClose: boolean;
  /** 选择时触发 */
  onSelect: _UniPopupShareOnSelect;
}>;

/** 分享弹窗 */
type _UniPopupShare = Component<_UniPopupShareProps>;

type _UniPopupShareInstance = InstanceType<_UniPopupShare>;

export {
  _UniPopupShareOnSelectEvent as UniPopupShareOnSelectEvent,
  _UniPopupShareOnSelect as UniPopupShareOnSelect,
  _UniPopupShareProps as UniPopupShareProps,
  _UniPopupShare as UniPopupShare,
  _UniPopupShareInstance as UniPopupShareInstance,
};

declare global {
  namespace UniHelper {
    export type UniPopupShareOnSelectEvent = _UniPopupShareOnSelectEvent;
    /** 选择时触发 */
    export interface UniPopupShareOnSelect extends _UniPopupShareOnSelect {}
    /** 分享弹窗属性 */
    export type UniPopupShareProps = _UniPopupShareProps;
    /** 分享弹窗 */
    export type UniPopupShare = _UniPopupShare;
    export type UniPopupShareInstance = _UniPopupShareInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniPopupShare: _UniPopupShare;
  }
}
