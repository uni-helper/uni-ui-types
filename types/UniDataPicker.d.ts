import { BaseEvent, CustomEvent, Component } from '@uni-helper/uni-app-types';

/**
 * 服务商
 *
 * Aliyun 阿里云
 *
 * Tencent 腾讯云
 */
type _UniDataPickerSpaceInfoProvider = 'aliyun' | 'tencent';

/** 服务空间信息 */
interface _UniDataPickerSpaceInfo {
  /**
   * 服务商
   *
   * Aliyun 阿里云
   *
   * Tencent 腾讯云
   */
  provider: _UniDataPickerSpaceInfoProvider;
  /** 服务空间 ID */
  spaceId: string;
  /** 阿里云支持，在控制台服务空间列表中查看 */
  clientSecret: string;
  /** 服务空间地址，阿里云支持 */
  endpoint?: string;
}

export type _UniDataPickerValue = string | number | boolean | null;

/** 本地数据 */
interface _UniDataPickerLocaldata {
  /** 值 */
  value: _UniDataPickerValue;
  /** 显示文字 */
  text: string;
  /**
   * 是否默认选中
   *
   * 默认为 false
   */
  selected: boolean;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  disable: boolean;
  /** 数组分组标识 */
  group?: string;
  /**
   * 是否为叶子节点
   *
   * True 忽略 children
   *
   * 默认为 false
   */
  isleaf?: boolean;
  /** 子节点 */
  children?: _UniDataPickerLocaldata[];
}

/**
 * 字段映射
 *
 * 将 text/value 映射到数据中的其他字段
 */
interface _UniDataPickerMap {
  text: string;
  value: string;
}

/** 打开弹出层 */
interface _UniDataPickerShow {
  (): void;
}

/** 关闭弹出层 */
interface _UniDataPickerHide {
  (): void;
}

/** 清除已选项 */
interface _UniDataPickerClear {
  (): void;
}

interface _UniDataPickerOnChangeDetail {
  value: _UniDataPickerValue;
}

/** 选择完成时触发 */
interface _UniDataPickerOnChange {
  (event: CustomEvent<_UniDataPickerOnChangeDetail>): void;
}

/** 节点被点击时触发 */
interface _UniDataPickerOnNodeclick {
  (event: BaseEvent): void;
}

/** 动态加载节点数据前触发 */
interface _UniDataPickerOnStepsearch {
  (event: BaseEvent): void;
}

/** 弹出层弹出时触发 */
interface _UniDataPickerOnPopupopened {
  (event: BaseEvent): void;
}

/** 弹出层关闭时触发 */
interface _UniDataPickerOnPopupclosed {
  (event: BaseEvent): void;
}

interface _UniDataPickerProps {
  /** 绑定数据 */
  value: _UniDataPickerValue;
  /** 服务空间信息 */
  spaceInfo: _UniDataPickerSpaceInfo;
  /** 本地数据 */
  localdata: _UniDataPickerLocaldata[];
  /**
   * 是否预加载数据
   *
   * 默认为 false
   */
  preload: boolean;
  /**
   * 是否禁用
   *
   * 默认为 false
   */
  readonly: boolean;
  /**
   * 是否显示清除按钮
   *
   * 默认为 true
   */
  clearIcon: boolean;
  /**
   * 是否隐藏 tab 标签过长的文本
   *
   * 默认为 true
   */
  ellipsis: boolean;
  /**
   * 分步查询时，是否点击节点请求数据
   *
   * 默认为 true
   */
  stepSearh: true;
  /** 分步查询时，动态加载云端数据的 URL */
  stepSearchUrl: string;
  /** 分步查询时当前字段名称 */
  selfField: string;
  /** 分步查询时父字段名称 */
  parentField: string;
  /** 表名，多个表名用 , 分割 */
  collection: string;
  /** 查询字段，多个字段用 , 分割 */
  field: string;
  /** 查询条件 */
  where: string;
  /** 排序字段及正序倒叙设置 */
  orderby: string;
  /** 弹出层标题 */
  popupTitle: string;
  /**
   * 字段映射
   *
   * 将 text/value 映射到数据中的其他字段
   */
  map: _UniDataPickerMap;
  /** 打开弹出层 */
  show: _UniDataPickerShow;
  /** 关闭弹出层 */
  hide: _UniDataPickerHide;
  /** 清除已选项 */
  clear: _UniDataPickerClear;
  /** 选择完成时触发 */
  onChange: _UniDataPickerOnChange;
  /** 节点被点击时触发 */
  onNodeclick: _UniDataPickerOnNodeclick;
  /** 动态加载节点数据前触发 */
  onStepsearch: _UniDataPickerOnStepsearch;
  /** 弹出层弹出时触发 */
  onPopupopened: _UniDataPickerOnPopupopened;
  /** 弹出层关闭时触发 */
  onPopupclosed: _UniDataPickerOnPopupclosed;
}

