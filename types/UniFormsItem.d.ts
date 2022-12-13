import { Component } from '@uni-helper/uni-app-types';
import type { UniFormsFormat, UniFormsValidateFunction } from './UniForms';

/**
 * @desc 规则
 */
interface _UniFormsItemRule {
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
  validateFunction: UniFormsValidateFunction;
}

/**
 * @desc label 对齐方式
 */
type _UniFormsItemLabelAlign = 'left' | 'center' | 'right';

/**
 * @desc 动态设置表单规则
 */
interface _UniFormsItemSetRules {
  (rules: _UniFormsItemRule | _UniFormsItemRule[]): void;
}

/**
 * @desc 校验子表单
 */
interface _UniFormsItemOnFieldChange {
  (value: any): void;
}

interface _UniFormsItemProps {
  /**
   * @desc 表单域的属性名，在使用校验规则时必填
   */
  name: string | string[];
  /**
   * @desc 表单校验规则
   */
  rules: _UniFormsItemRule;
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
  labelAlign: _UniFormsItemLabelAlign;
  /**
   * @desc 动态设置表单规则
   */
  setRules: _UniFormsItemSetRules;
  /**
   * @desc 校验子表单
   */
  onFieldChange: _UniFormsItemOnFieldChange;
}

type _UniFormsItem = Component<Partial<_UniFormsItemProps>>;

export {
  _UniFormsItemRule as UniFormsItemRule,
  _UniFormsItemLabelAlign as UniFormsItemLabelAlign,
  _UniFormsItemSetRules as UniFormsItemSetRules,
  _UniFormsItemOnFieldChange as UniFormsItemOnFieldChange,
  _UniFormsItemProps as UniFormsItemProps,
  _UniFormsItem as UniFormsItem,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 规则
     */
    export interface UniFormsItemRule extends _UniFormsItemRule {}
    /**
     * @desc label 对齐方式
     */
    export type UniFormsItemLabelAlign = _UniFormsItemLabelAlign;
    /**
     * @desc 动态设置表单规则
     */
    export interface UniFormsItemSetRules extends _UniFormsItemSetRules {}

    /**
     * @desc 校验子表单
     */
    export interface UniFormsItemOnFieldChange extends _UniFormsItemOnFieldChange {}
    export interface UniFormsItemProps extends _UniFormsItemProps {}
    export type UniFormsItem = _UniFormsItem;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniFormsItem: _UniFormsItem;
  }
}
