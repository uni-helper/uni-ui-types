import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 本地数据
 */
export interface UniDataSelectLocaldata {
  /**
   * @desc 值
   */
  value: string | number;
  /**
   * @desc 显示文字
   */
  text: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disable: boolean;
}

export interface UniDataSelectProps {
  /**
   * @desc 已选择数据的 value 值
   */
  value: string | number;
  /**
   * @desc 本地数据
   */
  localdata: UniDataSelectLocaldata[];
  /**
   * @desc 是否可以清空已选项
   * @desc 默认为 true
   */
  clear: boolean;
  /**
   * @desc 左侧标题
   */
  label: string;
  /**
   * @desc 输入框的提示文字
   * @desc 默认为 请选择
   */
  placeholder: string;
  /**
   * @desc 没有数据时显示的文字，本地数据无效
   * @desc 默认为 暂无数据
   */
  emptyText: string;
  /**
   * @desc 改变时触发
   */
  onChange: (event: UniDataSelectProps['value']) => void;
}

/**
 * @desc 当选项过多时，使用下拉菜单展示并选择内容
 * @desc 本组件要解决问题包括
 * @desc 数据绑定型组件：给本组件绑定一个 data，会自动渲染一组候选内容
 * @desc 自动的表单校验：组件绑定了 data，且符合 uni-forms 的表单校验规范，搭配使用会自动实现表单校验
 */
export type UniDataSelect = Component<Partial<UniDataSelectProps>>;
