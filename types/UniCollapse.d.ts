import { Component } from '@uni-helper/uni-app-types';

/**
 * @desc 更新当前列表高度
 */
interface _UniCollapseResize {
  (): void;
}

/**
 * @desc 折叠面板基本属性
 */
interface _UniCollapseBaseProps {
  /**
   * @desc 更新当前列表高度
   */
  resize: _UniCollapseResize;
}

/**
 * @desc 折叠面板非手风琴模式展开面板的标识
 * @desc 不要和 uni-collapse-item open 一起使用
 */
type _UniCollapseNoAccordionValue = string[];

/**
 * @desc 折叠面板非手风琴模式切换面板时触发
 */
interface _UniCollapseNoAccordionOnChange {
  (value: _UniCollapseNoAccordionValue): void;
}

/**
 * @desc 折叠面板非手风琴模式属性
 */
interface _UniCollapseNoAccordionProps extends _UniCollapseBaseProps {
  /**
   * @desc 展开面板的标识
   * @desc 不要和 uni-collapse-item open 一起使用
   */
  value: _UniCollapseNoAccordionValue;
  /**
   * @desc 关闭手风琴模式
   */
  accordion?: false;
  /**
   * @desc 切换面板时触发
   */
  onChange: _UniCollapseNoAccordionOnChange;
}

/**
 * @desc 折叠面板手风琴模式展开面板的标识
 * @desc 不要和 uni-collapse-item open 一起使用
 */
type _UniCollapseAccordionValue = string;

/**
 * @desc 折叠面板手风琴模式切换面板时触发
 */
interface _UniCollapseAccordionOnChange {
  (value: _UniCollapseAccordionValue): void;
}

/**
 * @desc 折叠面板手风琴模式属性
 */
interface _UniCollapseAccordionProps extends _UniCollapseBaseProps {
  /**
   * @desc 展开面板的标识
   * @desc 不要和 uni-collapse-item open 一起使用
   */
  value: _UniCollapseAccordionValue;
  /**
   * @desc 关闭手风琴模式
   */
  accordion: true;
  /**
   * @desc 切换面板时触发
   */
  onChange: _UniCollapseAccordionOnChange;
}

/**
 * @desc 折叠面板属性
 */
type _UniCollapseProps = _UniCollapseNoAccordionProps | _UniCollapseAccordionProps;

/**
 * @desc 折叠面板用来折叠/显示过长的内容或者是列表
 * @desc 通常是在多内容分类项使用，折叠不重要的内容，显示重要内容
 * @desc 点击可以展开折叠部分
 */
type _UniCollapse = Component<Partial<_UniCollapseProps>>;

export {
  _UniCollapseResize as UniCollapseResize,
  _UniCollapseBaseProps as UniCollapseBaseProps,
  _UniCollapseNoAccordionValue as UniCollapseNoAccordionValue,
  _UniCollapseNoAccordionOnChange as UniCollapseNoAccordionOnChange,
  _UniCollapseNoAccordionProps as UniCollapseNoAccordionProps,
  _UniCollapseAccordionValue as UniCollapseAccordionValue,
  _UniCollapseAccordionOnChange as UniCollapseAccordionOnChange,
  _UniCollapseAccordionProps as UniCollapseAccordionProps,
  _UniCollapseProps as UniCollapseProps,
  _UniCollapse as UniCollapse,
};

declare global {
  namespace UniHelper {
    /**
     * @desc 更新当前列表高度
     */
    export interface UniCollapseResize extends _UniCollapseResize {}
    /**
     * @desc 折叠面板基本属性
     */
    export interface UniCollapseBaseProps extends _UniCollapseBaseProps {}
    /**
     * @desc 折叠面板非手风琴模式展开面板的标识
     * @desc 不要和 uni-collapse-item open 一起使用
     */
    export type UniCollapseNoAccordionValue = _UniCollapseNoAccordionValue;
    /**
     * @desc 折叠面板非手风琴模式切换面板时触发
     */
    export interface UniCollapseNoAccordionOnChange extends _UniCollapseNoAccordionOnChange {}
    /**
     * @desc 折叠面板非手风琴模式属性
     */
    export interface UniCollapseNoAccordionProps extends _UniCollapseNoAccordionProps {}
    /**
     * @desc 折叠面板手风琴模式展开面板的标识
     * @desc 不要和 uni-collapse-item open 一起使用
     */
    export type UniCollapseAccordionValue = _UniCollapseAccordionValue;
    /**
     * @desc 折叠面板手风琴模式切换面板时触发
     */
    export interface UniCollapseAccordionOnChange extends _UniCollapseAccordionOnChange {}
    /**
     * @desc 折叠面板手风琴模式属性
     */
    export interface UniCollapseAccordionProps extends _UniCollapseAccordionProps {}
    /**
     * @desc 折叠面板属性
     */
    export interface UniCollapseProps extends _UniCollapseProps {}
    /**
     * @desc 折叠面板用来折叠/显示过长的内容或者是列表
     * @desc 通常是在多内容分类项使用，折叠不重要的内容，显示重要内容
     * @desc 点击可以展开折叠部分
     */
    export type UniCollapse = _UniCollapse;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 折叠面板用来折叠/显示过长的内容或者是列表
     * @desc 通常是在多内容分类项使用，折叠不重要的内容，显示重要内容
     * @desc 点击可以展开折叠部分
     */
    UniCollapse: _UniCollapse;
  }
}
