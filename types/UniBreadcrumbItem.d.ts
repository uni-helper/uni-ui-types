import { AnyRecord, Component } from '@uni-helper/uni-app-types';

export interface UniBreadcrumbItemProps {
  /**
   * @desc 路由跳转页面路径
   */
  to: string | AnyRecord;
  /**
   * @desc 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录
   */
  replace: boolean;
}

export type UniBreadcrumbItem = Component<Partial<UniBreadcrumbItemProps>>;
