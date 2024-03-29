import { describe, expectTypeOf } from 'vitest';
import type {
  UniPopupType,
  UniPopupOnChangeEvent,
  UniPopupOnChange,
  UniPopupOnMaskClick,
  UniPopupProps,
  UniPopup,
  UniPopupInstance,
} from '@/index';

describe('UniPopup', () => {
  expectTypeOf<UniPopupType>().toBeString();
  expectTypeOf<UniPopupType>().toEqualTypeOf<UniHelper.UniPopupType>();

  expectTypeOf<UniPopupOnChangeEvent>().toBeObject();
  expectTypeOf<UniPopupOnChangeEvent>().toEqualTypeOf<UniHelper.UniPopupOnChangeEvent>();

  expectTypeOf<UniPopupOnChange>().toBeFunction();
  expectTypeOf<UniPopupOnChange>().toEqualTypeOf<UniHelper.UniPopupOnChange>();

  expectTypeOf<UniPopupOnMaskClick>().toBeFunction();
  expectTypeOf<UniPopupOnMaskClick>().toEqualTypeOf<UniHelper.UniPopupOnMaskClick>();

  expectTypeOf<UniPopupProps>().toBeObject();
  expectTypeOf<UniPopupProps>().toEqualTypeOf<UniHelper.UniPopupProps>();

  expectTypeOf<UniPopup>().not.toBeAny();
  expectTypeOf<UniPopup>().toEqualTypeOf<UniHelper.UniPopup>();

  expectTypeOf<UniPopupInstance>().not.toBeAny();
  expectTypeOf<UniPopupInstance>().toEqualTypeOf<UniHelper.UniPopupInstance>();
});
