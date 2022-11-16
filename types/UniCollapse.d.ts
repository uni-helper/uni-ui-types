import { Component } from '@uni-helper/uni-app-types';

export interface UniCollapseBaseProps {
  /**
   * @desc 更新当前列表高度
   */
  resize: () => void;
}

export interface UniCollapseNoAccordionProps extends UniCollapseBaseProps {
  /**
   * @desc 展开面板的标识
   * @desc 不要和 uni-collapse-item open 一起使用
   */
  value: string[];
  /**
   * @desc 关闭手风琴模式
   */
  accordion?: false;

  /**
   * @desc 切换面板时触发
   */
  onChange: (event: UniCollapseNoAccordionProps['value']) => void;
}

export interface UniCollapseAccordionProps extends UniCollapseBaseProps {
  /**
   * @desc 展开面板的标识
   * @desc 不要和 uni-collapse-item open 一起使用
   */
  value: string;
  /**
   * @desc 关闭手风琴模式
   */
  accordion: true;
  /**
   * @desc 切换面板时触发
   */
  onChange: (event: UniCollapseAccordionProps['value']) => void;
}

export type UniCollapseProps = UniCollapseNoAccordionProps | UniCollapseAccordionProps;

/**
 * @desc 折叠面板用来折叠/显示过长的内容或者是列表
 * @desc 通常是在多内容分类项使用，折叠不重要的内容，显示重要内容
 * @desc 点击可以展开折叠部分
 */
export type UniCollapse = Component<Partial<UniCollapseProps>>;
