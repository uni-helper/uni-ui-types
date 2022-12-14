import { Component } from '@uni-helper/uni-app-types';

interface _UniFilePickerValue {
  name: string;
  extname: string;
  url: string;
}

/**
 * 选择文件后的文件列表样式
 *
 * List 列表
 *
 * Grid 网格
 */
type _UniFilePickerMode = 'list' | 'grid';

/**
 * 选择文件类型
 *
 * Image 图片
 *
 * Video 视频
 *
 * All 全部
 */
type _UniFilePickerFileMediatype = 'image' | 'video' | 'all';

/**
 * 样式
 *
 * Mode="list" 时有效
 */
interface _UniFilePickerListStyles {
  /** 边框样式 */
  borderStyle: {
    /**
     * 颜色
     *
     * 默认为 #eeeeee
     */
    color: string;
    /**
     * 宽度
     *
     * 默认为 1px
     */
    width: string;
    /**
     * 样式
     *
     * 默认为 solid
     */
    style: string;
    /**
     * 边框圆角
     *
     * 不支持百分比
     *
     * 默认为 5px
     */
    radius: string;
  };
  /**
   * 是否显示边框
   *
   * 默认为 false
   */
  border: boolean;
  /**
   * 是否显示分隔线
   *
   * 默认为 true
   */
  dividline: boolean;
}

/**
 * 样式
 *
 * Mode="grid" 时有效
 */
interface _UniFilePickerImageStyles {
  /** 高度 */
  height: number;
  /** 宽度 */
  width: number;
  /** 边框样式 */
  border: {
    /**
     * 颜色
     *
     * 默认为 #eeeeee
     */
    color: string;
    /**
     * 宽度
     *
     * 默认为 1px
     */
    width: string;
    /**
     * 样式
     *
     * 默认为 solid
     */
    style: string;
    /**
     * 边框圆角
     *
     * 支持百分比
     *
     * 默认为 50%
     */
    radius: string;
  };
}

/** 事件回调参数 */
interface _UniFilePickerBaseDetail {
  /** 上传进度 */
  progress?: number;
  /** 上传文件索引 */
  index?: number;
  /**
   * 当前文件对象
   *
   * 包含文件流，文件大小，文件名称等
   */
  tempFile: File;
  /**
   * 文件列表
   *
   * 包含文件流，文件大小，文件名称等
   */
  tempFiles: File[];
  /**
   * 上传后的线上文件地址列表
   *
   * 腾讯云返回 fileId
   */
  tempFilePaths?: string[];
}

/** 手动上传 */
interface _UniFilePickerUpload {
  (): void;
}

/**
 * 清除选择结果
 *
 * 传入下标则删除指定下标文件
 *
 * 不传入下标则删除所有
 */
interface _UniFilePickerClearFiles {
  (index?: number): void;
}

interface _UniFilePickerOnSelectDetail extends _UniFilePickerBaseDetail {}

/** 选择文件后触发 */
interface _UniFilePickerOnSelect {
  (event: _UniFilePickerOnSelectDetail): void;
}

interface _UniFilePickerOnProgressDetail extends _UniFilePickerBaseDetail {}

/** 文件上传时触发 */
interface _UniFilePickerOnProgress {
  (event: _UniFilePickerOnProgressDetail): void;
}

interface _UniFilePickerOnSuccessDetail extends _UniFilePickerBaseDetail {}

/** 上传成功触发 */
interface _UniFilePickerOnSuccess {
  (event: _UniFilePickerOnSuccessDetail): void;
}

interface _UniFilePickerOnFailDetail extends _UniFilePickerBaseDetail {}

/** 上传失败触发 */
interface _UniFilePickerOnFail {
  (event: _UniFilePickerOnFailDetail): void;
}

interface _UniFilePickerOnDeleteDetail extends _UniFilePickerBaseDetail {}

/** 文件从列表移除时触发 */
interface _UniFilePickerOnDelete {
  (event: _UniFilePickerOnDeleteDetail): void;
}

