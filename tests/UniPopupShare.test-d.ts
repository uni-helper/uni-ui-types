import { describe, expectTypeOf } from 'vitest';
import type {
  UniPopupShareOnSelectDetail,
  UniPopupShareOnSelect,
  UniPopupShareProps,
  UniPopupShare,
} from '@/UniPopupShare';

describe('UniPopupShare', () => {
  expectTypeOf<UniPopupShareOnSelectDetail>().toBeObject();
  expectTypeOf<UniPopupShareOnSelectDetail>().toEqualTypeOf<UniHelper.UniPopupShareOnSelectDetail>();

  expectTypeOf<UniPopupShareOnSelect>().toBeFunction();
  expectTypeOf<UniPopupShareOnSelect>().toEqualTypeOf<UniHelper.UniPopupShareOnSelect>();

  expectTypeOf<UniPopupShareProps>().toBeObject();
  expectTypeOf<UniPopupShareProps>().toEqualTypeOf<UniHelper.UniPopupShareProps>();

  expectTypeOf<UniPopupShare>().not.toBeAny();
  expectTypeOf<UniPopupShare>().toEqualTypeOf<UniHelper.UniPopupShare>();
});
