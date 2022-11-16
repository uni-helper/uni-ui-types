import { CustomEvent, Component } from '@uni-helper/uni-app-types';

export interface UniGridProps {
  /**
   * @desc 每列显示个数
   * @desc 默认为 3
   */
  column: number;
  /**
   * @desc 边框颜色
   * @desc 默认为 #d0dee5
   */
  borderColor: string;
  /**
   * @desc 是否显示边框
   * @desc 默认为 true
   */
  showBorder: boolean;
  /**
   * @desc 是否方形显示
   * @desc 默认为 true
   */
  square: boolean;
  /**
   * @desc 点击背景是否高亮
   * @desc 默认为 true
   */
  highlight: boolean;
  /**
   * @desc 点击触发
   */
  onChange: (
    event: CustomEvent<{
      index: number;
    }>,
  ) => void;
}

/**
 * @desc 宫格
 */
export type UniGrid = Component<Partial<UniGridProps>>;
