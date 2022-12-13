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

### 配置

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

更多关于 `experimentalRuntimeMode` 和 `nativeTags` 的信息请查看 [johnsoncodehk/volar#2165 (comment)](https://github.com/johnsoncodehk/volar/issues/2165#issuecomment-1334803492)。

- 重启编辑器 / IDE

### 标注类型

推荐使用 `@uni-helper/uni-ui-types` 导出的类型为变量标注类型。

```vue
<script setup lang="ts">
import { ref } from 'vue';
import type { UniBadgeType, UniBadgeOnClick } from '@uni-helper/uni-app-types';

const type = ref<UniBadgeType>('default');
const onClick: UniBadgeOnClick = (event) => {
  ...
};
</script>

<template>
  <uni-badge :type="type" @click="onClick"></uni-badge>
</template>
```

也可以直接使用命名空间来为变量标注类型。

```vue
<script setup lang="ts">
import { ref } from 'vue';

const type = ref<UniHelper.UniBadgeType>('default');
const onClick: UniHelper.UniBadgeOnClick = (event) => {
  ...
};
</script>

<template>
  <uni-badge :type="type" @click="onClick"></uni-badge>
</template>
```

请查看 [types](./types) 了解所有类型。

## 致谢

最初在 [uni-base-components-types](https://github.com/satrong/uni-base-components-types) 得到了灵感。

基于 [这个 PR](https://github.com/satrong/uni-base-components-types/pull/5) 完成。
