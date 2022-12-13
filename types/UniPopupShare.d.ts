import { Component } from '@uni-helper/uni-app-types';

interface _UniPopupShareOnSelectDetail {
  value: {
    text: string;
    icon: string;
    name: string;
  };
  index: number;
}

/**
 * @desc 选择时触发
 */
interface _UniPopupShareOnSelect {
  (detail: _UniPopupShareOnSelectDetail): void;
}

interface _UniPopupShareProps {
  /**
   * @desc 分享弹窗标题
   */
  title: string;
  /**
   * @desc 是否拦截按钮事件
   * @desc true 不会关闭对话框，手动调用 close 以关闭
   * @desc 默认为 false
   */
  beforeClose: boolean;
  /**
   * @desc 选择时触发
   */
  onSelect: _UniPopupShareOnSelect;
}

type _UniPopupShare = Component<Partial<_UniPopupShareProps>>;

export {
  _UniPopupShareOnSelectDetail as UniPopupShareOnSelectDetail,
  _UniPopupShareOnSelect as UniPopupShareOnSelect,
  _UniPopupShareProps as UniPopupShareProps,
  _UniPopupShare as UniPopupShare,
};

declare global {
  namespace UniHelper {
    export interface UniPopupShareOnSelectDetail extends _UniPopupShareOnSelectDetail {}
    /**
     * @desc 选择时触发
     */
    export interface UniPopupShareOnSelect extends _UniPopupShareOnSelect {}
    export interface UniPopupShareProps extends _UniPopupShareProps {}
    export type UniPopupShare = _UniPopupShare;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniPopupShare: _UniPopupShare;
  }
}
