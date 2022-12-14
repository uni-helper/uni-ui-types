import { AnyRecord, Component } from '@uni-helper/uni-app-types';

/** 新页面的跳转方式 */
type _UniListItemChatLink = 'navigateTo' | 'redirectTo' | 'reLaunch' | 'switchTab';

/** 头像 */
interface _UniListItemChatAvatar {
  url: string;
}

/** 点击 uni-list-item-chat 触发，需开启点击反馈 */
interface _UniListItemChatOnClick {
  (event?: AnyRecord): void;
}

interface _UniListItemChatProps {
  /** 标题 */
  title: string;
  /** 描述 */
  note: string;
  /**
   * 是否开启点击反馈
   *
   * 默认为 false
   */
  clickable: boolean;
  /**
   * 数字角标内容
   *
   * 设置为 dot 将显示圆点
   */
  badgeText: string;
  /**
   * 角标位置
   *
   * 默认为 right
   */
  badgePosition: string;
  /**
   * 新页面的跳转方式
   *
   * 默认为 navigateTo
   */
  link: _UniListItemChatLink;
  /**
   * 新页面跳转地址
   *
   * 如填写此属性，click 会返回页面是否跳转成功
   */
  to: string;
  /** 右侧时间显示 */
  time: string;
  /**
   * 是否显示圆形头像
   *
   * 默认为 false
   */
  avatarCircle: boolean;
  /**
   * 头像地址
   *
   * AvatarCircle 不填时有效
   */
  avatar: string;
  /** 头像组 */
  avatarList: _UniListItemChatAvatar[];
  /** 点击 uni-list-item-chat 触发，需开启点击反馈 */
  onClick: _UniListItemChatOnClick;
}

type _UniListItemChat = Component<Partial<_UniListItemChatProps>>;

export {
  _UniListItemChatLink as UniListItemChatLink,
  _UniListItemChatAvatar as UniListItemChatAvatar,
  _UniListItemChatOnClick as UniListItemChatOnClick,
  _UniListItemChatProps as UniListItemChatProps,
  _UniListItemChat as UniListItemChat,
};

declare global {
  namespace UniHelper {
    /** 新页面的跳转方式 */
    export type UniListItemChatLink = _UniListItemChatLink;
    /** 头像 */
    export interface UniListItemChatAvatar extends _UniListItemChatAvatar {}
    /** 点击 uni-list-item-chat 触发，需开启点击反馈 */
    export interface UniListItemChatOnClick extends _UniListItemChatOnClick {}
    export interface UniListItemChatProps extends _UniListItemChatProps {}
    export type UniListItemChat = _UniListItemChat;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniListItemChat: _UniListItemChat;
  }
}
