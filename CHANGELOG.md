# 改动日志

## Unreleased

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
- fix: 调整 `UniCard`
  - fix: 修复 `UniCardProps` `isShadow`、`margin`、`spacing` 描述
- feat: 调整 `UniCombox`
  - feat: 增加 `UniComboxProps` `border` 属性
  - fix: 修复 `UniComboxProps` `labelWidth` 描述
- fix!: 调整 `UniCountdown`
  - fix!: 修复 `UniCountdownOnTimeup` 参数
  - fix: 修复 `UniCountdownProps` `splitorColor` 描述
  - fix: 修复 `UniCountdownProps` `showDay` 类型
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