interface _UniFilePickerBaseProps {
  /**
   * 组件是否禁用
   *
   * 默认为 false
   */
  disabled: boolean;
  /**
   * 组件只读，不可选择，不显示进度，不显示删除按钮
   *
   * 默认为 false
   */
  readonly: boolean;
  /**
   * 选择文件后的文件列表样式
   *
   * List 列表
   *
   * Grid 网格
   *
   * 默认为 list
   */
  mode: _UniFilePickerMode;
  /**
   * 是否禁用图片预览
   *
   * Mode="grid" 时有效
   *
   * 默认为 false
   */
  disablePreview: boolean;
  /**
   * 是否显示删除按钮
   *
   * 默认为 true
   */
  delIcon: boolean;
  /**
   * 是否自动上传
   *
   * False 只触发 select 事件，可自行上传
   *
   * True 自动上传
   *
   * 默认为 true
   */
  autoUpload: boolean;
  /**
   * 最大选择个数
   *
   * 默认为 9
   */
  limit: number | string;
  /** 组件标题，右侧显示上传计数 */
  title: string;
  /**
   * 选择文件类型
   *
   * Image 图片
   *
   * Video 视频
   *
   * All 全部
   *
   * 默认为 image
   */
  fileMediatype: _UniFilePickerFileMediatype;
  /**
   * 选择文件后缀，字符串的情况下需要用逗号分隔
   *
   * 推荐使用字符串
   *
   * 根据 file-mediatype 属性而不同
   *
   * 默认为 []
   */
  fileExtname: string | string[];
  /**
   * 样式
   *
   * Mode="list" 时有效
   */
  listStyles: _UniFilePickerListStyles;
  /**
   * 样式
   *
   * Mode="grid" 时有效
   */
  imageStyles: _UniFilePickerImageStyles;
  /** 手动上传 */
  upload: _UniFilePickerUpload;
  /**
   * 清除选择结果
   *
   * 传入下标则删除指定下标文件
   *
   * 不传入下标则删除所有
   */
  clearFiles: _UniFilePickerClearFiles;
  /** 选择文件后触发 */
  onSelect: _UniFilePickerOnSelect;
  /** 文件上传时触发 */
  onProgress: _UniFilePickerOnProgress;
  /** 上传成功触发 */
  onSuccess: _UniFilePickerOnSuccess;
  /** 上传失败触发 */
  onFail: _UniFilePickerOnFail;
  /** 文件从列表移除时触发 */
  onDelete: _UniFilePickerOnDelete;
}

interface _UniFilePickerArrayProps extends _UniFilePickerBaseProps {
  /** 组件数据，通常用来回显 */
  value: _UniFilePickerValue[];
  /** 限制 value 类型 */
  returnType?: 'array';
}

interface _UniFilePickerObjectProps extends _UniFilePickerBaseProps {
  /** 组件数据，通常用来回显 */
  value: _UniFilePickerValue;
  /**
   * 限制 value 类型
   *
   * 只能单选，且会覆盖
   */
  returnType: 'object';
}

/** 文件选择上传组件属性 */
type _UniFilePickerProps = _UniFilePickerArrayProps | _UniFilePickerObjectProps;

/** 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间 */
type _UniFilePicker = Component<Partial<_UniFilePickerProps>>;

