import { Component } from '@uni-helper/uni-app-types';

interface _UniFilePickerValue {
  name: string;
  extname: string;
  url: string;
}

/**
 * @desc 选择文件后的文件列表样式
 * @desc list 列表
 * @desc grid 网格
 */
type _UniFilePickerMode = 'list' | 'grid';

/**
 * @desc 选择文件类型
 * @desc image 图片
 * @desc video 视频
 * @desc all 全部
 */
type _UniFilePickerFileMediatype = 'image' | 'video' | 'all';

/**
 * @desc 样式
 * @desc mode="list" 时有效
 */
interface _UniFilePickerListStyles {
  /**
   * @desc 边框样式
   */
  borderStyle: {
    /**
     * @desc 颜色
     * @desc 默认为 #eeeeee
     */
    color: string;
    /**
     * @desc 宽度
     * @desc 默认为 1px
     */
    width: string;
    /**
     * @desc 样式
     * @desc 默认为 solid
     */
    style: string;
    /**
     * @desc 边框圆角
     * @desc 不支持百分比
     * @desc 默认为 5px
     */
    radius: string;
  };
  /**
   * @desc 是否显示边框
   * @desc 默认为 false
   */
  border: boolean;
  /**
   * @desc 是否显示分隔线
   * @desc 默认为 true
   */
  dividline: boolean;
}

/**
 * @desc 样式
 * @desc mode="grid" 时有效
 */
interface _UniFilePickerImageStyles {
  /**
   * @desc 高度
   */
  height: number;
  /**
   * @desc 宽度
   */
  width: number;
  /**
   * @desc 边框样式
   */
  border: {
    /**
     * @desc 颜色
     * @desc 默认为 #eeeeee
     */
    color: string;
    /**
     * @desc 宽度
     * @desc 默认为 1px
     */
    width: string;
    /**
     * @desc 样式
     * @desc 默认为 solid
     */
    style: string;
    /**
     * @desc 边框圆角
     * @desc 支持百分比
     * @desc 默认为 50%
     */
    radius: string;
  };
}

/**
 * @desc 事件回调参数
 */
interface _UniFilePickerEvent {
  /**
   * @desc 上传进度
   */
  progress?: number;
  /**
   * @desc 上传文件索引
   */
  index?: number;
  /**
   * @desc 当前文件对象
   * @desc 包含文件流，文件大小，文件名称等
   */
  tempFile: File;
  /**
   * @desc 文件列表
   * @desc 包含文件流，文件大小，文件名称等
   */
  tempFiles: File[];
  /**
   * @desc 上传后的线上文件地址列表
   * @desc 腾讯云返回 fileId
   */
  tempFilePaths?: string[];
}

/**
 * @desc 手动上传
 */
interface _UniFilePickerUpload {
  (): void;
}

/**
 * @desc 清除选择结果
 * @desc 传入下标则删除指定下标文件
 * @desc 不传入下标则删除所有
 */
interface _UniFilePickerClearFiles {
  (index?: number): void;
}

/**
 * @desc 选择文件后触发
 */
interface _UniFilePickerOnSelect {
  (event: _UniFilePickerEvent): void;
}

/**
 * @desc 文件上传时触发
 */
interface _UniFilePickerOnProgress {
  (event: _UniFilePickerEvent): void;
}

/**
 * @desc 上传成功触发
 */
interface _UniFilePickerOnSuccess {
  (event: _UniFilePickerEvent): void;
}

/**
 * @desc 上传失败触发
 */
interface _UniFilePickerOnFail {
  (event: _UniFilePickerEvent): void;
}

/**
 * @desc 文件从列表移除时触发
 */
interface _UniFilePickerOnDelete {
  (event: _UniFilePickerEvent): void;
}

interface _UniFilePickerBaseProps {
  /**
   * @desc 组件是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 组件只读，不可选择，不显示进度，不显示删除按钮
   * @desc 默认为 false
   */
  readonly: boolean;
  /**
   * @desc 选择文件后的文件列表样式
   * @desc list 列表
   * @desc grid 网格
   * @desc 默认为 list
   */
  mode: _UniFilePickerMode;
  /**
   * @desc 是否禁用图片预览
   * @desc mode="grid" 时有效
   * @desc 默认为 false
   */
  disablePreview: boolean;
  /**
   * @desc 是否显示删除按钮
   * @desc 默认为 true
   */
  delIcon: boolean;
  /**
   * @desc 是否自动上传
   * @desc false 只触发 select 事件，可自行上传
   * @desc true 自动上传
   * @desc 默认为 true
   */
  autoUpload: boolean;
  /**
   * @desc 最大选择个数
   * @desc 默认为 9
   */
  limit: number | string;
  /**
   * @desc 组件标题，右侧显示上传计数
   */
  title: string;
  /**
   * @desc 选择文件类型
   * @desc image 图片
   * @desc video 视频
   * @desc all 全部
   * @desc 默认为 image
   */
  fileMediatype: _UniFilePickerFileMediatype;
  /**
   * @desc 选择文件后缀，字符串的情况下需要用逗号分隔
   * @desc 推荐使用字符串
   * @desc 根据 file-mediatype 属性而不同
   * @desc 默认为 []
   */
  fileExtname: string | string[];
  /**
   * @desc 样式
   * @desc mode="list" 时有效
   */
  listStyles: _UniFilePickerListStyles;
  /**
   * @desc 样式
   * @desc mode="grid" 时有效
   */
  imageStyles: _UniFilePickerImageStyles;
  /**
   * @desc 手动上传
   */
  upload: _UniFilePickerUpload;
  /**
   * @desc 清除选择结果
   * @desc 传入下标则删除指定下标文件
   * @desc 不传入下标则删除所有
   */
  clearFiles: _UniFilePickerClearFiles;
  /**
   * @desc 选择文件后触发
   */
  onSelect: _UniFilePickerOnSelect;
  /**
   * @desc 文件上传时触发
   */
  onProgress: _UniFilePickerOnProgress;
  /**
   * @desc 上传成功触发
   */
  onSuccess: _UniFilePickerOnSuccess;
  /**
   * @desc 上传失败触发
   */
  onFail: _UniFilePickerOnFail;
  /**
   * @desc 文件从列表移除时触发
   */
  onDelete: _UniFilePickerOnDelete;
}

