import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 内置校验规则
 */
export type UniFormsFormat = 'string' | 'number' | 'boolean' | 'array' | 'object' | 'url' | 'email';

/**
 * @desc 规则
 */
export interface UniFormsRule {
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
 * @desc 表单校验时机
 */
export type UniFormsValidateTrigger = 'bind' | 'submit' | 'blur';

/**
 * @desc label 位置
 */
export type UniFormsLabelPosition = 'top' | 'left';

/**
 * @desc label 对齐方式
 */
export type UniFormsLabelAlign = 'left' | 'center' | 'right';

/**
 * @desc 错误信息提示方式
 * @desc 默认为 undertext
 */
export type UniFormsErrShowType = 'undertext' | 'toast' | 'modal';

export interface UniFormsProps {
  /**
   * @desc 表单数据
   */
  model: Record<string, any>;
  /**
   * @desc 表单校验规则
   */
  rules: UniFormsRule[];
  /**
   * @desc 表单校验时机
   * @desc 默认为 submit
   */
  validateTrigger: UniFormsValidateTrigger;
  /**
   * @desc label 位置
   * @desc 默认为 left
   */
  labelPosition: UniFormsLabelPosition;
  /**
   * @desc label 宽度
   * @desc 单位为 px
   * @desc 默认为 75
   */
  labelWidth: string | number;
  /**
   * @desc label 对齐方式
   * @desc 默认为 left
   */
  labelAlign: UniFormsLabelAlign;
  /**
   * @desc 错误信息提示方式
   * @desc 默认为 undertext
   */
  errShowType: UniFormsErrShowType;
  /**
   * @desc 是否显示分隔线
   * @desc 默认为 false
   */
  border: boolean;
  /**
   * @desc 动态设置表单规则
   */
  setRules: (rules: UniFormsRule | UniFormsRule[]) => void;
  /**
   * @desc 校验整个表单
   * @param keepItem 不参与校验的字段
   * @param callback 回调函数
   */
  validate: (keepItem: string[], callback: (...args: any) => any) => void | Promise<void>;
  /**
   * @desc 校验部分表单，返回对应表单数据
   * @param items 需要校验的字段
   */
  validateFields: (items: string | string[]) => Promise<any>;
  /**
   * @desc 移除表单的校验结果
   * @param items 需要移除校验的字段
   */
  clearValidate: (items?: string | string[]) => void;
  /**
   * @desc 任意表单项被校验后触发，返回表单校验信息
   */
  onValidate: (results: any[]) => void;
}

/**
 * @desc 表单，用于提交表单内容，内置了表单验证功能
 */
export type UniForms = Component<Partial<UniFormsProps>>;
