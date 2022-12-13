import { CustomEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 默认值
 */
type _UniDataCheckboxValue = string | number;

/**
 * @desc 显示模式
 * @desc default 横向显示
 * @desc list 列表
 * @desc button 按钮
 * @desc tag 标签
 */
type _UniDataCheckboxMode = 'default' | 'list' | 'button' | 'tag';

/**
 * @desc 本地渲染数据
 */
interface _UniDataCheckboxLocaldata {
  /**
   * @desc 显示文本
   */
  text: string;
  /**
   * @desc 选中后的值
   */
  value: _UniDataCheckboxValue;
  /**
   * @desc 是否禁用
   */
  disabled: boolean;
}

/**
 * @desc list 模式下 icon 显示的位置
 */
type _UniDataCheckboxIcon = 'left' | 'right';

/**
 * @desc 字段映射
 * @desc 将 text/value 映射到数据中的其他字段
 */
interface _UniDataCheckboxMap {
  text: string;
  value: string;
}

interface _UniDataCheckboxBaseProps {
  /**
   * @desc 本地渲染数据
   */
  localdata: _UniDataCheckboxLocaldata[];
  /**
   * @desc 显示模式
   * @desc default 横向显示
   * @desc list 列表
   * @desc button 按钮
   * @desc tag 标签
   * @desc 默认为 default
   */
  mode: _UniDataCheckboxMode;
  /**
   * @desc 是否换行显示
   */
  wrap: boolean;
  /**
   * @desc list 模式下 icon 显示的位置
   * @desc 默认为 left
   */
  icon: _UniDataCheckboxIcon;
  /**
   * @desc 选中颜色
   * @desc 默认为 #007aff
   */
  selectedColor: string;
  /**
   * @desc 选中文本颜色
   * @desc 默认为 #333333
   */
  selectedTextColor: string;
  /**
   * @desc 没有数据时显示的文字，本地数据无效
   * @desc 默认为 暂无数据
   */
  emptyText: string;
  /**
   * @desc 字段映射
   * @desc 将 text/value 映射到数据中的其他字段
   */
  map: _UniDataCheckboxMap;
}

interface _UniDataCheckboxSingleOnChangeDetail {
  value: _UniDataCheckboxValue;
}

/**
 * @desc 选中状态改变时触发
 */
interface _UniDataCheckboxSingleOnChange {
  (event: CustomEvent<_UniDataCheckboxSingleOnChangeDetail>): void;
}

interface _UniDataCheckboxSingleProps extends _UniDataCheckboxBaseProps {
  /**
   * @desc 默认值
   */
  value: _UniDataCheckboxValue;
  /**
   * @desc 关闭多选
   * @desc 默认为 false
   */
  multiple?: false;
  /**
   * @desc 选中状态改变时触发
   */
  onChange: _UniDataCheckboxSingleOnChange;
}

interface _UniDataCheckboxMultipleOnChangeDetail {
  value: _UniDataCheckboxValue[];
}

/**
 * @desc 选中状态改变时触发
 */
interface _UniDataCheckboxMultipleOnChange {
  (event: CustomEvent<_UniDataCheckboxMultipleOnChangeDetail>): void;
}

interface _UniDataCheckboxMultipleProps extends _UniDataCheckboxBaseProps {
  /**
   * @desc 默认值
   */
  value: _UniDataCheckboxValue[];
  /**
   * @desc 开启多选
   * @desc 默认为 false
   */
  multiple: true;
  /**
   * @desc 最小选择个数
   * @desc multiple 为 true 时有效
   */
  min: string | number;
  /**
   * @desc 最大选择个数
   * @desc multiple 为 true 时有效
   */
  max: string | number;
  /**
   * @desc 选中状态改变时触发
   */
  onChange: _UniDataCheckboxMultipleOnChange;
}

type _UniDataCheckboxProps = _UniDataCheckboxSingleProps | _UniDataCheckboxMultipleProps;

/**
 * @desc 本组件是基于 uni-app 基础组件 checkbox 的封装。本组件要解决问题包括：
 * @desc 数据绑定型组件：给本组件绑定一个data，会自动渲染一组候选内容，在以往，开发者需要编写不少代码实现类似功能
 * @desc 自动的表单校验：组件绑定了 data，且符合 uni-forms 组件的表单校验规范，搭配使用会自动实现表单校验
 * @desc 本组件合并了单选多选
 * @desc 本组件有若干风格选择，如普通的单选多选框、并列 button 风格、tag 风格，开发者可以快速选择需要的风格，会牺牲一定的样式自定义性
 * @desc 在 uni-cloud 开发中，DB Schema 中配置了 enum 枚举等类型后，在 web 控制台的自动生成表单功能中，会自动生成 uni-data-checkbox 组件并绑定好 data
 */
type _UniDataCheckbox = Component<Partial<_UniDataCheckboxProps>>;

export {
  _UniDataCheckboxValue as UniDataCheckboxValue,
  _UniDataCheckboxMode as UniDataCheckboxMode,
  _UniDataCheckboxLocaldata as UniDataCheckboxLocaldata,
  _UniDataCheckboxIcon as UniDataCheckboxIcon,
  _UniDataCheckboxMap as UniDataCheckboxMap,
  _UniDataCheckboxBaseProps as UniDataCheckboxBaseProps,
  _UniDataCheckboxSingleOnChangeDetail as UniDataCheckboxSingleOnChangeDetail,
  _UniDataCheckboxSingleOnChange as UniDataCheckboxSingleOnChange,
  _UniDataCheckboxSingleProps as UniDataCheckboxSingleProps,
  _UniDataCheckboxMultipleOnChangeDetail as UniDataCheckboxMultipleOnChangeDetail,
  _UniDataCheckboxMultipleOnChange as UniDataCheckboxMultipleOnChange,
  _UniDataCheckboxMultipleProps as UniDataCheckboxMultipleProps,
  _UniDataCheckboxProps as UniDataCheckboxProps,
  _UniDataCheckbox as UniDataCheckbox,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 默认值
     */
    export type UniDataCheckboxValue = _UniDataCheckboxValue;
    /**
     * @desc 显示模式
     * @desc default 横向显示
     * @desc list 列表
     * @desc button 按钮
     * @desc tag 标签
     */
    export type UniDataCheckboxMode = _UniDataCheckboxMode;
    /**
     * @desc 本地渲染数据
     */
    export interface UniDataCheckboxLocaldata extends _UniDataCheckboxLocaldata {}
    /**
     * @desc list 模式下 icon 显示的位置
     */
    export type UniDataCheckboxIcon = _UniDataCheckboxIcon;
    /**
     * @desc 字段映射
     * @desc 将 text/value 映射到数据中的其他字段
     */
    export interface UniDataCheckboxMap extends _UniDataCheckboxMap {}
    export interface UniDataCheckboxBaseProps extends _UniDataCheckboxBaseProps {}
    export interface UniDataCheckboxSingleOnChangeDetail
      extends _UniDataCheckboxSingleOnChangeDetail {}
    /**
     * @desc 选中状态改变时触发
     */
    export interface UniDataCheckboxSingleOnChange extends _UniDataCheckboxSingleOnChange {}
    export interface UniDataCheckboxSingleProps extends _UniDataCheckboxSingleProps {}
    export interface UniDataCheckboxMultipleOnChangeDetail
      extends _UniDataCheckboxMultipleOnChangeDetail {}
    /**
     * @desc 选中状态改变时触发
     */
    export interface UniDataCheckboxMultipleOnChange extends _UniDataCheckboxMultipleOnChange {}
    export interface UniDataCheckboxMultipleProps extends _UniDataCheckboxMultipleProps {}
    export type UniDataCheckboxProps = _UniDataCheckboxProps;
    /**
     * @desc 本组件是基于 uni-app 基础组件 checkbox 的封装。本组件要解决问题包括：
     * @desc 数据绑定型组件：给本组件绑定一个data，会自动渲染一组候选内容，在以往，开发者需要编写不少代码实现类似功能
     * @desc 自动的表单校验：组件绑定了 data，且符合 uni-forms 组件的表单校验规范，搭配使用会自动实现表单校验
     * @desc 本组件合并了单选多选
     * @desc 本组件有若干风格选择，如普通的单选多选框、并列 button 风格、tag 风格，开发者可以快速选择需要的风格，会牺牲一定的样式自定义性
     * @desc 在 uni-cloud 开发中，DB Schema 中配置了 enum 枚举等类型后，在 web 控制台的自动生成表单功能中，会自动生成 uni-data-checkbox 组件并绑定好 data
     */
    export type UniDataCheckbox = _UniDataCheckbox;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 本组件是基于 uni-app 基础组件 checkbox 的封装。本组件要解决问题包括：
     * @desc 数据绑定型组件：给本组件绑定一个data，会自动渲染一组候选内容，在以往，开发者需要编写不少代码实现类似功能
     * @desc 自动的表单校验：组件绑定了 data，且符合 uni-forms 组件的表单校验规范，搭配使用会自动实现表单校验
     * @desc 本组件合并了单选多选
     * @desc 本组件有若干风格选择，如普通的单选多选框、并列 button 风格、tag 风格，开发者可以快速选择需要的风格，会牺牲一定的样式自定义性
     * @desc 在 uni-cloud 开发中，DB Schema 中配置了 enum 枚举等类型后，在 web 控制台的自动生成表单功能中，会自动生成 uni-data-checkbox 组件并绑定好 data
     */
    UniDataCheckbox: _UniDataCheckbox;
  }
}
