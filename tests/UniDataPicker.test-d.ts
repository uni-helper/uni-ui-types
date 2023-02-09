import { describe, expectTypeOf } from 'vitest';
import type {
  UniDataPickerSpaceInfoProvider,
  UniDataPickerSpaceInfo,
  UniDataPickerValue,
  UniDataPickerLocaldata,
  UniDataPickerMap,
  UniDataPickerShow,
  UniDataPickerHide,
  UniDataPickerClear,
  UniDataPickerOnChangeDetail,
  UniDataPickerOnChange,
  UniDataPickerOnNodeclick,
  UniDataPickerOnStepsearch,
  UniDataPickerOnPopupopened,
  UniDataPickerOnPopupclosed,
  UniDataPickerProps,
  UniDataPicker,
  UniDataPickerInstance,
} from '@/UniDataPicker';

describe('UniDataPicker', () => {
  expectTypeOf<UniDataPickerSpaceInfoProvider>().toBeString();
  expectTypeOf<UniDataPickerSpaceInfoProvider>().toEqualTypeOf<UniHelper.UniDataPickerSpaceInfoProvider>();

  expectTypeOf<UniDataPickerSpaceInfo>().toBeObject();
  expectTypeOf<UniDataPickerSpaceInfo>().toEqualTypeOf<UniHelper.UniDataPickerSpaceInfo>();

  expectTypeOf<UniDataPickerValue>().toMatchTypeOf<string | number | boolean | null>();
  expectTypeOf<UniDataPickerValue>().toEqualTypeOf<UniHelper.UniDataPickerValue>();

  expectTypeOf<UniDataPickerLocaldata>().toBeObject();
  expectTypeOf<UniDataPickerLocaldata>().toEqualTypeOf<UniHelper.UniDataPickerLocaldata>();

  expectTypeOf<UniDataPickerMap>().toBeObject();
  expectTypeOf<UniDataPickerMap>().toEqualTypeOf<UniHelper.UniDataPickerMap>();

  expectTypeOf<UniDataPickerShow>().toBeFunction();
  expectTypeOf<UniDataPickerShow>().toEqualTypeOf<UniHelper.UniDataPickerShow>();

  expectTypeOf<UniDataPickerHide>().toBeFunction();
  expectTypeOf<UniDataPickerHide>().toEqualTypeOf<UniHelper.UniDataPickerHide>();

  expectTypeOf<UniDataPickerClear>().toBeFunction();
  expectTypeOf<UniDataPickerClear>().toEqualTypeOf<UniHelper.UniDataPickerClear>();

  expectTypeOf<UniDataPickerOnChangeDetail>().toBeObject();
  expectTypeOf<UniDataPickerOnChangeDetail>().toEqualTypeOf<UniHelper.UniDataPickerOnChangeDetail>();

  expectTypeOf<UniDataPickerOnChange>().toBeFunction();
  expectTypeOf<UniDataPickerOnChange>().toEqualTypeOf<UniHelper.UniDataPickerOnChange>();

  expectTypeOf<UniDataPickerOnNodeclick>().toBeFunction();
  expectTypeOf<UniDataPickerOnNodeclick>().toEqualTypeOf<UniHelper.UniDataPickerOnNodeclick>();

  expectTypeOf<UniDataPickerOnStepsearch>().toBeFunction();
  expectTypeOf<UniDataPickerOnStepsearch>().toEqualTypeOf<UniHelper.UniDataPickerOnStepsearch>();

  expectTypeOf<UniDataPickerOnPopupopened>().toBeFunction();
  expectTypeOf<UniDataPickerOnPopupopened>().toEqualTypeOf<UniHelper.UniDataPickerOnPopupopened>();

  expectTypeOf<UniDataPickerOnPopupclosed>().toBeFunction();
  expectTypeOf<UniDataPickerOnPopupclosed>().toEqualTypeOf<UniHelper.UniDataPickerOnPopupclosed>();

  expectTypeOf<UniDataPickerProps>().toBeObject();
  expectTypeOf<UniDataPickerProps>().toEqualTypeOf<UniHelper.UniDataPickerProps>();

  expectTypeOf<UniDataPicker>().not.toBeAny();
  expectTypeOf<UniDataPicker>().toEqualTypeOf<UniHelper.UniDataPicker>();

  expectTypeOf<UniDataPickerInstance>().not.toBeAny();
  expectTypeOf<UniDataPickerInstance>().toEqualTypeOf<UniHelper.UniDataPickerInstance>();
});
