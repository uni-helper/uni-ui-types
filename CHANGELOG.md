# 改动日志

## Unreleased

- build: 现在使用 `rollup` 打包生成类型文件
- feat!: 核对并修复所有组件类型 WIP
- feat: 移除部分组件内多余类型
- feat!: 现在要求 `@uni-helper/uni-app-types@^0.5.1`

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