export {
  _UniFilePickerValue as UniFilePickerValue,
  _UniFilePickerMode as UniFilePickerMode,
  _UniFilePickerFileMediatype as UniFilePickerFileMediatype,
  _UniFilePickerListStyles as UniFilePickerListStyles,
  _UniFilePickerImageStyles as UniFilePickerImageStyles,
  _UniFilePickerBaseDetail as UniFilePickerBaseDetail,
  _UniFilePickerUpload as UniFilePickerUpload,
  _UniFilePickerClearFiles as UniFilePickerClearFiles,
  _UniFilePickerOnSelectDetail as UniFilePickerOnSelectDetail,
  _UniFilePickerOnSelect as UniFilePickerOnSelect,
  _UniFilePickerOnProgressDetail as UniFilePickerOnProgressDetail,
  _UniFilePickerOnProgress as UniFilePickerOnProgress,
  _UniFilePickerOnSuccessDetail as UniFilePickerOnSuccessDetail,
  _UniFilePickerOnSuccess as UniFilePickerOnSuccess,
  _UniFilePickerOnFailDetail as UniFilePickerOnFailDetail,
  _UniFilePickerOnFail as UniFilePickerOnFail,
  _UniFilePickerOnDeleteDetail as UniFilePickerOnDeleteDetail,
  _UniFilePickerOnDelete as UniFilePickerOnDelete,
  _UniFilePickerBaseProps as UniFilePickerBaseProps,
  _UniFilePickerArrayProps as UniFilePickerArrayProps,
  _UniFilePickerObjectProps as UniFilePickerObjectProps,
  _UniFilePickerProps as UniFilePickerProps,
  _UniFilePicker as UniFilePicker,
};

declare global {
  namespace UniHelper {
    export interface UniFilePickerValue extends _UniFilePickerValue {}
    /**
     * 选择文件后的文件列表样式
     *
     * List 列表
     *
     * Grid 网格
     */
    export type UniFilePickerMode = _UniFilePickerMode;
    /**
     * 选择文件类型
     *
     * Image 图片
     *
     * Video 视频
     *
     * All 全部
     */
    export type UniFilePickerFileMediatype = _UniFilePickerFileMediatype;
    /**
     * 样式
     *
     * Mode="list" 时有效
     */
    export interface UniFilePickerListStyles extends _UniFilePickerListStyles {}
    /**
     * 样式
     *
     * Mode="grid" 时有效
     */
    export interface UniFilePickerImageStyles extends _UniFilePickerImageStyles {}
    /** 事件回调参数 */
    export interface UniFilePickerBaseDetail extends _UniFilePickerBaseDetail {}
    /** 手动上传 */
    export interface UniFilePickerUpload extends _UniFilePickerUpload {}
    /**
     * 清除选择结果
     *
     * 传入下标则删除指定下标文件
     *
     * 不传入下标则删除所有
     */
    export interface UniFilePickerClearFiles extends _UniFilePickerClearFiles {}
    export interface UniFilePickerOnSelectDetail extends _UniFilePickerOnSelectDetail {}
    /** 选择文件后触发 */
    export interface UniFilePickerOnSelect extends _UniFilePickerOnSelect {}
    export interface UniFilePickerOnProgressDetail extends _UniFilePickerOnProgressDetail {}
    /** 文件上传时触发 */
    export interface UniFilePickerOnProgress extends _UniFilePickerOnProgress {}
    export interface UniFilePickerOnSuccessDetail extends _UniFilePickerOnSuccessDetail {}
    /** 上传成功触发 */
    export interface UniFilePickerOnSuccess extends _UniFilePickerOnSuccess {}
    export interface UniFilePickerOnFailDetail extends _UniFilePickerOnFailDetail {}
    /** 上传失败触发 */
    export interface UniFilePickerOnFail extends _UniFilePickerOnFail {}
    export interface UniFilePickerOnDeleteDetail extends _UniFilePickerOnDeleteDetail {}
    /** 文件从列表移除时触发 */
    export interface UniFilePickerOnDelete extends _UniFilePickerOnDelete {}
    export interface UniFilePickerBaseProps extends _UniFilePickerBaseProps {}
    export interface UniFilePickerArrayProps extends _UniFilePickerArrayProps {}
    export interface UniFilePickerObjectProps extends _UniFilePickerObjectProps {}
    /** 文件选择上传组件属性 */
    export type UniFilePickerProps = _UniFilePickerProps;
    /** 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间 */
    export interface UniFilePicker extends _UniFilePicker {}
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /** 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间 */
    UniFilePicker: _UniFilePicker;
  }
}
