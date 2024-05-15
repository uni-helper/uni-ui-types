import type { Component } from '@uni-helper/uni-app-types';

type _UniListAdProps = Partial<{
  /** 标题 */
  title: string;
}>;

type _UniListAd = Component<_UniListAdProps>;

type _UniListAdInstance = InstanceType<_UniListAd>;

export {
  _UniListAdProps as UniListAdProps,
  _UniListAd as UniListAd,
  _UniListAdInstance as UniListAdInstance,
};

declare global {
  namespace UniHelper {
    export type UniListAdProps = _UniListAdProps;
    export type UniListAd = _UniListAd;
    export type UniListAdInstance = _UniListAdInstance;
  }
}

// @ts-expect-error Invalid module name in augmentation, module cannot be found.
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniListAd: _UniListAd;
  }
}
