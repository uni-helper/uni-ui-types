import { Component } from '@uni-helper/uni-app-types';

interface _UniPopupShareOnSelectDetail {
  value: {
    text: string;
    icon: string;
    name: string;
  };
  index: number;
}

/** 选择时触发 */
interface _UniPopupShareOnSelect {
  (detail: _UniPopupShareOnSelectDetail): void;
}

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

type _UniPopupShare = Component<_UniPopupShareProps>;

type _UniPopupShareInstance = InstanceType<_UniPopupShare>;

export {
  _UniPopupShareOnSelectDetail as UniPopupShareOnSelectDetail,
  _UniPopupShareOnSelect as UniPopupShareOnSelect,
  _UniPopupShareProps as UniPopupShareProps,
  _UniPopupShare as UniPopupShare,
  _UniPopupShareInstance as UniPopupShareInstance,
};

declare global {
  namespace UniHelper {
    export interface UniPopupShareOnSelectDetail extends _UniPopupShareOnSelectDetail {}
    /** 选择时触发 */
    export interface UniPopupShareOnSelect extends _UniPopupShareOnSelect {}
    export type UniPopupShareProps = _UniPopupShareProps;
    export type UniPopupShare = _UniPopupShare;
    export type UniPopupShareInstance = _UniPopupShareInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniPopupShare: _UniPopupShare;
  }
}