/**
 * 选择类 datacom 组件
 *
 * 支持单列、和多列级联选择，列数没有限制，如果屏幕显示不全，顶部 tab 区域会左右滚动
 *
 * 候选数据支持一次性加载完毕，也支持懒加载
 *
 * Uni-data-picker 尤其适用于地址选择、分类选择等选择类
 *
 * Uni-data-picker 支持本地数据、云端静态数据 json 和 uni-cloud 云数据库数据
 *
 * Uni-data-picker 可以通过 JQL 直连 uni-cloud 云数据库，配套 DB Schema，可在 schema2code 中自动生成前端页面，还支持服务器端校验
 */
type _UniDataPicker = Component<Partial<_UniDataPickerProps>>;

export {
  _UniDataPickerSpaceInfoProvider as UniDataPickerSpaceInfoProvider,
  _UniDataPickerSpaceInfo as UniDataPickerSpaceInfo,
  _UniDataPickerValue as UniDataPickerValue,
  _UniDataPickerLocaldata as UniDataPickerLocaldata,
  _UniDataPickerMap as UniDataPickerMap,
  _UniDataPickerShow as UniDataPickerShow,
  _UniDataPickerHide as UniDataPickerHide,
  _UniDataPickerClear as UniDataPickerClear,
  _UniDataPickerOnChangeDetail as UniDataPickerOnChangeDetail,
  _UniDataPickerOnChange as UniDataPickerOnChange,
  _UniDataPickerOnNodeclick as UniDataPickerOnNodeclick,
  _UniDataPickerOnStepsearch as UniDataPickerOnStepsearch,
  _UniDataPickerOnPopupopened as UniDataPickerOnPopupopened,
  _UniDataPickerOnPopupclosed as UniDataPickerOnPopupclosed,
  _UniDataPickerProps as UniDataPickerProps,
  _UniDataPicker as UniDataPicker,
};

declare global {
  namespace UniHelper {
    /**
     * 服务商
     *
     * Aliyun 阿里云
     *
     * Tencent 腾讯云
     */
    export type UniDataPickerSpaceInfoProvider = _UniDataPickerSpaceInfoProvider;
    /** 服务空间信息 */
    export interface UniDataPickerSpaceInfo extends _UniDataPickerSpaceInfo {}
    export type UniDataPickerValue = _UniDataPickerValue;
    /** 本地数据 */
    export interface UniDataPickerLocaldata extends _UniDataPickerLocaldata {}
    /**
     * 字段映射
     *
     * 将 text/value 映射到数据中的其他字段
     */
    export interface UniDataPickerMap extends _UniDataPickerMap {}
    /** 打开弹出层 */
    export interface UniDataPickerShow extends _UniDataPickerShow {}
    /** 关闭弹出层 */
    export interface UniDataPickerHide extends _UniDataPickerHide {}
    /** 清除已选项 */
    export interface UniDataPickerClear extends _UniDataPickerClear {}
    export interface UniDataPickerOnChangeDetail extends _UniDataPickerOnChangeDetail {}
    /** 选择完成时触发 */
    export interface UniDataPickerOnChange extends _UniDataPickerOnChange {}
    /** 节点被点击时触发 */
    export interface UniDataPickerOnNodeclick extends _UniDataPickerOnNodeclick {}
    /** 动态加载节点数据前触发 */
    export interface UniDataPickerOnStepsearch extends _UniDataPickerOnStepsearch {}
    /** 弹出层弹出时触发 */
    export interface UniDataPickerOnPopupopened extends _UniDataPickerOnPopupopened {}
    /** 弹出层关闭时触发 */
    export interface UniDataPickerOnPopupclosed extends _UniDataPickerOnPopupclosed {}
    export interface UniDataPickerProps extends _UniDataPickerProps {}
    /**
     * 选择类 datacom 组件
     *
     * 支持单列、和多列级联选择，列数没有限制，如果屏幕显示不全，顶部 tab 区域会左右滚动
     *
     * 候选数据支持一次性加载完毕，也支持懒加载
     *
     * Uni-data-picker 尤其适用于地址选择、分类选择等选择类
     *
     * Uni-data-picker 支持本地数据、云端静态数据 json 和 uni-cloud 云数据库数据
     *
     * Uni-data-picker 可以通过 JQL 直连 uni-cloud 云数据库，配套 DB Schema，可在 schema2code 中自动生成前端页面，还支持服务器端校验
     */
    export type UniDataPicker = _UniDataPicker;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * 选择类 datacom 组件
     *
     * 支持单列、和多列级联选择，列数没有限制，如果屏幕显示不全，顶部 tab 区域会左右滚动
     *
     * 候选数据支持一次性加载完毕，也支持懒加载
     *
     * Uni-data-picker 尤其适用于地址选择、分类选择等选择类
     *
     * Uni-data-picker 支持本地数据、云端静态数据 json 和 uni-cloud 云数据库数据
     *
     * Uni-data-picker 可以通过 JQL 直连 uni-cloud 云数据库，配套 DB Schema，可在 schema2code 中自动生成前端页面，还支持服务器端校验
     */
    UniDataPicker: _UniDataPicker;
  }
}