interface _UniFilePickerArrayProps extends _UniFilePickerBaseProps {
  /**
   * @desc 组件数据，通常用来回显
   */
  value: _UniFilePickerValue[];
  /**
   * @desc 限制 value 类型
   */
  returnType?: 'array';
}

interface _UniFilePickerObjectProps extends _UniFilePickerBaseProps {
  /**
   * @desc 组件数据，通常用来回显
   */
  value: _UniFilePickerValue;
  /**
   * @desc 限制 value 类型
   * @desc 只能单选，且会覆盖
   */
  returnType: 'object';
}

/**
 * @desc 文件选择上传组件属性
 */
type _UniFilePickerProps = _UniFilePickerArrayProps | _UniFilePickerObjectProps;

/**
 * @desc 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间
 */
type _UniFilePicker = Component<Partial<_UniFilePickerProps>>;

export {
  _UniFilePickerValue as UniFilePickerValue,
  _UniFilePickerMode as UniFilePickerMode,
  _UniFilePickerFileMediatype as UniFilePickerFileMediatype,
  _UniFilePickerListStyles as UniFilePickerListStyles,
  _UniFilePickerImageStyles as UniFilePickerImageStyles,
  _UniFilePickerEvent as UniFilePickerEvent,
  _UniFilePickerUpload as UniFilePickerUpload,
  _UniFilePickerClearFiles as UniFilePickerClearFiles,
  _UniFilePickerOnSelect as UniFilePickerOnSelect,
  _UniFilePickerOnProgress as UniFilePickerOnProgress,
  _UniFilePickerOnSuccess as UniFilePickerOnSuccess,
  _UniFilePickerOnFail as UniFilePickerOnFail,
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
     * @desc 选择文件后的文件列表样式
     * @desc list 列表
     * @desc grid 网格
     */
    export type UniFilePickerMode = _UniFilePickerMode;
    /**
     * @desc 选择文件类型
     * @desc image 图片
     * @desc video 视频
     * @desc all 全部
     */
    export type UniFilePickerFileMediatype = _UniFilePickerFileMediatype;
    /**
     * @desc 样式
     * @desc mode="list" 时有效
     */
    export interface UniFilePickerListStyles extends _UniFilePickerListStyles {}
    /**
     * @desc 样式
     * @desc mode="grid" 时有效
     */
    export interface UniFilePickerImageStyles extends _UniFilePickerImageStyles {}
    /**
     * @desc 事件回调参数
     */
    export interface UniFilePickerEvent extends _UniFilePickerEvent {}
    /**
     * @desc 手动上传
     */
    export interface UniFilePickerUpload extends _UniFilePickerUpload {}
    /**
     * @desc 清除选择结果
     * @desc 传入下标则删除指定下标文件
     * @desc 不传入下标则删除所有
     */
    export interface UniFilePickerClearFiles extends _UniFilePickerClearFiles {}
    /**
     * @desc 选择文件后触发
     */
    export interface UniFilePickerOnSelect extends _UniFilePickerOnSelect {}
    /**
     * @desc 文件上传时触发
     */
    export interface UniFilePickerOnProgress extends _UniFilePickerOnProgress {}
    /**
     * @desc 上传成功触发
     */
    export interface UniFilePickerOnSuccess extends _UniFilePickerOnSuccess {}
    /**
     * @desc 上传失败触发
     */
    export interface UniFilePickerOnFail extends _UniFilePickerOnFail {}
    /**
     * @desc 文件从列表移除时触发
     */
    export interface UniFilePickerOnDelete extends _UniFilePickerOnDelete {}
    export interface UniFilePickerBaseProps extends _UniFilePickerBaseProps {}
    export interface UniFilePickerArrayProps extends _UniFilePickerArrayProps {}
    export interface UniFilePickerObjectProps extends _UniFilePickerObjectProps {}
    /**
     * @desc 文件选择上传组件属性
     */
    export interface UniFilePickerProps extends _UniFilePickerProps {}
    /**
     * @desc 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间
     */
    export interface UniFilePicker extends _UniFilePicker {}
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    /**
     * @desc 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间
     */
    UniFilePicker: _UniFilePicker;
  }
}
