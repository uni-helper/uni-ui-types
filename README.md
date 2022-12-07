# @uni-helper/uni-ui-types

[![License](https://img.shields.io/github/license/uni-helper/uni-ui-types)](https://github.com/uni-helper/uni-ui-types/blob/main/LICENSE)

[![npm](https://img.shields.io/npm/v/@uni-helper/uni-ui-types)](https://www.npmjs.com/package/@uni-helper/uni-ui-types)

- [@uni-helper/uni-app-types](https://github.com/uni-helper/uni-app-types) 提供 `uni-app` 组件类型
- [@uni-helper/uni-cloud-types](https://github.com/uni-helper/uni-cloud-types) 提供 `uni-cloud` 组件类型
- [@uni-helper/uni-ui-types](https://github.com/uni-helper/uni-ui-types) （当前仓库）提供 `uni-ui` 组件类型

基于 [这个 PR](https://github.com/vuejs/core/pull/3399)，[Volar](https://github.com/johnsoncodehk/volar) 已经支持。

安装 Volar 之后，建议启用 Volar 的 [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471)。如果不想启用 Take Over Mode，可以安装 [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)。启用或安装后需要重启 VSCode。

维护直到官方类型推出。

**类型和文档的冲突之处，请以文档为准。**

类型源代码在 [uni-helper/uni-ui-types](https://github.com/uni-helper/uni-ui-types)。欢迎提交 ISSUE 和 PR 改进类型。

## 使用

- 安装依赖

```shell
npm i -D @uni-helper/uni-ui-types
```

- 配置 `tsconfig.json`，确保 `compilerOptions.types` 中含有 `@dcloudio/types` 和 `@uni-helper/uni-ui-types` 且 `include` 包含了对应的 `vue` 文件

```json
{
  "compilerOptions": {
    "types": ["@dcloudio/types", "@uni-helper/uni-ui-types"]
  },
  "vueCompilerOptions": {
    "experimentalRuntimeMode": "runtime-uni-app",
    "nativeTags": ["block", "component", "template", "slot"]
  },
  "include": ["src/**/*.vue"]
}
```

- 重启编辑器 / IDE

如果你发现配置后项目仍然有错误的类型提示，请先看看 [johnsoncodehk/volar#2165 (comment)](https://github.com/johnsoncodehk/volar/issues/2165#issuecomment-1334803492)。

## 类型

### UniBadge (uni-badge)

```typescript
/**
 * @desc 角标颜色类型
 * @desc default 灰色
 * @desc primary 蓝色
 * @desc success 绿色
 * @desc warning 黄色
 * @desc error 红色
 */
export type UniBadgeType = 'default' | 'primary' | 'success' | 'warning' | 'error';

/**
 * @desc 角标大小
 * @desc normal 正常
 * @desc small 小
 */
export type UniBadgeSize = 'normal' | 'small';

/**
 * @desc 开启绝对定位，角标将定位到其包裹的标签的四个角上
 * @desc rightTop 右上角
 * @desc rightBottom 右下角
 * @desc leftBottom 左下角
 * @desc leftTop 左上角
 */
export type UniBadgeAbsolute = 'rightTop' | 'rightBottom' | 'leftBottom' | 'leftTop';

export interface UniBadgeProps {
  /**
   * @desc 角标内容
   */
  text: string;
  /**
   * @desc 角标颜色类型
   * @desc default 灰色
   * @desc primary 蓝色
   * @desc success 绿色
   * @desc warning 黄色
   * @desc error 红色
   * @desc 默认为 default
   */
  type: UniBadgeType;
  /**
   * @desc 角标大小
   * @desc normal 正常
   * @desc small 小
   * @desc 默认为 normal
   */
  size: UniBadgeSize;
  /**
   * @desc 是否只展示一个点不展示内容
   * @desc 默认为 false
   */
  isDot: boolean;
  /**
   * @desc 展示封顶的数字值，超过 99 显示 99+
   * @desc 默认为 99
   */
  maxNum: number;
  /**
   * @desc 自定义样式
   */
  customStyle: Record<string, any>;
  /**
   * @desc 是否无需背景颜色
   * @desc true 背景颜色将变为文字的字体颜色
   * @desc false 正常显示
   */
  inverted: boolean;
  /**
   * @desc 开启绝对定位，角标将定位到其包裹的标签的四个角上
   * @desc rightTop 右上角
   * @desc rightBottom 右下角
   * @desc leftBottom 左下角
   * @desc leftTop 左上角
   * @desc 默认为 rightTop
   */
  absolute: UniBadgeAbsolute;
  /**
   * @desc 距定位角中心点的偏移量
   * @desc [-10, -10] 表示向 absolute 指定的方向偏移 10px
   * @desc [10, 10] 表示向 absolute 指定的反方向偏移 10px
   * @desc 与 absolute 一一对应
   * @desc 存在 absolute 属性时有效
   * @desc 单位为 px
   */
  offset: [number, number];
  /**
   * @desc 点击事件
   */
  onClick: (event: BaseEvent) => void;
}

/**
 * @desc 数字角标
 * @desc 一般和其它控件（列表、九宫格等）配合使用，用于进行数量提示，默认为实心灰色背景
 */
export type UniBadge = Component<Partial<UniBadgeProps>>;
```

### UniBreadcrumb (uni-breadcrumb)

```typescript
export interface UniBreadcrumbProps {
  /**
   * @desc 分隔符
   * @desc 默认为 /
   */
  separator: string;
  /**
   * @desc 分隔符类名
   */
  separatorClass: string;
}

/**
 * @desc 显示当前页面的路径，快速返回之前的任意页面
 */
export type UniBreadcrumb = Component<Partial<UniBreadcrumbProps>>;
```

### UniBreadcrumbItem (uni-breadcrumb-item)

```typescript
export interface UniBreadcrumbItemProps {
  /**
   * @desc 路由跳转页面路径
   */
  to: string | Record<string, any>;
  /**
   * @desc 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录
   */
  replace: boolean;
}

export type UniBreadcrumbItem = Component<Partial<UniBreadcrumbItemProps>>;
```

### UniCalendar (uni-calendar)

```typescript
export interface UniCalendarProps {
  /**
   * @desc 自定义当前时间
   * @desc 格式为 YYYY-MM-DD
   * @desc 默认为 今天
   */
  date: string;
  /**
   * @desc 是否显示农历
   * @desc 默认为 false
   */
  lunar: boolean;
  /**
   * @desc 日期范围的开始日期
   * @desc 格式为 YYYY-MM-DD
   */
  startDate: string;
  /**
   * @desc 日期范围的结束日期
   * @desc 格式为 YYYY-MM-DD
   */
  endDate: string;
  /**
   * @desc 是否为范围选择
   * @desc 默认为 false
   */
  range: boolean;
  /**
   * @desc 插入模式
   * @desc true 插入模式
   * @desc false 弹窗模式
   * @desc 默认为 true
   */
  insert: boolean;
  /**
   * @desc 弹窗模式下是否清空上次选择内容
   * @desc insert 为 true 时有效
   * @desc 默认为 true
   */
  clearDate: boolean;
  /**
   * @desc 是否显示月份为背景
   * @desc 默认为 true
   */
  showMonth: boolean;
  /**
   * @desc 打点
   */
  selected: {
    /**
     * @desc 日期
     */
    date: UniCalendarProps['date'];
    /**
     * @desc 信息
     */
    info: string;
    /**
     * @desc 自定义数据
     */
    data: {
      /**
       * @desc 自定义信息
       */
      custom: string;
      /**
       * @desc 自定义信息头
       */
      name: string;
    };
  }[];
  /**
   * @desc 弹出日历组件
   * @desc insert 为 true 时有效
   */
  open: (event: BaseEvent) => void;
  onClose: (event: BaseEvent) => void;
  onConfirm: (event: BaseEvent) => void;
  onChange: (event: {
    range: UniCalendarProps['range'];
    year: number;
    month: number;
    date: UniCalendarProps['date'];
    fulldate: UniCalendarProps['date'];
    lunar: UniCalendarProps['lunar'];
    extraInfo: Record<string, any>;
  }) => void;
  onMonthSwitch: (event: { year: number; month: number }) => void;
}

/**
 * @desc 日历组件可以查看日期，选择任意范围内的日期，打点操作
 * @desc 常用场景如：酒店日期预订、火车机票选择购买日期、上下班打卡等
 */
export type UniCalendar = Component<Partial<UniCalendarProps>>;
```

### UniCard (uni-card)

```typescript
export interface UniCardProps {
  /**
   * @desc 标题文字
   */
  title: string;
  /**
   * @desc 副标题文字
   */
  subTitle: string;
  /**
   * @desc 标题额外信息
   */
  extra: string;
  /**
   * @desc 标题左侧缩略图，支持网络图片和本地图片
   * @desc 本地图片需要传入绝对路径
   */
  thumbnail: string;
  /**
   * @desc 封面图，支持网络图片和本地图片
   * @desc 本图片需要传入绝对路径
   */
  cover: string;
  /**
   * @desc 卡片内容是否通栏
   * @desc true 去除 padding
   * @desc false 保留 padding
   * @desc 默认为 false
   */
  isFull: boolean;
  /**
   * @desc 是否开启阴影
   * @desc 默认为 false
   */
  isShadow: boolean;
  /**
   * @desc 卡片阴影
   * @desc 默认为 0px 0px 3px 1px rgba(0, 0, 0, 0.08)
   */
  shadow: string;
  /**
   * @desc 是否显示卡片边框
   * @desc 默认为 true
   */
  border: boolean;
  /**
   * @desc 卡片外边距
   * @desc 默认为 10px
   */
  margin: string;
  /**
   * @desc 卡片内边距
   * @desc 默认为 10px
   */
  spacing: string;
  /**
   * @desc 卡片内容内边距
   * @desc 默认为 10px
   */
  padding: string;
  /**
   * @desc 点击事件
   */
  onClick: (event: BaseEvent) => void;
}

/**
 * @desc 卡片组件通用来显示完整独立的一段信息，同时让用户理解它的作用
 * @desc 例如一篇文章的预览图、作者信息、时间等
 * @desc 卡片通常是更复杂和更详细信息的入口点
 */
export type UniCard = Component<Partial<UniCardProps>>;
```

### UniCollapse (uni-collapse)

```typescript
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
```

### UniCollapseItem (uni-collapse-item)

```typescript
/**
 * @desc 折叠面板标题分隔线
 * @desc auto 分隔线自动显示
 * @desc none 不显示分隔线
 * @desc show 一直显示分隔线
 */
export type UniCollapseItemTitleBorder = 'auto' | 'none' | 'show';

export interface UniCollapseItemProps {
  /**
   * @desc 标题文字
   */
  title: string;
  /**
   * @desc 标题左侧缩略图
   */
  thumb: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 是否展开面板
   * @desc 不要和 uni-collapse value / v-model 一起使用
   * @desc 默认为 false
   */
  open: boolean;
  /**
   * @desc 是否开启动画
   * @desc 默认为 false
   */
  showAnimation: boolean;
  /**
   * @desc 是否显示分隔线
   * @desc 默认为 true
   */
  border: boolean;
  /**
   * @desc 折叠面板标题分隔线
   * @desc auto 分隔线自动显示
   * @desc none 不显示分隔线
   * @desc show 一直显示分隔线
   * @desc 默认为 auto
   */
  titleBorder: UniCollapseItemTitleBorder;
  /**
   * @desc 是否显示右侧箭头
   * @desc 默认为 true
   */
  showArrow: boolean;
}

export type UniCollapseItem = Component<Partial<UniCollapseItemProps>>;
```

### UniCombox (uni-combox)

```typescript
export interface UniComboxProps {
  /**
   * @desc 标签文字
   */
  label: string;
  /**
   * @desc 值
   */
  value: string;
  /**
   * @desc 标签宽度
   */
  labelWidth: string;
  /**
   * @desc 输入框占位符
   */
  placeholder: string;
  /**
   * @desc 候选字段
   * @desc 默认为 []
   */
  candidates: string | string[];
  /**
   * @desc 无匹配项时的提示语
   * @desc 默认为 无匹配项
   */
  emptyTips: string;
  /**
   * @desc 输入时触发
   */
  onInput: (value: UniComboxProps['value']) => void;
}

/**
 * @desc 组合框组件，一般用于可以选择也可以输入的表单项
 */
export type UniCombox = Component<Partial<UniComboxProps>>;
```

### UniCountdown (uni-countdown)

```typescript
export interface UniCountdownProps {
  /**
   * @desc 背景色
   * @desc 默认为 #ffffff
   */
  backgroundColor: string;
  /**
   * @desc 文字颜色
   * @desc 默认为 #000000
   */
  color: string;
  /**
   * @desc 分隔符颜色
   * @desc 默认为 #000000
   */
  splitorColor: string;
  /**
   * @desc 天数
   * @desc 默认为 0
   */
  day: number;
  /**
   * @desc 小时数
   * @desc 默认为 0
   */
  hour: number;
  /**
   * @desc 分钟数
   * @desc 默认为 0
   */
  minute: number;
  /**
   * @desc 秒数
   * @desc 默认为 0
   */
  second: number;
  /**
   * @desc 目标时间戳
   * @desc 默认为 0
   */
  timestamp: number;
  /**
   * @desc 是否显示天数
   * @desc 默认为 true
   */
  showDay: true;
  /**
   * @desc 是否以冒号为分隔符
   * @desc 默认为 true
   */
  showColon: boolean;
  /**
   * @desc 是否初始化组件后就开始倒计时
   * @desc 默认为 true
   */
  start: boolean;
  /**
   * @desc 动态更新时间后，刷新组件显示
   */
  update: () => void;
  /**
   * @desc 倒计时时间到触发事件
   */
  onTimeup: (event: BaseEvent) => void;
}

/**
 * @desc 倒计时
 */
export type UniCountdown = Component<Partial<UniCountdownProps>>;
```

### UniDataCheckbox (uni-data-checkbox)

```typescript
/**
 * @desc 默认值
 */
export type UniDataCheckboxValue = string | number;

/**
 * @desc 显示模式
 * @desc default 横向显示
 * @desc list 列表
 * @desc button 按钮
 * @desc tag 标签
 */
export type UniDataCheckboxMode = 'default' | 'list' | 'button' | 'tag';

/**
 * @desc 本地渲染数据
 */
export interface UniDataCheckboxLocaldata {
  /**
   * @desc 显示文本
   */
  text: string;
  /**
   * @desc 选中后的值
   */
  value: UniDataCheckboxValue;
  /**
   * @desc 是否禁用
   */
  disabled: boolean;
  [key: string]: any;
}

/**
 * @desc list 模式下 icon 显示的位置
 */
export type UniDataCheckboxIcon = 'left' | 'right';

/**
 * @desc 字段映射
 * @desc 将 text/value 映射到数据中的其他字段
 */
export interface UniDataCheckboxMap {
  text: string;
  value: string;
}

export interface UniDataCheckboxBaseProps {
  /**
   * @desc 本地渲染数据
   */
  localdata: UniDataCheckboxLocaldata[];
  /**
   * @desc 显示模式
   * @desc default 横向显示
   * @desc list 列表
   * @desc button 按钮
   * @desc tag 标签
   * @desc 默认为 default
   */
  mode: UniDataCheckboxMode;
  /**
   * @desc 是否换行显示
   */
  wrap: boolean;
  /**
   * @desc list 模式下 icon 显示的位置
   * @desc 默认为 left
   */
  icon: UniDataCheckboxIcon;
  /**
   * @desc 选中颜色
   * @desc 默认为 #007aff
   */
  selectedColor: string;
  /**
   * @desc 选中文本颜色
   * @desc 默认为 #333333
   */
  selectedTextColor: string;
  /**
   * @desc 没有数据时显示的文字，本地数据无效
   * @desc 默认为 暂无数据
   */
  emptyText: string;
  /**
   * @desc 字段映射
   * @desc 将 text/value 映射到数据中的其他字段
   */
  map: UniDataCheckboxMap;
}

export interface UniDataCheckboxNoMultipleProps extends UniDataCheckboxBaseProps {
  /**
   * @desc 默认值
   */
  value: UniDataCheckboxValue;
  /**
   * @desc 关闭多选
   * @desc 默认为 false
   */
  multiple?: false;
  /**
   * @desc 选中状态改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: UniDataCheckboxNoMultipleProps['value'];
    }>,
  ) => void;
}

export interface UniDataCheckboxMultipleProps extends UniDataCheckboxBaseProps {
  /**
   * @desc 默认值
   */
  value: UniDataCheckboxValue[];
  /**
   * @desc 开启多选
   * @desc 默认为 false
   */
  multiple: true;
  /**
   * @desc 最小选择个数
   * @desc multiple 为 true 时有效
   */
  min: string | number;
  /**
   * @desc 最大选择个数
   * @desc multiple 为 true 时有效
   */
  max: string | number;
  /**
   * @desc 选中状态改变时触发
   */
  onChange: (
    event: CustomEvent<{
      value: UniDataCheckboxMultipleProps['value'];
    }>,
  ) => void;
}

export type UniDataCheckboxProps = UniDataCheckboxNoMultipleProps | UniDataCheckboxMultipleProps;

/**
 * @desc 本组件是基于 uni-app 基础组件 checkbox 的封装。本组件要解决问题包括：
 * @desc 数据绑定型组件：给本组件绑定一个data，会自动渲染一组候选内容，在以往，开发者需要编写不少代码实现类似功能
 * @desc 自动的表单校验：组件绑定了 data，且符合 uni-forms 组件的表单校验规范，搭配使用会自动实现表单校验
 * @desc 本组件合并了单选多选
 * @desc 本组件有若干风格选择，如普通的单选多选框、并列 button 风格、tag 风格，开发者可以快速选择需要的风格，会牺牲一定的样式自定义性
 * @desc 在 uni-cloud 开发中，DB Schema 中配置了 enum 枚举等类型后，在 web 控制台的自动生成表单功能中，会自动生成 uni-data-checkbox 组件并绑定好 data
 */
export type UniDataCheckbox = Component<Partial<UniDataCheckboxProps>>;
```

### UniDataPicker (uni-data-picker)

```typescript
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
```

### UniDataSelect (uni-data-select)

```typescript
/**
 * @desc 本地数据
 */
export interface UniDataSelectLocaldata {
  /**
   * @desc 值
   */
  value: string | number;
  /**
   * @desc 显示文字
   */
  text: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disable: boolean;
}

export interface UniDataSelectProps {
  /**
   * @desc 已选择数据的 value 值
   */
  value: string | number;
  /**
   * @desc 本地数据
   */
  localdata: UniDataSelectLocaldata[];
  /**
   * @desc 是否可以清空已选项
   * @desc 默认为 true
   */
  clear: boolean;
  /**
   * @desc 左侧标题
   */
  label: string;
  /**
   * @desc 输入框的提示文字
   * @desc 默认为 请选择
   */
  placeholder: string;
  /**
   * @desc 没有数据时显示的文字，本地数据无效
   * @desc 默认为 暂无数据
   */
  emptyText: string;
  /**
   * @desc 改变时触发
   */
  onChange: (event: UniDataSelectProps['value']) => void;
}

/**
 * @desc 当选项过多时，使用下拉菜单展示并选择内容
 * @desc 本组件要解决问题包括
 * @desc 数据绑定型组件：给本组件绑定一个 data，会自动渲染一组候选内容
 * @desc 自动的表单校验：组件绑定了 data，且符合 uni-forms 的表单校验规范，搭配使用会自动实现表单校验
 */
export type UniDataSelect = Component<Partial<UniDataSelectProps>>;
```

### UniDateformat (uni-dateformat)

```typescript
/**
 * @desc 格式化使用的语言
 * @desc zh 中文
 * @desc en 英文
 */
export type UniDateformatLocale = 'zh' | 'en';

export interface UniDateformatProps {
  /**
   * @desc 要格式化的日期对象/日期字符串/时间戳
   * @desc 默认为 Date.now()
   */
  date: Date | string | number;
  /**
   * @desc 转化类型阈值
   * @desc 默认为 [0, 0]
   */
  threshold: [number, number];
  /**
   * @desc 格式字符串
   * @desc yyyy 四位年份
   * @desc yy 两位年份
   * @desc MM 两位月份，不足则在前面补 0
   * @desc M 月份，不自动补 0
   * @desc dd 两位天，不足则在前面补 0
   * @desc d 天，不自动补 0
   * @desc hh 两位小时，不足则在前面补 0
   * @desc h 小时，不自动补 0
   * @desc mm 两位分钟，不足则在前面补 0
   * @desc m 分钟，不自动补 0
   * @desc ss 两位秒，不足则在前面补 0
   * @desc s 秒，不自动补 0
   * @desc SSS 三位毫秒，不足则在前面补 0
   * @desc S 毫秒，不自动补 0
   * @desc 默认为 yyyy/MM/dd hh:mm:ss
   */
  format: string;
  /**
   * @desc 格式化使用的语言
   * @desc zh 中文
   * @desc en 英文
   * @desc 默认为 zh
   */
  locale: UniDateformatLocale;
}

/**
 * @desc 日期格式化组件
 */
export type UniDateformat = Component<Partial<UniDateformatProps>>;
```

### UniDatetimePicker (uni-datetime-picker)

```typescript
/**
 * @desc 选择器类型
 * @desc date 日期
 * @desc daterange 日期范围
 * @desc datetime 日期时间
 * @desc datetimerange 日期时间范围
 */
export type UniDatetimePickerType = 'date' | 'daterange' | 'datetime' | 'datetimerange';

/**
 * @desc 值类型
 */
export type UniDatetimePickerValue = string | number | Date;

/**
 * @desc 返回值类型
 */
export type UniDatetimePickerReturnType = 'timestamp' | 'string' | 'date';

export interface UniDatetimePickerProps {
  /**
   * @desc 选择器类型
   * @desc date 日期
   * @desc daterange 日期范围
   * @desc datetime 日期时间
   * @desc datetimerange 日期时间范围
   * @desc 默认为 datetime
   */
  type: UniDatetimePickerType;
  /**
   * @desc 输入框当前值
   */
  value: UniDatetimePickerValue | UniDatetimePickerValue[];
  /**
   * @desc 最小值
   */
  start: string | number;
  /**
   * @desc 最大值
   */
  end: string | number;
  /**
   * @desc 返回值格式
   * @desc 默认为 string
   */
  returnType: UniDatetimePickerReturnType;
  /**
   * @desc 是否显示边框
   * @desc 默认为 true
   */
  border: boolean;
  /**
   * @desc 选择范围时的分隔符
   * @desc 默认为 -
   */
  rangeSeparator: string;
  /**
   * @desc 非范围选择时的占位内容
   */
  placeholder: string;
  /**
   * @desc 范围选择时开始日期的占位内容
   */
  startPlaceholder: string;
  /**
   * @desc 范围选择时结束日期的占位内容
   */
  endPlaceholder: string;
  /**
   * @desc 是否不可选择
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 是否显示清除按钮
   * @desc 默认为 true
   */
  clearIcon: boolean;
  /**
   * @desc 是否不显示秒，只显示时分
   * @desc 默认为 false
   */
  hideSecond: boolean;
  /**
   * @desc 打开弹出层
   */
  show: () => void;
  /**
   * @desc 关闭弹出层
   */
  close: () => void;
  /**
   * @desc 清除上次选中的状态和值
   */
  clear: () => void;
  /**
   * @desc 确定日期时间时触发的事件
   */
  onChange: (value: UniDatetimePickerProps['value']) => void;
  /**
   * @desc 点击遮罩层触发
   */
  onMaskClick: (value: UniDatetimePickerProps['value']) => void;
}

/**
 * @desc 支持时间戳输入和输出（起始时间、终止时间也支持时间戳），可同时选择日期和时间
 */
export type UniDatetimePicker = Component<Partial<UniDatetimePickerProps>>;
```

### UniDrawer (uni-drawer)

```typescript
/**
 * @desc 抽屉滑出位置
 * @desc left 从左侧滑出
 * @desc right 从右侧滑出
 */
export type UniDrawerMode = 'left' | 'right';

export interface UniDrawerProps {
  /**
   * @desc 是否显示遮罩
   * @desc 默认为 true
   */
  mask: boolean;
  /**
   * @desc 点击遮罩是否可以关闭抽屉
   * @desc 默认为 true
   */
  maskClick: boolean;
  /**
   * @desc 抽屉滑出位置
   * @desc left 从左侧滑出
   * @desc right 从右侧滑出
   * @desc 默认为 left
   */
  mode: UniDrawerMode;
  /**
   * @desc 宽度
   * @desc 默认为 200
   */
  width: number;
  /**
   * @desc 打开抽屉
   */
  open: () => void;
  /**
   * @desc 关闭抽屉
   */
  close: () => void;
  /**
   * @desc 抽屉状态发生变化时触发
   */
  onChange: (isDrawerOpen: boolean) => void;
}

/**
 * @desc 抽屉侧滑菜单
 */
export type UniDrawer = Component<Partial<UniDrawerProps>>;
```

### UniEasyinput (uni-easyinput)

```typescript
/**
 * @desc 输入框的类型
 * @desc text 文字输入键盘
 * @desc textarea 多行文本输入键盘
 * @desc password 密码输入键盘
 * @desc number 数字输入键盘，iOS 上 app-vue 弹出的数字键盘不是九宫格
 * @desc idcard 身份证输入键盘
 * @desc digit 带小数点的数字键盘
 */
export type UniEasyinputType = 'text' | 'textarea' | 'password' | 'number' | 'idcard' | 'digit';

/**
 * @desc 设置键盘右下角按钮的文字
 * @desc type="text" 时有效
 * @desc send 发送
 * @desc search 搜索
 * @desc next 下一个
 * @desc go 前往
 * @desc done 完成
 */
export type UniEasyinputConfirmType = 'send' | 'search' | 'next' | 'go' | 'done';

/**
 * @desc 自动去除空格的类型
 * @desc true 去除左右空格
 * @desc false 不去除左右空格
 * @desc both 去除两端空格
 * @desc left 去除左侧空格
 * @desc right 去除右侧空格
 * @desc all 去除所有空格
 * @desc none 不去除空格
 */
export type UniEasyinputTrim = boolean | 'both' | 'left' | 'right' | 'all' | 'none';

/**
 * @desc 自定义样式
 */
export interface UniEasyinputStyles {
  /**
   * @desc 输入文字颜色
   * @desc 默认为 #333333
   */
  color: string;
  /**
   * @desc 输入框禁用背景色
   * @desc 默认为 #eeeeee
   */
  disableColor: string;
  /**
   * @desc 边框颜色
   * @desc 默认为 #e5e5e5
   */
  borderColor: string;
}

export interface UniEasyinputProps {
  /**
   * @desc 输入内容
   */
  value: string | number;
  /**
   * @desc 输入框的类型
   * @desc text 文字输入键盘
   * @desc textarea 多行文本输入键盘
   * @desc password 密码输入键盘
   * @desc number 数字输入键盘，iOS 上 app-vue 弹出的数字键盘不是九宫格
   * @desc idcard 身份证输入键盘
   * @desc digit 带小数点的数字键盘
   * @desc 默认为 text
   */
  type: UniEasyinputType;
  /**
   * @desc 是否显示右侧清空内容的图标控件
   * @desc 输入框有内容且不禁用时显示
   * @desc 点击可清空输入框内容
   * @desc 默认为 true
   */
  clearable: boolean;
  /**
   * @desc 是否自动增高输入区域
   * @desc type="textarea" 时有效
   * @desc 默认为 false
   */
  autoHeight: boolean;
  /**
   * @desc 输入框的提示文字
   */
  placeholder: string;
  /**
   * @desc 提示文字样式
   */
  placeholderStyle: string;
  /**
   * @desc 是否自动获得焦点
   * @desc 默认为 false
   */
  focus: boolean;
  /**
   * @desc 是否不可输入
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 最大输入长度
   * @desc 设置为 -1 时不限制最大长度
   * @desc 默认为 140
   */
  maxlength: number;
  /**
   * @desc 设置键盘右下角按钮的文字
   * @desc type="text" 时有效
   * @desc send 发送
   * @desc search 搜索
   * @desc next 下一个
   * @desc go 前往
   * @desc done 完成
   * @desc 默认为 done
   */
  confirmType: UniEasyinputConfirmType;
  /**
   * @desc 清除图标的大小
   * @desc 单位为 px
   * @desc 默认为 15
   */
  clearSize: number;
  /**
   * @desc 输入框头部图标
   */
  prefixIcon: string;
  /**
   * @desc 输入框尾部图标
   */
  suffixIcon: string;
  /**
   * @desc 是否自动去除空格
   * @desc true 去除左右空格
   * @desc false 不去除左右空格
   * @desc both 去除两端空格
   * @desc left 去除左侧空格
   * @desc right 去除右侧空格
   * @desc all 去除所有空格
   * @desc none 不去除空格
   * @desc 默认为 false
   */
  trim: UniEasyinputTrim;
  /**
   * @desc 是否显示输入框边框
   * @desc 默认为 true
   */
  inputBorder: boolean;
  /**
   * @desc 自定义样式
   */
  styles: UniEasyinputStyles;
  /**
   * @desc 是否显示眼睛图标
   * @desc type="password" 时有效
   * @desc 默认为 true
   */
  passwordIcon: boolean;
  /**
   * @desc 输入框发生变化时触发
   */
  onInput: (value: UniEasyinputProps['value']) => void;
  /**
   * @desc 清除时触发
   */
  onClear: () => void;
  /**
   * @desc 输入框获得焦点时触发
   */
  onFocus: (event: BaseEvent) => void;
  /**
   * @desc 输入框失去焦点时触发
   */
  onBlur: (event: BaseEvent) => void;
  /**
   * @desc 点击完成时触发
   */
  onConfirm: (value: UniEasyinputProps['value']) => void;
  /**
   * @desc 点击图标时触发
   */
  onIconClick: (type: 'prefix' | 'suffix') => void;
  /**
   * @desc 输入框失去焦点或用户按下回车时触发
   */
  onChange: (value: UniEasyinputProps['value']) => void;
}

/**
 * @desc 对原生 input 组件的增强
 */
export type UniEasyinput = Component<Partial<UniEasyinputProps>>;
```

### UniFab (uni-fab)

```typescript
/**
 * @desc 可选样式配置项
 */
export interface UniFabPattern {
  /**
   * @desc 文字默认颜色
   * @desc 默认为 #3c3e49
   */
  color: string;
  /**
   * @desc 文字选中时的颜色
   * @desc 默认为 #007aff
   */
  selectedColor: string;
  /**
   * @desc 背景色
   * @desc 默认为 #ffffff
   */
  backgroundColor: string;
  /**
   * @desc 按钮背景色
   * @desc 默认为 #3c3e49
   */
  buttonColor: string;
}

/**
 * @desc 水平对齐方式
 * @desc left 左对齐
 * @desc right 右对齐
 */
export type UniFabHorizontal = 'left' | 'right';

/**
 * @desc 垂直对齐方式
 * @desc bottom 下对齐
 * @desc top 上对齐
 */
export type UniFabVertical = 'bottom' | 'right';

/**
 * @desc 展开菜单显示方式
 * @desc horizontal 水平显示
 * @desc vertical 垂直显示
 */
export type UniFabDirection = 'horizontal' | 'vertical';

/**
 * @desc 展开菜单内容配置项
 */
export interface UniFabContent {
  /**
   * @desc 图片路径
   */
  iconPath: string;
  /**
   * @desc 选中后图片路径
   */
  selectedIconPath: string;
  /**
   * @desc 文字
   */
  text: string;
  /**
   * @desc 是否选中当前
   */
  active: boolean;
}

export interface UniFabProps {
  /**
   * @desc 可选样式配置项
   */
  pattern: UniFabPattern;
  /**
   * @desc 水平对齐方式
   * @desc left 左对齐
   * @desc right 右对齐
   * @desc 默认为 left
   */
  horizontal: UniFabHorizontal;
  /**
   * @desc 垂直对齐方式
   * @desc bottom 下对齐
   * @desc top 上对齐
   * @desc 默认为 bottom
   */
  vertical: UniFabVertical;
  /**
   * @desc 展开菜单显示方式
   * @desc horizontal 水平显示
   * @desc vertical 垂直显示
   * @desc 默认为 horizontal
   */
  direction: UniFabDirection;
  /**
   * @desc 是否使用弹出菜单
   * @desc 默认为 true
   */
  popMenu: boolean;
  /**
   * @desc 展开菜单内容配置
   */
  content: UniFabContent[];
  /**
   * @desc 展开菜单点击事件，返回点击信息
   */
  onTrigger: ({ index, item }: { index: number; item: UniFabContent }) => void;
  /**
   * @desc 悬浮按钮点击事件
   */
  onFabClick: (event: BaseEvent) => void;
}

/**
 * @desc 点击可展开一个图形按钮菜单
 */
export type UniFab = Component<Partial<UniFabProps>>;
```

### UniFav (uni-fav)

```typescript
/**
 * @desc 收藏按钮文字
 */
export interface UniFavContentText {
  /**
   * @desc 未收藏文字
   * @desc 默认为 收藏
   */
  contentDefault: string;
  /**
   * @desc 已收藏文字
   * @desc 默认为 已收藏
   */
  contentFav: string;
}

export interface UniFavProps {
  /**
   * @desc 按钮是否带星
   * @desc 默认为 true
   */
  star: boolean;
  /**
   * @desc 未收藏时背景色
   * @desc 默认为 #eeeeee
   */
  bgColor: string;
  /**
   * @desc 已收藏时背景色
   * @desc 默认为 #007aff
   */
  bgColorChecked: string;
  /**
   * @desc 未收藏时文字颜色
   * @desc 默认为 #666666
   */
  fgColor: string;
  /**
   * @desc 已收藏时文字颜色
   * @desc 默认为 #ffffff
   */
  fgColorChecked: string;
  /**
   * @desc 是否为圆角
   * @desc 默认为 false
   */
  circle: boolean;
  /**
   * @desc 是否为已收藏
   * @desc 默认为 false
   */
  checked: boolean;
  /**
   * @desc 收藏按钮文字
   */
  contentText: UniFavContentText;
  /**
   * @desc 点击触发
   */
  onClick: (event: BaseEvent) => void;
}

/**
 * @desc 用于收藏功能，可点击切换选中、不选中的状态
 */
export type UniFav = Component<Partial<UniFavProps>>;
```

### UniFilePicker (uni-file-picker)

```typescript
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
```

### UniForms (uni-forms)

```typescript
/**
 * @desc 内置校验规则
 */
export type UniFormsFormat = 'string' | 'number' | 'boolean' | 'array' | 'object' | 'url' | 'email';

/**
 * @desc 规则
 */
export interface UniFormsRule {
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
  validateFunction: (
    rule: any,
    value: any,
    data: any,
    callback: (...args: any) => any,
  ) => boolean | void | Promise<boolean> | Promise<void>;
}

/**
 * @desc 表单校验时机
 */
export type UniFormsValidateTrigger = 'bind' | 'submit' | 'blur';

/**
 * @desc label 位置
 */
export type UniFormsLabelPosition = 'top' | 'left';

/**
 * @desc label 对齐方式
 */
export type UniFormsLabelAlign = 'left' | 'center' | 'right';

/**
 * @desc 错误信息提示方式
 * @desc 默认为 undertext
 */
export type UniFormsErrShowType = 'undertext' | 'toast' | 'modal';

export interface UniFormsProps {
  /**
   * @desc 表单数据
   */
  model: Record<string, any>;
  /**
   * @desc 表单校验规则
   */
  rules: UniFormsRule[];
  /**
   * @desc 表单校验时机
   * @desc 默认为 submit
   */
  validateTrigger: UniFormsValidateTrigger;
  /**
   * @desc label 位置
   * @desc 默认为 left
   */
  labelPosition: UniFormsLabelPosition;
  /**
   * @desc label 宽度
   * @desc 单位为 px
   * @desc 默认为 75
   */
  labelWidth: string | number;
  /**
   * @desc label 对齐方式
   * @desc 默认为 left
   */
  labelAlign: UniFormsLabelAlign;
  /**
   * @desc 错误信息提示方式
   * @desc 默认为 undertext
   */
  errShowType: UniFormsErrShowType;
  /**
   * @desc 是否显示分隔线
   * @desc 默认为 false
   */
  border: boolean;
  /**
   * @desc 动态设置表单规则
   */
  setRules: (rules: UniFormsRule | UniFormsRule[]) => void;
  /**
   * @desc 校验整个表单
   * @param keepItem 不参与校验的字段
   * @param callback 回调函数
   */
  validate: (keepItem: string[], callback: (...args: any) => any) => void | Promise<void>;
  /**
   * @desc 校验部分表单，返回对应表单数据
   * @param items 需要校验的字段
   */
  validateFields: (items: string | string[]) => Promise<any>;
  /**
   * @desc 移除表单的校验结果
   * @param items 需要移除校验的字段
   */
  clearValidate: (items?: string | string[]) => void;
  /**
   * @desc 任意表单项被校验后触发，返回表单校验信息
   */
  onValidate: (results: any[]) => void;
}

/**
 * @desc 表单，用于提交表单内容，内置了表单验证功能
 */
export type UniForms = Component<Partial<UniFormsProps>>;
```

### UniFormsItem (uni-forms-item)

```typescript
/**
 * @desc 规则
 */
export interface UniFormsItemRule {
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
  validateFunction: (
    rule: any,
    value: any,
    data: any,
    callback: (...args: any) => any,
  ) => boolean | void | Promise<boolean> | Promise<void>;
}

/**
 * @desc label 对齐方式
 */
export type UniFormsItemLabelAlign = 'left' | 'center' | 'right';

export interface UniFormsItemProps {
  /**
   * @desc 表单域的属性名，在使用校验规则时必填
   */
  name: string | string[];
  /**
   * @desc 表单校验规则
   */
  rules: UniFormsItemRule;
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
  labelAlign: UniFormsItemLabelAlign;
  /**
   * @desc 动态设置表单规则
   */
  setRules: (rules: UniFormsItemRule | UniFormsItemRule[]) => void;
  /**
   * @desc 校验子表单
   */
  onFieldChange: (value: any) => void;
}

export type UniFormsItem = Component<Partial<UniFormsItemProps>>;
```

### UniGoodsNav (uni-goods-nav)

```typescript
/**
 * @desc 选项
 */
export interface UniGoodsNavOption {
  /**
   * @desc 文字
   */
  text: string;
  /**
   * @desc 图标
   */
  icon: UniIconsType;
  /**
   * @desc 右上角数字角标
   */
  info: number;
  /**
   * @desc 角标背景色
   */
  infoBackgroundColor: string;
  /**
   * @desc 角标前景色
   */
  infoColor: string;
}

/**
 * @desc 按钮
 */
export interface UniGoodsNavButton {
  /**
   * @desc 文字
   */
  text: string;
  /**
   * @desc 按钮背景色
   */
  backgroundColor: string;
  /**
   * @desc 字体颜色
   */
  color: string;
}

export interface UniGoodsNavProps {
  /**
   * @desc 选项
   */
  options: UniGoodsNavOption[];
  /**
   * @desc 组件按钮组
   */
  buttonGroup: UniGoodsNavButton[];
  /**
   * @desc 按钮是否平铺
   * @desc 默认为 false
   */
  fill: boolean;
  /**
   * @desc 左侧点击触发
   */
  onClick: (event: { index: number; content: UniGoodsNavOption }) => void;
  /**
   * @desc 右侧点击触发
   */
  onnButtonClick: (event: { index: number; content: UniGoodsNavButton }) => void;
}

/**
 * @desc 商品加入购物车，立即购买
 */
export type UniGoodsNav = Component<Partial<UniGoodsNavProps>>;
```

### UniGrid (uni-grid)

```typescript
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
```

### UniGridItem (uni-grid-item)

```typescript
export interface UniGridItemProps {
  /**
   * @desc 子组件唯一标识
   */
  index: number;
}

/**
 * @desc 宫格项
 */
export type UniGridItem = Component<Partial<UniGridItemProps>>;
```

### UniGroup (uni-group)

```typescript
/**
 * @desc 模式
 * @desc default 默认
 * @desc card 卡片
 */
export type UniGroupMode = 'default' | 'card';

export interface UniGroupProps {
  /**
   * @desc 主标题
   */
  title: string;
  /**
   * @desc 分组间隔
   */
  top: number;
  /**
   * @desc 模式
   * @desc default 默认
   * @desc card 卡片
   * @desc 默认为 default
   */
  mode: UniGroupMode;
}

/**
 * @desc 分组组件可用于将组件分组，添加间隔，以产生明显的区块
 */
export type UniGroup = Component<Partial<UniGroupProps>>;
```

### UniIcons (uni-icons)

```typescript
export type UniIconsType =
  | 'color'
  | 'wallet'
  | 'settings-filled'
  | 'auth-filled'
  | 'shop-filled'
  | 'staff-filled'
  | 'vip-filled'
  | 'plus-filled'
  | 'folder-add-filled'
  | 'color-filled'
  | 'tune-filled'
  | 'calendar-filled'
  | 'notification-filled'
  | 'wallet-filled'
  | 'medal-filled'
  | 'gift-filled'
  | 'fire-filled'
  | 'refreshempty'
  | 'location-filled'
  | 'person-filled'
  | 'personadd-filled'
  | 'back'
  | 'forward'
  | 'arrow-right'
  | 'arrow-left'
  | 'arrow-up'
  | 'arrow-down'
  | 'bottom'
  | 'right'
  | 'top'
  | 'left'
  | 'eye'
  | 'eye-filled'
  | 'eye-slash'
  | 'eye-slash-filled'
  | 'info-filled'
  | 'reload'
  | 'micoff-filled'
  | 'map-pin-ellipse'
  | 'map-pin'
  | 'location'
  | 'starhalf'
  | 'star'
  | 'star-filled'
  | 'calendar'
  | 'fire'
  | 'medal'
  | 'font'
  | 'gift'
  | 'link'
  | 'notification'
  | 'staff'
  | 'vip'
  | 'folder-add'
  | 'tune'
  | 'auth'
  | 'person'
  | 'email-filled'
  | 'phone-filled'
  | 'phone'
  | 'email'
  | 'personadd'
  | 'chatboxes-filled'
  | 'contact'
  | 'chatbubble-filled'
  | 'contact-filled'
  | 'chatboxes'
  | 'chatbubble'
  | 'upload-filled'
  | 'upload'
  | 'weixin'
  | 'compose'
  | 'qq'
  | 'download-filled'
  | 'pyq'
  | 'sound'
  | 'trash-filled'
  | 'sound-filled'
  | 'trash'
  | 'videocam-filled'
  | 'spinner-cycle'
  | 'weibo'
  | 'videocam'
  | 'download'
  | 'help'
  | 'navigate-filled'
  | 'plusempty'
  | 'smallcircle'
  | 'minus-filled'
  | 'micoff'
  | 'closeempty'
  | 'clear'
  | 'navigate'
  | 'minus'
  | 'image'
  | 'mic'
  | 'paperplane'
  | 'close'
  | 'help-filled'
  | 'paperplane-filled'
  | 'plus'
  | 'mic-filled'
  | 'image-filled'
  | 'locked-filled'
  | 'info'
  | 'locked'
  | 'camera-filled'
  | 'chat-filled'
  | 'camera'
  | 'circle'
  | 'checkmarkempty'
  | 'chat'
  | 'circle-filled'
  | 'flag'
  | 'flag-filled'
  | 'gear-filled'
  | 'home'
  | 'home-filled'
  | 'gear'
  | 'smallcircle-filled'
  | 'map-filled'
  | 'map'
  | 'refresh-filled'
  | 'refresh'
  | 'cloud-upload'
  | 'cloud-download-filled'
  | 'cloud-download'
  | 'cloud-upload-filled'
  | 'redo'
  | 'images-filled'
  | 'undo-filled'
  | 'more'
  | 'more-filled'
  | 'undo'
  | 'images'
  | 'paperclip'
  | 'settings'
  | 'search'
  | 'redo-filled'
  | 'list'
  | 'mail-open-filled'
  | 'hand-down-filled'
  | 'hand-down'
  | 'hand-up-filled'
  | 'hand-up'
  | 'heart-filled'
  | 'mail-open'
  | 'heart'
  | 'loop'
  | 'pulldown'
  | 'scan'
  | 'bars'
  | 'cart-filled'
  | 'checkbox'
  | 'checkbox-filled'
  | 'shop'
  | 'headphones'
  | 'cart';

export interface UniIconsProps {
  /**
   * @desc 图标大小
   * @desc 默认为 16
   */
  size: number | string;
  /**
   * @desc 图标图案
   * @desc 默认为 空字符串
   */
  type: UniIconsType;
  /**
   * @desc 图标颜色
   * @desc 默认为 #333333
   */
  color: string;
  /**
   * @desc 自定义图标
   * @desc 默认为 空字符串
   */
  customPrefix: string;
}

/**
 * @desc 图标
 */
export type UniIcons = Component<Partial<UniIconsProps>>;
```

### UniIndexedList (uni-indexed-list)

```typescript
/**
 * @desc 数据对象
 */
export interface UniIndexedListOption {
  /**
   * @desc 索引标题
   */
  letter: string;
  /**
   * @desc 索引
   */
  data: string[];
}

export interface UniIndexedListProps {
  /**
   * @desc 索引列表需要的数据对象
   */
  options: UniIndexedListOption[];
  /**
   * @desc 展示模式
   * @desc true 展示默认
   * @desc false 展示选择
   * @desc 默认为 false
   */
  showSelect: boolean;
  /**
   * @desc 点击触发
   */
  onClick: (event: { item: UniIndexedListOption; select: UniIndexedListOption[] }) => void;
}

/**
 * @desc 展示索引列表
 */
export type UniIndexedList = Component<Partial<UniIndexedListProps>>;
```

### UniLink (uni-link)

```typescript
export interface UniLinkProps {
  /**
   * @desc 链接地址
   */
  href: string;
  /**
   * @desc 显示文字
   */
  text: string;
  /**
   * @desc H5 下载文件名
   */
  download: string;
  /**
   * @desc 是否显示下划线
   * @desc 默认为 true
   */
  showUnderLine: boolean;
  /**
   * @desc 小程序端复制链接时的提示语
   * @desc 已自动复制网址，请在手机浏览器里粘贴该网址
   */
  copyTips: string;
  /**
   * @desc 链接文字颜色
   * @desc 默认为 #999999
   */
  color: string;
  /**
   * @desc 链接文字大小
   * @desc 单位为 px
   * @desc 默认为 14
   */
  fontSize: number | string;
}

/**
 * @desc 外部网页超链接组件
 * @desc 在小程序内复制 URL
 * @desc 在 APP 内打开外部浏览器
 * @desc 在 H5 端打开新网页
 */
export type UniLink = Component<Partial<UniLinkProps>>;
```

### UniList (uni-list)

```typescript
export interface UniListProps {
  /**
   * @desc 是否显示边框
   * @desc 默认为 true
   */
  border: boolean;
}

/**
 * @desc 列表
 * @desc 包含基本列表样式、可扩展插槽机制、长列表性能优化、多端兼容
 * @desc 在 vue 页面默认使用页面级滚动，在 app-nvue 页面默认使用原生 list 组件滚动
 * @desc uni-list 是父容器，核心是 uni-list-item 子组件，它代表列表中的一个可重复行，子组件可以无限循环
 * @desc uni-list-item 有很多风格，uni-list-item 组件通过内置的属性，满足一些常用的场景，也可以通过扩展插槽来自定义列表内容
 * @desc 内置属性可以覆盖的场景包括：导航列表、设置列表、小图标列表、通信录列表、聊天记录列表
 * @desc 涉及很多大图或丰富内容的列表，比如类今日头条的新闻列表、类淘宝的电商列表，需要通过扩展插槽实现
 */
export type UniList = Component<Partial<UniListProps>>;
```

### UniListItem (uni-list-item)

```typescript
/**
 * @desc title 是否溢出隐藏
 * @desc 0 默认
 * @desc 1 显示一行
 * @desc 2 显示两行
 */
export type UniListItemEllipsis = 0 | 1 | 2;

/**
 * @desc 缩略图尺寸
 * @desc lg 大图
 * @desc base 一般
 * @desc sm 小图
 */
export type UniListItemThumbSize = 'lg' | 'base' | 'sm';

/**
 * @desc 新页面的跳转方式
 */
export type UniListItemLink = 'navigateTo' | 'redirectTo' | 'reLaunch' | 'switchTab';

/**
 * @desc 排版方向
 * @desc row 横向
 * @desc column 纵向
 */
export type UniListItemDirection = 'row' | 'column';

export interface UniListItemProps {
  /**
   * @desc 标题
   */
  title: string;
  /**
   * @desc 描述
   */
  note: string;
  /**
   * @desc title 是否溢出隐藏
   * @desc 0 默认
   * @desc 1 显示一行
   * @desc 2 显示两行
   * @desc 默认为 0
   */
  ellipsis: UniListItemEllipsis;
  /**
   * @desc 左侧缩略图
   * @desc 如果设置了，扩展图标就不会显示
   */
  thumb: string;
  /**
   * @desc 缩略图尺寸
   * @desc lg 大图
   * @desc base 一般
   * @desc sm 小图
   * @desc 默认为 base
   */
  thumbSize: UniListItemThumbSize;
  /**
   * @desc 是否显示数字角标
   * @desc 默认为 false
   */
  showBadge: boolean;
  /**
   * @desc 数字角标内容
   */
  badgeText: string;
  /**
   * @desc 数字角标类型
   */
  badgeType: UniIconsType;
  /**
   * @desc 数字角标样式
   */
  badgeStyle: UniBadgeProps['customStyle'];
  /**
   * @desc 右侧文字内容
   */
  rightText: string;
  /**
   * @desc 是否禁用
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 是否显示箭头图标
   * @desc 默认为 true
   */
  showArrow: boolean;
  /**
   * @desc 新页面的跳转方式
   * @desc 默认为 navigateTo
   */
  link: UniListItemLink;
  /**
   * @desc 新页面跳转地址
   * @desc 如填写此属性，click 会返回页面是否跳转成功
   */
  to: string;
  /**
   * @desc 是否开启点击反馈
   * @desc 默认为 false
   */
  clickable: boolean;
  /**
   * @desc 是否显示 switch
   * @desc 默认为 false
   */
  showSwitch: boolean;
  /**
   * @desc switch 是否被选中
   * @desc 默认为 false
   */
  switchChecked: boolean;
  /**
   * @desc 左侧是否显示扩展图标
   * @desc 默认为 false
   */
  showExtraIcon: boolean;
  /**
   * @desc 扩展图标参数
   */
  extraIcon: Omit<UniIconsProps, 'customPrefix'>;
  /**
   * @desc 排版方向
   * @desc row 横向
   * @desc column 纵向
   * @desc 默认为 row
   */
  direction: UniListItemDirection;
  /**
   * @desc 点击 uni-list-item 触发，需开启点击反馈
   */
  onClick: (event?: Record<string, any>) => void;
  /**
   * @desc 点击切换 switch 时触发，需显示 switch
   */
  switchChange: (event: { value: UniListItemProps['switchChecked'] }) => void;
}

export type UniListItem = Component<Partial<UniListItemProps>>;
```

### UniListItemChat (uni-list-item-chat)

```typescript
/**
 * @desc 新页面的跳转方式
 */
export type UniListItemChatLink = 'navigateTo' | 'redirectTo' | 'reLaunch' | 'switchTab';

export interface UniListItemChatProps {
  /**
   * @desc 标题
   */
  title: string;
  /**
   * @desc 描述
   */
  note: string;
  /**
   * @desc 是否开启点击反馈
   * @desc 默认为 false
   */
  clickable: boolean;
  /**
   * @desc 数字角标内容
   * @desc 设置为 dot 将显示圆点
   */
  badgeText: string;
  /**
   * @desc 角标位置
   * @desc 默认为 right
   */
  badgePosition: string;
  /**
   * @desc 新页面的跳转方式
   * @desc 默认为 navigateTo
   */
  link: UniListItemChatLink;
  /**
   * @desc 新页面跳转地址
   * @desc 如填写此属性，click 会返回页面是否跳转成功
   */
  to: string;
  /**
   * @desc 右侧时间显示
   */
  time: string;
  /**
   * @desc 是否显示圆形头像
   * @desc 默认为 false
   */
  avatarCircle: boolean;
  /**
   * @desc 头像地址
   * @desc avatarCircle 不填时有效
   */
  avatar: string;
  /**
   * @desc 头像组
   */
  avatarList: { url: string }[];
  /**
   * @desc 点击 uni-list-item-chat 触发，需开启点击反馈
   */
  onClick: (event?: Record<string, any>) => void;
}

export type UniListItemChat = Component<Partial<UniListItemChatProps>>;
```

### UniLoadMore (uni-load-more)

```typescript
/**
 * @desc loading 的状态
 * @desc more 加载前
 * @desc loading 加载中
 * @desc noMore 没有更多数据
 */
export type UniLoadMoreStatus = 'more' | 'loading' | 'noMore';

/**
 * @desc 图标样式
 * @desc snow iOS 雪花加载样式
 * @desc circle Android 环形加载样式
 * @desc auto 根据平台自动选择加载样式
 */
export type UniLoadMoreIconType = 'auto' | 'snow' | 'circle';

/**
 * @desc 各状态文字说明
 */
export interface UniLoadMoreContentText {
  /**
   * @desc 默认为 上拉显示更多
   */
  contentdown: string;
  /**
   * @desc 默认为 正在加载
   */
  contentrefresh: string;
  /**
   * @desc 默认为 没有更多数据了
   */
  contentnomore: string;
}

export interface UniLoadMoreProps {
  /**
   * @desc 图标大小
   * @desc 默认为 24
   */
  iconSize: number;
  /**
   * @desc loading 的状态
   * @desc 默认为 more
   */
  status: UniLoadMoreStatus;
  /**
   * @desc 是否显示 loading 图标
   * @desc 默认为 true
   */
  showIcon: boolean;
  /**
   * @desc 是否显示文本
   * @desc 默认为 true
   */
  showText: boolean;
  /**
   * @desc 图标样式
   * @desc 默认为 auto
   */
  iconType: UniLoadMoreIconType;
  /**
   * @desc 图标和文字颜色
   * @desc 默认为 #777777
   */
  color: string;
  /**
   * @desc 各状态文字说明
   */
  contentText: UniLoadMoreContentText;
  /**
   * @desc 点击加载更多时触发
   */
  onClickLoadMore: (
    event: CustomEvent<{
      status: UniLoadMoreStatus;
    }>,
  ) => void;
}

/**
 * @desc 用于列表中，做滚动加载使用，展示 loading 的各种状态
 */
export type UniLoadMore = Component<Partial<UniLoadMoreProps>>;
```

### UniNavBar (uni-nav-bar)

```typescript
export interface UniNavBarProps {
  /**
   * @desc 标题文字
   */
  title: string;
  /**
   * @desc 左侧按钮文本
   */
  leftText: string;
  /**
   * @desc 右侧按钮文本
   */
  rightText: string;
  /**
   * @desc 左侧按钮图标
   */
  leftIcon: UniIconsType;
  /**
   * @desc 右侧按钮图标
   */
  rightIcon: UniIconsType;
  /**
   * @desc 图标和文字颜色
   * @desc 默认为 #000000
   */
  color: string;
  /**
   * @desc 导航栏背景颜色
   * @desc 默认为 #ffffff
   */
  backgroundColor: string;
  /**
   * @desc 是否固定顶部
   * @desc 默认为 false
   */
  fixed: boolean;
  /**
   * @desc 是否包含状态栏
   * @desc 默认为 false
   */
  statusBar: boolean;
  /**
   * @desc 导航栏下是否有阴影
   * @desc 默认为 false
   */
  shadow: boolean;
  /**
   * @desc 导航栏下是否有边框
   * @desc 默认为 true
   */
  border: boolean;
  /**
   * @desc 导航栏高度
   * @desc 默认为 44
   */
  height: number | string;
  /**
   * @desc 导航栏是否开启暗黑模式
   */
  dark: boolean;
  /**
   * @desc 导航栏左侧插槽宽度
   * @desc 默认为 120rpx
   */
  leftWidth: number | string;
  /**
   * @desc 导航栏右侧插槽宽度
   * @desc 默认为 120rpx
   */
  rightWidth: number | string;
  /**
   * @desc 是否开启统计标题功能
   */
  stat: boolean | string;
}

/**
 * @desc 导航栏组件，主要用于头部导航
 */
export type UniNavBar = Component<Partial<UniNavBarProps>>;
```

### UniNoticeBar (uni-notice-bar)

```typescript
export interface UniNoticeBarProps {
  /**
   * @desc 文字滚动的速度
   * @desc 单位为 px
   * @desc 默认为 100
   */
  speed: number;
  /**
   * @desc 显示文字
   */
  text: string;
  /**
   * @desc 背景颜色
   * @desc 默认为 #fffbe8
   */
  backgroundColor: string;
  /**
   * @desc 文字颜色
   * @desc 默认为 #de8c17
   */
  color: string;
  /**
   * @desc 查看更多的文字颜色
   * @desc 默认为 #999999
   */
  moreColor: string;
  /**
   * @desc 查看更多的文本
   */
  moreText: string;
  /**
   * @desc 是否单行
   * @desc 默认为 false
   */
  single: boolean;
  /**
   * @desc 是否滚动
   * @desc true 滚动，单行
   * @desc false 不滚动
   * @desc 默认为 false
   */
  scrollable: boolean;
  /**
   * @desc 是否显示左侧喇叭图标
   * @desc 默认为 false
   */
  showIcon: boolean;
  /**
   * @desc 是否显示左侧关闭按钮
   * @desc 默认为 false
   */
  showClose: boolean;
  /**
   * @desc 是否显示右侧查看更多图标
   * @desc true 单行
   * @desc 默认为 false
   */
  showGetMore: boolean;
  /**
   * @desc 点击触发
   */
  onClick: (event: BaseEvent) => void;
  /**
   * @desc 关闭触发
   */
  onClose: (event: BaseEvent) => void;
  /**
   * @desc 查看更多触发
   */
  onGetmore: (event: BaseEvent) => void;
}

/**
 * @desc 通告栏
 */
export type UniNoticeBar = Component<Partial<UniNoticeBarProps>>;
```

### UniNumberBox (uni-number-box)

```typescript
export interface UniNumberBoxProps {
  /**
   * @desc 输入框当前值
   * @desc 默认为 0
   */
  value: number;
  /**
   * @desc 最小值
   * @desc 默认为 0
   */
  min: number;
  /**
   * @desc 最大值
   * @desc 默认为 100
   */
  max: number;
  /**
   * @desc 每次点击改变的间隔大小
   * @desc 默认为 1
   */
  step: number;
  /**
   * @desc 是否为禁用状态
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 值改变时触发
   */
  onChange: (value: UniNumberBoxProps['value']) => void;
  /**
   * @desc 聚焦时触发
   */
  onFocus: (event: BaseEvent) => void;
  /**
   * @desc 失焦时触发
   */
  onBlur: (event: BaseEvent) => void;
}

/**
 * @desc 带加减按钮的数字输入框
 */
export type UniNumberBox = Component<Partial<UniNumberBoxProps>>;
```

### UniPagination (uni-pagination)

```typescript
export interface UniPaginationProps {
  /**
   * @desc 左侧按钮文字
   * @desc 默认为 上一页
   */
  prevText: string;
  /**
   * @desc 右侧按钮文字
   * @desc 默认为 下一页
   */
  nextText: string;
  /**
   * @desc 当前页，优先级比 current 低
   * @desc 默认为 1
   */
  value: number;
  /**
   * @desc 当前页，优先级比 value 高
   * @desc 默认为 1
   */
  current: number;
  /**
   * @desc 数据总量
   * @desc 默认为 0
   */
  total: number;
  /**
   * @desc 每页数据量
   * @desc 默认为 10
   */
  pageSize: number;
  /**
   * @desc 是否以 icon 展示按钮
   * @desc 默认为 boolean
   */
  showIcon: boolean;
  /**
   * @desc 点击页码按钮时触发
   */
  onChange: (event: { type: 'prev' | 'next'; current: number }) => void;
}

/**
 * @desc 分页器组件，用于展示页码、请求数据等
 */
export type UniPagination = Component<Partial<UniPaginationProps>>;
```

### UniPopup (uni-popup)

```typescript
/**
 * @desc 弹出方式
 * @desc top 顶部弹出
 * @desc center 居中弹出
 * @desc bottom 底部弹出
 * @desc left 左侧弹出
 * @desc right 右侧弹出
 * @desc message 预置样式，消息提示
 * @desc dialog 预置样式，对话框
 * @desc share 预置样式，底部弹出分享
 */
export type UniPopupType =
  | 'top'
  | 'center'
  | 'bottom'
  | 'left'
  | 'right'
  | 'message'
  | 'dialog'
  | 'share';

export interface UniPopupProps {
  /**
   * @desc 是否开启动画
   * @desc 默认为 true
   */
  animation: boolean;
  /**
   * @desc 弹出方式
   * @desc top 顶部弹出
   * @desc center 居中弹出
   * @desc bottom 底部弹出
   * @desc left 左侧弹出
   * @desc right 右侧弹出
   * @desc message 预置样式，消息提示
   * @desc dialog 预置样式，对话框
   * @desc share 预置样式，底部弹出分享
   * @desc 默认为 center
   */
  type: UniPopupType;
  /**
   * @desc 蒙版点击是否关闭弹窗
   * @desc 默认为 true
   */
  isMaskClick: boolean;
  /**
   * @desc 蒙版颜色
   * @desc 默认为 rgba(0, 0, 0, 0.4)
   */
  maskBackgroundColor: string;
  /**
   * @desc 主窗口背景色
   * @desc 默认为 none
   */
  backgroundColor: string;
  /**
   * @desc 是否适配底部安全区
   * @desc 默认为 true
   */
  safeArea: boolean;
  /**
   * @desc 打开弹出层
   */
  open: (type?: UniPopupType) => void;
  /**
   * @desc 关闭弹出层
   */
  close: () => void;
  /**
   * @desc 状态变化时触发
   */
  onChange: (event: { show: boolean; type: UniPopupType }) => void;
  /**
   * @desc 点击遮罩层触发
   */
  onMaskClick: () => void;
}

/**
 * @desc 弹出层，在应用中弹出一个消息提示窗口、提示框等
 */
export type UniPopup = Component<Partial<UniPopupProps>>;
```

### UniPopupMessage (uni-popup-message)

```typescript
/**
 * @desc 消息提示主题
 * @desc success 成功
 * @desc warn 警告
 * @desc error 失败
 * @desc info 消息
 */
export type UniPopupMessageType = 'success' | 'warn' | 'error' | 'info';

export interface UniPopupMessageProps {
  /**
   * @desc 消息提示主题
   * @desc success 成功
   * @desc warn 警告
   * @desc error 失败
   * @desc info 消息
   * @desc 默认为 success
   */
  type: UniPopupMessageType;
  /**
   * @desc 消息提示文字
   */
  message: string;
  /**
   * @desc 消息显示时间，超过后自动关闭
   * @desc 设置为 0 不会自动关闭，需手动调用 close 关闭
   * @desc 默认为 3000
   */
  duration: number;
}

export type UniPopupMessage = Component<Partial<UniPopupMessageProps>>;
```

### UniPopupDialog (uni-popup-dialog)

```typescript
/**
 * @desc 消息提示主题
 * @desc success 成功
 * @desc warn 警告
 * @desc error 失败
 * @desc info 消息
 */
export type UniPopupDialogType = 'success' | 'warn' | 'error' | 'info';

/**
 * @desc 对话框模式
 * @desc base 提示对话框
 * @desc input 可输入对话框
 */
export type UniPopupDialogMode = 'base' | 'input';

export interface UniPopupDialogProps {
  /**
   * @desc 对话框标题主题
   * @desc success 成功
   * @desc warn 警告
   * @desc error 失败
   * @desc info 消息
   * @desc 默认为 success
   */
  type: UniPopupDialogType;
  /**
   * @desc 对话框模式
   * @desc base 提示对话框
   * @desc input 可输入对话框
   * @desc 默认为 base
   */
  mode: UniPopupDialogMode;
  /**
   * @desc 对话框标题
   */
  title: string;
  /**
   * @desc 对话框内容
   * @desc mode="base" 时有效
   */
  content: string;
  /**
   * @desc 确定按钮文本
   */
  confirmText: string;
  /**
   * @desc 取消按钮文本
   */
  cancelText: string;
  /**
   * @desc 输入框默认值
   * @desc mode="input" 时有效
   */
  value: string | number;
  /**
   * @desc 输入框提示文字
   * @desc mode="input" 时有效
   */
  placeholder: string;
  /**
   * @desc 是否拦截按钮事件
   * @desc true 不会关闭对话框，手动调用 close 以关闭
   * @desc 默认为 false
   */
  beforeClose: boolean;
  /**
   * @desc 点击取消时触发
   */
  onClose: () => void;
  /**
   * @desc 点击确定时触发
   */
  onConfirm: (event: { value: UniPopupDialogProps['value'] }) => void;
}

export type UniPopupDialog = Component<Partial<UniPopupDialogProps>>;
```

### UniPopupShare (uni-popup-share)

```typescript
export interface UniPopupShareProps {
  /**
   * @desc 分享弹窗标题
   */
  title: string;
  /**
   * @desc 是否拦截按钮事件
   * @desc true 不会关闭对话框，手动调用 close 以关闭
   * @desc 默认为 false
   */
  beforeClose: boolean;
  onSelect: (event: {
    value: {
      text: string;
      icon: string;
      name: string;
    };
    index: number;
  }) => void;
}

export type UniPopupShare = Component<Partial<UniPopupShareProps>>;
```

### UniRate (uni-rate)

```typescript
export interface UniRateProps {
  /**
   * @desc 当前评分
   * @desc 默认为 0
   */
  value: number;
  /**
   * @desc 未选中状态的星星颜色
   * @desc 默认为 #ececec
   */
  color: string;
  /**
   * @desc 选中状态的星星颜色
   * @desc 默认为 #ffca3e
   */
  activeColor: string;
  /**
   * @desc 禁用状态的星星颜色
   * @desc 默认为 #c0c0c0
   */
  disabledColor: string;
  /**
   * @desc 星星的大小
   * @desc 默认为 24
   */
  size: number;
  /**
   * @desc 最大评分评分数量
   * @desc 默认为 5
   */
  max: number;
  /**
   * @desc margin 星星的间距
   * @desc 单位为 px
   * @desc 默认为 0
   */
  margin: number;
  /**
   * @desc 是否显示实心星星
   * @desc 默认为 true
   */
  isFill: boolean;
  /**
   * @desc 是否为禁用状态
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 是否为只读状态
   * @desc 默认为 false
   */
  readonly: boolean;
  /**
   * @desc 是否展示半星
   * @desc 默认为 false
   */
  allowHalf: boolean;
  /**
   * @desc 是否支持滑动手势
   * @desc 默认为 true
   */
  touchable: boolean;
  /**
   * @desc 值改变时触发
   */
  onChange: (event: { value: UniRateProps['value'] }) => void;
}

/**
 * @desc 评分组件，多用于购买商品后，对商品进行评价等场景
 */
export type UniRate = Component<Partial<UniRateProps>>;
```

### UniRow (uni-row)

```typescript
export interface UniRowProps {
  /**
   * @desc 栅格间隔
   * @desc 默认为 0
   */
  gutter: number;
  /**
   * @desc nvue 中无百分比 width，使用 span 等属性时，需配置此项 rpx 值
   * @desc 此项不会影响其他平台展示效果
   * @desc 默认为 750rpx
   */
  width: number | string;
}

/**
 * @desc 流式栅格系统中的行
 */
export type UniRow = Component<Partial<UniRowProps>>;
```

### UniCol (uni-col)

```typescript
export interface UniColRules {
  /**
   * @desc 栅格占据的列数
   * @desc 默认为 24
   */
  span: number;
  /**
   * @desc 栅格左侧间隔格数
   */
  offset: number;
  /**
   * @desc 栅格向右偏移格数
   */
  push: number;
  /**
   * @desc 栅格向左偏移格数
   */
  pull: number;
}

export interface UniColProps extends UniColRules {
  /**
   * @desc 屏幕宽度 <768px 时，要显示的栅格规则
   */
  xs: number | UniColRules;
  /**
   * @desc 屏幕宽度 ≥768px 时，要显示的栅格规则
   */
  sm: number | UniColRules;
  /**
   * @desc 屏幕宽度 ≥992px 时，要显示的栅格规则
   */
  md: number | UniColRules;
  /**
   * @desc 屏幕宽度 ≥1200px 时，要显示的栅格规则
   */
  lg: number | UniColRules;
  /**
   * @desc 屏幕宽度 ≥1920px 时，要显示的栅格规则
   */
  xl: number | UniColRules;
}

/**
 * @desc 流式栅格系统中的列
 */
export type UniCol = Component<Partial<UniColProps>>;
```

### UniSearchBar (uni-search-bar)

```typescript
/**
 * @desc 清除按钮的显示方式
 * @desc always 一直显示
 * @desc auto 输入框不为空时显示
 * @desc none 一直不显示
 */
export type UniSearchBarClearButton = 'always' | 'auto' | 'none';

/**
 * @desc 取消按钮的显示方式
 * @desc always 一直显示
 * @desc auto 输入框不为空时显示
 * @desc none 一直不显示
 */
export type UniSearchBarCancelButton = 'always' | 'auto' | 'none';

export interface UniSearchBarProps {
  /**
   * @desc 绑定值
   */
  value: string | number;
  /**
   * @desc 占位文字
   * @desc 默认为 搜索
   */
  placeholder: string;
  /**
   * @desc 搜索栏圆角
   * @desc 单位为 px
   * @desc 默认为 10
   */
  radius: number;
  /**
   * @desc 清除按钮的显示方式
   * @desc always 一直显示
   * @desc auto 输入框不为空时显示
   * @desc none 一直不显示
   * @desc 默认为 auto
   */
  clearButton: UniSearchBarClearButton;
  /**
   * @desc 取消按钮的显示方式
   * @desc always 一直显示
   * @desc auto 输入框不为空时显示
   * @desc none 一直不显示
   * @desc 默认为 auto
   */
  cancelButton: UniSearchBarCancelButton;
  /**
   * @desc 取消按钮的文字
   * @desc 默认为 取消
   */
  cancelText: string;
  /**
   * @desc 输入框背景颜色
   * @desc 默认为 #f8f8f8
   */
  bgColor: string;
  /**
   * @desc 最大长度
   * @desc 默认为 100
   */
  maxlength: number;
  /**
   * @desc 是否自动聚焦
   * @desc 默认为 false
   */
  focus: boolean;
  /**
   * @desc 确认时触发
   */
  onConfirm: (event: { value: UniSearchBarProps['value'] }) => void;
  /**
   * @desc value 改变时触发
   */
  onInput: (value: UniSearchBarProps['value']) => void;
  /**
   * @desc 取消时触发
   */
  onCancel: (event: { value: UniSearchBarProps['value'] }) => void;
  /**
   * @desc 清除时触发
   */
  onClear: (event: { value: UniSearchBarProps['value'] }) => void;
  /**
   * @desc 聚焦时触发
   */
  onFocus: (event: { value: UniSearchBarProps['value'] }) => void;
  /**
   * @desc 失焦时触发
   */
  onBlur: (event: { value: UniSearchBarProps['value'] }) => void;
}

/**
 * @desc 搜索栏
 */
export type UniSearchBar = Component<Partial<UniSearchBarProps>>;
```

### UniSegmentedControl (uni-segmented-control)

```typescript
/**
 * @desc 分段器样式类型
 * @desc button 按钮
 * @desc text 文字
 */
export type UniSegmentedControlStyleType = 'button' | 'text';

export interface UniSegmentedControlProps {
  /**
   * @desc 当前选中的索引
   * @desc 默认为 0
   */
  current: number;
  /**
   * @desc 分段器样式类型
   * @desc button 按钮
   * @desc text 文字
   * @desc 默认为 button
   */
  styleType: UniSegmentedControlStyleType;
  /**
   * @desc 选中的标签背景色与边框颜色
   * @desc 默认为 #007aff
   */
  activeColor: string;
  /**
   * @desc 选项
   */
  values: string[];
  /**
   * @desc 点击时触发
   */
  onClickItem: (event: { currentIndex: UniSegmentedControlProps['current'] }) => void;
}

/**
 * @desc 分段器，用作不同视图的显示
 */
export type UniSegmentedControl = Component<Partial<UniSegmentedControlProps>>;
```

### UniSteps (uni-steps)

```typescript
/**
 * @desc 排列方向
 * @desc row 横向
 * @desc column 纵向
 */
export type UniStepsDirection = 'row' | 'column';

/**
 * @desc 数据源
 */
export interface UniStepsOption {
  /**
   * @desc 标题
   */
  title: string;
  /**
   * @desc 描述
   */
  desc: string;
}

export interface UniStepsProps {
  /**
   * @desc 当前步骤
   * @desc 默认为 0
   */
  active: number;
  /**
   * @desc 排列方向
   * @desc row 横向
   * @desc column 纵向
   * @desc 默认为 row
   */
  direction: UniStepsDirection;
  /**
   * @desc 选中状态的颜色
   * @desc 默认为 #1aad19
   */
  activeColor: string;
  /**
   * @desc 数据源
   */
  options: UniStepsOption[];
}

/**
 * @desc 步骤条，常用于显示进度
 */
export type UniSteps = Component<Partial<UniStepsProps>>;
```

### UniSwipeAction (uni-swipe-action)

```typescript
export interface UniSwipeActionProps {
  /**
   * @desc 动态添加数据后，如不能正常滑动，需要主动调用此方法
   */
  resize: () => void;
  /**
   * @desc 关闭所有已经打开的组件
   */
  closeAll: () => void;
}

/**
 * @desc 滑动操作
 * @desc 通过滑动触发选项的容器
 */
export type UniSwipeAction = Component<Partial<UniSwipeActionProps>>;
```

### UniSwipeActionItem (uni-swipe-action-item)

```typescript
/**
 * @desc 关闭组件
 * @desc autoClose 为 false 时有效
 */
export type UniSwipeActionItemShow = 'left' | 'right' | 'none';

/**
 * @desc 选项内容及样式
 */
export interface UniSwipeActionItemOption {
  /**
   * @desc 按钮文字
   */
  text: string;
  /**
   * @desc 按钮样式
   */
  style: {
    /**
     * @desc 背景音乐
     * @desc 默认为 #c7c6cd
     */
    backgroundColor: string;
    /**
     * @desc 文字颜色
     * @desc 默认为 #ffffff
     */
    color: string;
    /**
     * @desc 字体尺寸
     * @desc 默认为 14px
     */
    fontSize: string;
  };
}

export interface UniSwipeActionItemProps {
  /**
   * @desc 其他组件开启的时候，当前组件是否自动关闭
   * @desc 默认为 true
   */
  autoClose: boolean;
  /**
   * @desc 关闭组件
   * @desc autoClose 为 false 时有效
   */
  show: UniSwipeActionItemShow;
  /**
   * @desc 滑动阈值
   * @desc 默认为 20
   */
  threshold: number;
  /**
   * @desc 是否禁止滑动
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 左侧选项内容及样式
   */
  leftOptions: UniSwipeActionItemOption | UniSwipeActionItemOption[];
  /**
   * @desc 右侧选项内容及样式
   */
  rightOptions: UniSwipeActionItemOption | UniSwipeActionItemOption[];
  /**
   * @desc 点击时触发
   */
  onClick: (event: { content: UniSwipeActionItemOption; index: number }) => void;
  /**
   * @desc 打开或关闭时触发
   */
  onChange: (show: UniSwipeActionItemShow) => void;
}

export type UniSwipeActionItem = Component<Partial<UniSwipeActionItemProps>>;
```

### UniSwiperDot (uni-swiper-dot)

```typescript
/**
 * @desc 指示点的类型
 */
export type UniSwiperDotMode = 'default' | 'round' | 'nav' | 'indexes';

/**
 * @desc 指示点样式
 */
export interface UniSwiperDotDotsStyles {
  /**
   * @desc 指示点宽度
   * @desc mode="nav"、mode="indexes" 时无效
   * @desc 默认为 8
   */
  width: number;
  /**
   * @desc 指示点距 swiper 底部的高度
   * @desc 默认为 10
   */
  bottom: number;
  /**
   * @desc 指示点前景色
   * @desc mode="nav"、mode="indexes" 时有效
   * @desc 默认为 #ffffff
   */
  color: string;
  /**
   * @desc 未选择指示点背景色
   * @desc 默认为 rgba(0, 0, 0, 0.3)
   */
  backgroundColor: string;
  /**
   * @desc 未选择指示点边框样式
   * @desc 默认为 1px rgba(0, 0, 0, 0.3) solid
   */
  border: string;
  /**
   * @desc 已选择指示点背景色
   * @desc mode="nav" 时无效
   * @desc 默认为 #333333
   */
  selectedBackgroundColor: string;
  /**
   * @desc 已选择指示点边框样式
   * @desc mode="nav" 时无效
   * @desc 默认为 1px rgba(0, 0, 0, 0.9) solid
   */
  selectedBorder: string;
}

export interface UniSwiperDotProps {
  /**
   * @desc 当前指示点索引
   * @desc 必须是通过 swiper 的 change 事件获取到的 e.detail.current
   */
  current: number;
  /**
   * @desc 指示点类型
   */
  mode: UniSwiperDotMode;
  /**
   * @desc 显示的内容字段
   * @desc mode="nav" 时有效
   */
  field: string;
  /**
   * @desc 轮播图数据
   */
  info: any[];
  /**
   * @desc 指示点样式
   */
  dotsStyles: UniSwiperDotDotsStyles;
}

/**
 * @desc 轮播图指示点
 */
export type UniSwiperDot = Component<Partial<UniSwiperDotProps>>;
```

### UniTable (uni-table)

```typescript
/**
 * @desc 空字符串 单选
 * @desc selection 多选
 */
export type UniTableType = '' | 'selection';

export interface UniTableProps {
  /**
   * @desc 是否带有纵向边框
   * @desc 默认为 false
   */
  border: boolean;
  /**
   * @desc 是否显示斑马线样式
   * @desc 默认为 true
   */
  stripe: boolean;
  /**
   * @desc 空字符串 单选
   * @desc selection 多选
   * @desc 默认为 空字符串
   */
  type?: UniTableType;
  /**
   * @desc 空数据时显示的文本内容
   * @desc 默认为 没有更多数据
   */
  emptyText: string;
  /**
   * @desc 是否显示加载中
   * @desc 默认为 false
   */
  loading: boolean;
  /**
   * @desc 选中全部行
   */
  selectionAll: () => void;
  /**
   * @desc 用于多选表格，切换某一行的选中状态
   * @desc 如果使用了第二个参数，则要设置这一行选中与否
   */
  toggleRowSelection: (indexes: number[], selected?: boolean) => void;
  /**
   * @desc 用于多选表格，清空用户的选择
   */
  clearSelection: () => void;
  /**
   * @desc 用于多选表格，切换所有行的选中状态
   */
  toggleAllSelection: () => void;
  /**
   * @desc 开启多选时，当选择项发生变化时会触发该事件
   */
  onSelectionChange: (
    event: CustomEvent<{
      value: any[];
      index: any[];
    }>,
  ) => void;
}

/**
 * @desc 表格
 */
export type UniTable = Component<Partial<UniTableProps>>;
```

### UniTr (uni-tr)

```typescript
export interface UniTrProps {}

export type UniTr = Component<Partial<UniTrProps>>;
```

### UniTh (uni-th)

```typescript
/**
 * @desc 对齐方式
 */
export type UniThAlign = 'left' | 'center' | 'right';

/**
 * @desc 筛选类型
 */
export type UniThFilterType = 'search' | 'select' | 'range' | 'date';

/**
 * @desc 筛选数据
 */
export interface UniThFilterData {
  /**
   * @desc 显示内容
   */
  text: string;
  /**
   * @desc 值
   */
  value: string;
}

export interface UniThProps {
  /**
   * @desc 单元格宽度
   */
  width: string;
  /**
   * @desc 对齐方式
   * @desc 默认为 left
   */
  align: UniThAlign;
  /**
   * @desc 筛选类型
   */
  filterType: UniThFilterType;
  /**
   * @desc 筛选数据
   */
  filterData: UniThFilterData[];
  /**
   * @desc 是否启用排序
   * @desc 默认为 false
   */
  sortable: boolean;
  /**
   * @desc 行合并
   * @desc 默认为 1
   */
  rowspan: number | string;
  /**
   * @desc 列合并
   * @desc 默认为 1
   */
  colspan: number | string;
  /**
   * @desc 点击排序时触发
   */
  onSortChange: (event: { order: 'ascending' | 'descending' | null }) => void;
  /**
   * @desc 筛选数据时触发
   */
  onFilterChange: (event: { filterType: UniThFilterType; filter: string | string[] }) => void;
}

export type UniTh = Component<Partial<UniThProps>>;
```

### UniTd (uni-td)

```typescript
/**
 * @desc 单元格对齐方式
 */
export type UniTdAlign = 'left' | 'center' | 'right';

export interface UniTdProps {
  /**
   * @desc 单元格宽度
   */
  width: string;
  /**
   * @desc 对齐方式
   * @desc 默认为 left
   */
  align: UniTdAlign;
  /**
   * @desc 行合并
   * @desc 默认为 1
   */
  rowspan: number | string;
  /**
   * @desc 列合并
   * @desc 默认为 1
   */
  colspan: number | string;
}

export type UniTd = Component<Partial<UniTdProps>>;
```

### UniTag (uni-tag)

```typescript
/**
 * @desc 大小尺寸
 * @desc normal 正常
 * @desc small 小
 */
export type UniTagSize = 'normal' | 'small';

/**
 * @desc 颜色类型
 * @desc default 灰色
 * @desc primary 蓝色
 * @desc success 绿色
 * @desc warning 黄色
 * @desc error 红色
 * @desc royal 紫色
 */
export type UniTagType = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'royal';

export interface UniTagProps {
  /**
   * @desc 标签内容
   */
  text: string;
  /**
   * @desc 大小尺寸
   * @desc normal 正常
   * @desc small 小
   * @desc 默认为 normal
   */
  size: UniTagSize;
  /**
   * @desc 颜色类型
   * @desc default 灰色
   * @desc primary 蓝色
   * @desc success 绿色
   * @desc warning 黄色
   * @desc error 红色
   * @desc royal 紫色
   * @desc 默认为 default
   */
  type: UniTagType;
  /**
   * @desc 是否为禁用状态
   * @desc 默认为 false
   */
  disabled: boolean;
  /**
   * @desc 是否无需背景颜色
   * @desc 默认为 false
   */
  inverted: boolean;
  /**
   * @desc 是否为圆角
   * @desc 默认为 false
   */
  circle: boolean;
  /**
   * @desc 点击触发
   */
  onClick: (event: BaseEvent) => void;
}

/**
 * @desc 用于展示一个或多个文字标签，可点击切换选中、不选中的状态
 */
export type UniTag = Component<Partial<UniTagProps>>;
```

### UniTitle (uni-title)

```typescript
/**
 * @desc 标题类型
 */
export type UniTitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

/**
 * @desc 对齐方式
 * @desc left 左对齐
 * @desc center 居中对齐
 * @desc right 右对齐
 */
export type UniTitleAlign = 'left' | 'center' | 'right';

export interface UniTitleProps {
  /**
   * @desc 标题类型
   */
  type: UniTitleType;
  /**
   * @desc 章节标题内容
   */
  title: string;
  /**
   * @desc 对齐方式
   * @desc left 左对齐
   * @desc center 居中对齐
   * @desc right 右对齐
   */
  align: UniTitleAlign;
  /**
   * @desc 字体颜色
   */
  color: string;
  /**
   * @desc 是否开启统计
   */
  stat: boolean;
}

/**
 * @desc 章节标题，通常用于记录页面标题
 * @desc 使用当前组件，uni-app 如果开启统计，将会自动统计页面标题
 */
export type UniTitle = Component<Partial<UniTitleProps>>;
```

### UniTooltip (uni-tooltip)

```typescript
export interface UniTooltipProps {
  /**
   * @desc 显示内容
   */
  content: string;
}

/**
 * @desc 提示文字
 */
export type UniTooltip = Component<Partial<UniTooltipProps>>;
```

### UniTransition (uni-transition)

```typescript
/**
 * @desc 内置过渡动画类型
 * @desc fade 渐隐渐出过渡
 * @desc slide-top 由上至下过渡
 * @desc slide-right 由右至左过渡
 * @desc slide-bottom 由下至上过渡
 * @desc slide-left 由左至右过渡
 * @desc zoom-in 由小到大过渡
 * @desc zoom-out 由大到小过渡
 */
export type UniTransitionModeClass =
  | 'fade'
  | 'slide-top'
  | 'slide-right'
  | 'slide-bottom'
  | 'slide-left'
  | 'zoom-in'
  | 'zoom-out';

/**
 * @desc 动画效果
 * @desc linear 动画从头到尾的速度是相同的
 * @desc ease 动画以低速开始，然后加快，在结束前变慢
 * @desc ease-in 动画以低速开始
 * @desc ease-in-out 动画以低速开始和结束
 * @desc ease-out 动画以低速结束
 * @desc step-start 动画第一帧就跳至结束状态直到结束
 * @desc step-end 动画一直保持开始状态，最后一帧跳到结束状态
 */
export type UniTransitionTimingFunction =
  | 'linear'
  | 'ease'
  | 'ease-in'
  | 'ease-in-out'
  | 'ease-out'
  | 'step-start'
  | 'step-end';

export interface UniTransitionConfig {
  /**
   * @desc 动画持续时间
   * @desc 单位为 ms
   * @desc 默认为 400
   */
  duration: number;
  /**
   * @desc 动画效果
   * @desc linear 动画从头到尾的速度是相同的
   * @desc ease 动画以低速开始，然后加快，在结束前变慢
   * @desc ease-in 动画以低速开始
   * @desc ease-in-out 动画以低速开始和结束
   * @desc ease-out 动画以低速结束
   * @desc step-start 动画第一帧就跳至结束状态直到结束
   * @desc step-end 动画一直保持开始状态，最后一帧跳到结束状态
   * @desc 默认为 linear
   */
  timingFunction: UniTransitionTimingFunction;
  /**
   * @desc 动画延迟时间
   * @desc 单位为 ms
   * @desc 默认为 0
   */
  delay: number;
  /**
   * @desc 动画执行是否影响布局
   * @desc 默认为 false
   */
  needLayout: boolean;
  /**
   * @desc 设置 transform-origin
   * @desc 默认为 center center
   */
  transformOrigin: string;
}

export interface UniTransitionType {
  /**
   * @desc 透明度
   * @desc 取值范围为 0 - 1
   */
  opacity: number;
  /**
   * @desc 背景颜色
   */
  backgroundColor: string;
  /**
   * @desc 宽度
   * @desc 如果传入 number 默认使用 px
   * @desc 可传入其他自定义单位的宽度值
   */
  width: number | string;
  /**
   * @desc 高度
   * @desc 如果传入 number 默认使用 px
   * @desc 可传入其他自定义单位的高度值
   */
  height: number | string;
  top: number | string;
  right: number | string;
  bottom: number | string;
  left: number | string;
  /**
   * @desc 从原点顺时针旋转一个角度
   * @desc 取值范围 -180 - 180
   */
  rotate: number;
  /**
   * @desc 在 X 轴旋转一个角度
   * @desc 取值范围 -180 - 180
   */
  rotateX: number;
  /**
   * @desc 在 Y 轴旋转一个角度
   * @desc 取值范围 -180 - 180
   */
  rotateY: number;
  /**
   * @desc 在 Z 轴旋转一个角度
   * @desc 取值范围 -180 - 180
   */
  rotateZ: number;
  /**
   * @desc 同 transform-function rotate3d
   */
  rotate3d: string;
  /**
   * @desc 一个参数时表示在 X 轴、Y 轴同时缩放 sx 倍数
   * @desc 两个参数时表示在 X 轴缩放 sx 倍数，在 Y 轴缩放 sy 倍数
   */
  scale: [number] | [number, number];
  /**
   * @desc 在 X 轴缩放的倍数
   */
  scaleX: number;
  /**
   * @desc 在 Y 轴缩放的倍数
   */
  scaleY: number;
  /**
   * @desc 在 Z 轴缩放的倍数
   */
  scaleZ: number;
  /**
   * @desc 在 X 轴、Y 轴和 Z 轴缩放的倍数
   */
  scale3d: string;
  /**
   * @desc 一个参数时表示在 X 轴、Y 轴同时偏移
   * @desc 两个参数时表示在 X 轴、Y 轴分别偏移
   * @desc 单位为 px
   */
  translate: [string] | [string, string];
  /**
   * @desc 在 X 轴的偏移
   * @desc 单位为 px
   */
  scaleX: string;
  /**
   * @desc 在 Y 轴的偏移
   * @desc 单位为 px
   */
  scaleY: string;
  /**
   * @desc 在 Z 轴的偏移
   * @desc 单位为 px
   */
  scaleZ: string;
  /**
   * @desc 在 X 轴、Y 轴和 Z 轴的偏移
   * @desc 单位为 px
   */
  scale3d: string;
}

export interface UniTransitionProps {
  /**
   * @desc 控制组件是否显示
   * @desc 默认为 false
   */
  show: boolean;
  /**
   * @desc 内置过渡动画类型
   * @desc fade 渐隐渐出过渡
   * @desc slide-top 由上至下过渡
   * @desc slide-right 由右至左过渡
   * @desc slide-bottom 由下至上过渡
   * @desc slide-left 由左至右过渡
   * @desc zoom-in 由小到大过渡
   * @desc zoom-out 由大到小过渡
   */
  modeClass: UniTransitionModeClass | UniTransitionModeClass[];
  /**
   * @desc 自定义类名
   */
  customClass: string;
  /**
   * @desc 过渡动画持续时间
   * @desc 默认为 300
   */
  duration: number;
  /**
   * @desc 手动设置动画配置
   */
  init: (config: UniTransitionConfig) => void;
  /**
   * @desc 调用表示一组动画完成
   */
  step: (type: UniTransitionType, config?: UniTransitionConfig) => void;
  /**
   * @desc 执行动画
   * @param 所有动画执行完毕后回调
   */
  run: (callback: () => void) => void;
  /**
   * @desc 点击触发
   */
  onClick: (event: BaseEvent) => void;
  /**
   * @desc 过渡动画结束时触发
   */
  onChange: (event: { detail: boolean }) => void;
}

/**
 * @desc 元素过渡动画
 */
export type UniTransition = Component<Partial<UniTransitionProps>>;
```

## 致谢

最初在 [uni-base-components-types](https://github.com/satrong/uni-base-components-types) 得到了灵感。

基于 [这个 PR](https://github.com/satrong/uni-base-components-types/pull/5) 完成。
