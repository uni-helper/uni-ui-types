import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 规则
 */
export interface UniFormsItemRule {
  /**
   * @desc 是否必填
   * @desc 配置此参数不会显示输入框左边的必填星号
   */
  required: boolean;
  /**
   * @desc 内置校验规则
   */
  format: UniFormsFormat;
  /**
   * @desc 校验用的正则表达式
   */
  pattern: RegExp;
  /**
   * @desc 校验最大值
   */
  maximum: number;
  /**
   * @desc 校验最小值
   */
  minimum: number;
  /**
   * @desc 校验数据最大长度
   */
  maxLength: number;
  /**
   * @desc 校验失败提示信息语
   */
  errorMessage: string;
  /**
   * @desc 自定义校验规则
   */
  validateFunction: (
    rule: any,
    value: any,
    data: any,
    callback: (...args: any) => any,
  ) => boolean | void | Promise<boolean> | Promise<void>;
}

/**
 * @desc label 对齐方式
 */
export type UniFormsItemLabelAlign = 'left' | 'center' | 'right';

export interface UniFormsItemProps {
  /**
   * @desc 表单域的属性名，在使用校验规则时必填
   */
  name: string | string[];
  /**
   * @desc 表单校验规则
   */
  rules: UniFormsItemRule;
  /**
   * @desc label 右边显示红色 * 号，样式显示不会对校验规则产生效果
   * @desc 默认为 false
   */
  required: boolean;
  /**
   * @desc 输入框左边的文字提示
   */
  label: string;
  /**
   * @desc label 的宽度
   * @desc 单位为 px
   * @desc 默认为 70
   */
  labelWidth: number;
  /**
   * @desc 显示的错误提示内容
   * @desc 如果为空字符串或 false，则不显示错误信息
   */
  errorMessage: false | string;
  /**
   * @desc label 对齐方式
   * @desc 默认为 left
   */
  labelAlign: UniFormsItemLabelAlign;
  /**
   * @desc 动态设置表单规则
   */
  setRules: (rules: UniFormsItemRule | UniFormsItemRule[]) => void;
  /**
   * @desc 校验子表单
   */
  onFieldChange: (value: any) => void;
}

export type UniFormsItem = Component<Partial<UniFormsItemProps>>;
