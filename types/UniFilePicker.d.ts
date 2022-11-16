import { Component } from '@uni-helper/uni-app-types';

export interface UniFilePickerValue {
  name: string;
  extname: string;
  url: string;
}

/**
 * @desc 选择文件后的文件列表样式
 * @desc list 列表
 * @desc grid 网格
 */
export type UniFilePickerMode = 'list' | 'grid';

/**
 * @desc 选择文件类型
 * @desc image 图片
 * @desc video 视频
 * @desc all 全部
 */
export type UniFilePickerFileMediatype = 'image' | 'video' | 'all';

/**
 * @desc 样式
 * @desc mode="list" 时有效
 */
export interface UniFilePickerListStyles {
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
export interface UniFilePickerImageStyles {
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
export interface UniFilePickerEvent {
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

export interface UniFilePickerBaseProps {
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
  mode: UniFilePickerMode;
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
  fileMediatype: UniFilePickerFileMediatype;
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
  listStyles: UniFilePickerListStyles;
  /**
   * @desc 样式
   * @desc mode="grid" 时有效
   */
  imageStyles: UniFilePickerImageStyles;
  /**
   * @desc 手动上传
   */
  upload: () => void;
  /**
   * @desc 清除选择结果
   * @desc 传入下标则删除指定下标文件
   * @desc 不传入下标则删除所有
   */
  clearFiles: (index?: number) => void;
  /**
   * @desc 选择文件后触发
   */
  onSelect: (event: UniFilePickerEvent) => void;
  /**
   * @desc 文件上传时触发
   */
  onProgress: (event: UniFilePickerEvent) => void;
  /**
   * @desc 上传成功触发
   */
  onSuccess: (event: UniFilePickerEvent) => void;
  /**
   * @desc 上传失败触发
   */
  onFail: (event: UniFilePickerEvent) => void;
  /**
   * @desc 文件从列表移除时触发
   */
  onDelete: (event: UniFilePickerEvent) => void;
}

export interface UniFilePickerArrayProps extends UniFilePickerBaseProps {
  /**
   * @desc 组件数据，通常用来回显
   */
  value: UniFilePickerValue[];
  /**
   * @desc 限制 value 类型
   */
  returnType?: 'array';
}

export interface UniFilePickerObjectProps extends UniFilePickerBaseProps {
  /**
   * @desc 组件数据，通常用来回显
   */
  value: UniFilePickerValue;
  /**
   * @desc 限制 value 类型
   * @desc 只能单选，且会覆盖
   */
  returnType: 'object';
}

export type UniFilePickerProps = UniFilePickerArrayProps | UniFilePickerObjectProps;

/**
 * @desc 文件选择上传组件，可以选择图片、视频等任意文件并上传到当前绑定的服务空间
 */
export type UniFilePicker = Component<Partial<UniFilePickerProps>>;
