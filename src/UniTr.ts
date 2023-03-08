import { Component } from '@uni-helper/uni-app-types';

// eslint-disable-next-line @typescript-eslint/ban-types
type _UniTrProps = Partial<{}>;

type _UniTr = Component<_UniTrProps>;

type _UniTrInstance = InstanceType<_UniTr>;

export { _UniTrProps as UniTrProps, _UniTr as UniTr, _UniTrInstance as UniTrInstance };

declare global {
  namespace UniHelper {
    export type UniTrProps = _UniTrProps;
    export type UniTr = _UniTr;
    export type UniTrInstance = _UniTrInstance;
  }
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    UniTr: _UniTr;
  }
}
