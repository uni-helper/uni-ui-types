import { BaseEvent, CustomEvent, Component } from '@uni-helper/uni-app-types';

/**
 * @desc 服务空间信息
 */
export interface UniDataPickerSpaceInfo {
  /**
   * @desc 服务商
   * @desc aliyun 阿里云
   * @desc tencent 腾讯云
   */
  provider: 'aliyun' | 'tencent';
  /**
   * @desc 服务空间 ID
   */
  spaceId: string;
  /**
   * @desc 阿里云支持，在控制台服务空间列表中查看
   */
  clientSecret: string;
  /**
   * @desc 服务空间地址，阿里云支持
   */
  endpoint?: string;
}

/**
 * @desc 本地数据
 */
export interface UniDataPickerLocaldata {
  /**
   * @desc 值
   */
  value: string | number | boolean | null;
  /**
   * @desc 显示文字
   */
  text: string;
  /**
   * @desc 是否默认选中
   * @desc 默认为 false
   */
  selected: boolean;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disable: boolean;
  /**
   * @desc 数组分组标识
   */
  group?: string;
  /**
   * @desc 是否为叶子节点
   * @desc true 忽略 children
   * @desc 默认为 false
   */
  isleaf?: boolean;
  /**
   * @desc 子节点
   */
  children?: UniDataPickerLocaldata[];
}

/**
 * @desc 字段映射
 * @desc 将 text/value 映射到数据中的其他字段
 */
export interface UniDataPickerMap {
  text: string;
  value: string;
}

export interface UniDataPickerProps {
  /**
   * @desc 绑定数据
   */
  value: string | number | boolean | null;
  /**
   * @desc 服务空间信息
   */
  spaceInfo: UniDataPickerSpaceInfo;
  /**
   * @desc 本地数据
   */
  localdata: UniDataPickerLocaldata[];
  /**
   * @desc 是否预加载数据
   * @desc 默认为 false
   */
  preload: boolean;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  readonly: boolean;
  /**
   * @desc 是否显示清除按钮
   * @desc 默认为 true
   */
  clearIcon: boolean;
  /**
   * @desc 是否隐藏 tab 标签过长的文本
   * @desc 默认为 true
   */
  ellipsis: boolean;
  /**
   * @desc 分步查询时，是否点击节点请求数据
   * @desc 默认为 true
   */
  stepSearh: true;
  /**
   * @desc 分步查询时，动态加载云端数据的 URL
   */
  stepSearchUrl: string;
  /**
   * @desc 分步查询时当前字段名称
   */
  selfField: string;
  /**
   * @desc 分步查询时父字段名称
   */
  parentField: string;
  /**
   * @desc 表名，多个表名用 , 分割
   */
  collection: string;
  /**
   * @desc 查询字段，多个字段用 , 分割
   */
  field: string;
  /**
   * @desc 查询条件
   */
  where: string;
  /**
   * @desc 排序字段及正序倒叙设置
   */
  orderby: string;
  /**
   * @desc 弹出层标题
   */
  popupTitle: string;
  /**
   * @desc 字段映射
   * @desc 将 text/value 映射到数据中的其他字段
   */
  map: UniDataPickerMap;
  /**
   * @desc 打开弹出层
   */
  show: () => void;
  /**
   * @desc 关闭弹出层
   */
  hide: () => void;
  /**
   * @desc 清除已选项
   */
  clear: () => void;
  /**
   * @desc 选择完成时触发
   */
  onChange: (
    event: CustomEvent<{
      value: UniDataPickerProps['value'];
    }>,
  ) => void;
  /**
   * @desc 节点被点击时触发
   */
  onNodeclick: (event: BaseEvent) => void;
  /**
   * @desc 动态加载节点数据前触发
   */
  onStepsearch: (event: BaseEvent) => void;
  /**
   * @desc 弹出层弹出时触发
   */
  onPopupopened: (event: BaseEvent) => void;
  /**
   * @desc 弹出层关闭时触发
   */
  onPopupclosed: (event: BaseEvent) => void;
}

/**
 * @desc 选择类 datacom 组件
 * @desc 支持单列、和多列级联选择，列数没有限制，如果屏幕显示不全，顶部 tab 区域会左右滚动
 * @desc 候选数据支持一次性加载完毕，也支持懒加载
 * @desc uni-data-picker 尤其适用于地址选择、分类选择等选择类
 * @desc uni-data-picker 支持本地数据、云端静态数据 json 和 uni-cloud 云数据库数据
 * @desc uni-data-picker 可以通过 JQL 直连 uni-cloud 云数据库，配套 DB Schema，可在 schema2code 中自动生成前端页面，还支持服务器端校验
 */
export type UniDataPicker = Component<Partial<UniDataPickerProps>>;
