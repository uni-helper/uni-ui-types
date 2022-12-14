import { Component } from '@uni-helper/uni-app-types';
import type { UniFormsFormat, UniFormsValidateFunction } from './UniForms';

/** 规则 */
interface _UniFormsItemRule {
  /**
   * 是否必填
   *
   * 配置此参数不会显示输入框左边的必填星号
   */
  required: boolean;
  /** 内置校验规则 */
  format: UniFormsFormat;
  /** 校验用的正则表达式 */
  pattern: RegExp;
  /** 校验最大值 */
  maximum: number;
  /** 校验最小值 */
  minimum: number;
  /** 校验数据最大长度 */
  maxLength: number;
  /** 校验失败提示信息语 */
  errorMessage: string;
  /** 自定义校验规则 */
  validateFunction: UniFormsValidateFunction;
}

/** Label 对齐方式 */
type _UniFormsItemLabelAlign = 'left' | 'center' | 'right';

/** 动态设置表单规则 */
interface _UniFormsItemSetRules {
  (rules: _UniFormsItemRule | _UniFormsItemRule[]): void;
}

/** 校验子表单 */
interface _UniFormsItemOnFieldChange {
  (value: any): void;
}

interface _UniFormsItemProps {
  /** 表单域的属性名，在使用校验规则时必填 */
  name: string | string[];
  /** 表单校验规则 */
  rules: _UniFormsItemRule;
  /**
   * Label 右边显示红色 * 号，样式显示不会对校验规则产生效果
   *
   * 默认为 false
   */
  required: boolean;
  /** 输入框左边的文字提示 */
  label: string;
  /**
   * Label 的宽度
   *
   * 单位为 px
   *
   * 默认为 70
   */
  labelWidth: number;
  /**
   * 显示的错误提示内容
   *
   * 如果为空字符串或 false，则不显示错误信息
   */
  errorMessage: false | string;
  /**
   * Label 对齐方式
   *
   * 默认为 left
   */
  labelAlign: _UniFormsItemLabelAlign;
  /** 动态设置表单规则 */
  setRules: _UniFormsItemSetRules;
  /** 校验子表单 */
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
    /** 规则 */
    export interface UniFormsItemRule extends _UniFormsItemRule {}
    /** Label 对齐方式 */
    export type UniFormsItemLabelAlign = _UniFormsItemLabelAlign;
    /** 动态设置表单规则 */
    export interface UniFormsItemSetRules extends _UniFormsItemSetRules {}

    /** 校验子表单 */
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
