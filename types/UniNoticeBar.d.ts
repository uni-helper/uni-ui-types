import { BaseEvent, Component } from '@uni-helper/uni-app-types';

export interface UniNoticeBarProps {
  /**
   * @desc 文字滚动的速度
   * @desc 单位为 px
   * @desc 默认为 100
   */
  speed: number;
  /**
   * @desc 显示文字
   */
  text: string;
  /**
   * @desc 背景颜色
   * @desc 默认为 #fffbe8
   */
  backgroundColor: string;
  /**
   * @desc 文字颜色
   * @desc 默认为 #de8c17
   */
  color: string;
  /**
   * @desc 查看更多的文字颜色
   * @desc 默认为 #999999
   */
  moreColor: string;
  /**
   * @desc 查看更多的文本
   */
  moreText: string;
  /**
   * @desc 是否单行
   * @desc 默认为 false
   */
  single: boolean;
  /**
   * @desc 是否滚动
   * @desc true 滚动，单行
   * @desc false 不滚动
   * @desc 默认为 false
   */
  scrollable: boolean;
  /**
   * @desc 是否显示左侧喇叭图标
   * @desc 默认为 false
   */
  showIcon: boolean;
  /**
   * @desc 是否显示左侧关闭按钮
   * @desc 默认为 false
   */
  showClose: boolean;
  /**
   * @desc 是否显示右侧查看更多图标
   * @desc true 单行
   * @desc 默认为 false
   */
  showGetMore: boolean;
  /**
   * @desc 点击触发
   */
  onClick: (event: BaseEvent) => void;
  /**
   * @desc 关闭触发
   */
  onClose: (event: BaseEvent) => void;
  /**
   * @desc 查看更多触发
   */
  onGetmore: (event: BaseEvent) => void;
}

/**
 * @desc 通告栏
 */
export type UniNoticeBar = Component<Partial<UniNoticeBarProps>>;
