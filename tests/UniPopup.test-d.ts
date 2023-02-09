import { describe, expectTypeOf } from 'vitest';
import type {
  UniPopupType,
  UniPopupOnChangeDetail,
  UniPopupOnChange,
  UniPopupOnMaskClick,
  UniPopupProps,
  UniPopup,
  UniPopupInstance,
} from '@/UniPopup';

describe('UniPopup', () => {
  expectTypeOf<UniPopupType>().toBeString();
  expectTypeOf<UniPopupType>().toEqualTypeOf<UniHelper.UniPopupType>();

  expectTypeOf<UniPopupOnChangeDetail>().toBeObject();
  expectTypeOf<UniPopupOnChangeDetail>().toEqualTypeOf<UniHelper.UniPopupOnChangeDetail>();

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
