import { AnyRecord, Component } from '@uni-helper/uni-app-types';

interface _UniBreadcrumbItemProps {
  /**
   * @desc 路由跳转页面路径
   */
  to: string | AnyRecord;
  /**
   * @desc 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录
   */
  replace: boolean;
}

type _UniBreadcrumbItem = Component<Partial<_UniBreadcrumbItemProps>>;

export {
  _UniBreadcrumbItemProps as UniBreadcrumbItemProps,
  _UniBreadcrumbItem as UniBreadcrumbItem,
};

declare global {
  namespace UniHelper {
    export interface UniBreadcrumbItemProps extends _UniBreadcrumbItemProps {}
    export type UniBreadcrumbItem = _UniBreadcrumbItem;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniBreadcrumbItem: _UniBreadcrumbItem;
  }
}
