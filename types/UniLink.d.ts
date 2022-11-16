import { Component } from '@uni-helper/uni-app-types';

export interface UniLinkProps {
  /**
   * @desc 链接地址
   */
  href: string;
  /**
   * @desc 显示文字
   */
  text: string;
  /**
   * @desc H5 下载文件名
   */
  download: string;
  /**
   * @desc 是否显示下划线
   * @desc 默认为 true
   */
  showUnderLine: boolean;
  /**
   * @desc 小程序端复制链接时的提示语
   * @desc 已自动复制网址，请在手机浏览器里粘贴该网址
   */
  copyTips: string;
  /**
   * @desc 链接文字颜色
   * @desc 默认为 #999999
   */
  color: string;
  /**
   * @desc 链接文字大小
   * @desc 单位为 px
   * @desc 默认为 14
   */
  fontSize: number | string;
}

/**
 * @desc 外部网页超链接组件
 * @desc 在小程序内复制 URL
 * @desc 在 APP 内打开外部浏览器
 * @desc 在 H5 端打开新网页
 */
export type UniLink = Component<Partial<UniLinkProps>>;
