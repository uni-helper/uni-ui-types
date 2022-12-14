import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/** 输入内容 */
type _UniEasyinputValue = string | number;

/**
 * 输入框的类型
 *
 * Text 文字输入键盘
 *
 * Textarea 多行文本输入键盘
 *
 * Password 密码输入键盘
 *
 * Number 数字输入键盘，iOS 上 app-vue 弹出的数字键盘不是九宫格
 *
 * Idcard 身份证输入键盘
 *
 * Digit 带小数点的数字键盘
 */
type _UniEasyinputType = 'text' | 'textarea' | 'password' | 'number' | 'idcard' | 'digit';

/**
 * 设置键盘右下角按钮的文字
 *
 * Type="text" 时有效
 *
 * Send 发送
 *
 * Search 搜索
 *
 * Next 下一个
 *
 * Go 前往
 *
 * Done 完成
 */
type _UniEasyinputOnConfirmType = 'send' | 'search' | 'next' | 'go' | 'done';

/**
 * 自动去除空格的类型
 *
 * True 去除左右空格
 *
 * False 不去除左右空格
 *
 * Both 去除两端空格
 *
 * Left 去除左侧空格
 *
 * Right 去除右侧空格
 *
 * All 去除所有空格
 *
 * None 不去除空格
 */
type _UniEasyinputTrim = boolean | 'both' | 'left' | 'right' | 'all' | 'none';

/** 自定义样式 */
interface _UniEasyinputStyles {
  /**
   * 输入文字颜色
   *
   * 默认为 #333333
   */
  color: string;
  /**
   * 输入框禁用背景色
   *
   * 默认为 #eeeeee
   */
  disableColor: string;
  /**
   * 边框颜色
   *
   * 默认为 #e5e5e5
   */
  borderColor: string;
}

/** 图标位置 */
type _UniEasyinputIconPosition = 'prefix' | 'suffix';

/** 输入框发生变化时触发 */
interface _UniEasyinputOnInput {
  (value: _UniEasyinputValue): void;
}

/** 清除时触发 */
interface _UniEasyinputOnClear {
  (): void;
}

/** 输入框获得焦点时触发 */
interface _UniEasyinputOnFocus {
  (event: BaseEvent): void;
}

/** 输入框失去焦点时触发 */
interface _UniEasyinputOnBlur {
  (event: BaseEvent): void;
}

/** 点击完成时触发 */
interface _UniEasyinputOnConfirm {
  (value: _UniEasyinputValue): void;
}

/** 点击图标时触发 */
interface _UniEasyinputOnIconClick {
  (position: _UniEasyinputIconPosition): void;
}

/** 输入框失去焦点或用户按下回车时触发 */
interface _UniEasyinputOnChange {
  (value: _UniEasyinputValue): void;
}

interface _UniEasyinputProps {
  /** 输入内容 */
  value: _UniEasyinputValue;
  /**
   * 输入框的类型
   *
   * Text 文字输入键盘
   *
   * Textarea 多行文本输入键盘
   *
   * Password 密码输入键盘
   *
   * Number 数字输入键盘，iOS 上 app-vue 弹出的数字键盘不是九宫格
   *
   * Idcard 身份证输入键盘
   *
   * Digit 带小数点的数字键盘
   *
   * 默认为 text
   */
  type: _UniEasyinputType;
  /**
   * 是否显示右侧清空内容的图标控件
   *
   * 输入框有内容且不禁用时显示
   *
   * 点击可清空输入框内容
   *
   * 默认为 true
   */
  clearable: boolean;
  /**
   * 是否自动增高输入区域
   *
   * Type="textarea" 时有效
   *
   * 默认为 false
   */
  autoHeight: boolean;
  /** 输入框的提示文字 */
  placeholder: string;
  /** 提示文字样式 */
  placeholderStyle: string;
  /**
   * 是否自动获得焦点
   *
   * 默认为 false
   */
  focus: boolean;
  /**
   * 是否不可输入
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 最大输入长度
   *
   * 设置为 -1 时不限制最大长度
   *
   * 默认为 140
   */
  maxlength: number;
  /**
   * 设置键盘右下角按钮的文字
   *
   * Type="text" 时有效
   *
   * Send 发送
   *
   * Search 搜索
   *
   * Next 下一个
   *
   * Go 前往
   *
   * Done 完成
   *
   * 默认为 done
   */
  confirmType: _UniEasyinputOnConfirmType;
  /**
   * 清除图标的大小
   *
   * 单位为 px
   *
   * 默认为 15
   */
  clearSize: number;
  /** 输入框头部图标 */
  prefixIcon: string;
  /** 输入框尾部图标 */
  suffixIcon: string;
  /**
   * 是否自动去除空格
   *
   * True 去除左右空格
   *
   * False 不去除左右空格
   *
   * Both 去除两端空格
   *
   * Left 去除左侧空格
   *
   * Right 去除右侧空格
   *
   * All 去除所有空格
   *
   * None 不去除空格
   *
   * 默认为 false
   */
  trim: _UniEasyinputTrim;
  /**
   * 是否显示输入框边框
   *
   * 默认为 true
   */
  inputBorder: boolean;
  /** 自定义样式 */
  styles: _UniEasyinputStyles;
  /**
   * 是否显示眼睛图标
   *
   * Type="password" 时有效
   *
   * 默认为 true
   */
  passwordIcon: boolean;
  /** 输入框发生变化时触发 */
  onInput: _UniEasyinputOnInput;
  /** 清除时触发 */
  onClear: _UniEasyinputOnClear;
  /** 输入框获得焦点时触发 */
  onFocus: _UniEasyinputOnFocus;
  /** 输入框失去焦点时触发 */
  onBlur: _UniEasyinputOnBlur;
  /** 点击完成时触发 */
  onConfirm: _UniEasyinputOnConfirm;
  /** 点击图标时触发 */
  onIconClick: _UniEasyinputOnIconClick;
  /** 输入框失去焦点或用户按下回车时触发 */
  onChange: _UniEasyinputOnChange;
}

