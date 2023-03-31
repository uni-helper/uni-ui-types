# 改动日志

## 0.5.4 (2023-03-31)

- fix: 修复 `UniFilePickerListStyles` 和 `UniFilePickerImageStyles` 类型
- fix: 修复 `UniFilePicker` `onSelect`、`onProgress`、`onSuccess`、`onFail`、`onDelete` 类型，⚠️ 可能造成 breaking changes，关闭 [#35](https://github.com/uni-helper/uni-ui-types/issues/35)
- fix: 修复 `UniFabPattern` 类型，补充 `UniFabPattern.icon`，关闭 [#36](https://github.com/uni-helper/uni-ui-types/issues/36)

## 0.5.3 (2023-03-30)

- fix: 修复 `UniFabVertical` 类型，关闭 [#34](https://github.com/uni-helper/uni-ui-types/issues/34)

## 0.5.2 (2023-03-28)

- fix: `UniSwiperDotDotsStyles` 属性可选

## 0.5.1 (2023-03-27)

- fix: 修复 `UniListChatProps` `clickable` 类型，关闭 [#32](https://github.com/uni-helper/uni-ui-types/issues/32)
- fix: 调整 `UniIconsProps` `type` 类型，现在支持自定义图标，但只能使用 `icon-` 前缀，关闭 [#31](https://github.com/uni-helper/uni-ui-types/issues/31)

## 0.5.0 (2023-03-22)

比对源码和文档后，这个版本修复了大量描述和类型，也补全了一些缺失的属性。为了提供和 `@uni-helper/uni-app-types` 类似的体验，重命名了某些类型。希望能给你带来更好的体验！

- build: 现在使用 `rollup` 打包生成类型文件
- feat!: 现在要求 `@uni-helper/uni-app-types@^0.5.1`
- fix: 移除部分组件内多余类型
- fix: 调整 `UniBadge`
  - fix: 修复 `UniBadgeProps` `type`、`maxNum`、`inverted`、`absolute`、`offset` 描述
- fix!: 调整 `UniBreadcrumbItem`
  - fix!: 修复 `UniBreadcrumbItemProps` `to` 类型
- feat!: 调整 `UniCalendar`
  - feat!: `UniCalendarBaseDetail` -> `UniCalendarBaseEvent`
  - feat!: `UniCalendarOnChangeDetail` -> `UniCalendarOnChangeEvent`
  - feat!: `UniCalendarOnConfirmDetail` -> `UniCalendarOnConfirmEvent`
  - feat!: `UniCalendarOnMonthSwitchDetail` -> `UniCalendarOnMonthSwitchEvent`
  - fix: 修复 `UniCalendarSelectedElement` 类型
  - fix: 修复 `UniCalendarBaseEvent` `lunar.isTerm` 类型
- fix: 调整 `UniCard`
  - fix: 修复 `UniCardProps` `isShadow`、`margin`、`spacing` 描述
- feat: 调整 `UniCombox`
  - feat: 增加 `UniComboxProps` `border` 属性
  - fix: 修复 `UniComboxProps` `labelWidth` 描述
- fix!: 调整 `UniCountdown`
  - fix!: 修复 `UniCountdownOnTimeup` 参数
  - fix: 修复 `UniCountdownProps` `splitorColor` 描述
  - fix: 修复 `UniCountdownProps` `showDay` 类型
- feat!: 调整 `UniDataCheckbox`
  - feat!: `UniDataCheckboxLocaldata` -> `UniDataCheckboxLocaldataItem`，另外新增 `UniDataCheckboxLocaldata`
  - feat!: 调整 `UniDataCheckboxProps` `localdata` 类型
  - fix: 修复 `UniDataCheckboxProps` `wrap`、`selectedColor`、`selectedTextColor`、`map` 描述
  - fix!: 修复 `UniDataCheckboxSingleOnChange`、`UniDataCheckboxMultipleOnChange` 参数
- feat!: 调整 `UniDataPicker`
  - feat: `UniDataPickerSpaceInfo` `clientSecret` 现在是可选的
  - feat!: `UniDataPickerLocaldata` -> `UniDataPickerLocaldataItem`，另外新增 `UniDataPickerLocaldata`
  - feat: 增加 `UniDataPickerProps` `action`、`pageData`、`pageCurrent`、`pageSize`、`getcount`、`getone`、`getree`、`manual`、`multiple`、`placeholder`、`border`、`split`
  - fix: 修复 `UniDataPickerProps` `stepSearh` 类型
  - fix: 修复 `UniDataPickerProps` `popupTitle`、`map` 描述
  - fix!: 修复 `UniDataPickerOnChange`、`UniDataPickerOnPopupopened`、`UniDataPickerOnPopupclosed` 参数
- feat!: 调整 `UniDataSelect`
  - feat: 增加 `UniDataSelectProps` `emptyTips`、`disabled`、`format`
  - feat!: `UniDataSelectLocaldata` -> `UniDataSelectLocaldata`，另外新增 `UniDataSelectLocaldataItem`
- feat: 调整 `UniDateformat`
  - feat: 增加 `UniDateformatProps` `refreshRate`
- fix: 调整 `UniDrawer`
  - fix: 修复 `UniDrawerProps` `width` 描述
- feat!: 调整 `UniEasyinput`
  - feat: 增加 `UniEasyinputStyles` `backgroundColor`
  - fix: 修复 `UniEasyinputStyles` `color`、`disableColor` 描述
  - fix!: 修复 `UniEasyinputOnFocus` 参数
  - fix!: 修复 `UniEasyinputOnBlur` 参数
  - feat: 增加 `UniEasyinputProps` `name`、`primaryColor`、`errorMessage`
  - fix: 修复 `UniEasyinputProps` `clearSize`、`trim` 描述
- feat!: 调整 `UniFab`
  - feat: 增加 `UniFabPattern` `iconColor`
  - fix: 修复 `UniFabPattern` `backgroundColor`、`buttonColor` 描述
  - feat!: `UniFabContentElement` -> `UniFabContentItem`
  - feat!: `UniFabOnTriggerDetail` -> `UniFabOnTriggerEvent`
  - fix!: 修复 `UniFabOnFabClick` 参数
- fix!: 调整 `UniFav`
  - fix!: 修复 `UniFavOnClick` 参数
- feat!: 调整 `UniFilePicker`
  - fix: 修复 `UniFilePickerListStyles` `borderStyle.color`、`border` 描述
  - fix: 修复 `UniFilePickerImageStyles` `height`、`width`、`border.color`、`border.radius` 描述
  - feat: 增加 `UniFilePickerSizeTypeItem`、`UniFilePickerSizeType`、`UniFilePickerSourceTypeItem`、`UniFilePickerSourceType`
  - feat!: `UniFilePickerBaseDetail` -> `UniFilePickerBaseEvent`，移除多余属性
  - feat!: `UniFilePickerOnSelectDetail` -> `UniFilePickerOnSelectEvent`
  - feat!: `UniFilePickerOnProgressDetail` -> `UniFilePickerOnProgressEvent`
  - feat!: `UniFilePickerOnSuccessDetail` -> `UniFilePickerOnSuccessEvent`
  - feat!: `UniFilePickerOnFailDetail` -> `UniFilePickerOnFailEvent`
  - feat!: `UniFilePickerOnDeleteDetail` -> `UniFilePickerOnDeleteEvent`
  - feat: 增加 `UniFilePickerProps` `sizeType`、`sourceType`
- feat!: 调整 `UniForms`
  - fix: 修复 `UniFormsValidateFunction` 描述
  - fix: `UniFormsRulesRule` 所有属性可选
  - feat: 增加 `UniFormsRulesRule` `range`
  - fix: 修复 `UniFormsRules`、`UniFormsValidateField`、`UniFormsOnValidate` 类型
  - fix: 修复 `UniFormsProps` `labelWidth` 描述
  - fix!: `UniFormsValidateFields` -> `UniFormsValidateField`
  - fix!: `UniFormsProps` `validateFields` -> `validateField`
- fix: 调整 `UniFormsItem`
  - fix: 修复 `UniFormsItemRules` 类型
  - fix: 修复 `UniFormsItemProps` `labelWidth` 描述
- feat!: 调整 `UniGoodsNav`
  - feat!: `UniGoodsNavOnClickDetail` -> `UniGoodsNavOnClickEvent`
  - feat!: `UniGoodsNavOnButtonClickDetail` -> `UniGoodsNavOnButtonClickEvent`
  - fix: 修复 `UniGoodsNavOption` `info`、`infoBackgroundColor`、`infoColor` 类型
- fix!: 调整 `UniGrid`
  - fix!: 修复 `UniGridOnChange` 参数
- feat: 调整 `UniGroup`
  - feat: 增加 `UniGroupProps` `stat`、`onClick`
  - fix: 修复 `UniGroupProps` `top` 描述
- fix: 调整 `UniIcons`
  - fix: 修复 `UniIconsProps` `size` 描述
- feat!: 调整 `UniIndexedList`
  - feat!: `UniIndexedListOnClickDetail` -> `UniIndexedListOnClickEvent`
- fix: 调整 `UniLink`
  - fix: 修复 `UniLinkProps` `copyTips` 描述
- feat: 增加 `UniListAd`
- feat!: `UniListItemChat` -> `UniListChat`
  - feat!: 移除 `UniListChatAvatar`，容易造成误解
- feat!: 调整 `UniListItem`
  - fix!: 修复 `UniListItemOnClick`、`UniListItemOnSwitchChange` 参数
  - fix!: 修复 `UniListItemProps` `badgeType` 类型
  - fix: 修复 `UniListItemProps` `showArrow` 描述
  - fix: 修复 `UniListItemProps` 类型
  - feat: 增加 `UniListItemProps` `border`、`customStyle`
- fix!: 调整 `UniLoadMore`
  - fix!: 修复 `UniLoadMoreOnClickLoadMore` 参数
  - fix: 修复 `UniLoadMoreProps` `iconSize` 描述
- fix: 调整 `UniNavBar`
  - fix: 修复 `UniNavBarProps` `height`、`dark`、`leftWidth`、`rightWidth`、`stat` 描述
- feat!: 调整 `UniNoticeBar`
  - fix!: 修复 `UniNoticeBarOnClick`、`UniNoticeBarOnClose`、`UniNoticeBarOnGetmore` 参数
  - fix: 修复 `UniNoticeBarProps` `backgroundColor`、`color`、`moreColor` 描述
  - feat: 增加 `UniNoticeBarProps` `fontSize`
- feat: 调整 `UniNumberBox`
  - feat: 增加 `UniNumberBoxProps` `background`、`color`、`onInput`
  - fix: 修复 `UniNumberBoxOnFocus`、`UniNumberBoxOnBlur` 参数
- feat!: 调整 `UniPagination`
  - feat!: `UniPaginationOnChangeDetail` -> `UniPaginationOnChangeEvent`
  - feat: 增加 `UniPaginationProps` `piecePerPageText`、`showPageSize`、`pageSizeRange`、`pagerCount`、`onInput`
  - fix: 修复 `UniPaginationProps` `showIcon` 描述
- feat!: 调整 `UniPopup`
  - feat!: `UniPopupOnChangeDetail` -> `UniPopupOnChangeEvent`
- feat!: 调整 `UniPopupDialog`
  - feat!: `UniPopupDialogOnConfirmDetail` -> `UniPopupDialogOnConfirmEvent`
  - feat: 增加 `UniPopupDialogProps` `inputType`
  - fix: 补充 `UniPopupDialogProps` `confirmText`、`cancelText` 描述
- feat: 调整 `UniPopupMessage`
  - feat: 增加 `UniPopupMessageProps` `maskShow`
- feat!: 调整 `UniPopupShare`
  - feat!: `UniPopupShareOnSelectDetail` -> `UniPopupShareOnSelectEvent`
- feat!: 调整 `UniRate`
  - feat!: `UniRateOnChangeEvent` -> `UniRateOnChangeEvent`
  - fix: 补充 `UniRateProps` `size` 描述
  - fix: 修复 `UniRateProps` `size`、`margin` 类型
- feat: 调整 `UniRow`
  - feat: 增加 `UniRowProps` `justify`、`align`
- feat: 调整 `UniSearchBar`
  - feat!: `UniSearchBarBaseDetail` -> `UniSearchBarBaseEvent`
  - feat!: `UniSearchBarOnConfirmDetail` -> `UniSearchBarOnConfirmEvent`
  - feat!: `UniSearchBarOnInputDetail` -> `UniSearchBarOnInputEvent`
  - feat!: `UniSearchBarOnCancelDetail` -> `UniSearchBarOnCancelEvent`
  - feat!: `UniSearchBarOnClearDetail` -> `UniSearchBarOnClearEvent`
  - feat!: `UniSearchBarOnFocusEvent` -> `UniSearchBarOnFocusEvent`
  - feat!: `UniSearchBarOnBlurDetail` -> `UniSearchBarOnBlurEvent`
  - fix: 修复 `UniSearchBarProps` `radius` 描述
  - fix: 修复 `UniSearchBarProps` `radius`、`maxlength` 类型
- feat: 增加 `UniSection`
- feat!: 调整 `UniSegmentedControl`
  - feat!: `UniSegmentedControlOnClickItemDetail` -> `UniSegmentedControlOnClickItemEvent`
  - feat: 修复 `UniSegmentedControlProps` `activeColor` 描述
- feat: 调整 `UniSteps`
  - feat: 增加 `UniStepsProps` `deactiveColor`、`activeIcon`
  - fix: 修复 `UniStepsProps` `activeColor` 描述
- feat!: 调整 `UniSwipeActionItem`
  - feat!: `UniSwipeActionItemOnClickDetail` -> `UniSwipeActionItemOnClickEvent`
  - feat: 补充 `UniSwipeActionItemOnClickEvent` `position`
  - fix: 补充 `UniSwipeActionItemProps` `show` 描述
  - fix!: 修复 `UniSwipeActionItemProps` `leftOptions`
  - fix!: 修复 `UniSwipeActionItemProps` `rightOptions`
- feat: 调整 `UniSwiperDot`
  - fix: 修复 `UniSwiperDotDotsStyles` `width`、`bottom` 描述
  - fix: 补充 `UniSwiperDotDotsStyles` `height`
  - feat: 增加 `UniSwiperDotProps` `onClickItem`
  - fix: 修复 `UniSwiperDotProps` `current`、`mode` 描述
- feat!: 调整 `UniTable`
  - feat: 增加 `UniTableOnSelectionChangeEvent`
  - fix!: 修复 `UniTableOnSelectionChange` 参数
  - feat: 增加 `UniTableProps` `data`、`rowKey`
- feat!: 调整 `UniTag`
  - feat: 增加 `UniTagCustomStyle`
  - feat!: 修复 `UniTagOnClick` 参数
  - feat: 增加 `UniTagProps` `mark`、`customStyle`
- fix: 调整 `UniTd`
  - fix: 补充 `UniTdProps` `width` 描述
- feat!: 调整 `UniTh`
  - fix: 补充 `UniThFilterType` `timestamp`
  - feat!: `UniThOnSortChangeDetail` -> `UniThOnSortChangeEvent`
  - feat!: `UniThOnFilterChangeDetail` -> `UniThOnFilterChangeEvent`
  - fix: 优化 `UniThOnFilterChangeEvent` 类型，现在应该能更智能地收窄类型
  - fix: 补充 `UniThProps` `width` 描述
- fix: 调整 `UniTitle`
  - fix: 补充 `UniTitleProps` `align`、`color`、`stat` 描述
- fix: 调整 `UniTr`
  - fix: 补充 `UniTr` 属性 `disabled`、`keyValue`
- feat!: 调整 `UniTransition`
  - feat: 增加 `UniTransitionType` `translateX`、`translateY`、`translateZ`、`translate3d`
  - fix: 补充 `UniTransitionType` `top`、`right`、`bottom`、`left` 描述
  - fix: 修复 `UniTransitionType` `scaleX`、`scaleY`、`scaleZ`、`scale3d` 描述
  - feat: 增加 `UniTransitionOnClickEvent`
  - fix!: 修复 `UniTransitionOnClick` 参数
  - feat!: `UniTransitionOnChangeDetail` -> `UniTransitionOnChangeEvent`

## 0.4.0 (2023-02-09)

- feat: 提供所有组件的实例类型

之前：

```vue
<script setup lang="ts">
import { ref } from 'vue';
import type { UniBadge } from '@uni-helper/uni-app-types';

// 你必须手动构造组件实例类型
type UniBadgeInstance = InstanceOf<UniBadge>;

const uniBadgeRef = ref<UniBadgeInstance | null>();
</script>

<template>
  <uni-badge ref="uniBadgeRef">uni-badge</uni-badge>
</template>
```

现在：

```vue
<script setup lang="ts">
import { ref } from 'vue';
// 你无需手动构造，导入即可使用
import type { UniBadgeInstance } from '@uni-helper/uni-app-types';

const uniBadgeRef = ref<UniBadgeInstance | null>();

// 也可以直接使用全局命名空间下的组件实例类型
// const uniBadgeRef = ref<UniHelper.UniBadgeInstance | null>();
</script>

<template>
  <uni-badge ref="uniBadgeRef">uni-badge</uni-badge>
</template>
```

- feat: 现在所有组件 Props 类型下的属性都是可选的，使用 `v-bind` 直接绑定一个对象更为方便

之前：

```vue
<script setup lang="ts">
import type { UniBadgeProps } from '@uni-helper/uni-app-types';

// 你必须手动设置 Partial
// 否则你需要设置所有属性或禁用检查
const uniBadgeProps: Partial<UniBadgeProps> = { ... };
</script>

<template>
  <uni-badge v-bind="uniBadgeProps">uni-badge</uni-badge>
</template>
```

现在：

```vue
<script setup lang="ts">
import type { UniBadgeProps } from '@uni-helper/uni-app-types';

// 不需要设置 Partial，也不需要设置所有属性
const uniBadgeProps: UniBadgeProps = { ... };
</script>

<template>
  <uni-badge v-bind="uniBadgeProps">button</uni-badge>
</template>
```

## 0.3.3 (2023-01-31)

- fix: 修复大小写

## 0.3.2 (2023-01-05)

- fix: 修复 `UniFormsItem` 类型

## 0.3.1 (2022-12-27)

- fix: 修复 `UniForms` 类型

## 0.3.0 (2022-12-14)

## 0.3.0-0 (2022-12-13)

- feat!: 要求 `node >= 14.18`，这是为了对标 `rollup` 和 `vite`
- feat!: 调整部分类型命名
- feat: 增加导出
- feat: 增加 `UniHelper` 命名空间
- feat: 增加基本测试

## 0.2.1 (2022-12-07)

- fix: 修复 `uni-popup` 类型，感谢 [Megasu](https://github.com/Megasu) 和 [itcastsu](https://github.com/itcastsu) 在 [#3](https://github.com/uni-helper/uni-ui-types/pull/3) 的贡献

## 0.2.0 (2022-12-02)

升级 `@uni-helper/uni-app-types`，理论上无破坏性更新，但值得留意。

## 0.1.6 (2022-11-16)

- 调整为 `@uni-helper/uni-ui-types`

## 0.1.5 (2022-10-30)

- fix: 修复类型

## 0.1.4 (2022-09-21)

## 0.1.3 (2022-08-16)

## 0.1.2 (2022-08-15)

- fix: 修复导出
- perf: 移除多余代码

## 0.1.1 (2022-07-24)

## 0.1.0 (2022-07-19)

初次发布。
