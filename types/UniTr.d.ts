import { Component } from '@uni-helper/uni-app-types';

interface _UniTrProps {}

type _UniTr = Component<Partial<_UniTrProps>>;

export { _UniTrProps as UniTrProps, _UniTr as UniTr };

declare global {
  namespace UniHelper {
    export interface UniTrProps extends _UniTrProps {}
    export type UniTr = _UniTr;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniTr: _UniTr;
  }
}