/** 对原生 input 组件的增强 */
type _UniEasyinput = Component<Partial<_UniEasyinputProps>>;

export {
  _UniEasyinputValue as UniEasyinputValue,
  _UniEasyinputType as UniEasyinputType,
  _UniEasyinputOnConfirmType as UniEasyinputOnConfirmType,
  _UniEasyinputTrim as UniEasyinputTrim,
  _UniEasyinputStyles as UniEasyinputStyles,
  _UniEasyinputIconPosition as UniEasyinputIconPosition,
  _UniEasyinputOnInput as UniEasyinputOnInput,
  _UniEasyinputOnClear as UniEasyinputOnClear,
  _UniEasyinputOnFocus as UniEasyinputOnFocus,
  _UniEasyinputOnBlur as UniEasyinputOnBlur,
  _UniEasyinputOnConfirm as UniEasyinputOnConfirm,
  _UniEasyinputOnIconClick as UniEasyinputOnIconClick,
  _UniEasyinputOnChange as UniEasyinputOnChange,
  _UniEasyinputProps as UniEasyinputProps,
  _UniEasyinput as UniEasyinput,
};

declare global {
  namespace UniHelper {
    /** 输入内容 */
    export type UniEasyinputValue = _UniEasyinputValue;
    /**
     * 输入框的类型
     *
     * Text 文字输入键盘
     *
     * Textarea 多行文本输入键盘
     *
     * Password 密码输入键盘
     *
     * Number 数字输入键盘，iOS 上 app-vue 弹出的数字键盘不是九宫格
     *
     * Idcard 身份证输入键盘
     *
     * Digit 带小数点的数字键盘
     */
    export type UniEasyinputType = _UniEasyinputType;
    /**
     * 设置键盘右下角按钮的文字
     *
     * Type="text" 时有效
     *
     * Send 发送
     *
     * Search 搜索
     *
     * Next 下一个
     *
     * Go 前往
     *
     * Done 完成
     */
    export type UniEasyinputOnConfirmType = _UniEasyinputOnConfirmType;
    /**
     * 自动去除空格的类型
     *
     * True 去除左右空格
     *
     * False 不去除左右空格
     *
     * Both 去除两端空格
     *
     * Left 去除左侧空格
     *
     * Right 去除右侧空格
     *
     * All 去除所有空格
     *
     * None 不去除空格
     */
    export type UniEasyinputTrim = _UniEasyinputTrim;
    /** 自定义样式 */
    export type UniEasyinputStyles = _UniEasyinputStyles;
    /** 图标位置 */
    export type UniEasyinputIconPosition = _UniEasyinputIconPosition;
    /** 输入框发生变化时触发 */
    export interface UniEasyinputOnInput extends _UniEasyinputOnInput {}
    /** 清除时触发 */
    export interface UniEasyinputOnClear extends _UniEasyinputOnClear {}
    /** 输入框获得焦点时触发 */
    export interface UniEasyinputOnFocus extends _UniEasyinputOnFocus {}
    /** 输入框失去焦点时触发 */
    export interface UniEasyinputOnBlur extends _UniEasyinputOnBlur {}
    /** 点击完成时触发 */
    export interface UniEasyinputOnConfirm extends _UniEasyinputOnConfirm {}
    /** 点击图标时触发 */
    export interface UniEasyinputOnIconClick extends _UniEasyinputOnIconClick {}
    /** 输入框失去焦点或用户按下回车时触发 */
    export interface UniEasyinputOnChange extends _UniEasyinputOnChange {}
    export interface UniEasyinputProps extends _UniEasyinputProps {}
    /** 对原生 input 组件的增强 */
    export type UniEasyinput = _UniEasyinput;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 对原生 input 组件的增强 */
    UniEasyinput: _UniEasyinput;
  }
}
