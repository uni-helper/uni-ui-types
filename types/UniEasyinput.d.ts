import { BaseEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 输入框的类型
 * @desc text 文字输入键盘
 * @desc textarea 多行文本输入键盘
 * @desc password 密码输入键盘
 * @desc number 数字输入键盘，iOS 上 app-vue 弹出的数字键盘不是九宫格
 * @desc idcard 身份证输入键盘
 * @desc digit 带小数点的数字键盘
 */
export type UniEasyinputType = 'text' | 'textarea' | 'password' | 'number' | 'idcard' | 'digit';

/**
 * @desc 设置键盘右下角按钮的文字
 * @desc type="text" 时有效
 * @desc send 发送
 * @desc search 搜索
 * @desc next 下一个
 * @desc go 前往
 * @desc done 完成
 */
export type UniEasyinputConfirmType = 'send' | 'search' | 'next' | 'go' | 'done';

/**
 * @desc 自动去除空格的类型
 * @desc true 去除左右空格
 * @desc false 不去除左右空格
 * @desc both 去除两端空格
 * @desc left 去除左侧空格
 * @desc right 去除右侧空格
 * @desc all 去除所有空格
 * @desc none 不去除空格
 */
export type UniEasyinputTrim = boolean | 'both' | 'left' | 'right' | 'all' | 'none';

/**
 * @desc 自定义样式
 */
export interface UniEasyinputStyles {
  /**
   * @desc 输入文字颜色
   * @desc 默认为 #333333
   */
  color: string;
  /**
   * @desc 输入框禁用背景色
   * @desc 默认为 #eeeeee
   */
  disableColor: string;
  /**
   * @desc 边框颜色
   * @desc 默认为 #e5e5e5
   */
  borderColor: string;
}

export interface UniEasyinputProps {
  /**
   * @desc 输入内容
   */
  value: string | number;
  /**
   * @desc 输入框的类型
   * @desc text 文字输入键盘
   * @desc textarea 多行文本输入键盘
   * @desc password 密码输入键盘
   * @desc number 数字输入键盘，iOS 上 app-vue 弹出的数字键盘不是九宫格
   * @desc idcard 身份证输入键盘
   * @desc digit 带小数点的数字键盘
   * @desc 默认为 text
   */
  type: UniEasyinputType;
  /**
   * @desc 是否显示右侧清空内容的图标控件
   * @desc 输入框有内容且不禁用时显示
   * @desc 点击可清空输入框内容
   * @desc 默认为 true
   */
  clearable: boolean;
  /**
   * @desc 是否自动增高输入区域
   * @desc type="textarea" 时有效
   * @desc 默认为 false
   */
  autoHeight: boolean;
  /**
   * @desc 输入框的提示文字
   */
  placeholder: string;
  /**
   * @desc 提示文字样式
   */
  placeholderStyle: string;
  /**
   * @desc 是否自动获得焦点
   * @desc 默认为 false
   */
  focus: boolean;
  /**
   * @desc 是否不可输入
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 最大输入长度
   * @desc 设置为 -1 时不限制最大长度
   * @desc 默认为 140
   */
  maxlength: number;
  /**
   * @desc 设置键盘右下角按钮的文字
   * @desc type="text" 时有效
   * @desc send 发送
   * @desc search 搜索
   * @desc next 下一个
   * @desc go 前往
   * @desc done 完成
   * @desc 默认为 done
   */
  confirmType: UniEasyinputConfirmType;
  /**
   * @desc 清除图标的大小
   * @desc 单位为 px
   * @desc 默认为 15
   */
  clearSize: number;
  /**
   * @desc 输入框头部图标
   */
  prefixIcon: string;
  /**
   * @desc 输入框尾部图标
   */
  suffixIcon: string;
  /**
   * @desc 是否自动去除空格
   * @desc true 去除左右空格
   * @desc false 不去除左右空格
   * @desc both 去除两端空格
   * @desc left 去除左侧空格
   * @desc right 去除右侧空格
   * @desc all 去除所有空格
   * @desc none 不去除空格
   * @desc 默认为 false
   */
  trim: UniEasyinputTrim;
  /**
   * @desc 是否显示输入框边框
   * @desc 默认为 true
   */
  inputBorder: boolean;
  /**
   * @desc 自定义样式
   */
  styles: UniEasyinputStyles;
  /**
   * @desc 是否显示眼睛图标
   * @desc type="password" 时有效
   * @desc 默认为 true
   */
  passwordIcon: boolean;
  /**
   * @desc 输入框发生变化时触发
   */
  onInput: (value: UniEasyinputProps['value']) => void;
  /**
   * @desc 清除时触发
   */
  onClear: () => void;
  /**
   * @desc 输入框获得焦点时触发
   */
  onFocus: (event: BaseEvent) => void;
  /**
   * @desc 输入框失去焦点时触发
   */
  onBlur: (event: BaseEvent) => void;
  /**
   * @desc 点击完成时触发
   */
  onConfirm: (value: UniEasyinputProps['value']) => void;
  /**
   * @desc 点击图标时触发
   */
  onIconClick: (type: 'prefix' | 'suffix') => void;
  /**
   * @desc 输入框失去焦点或用户按下回车时触发
   */
  onChange: (value: UniEasyinputProps['value']) => void;
}

/**
 * @desc 对原生 input 组件的增强
 */
export type UniEasyinput = Component<Partial<UniEasyinputProps>>;
