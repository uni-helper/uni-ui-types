import { Component } from '@uni-helper/uni-app-types';

export interface UniPopupShareProps {
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
  onSelect: (event: {
    value: {
      text: string;
      icon: string;
      name: string;
    };
    index: number;
  }) => void;
}

export type UniPopupShare = Component<Partial<UniPopupShareProps>>;
