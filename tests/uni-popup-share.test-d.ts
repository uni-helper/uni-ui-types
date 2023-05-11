import { describe, expectTypeOf } from 'vitest';
import type {
  UniPopupShareOnSelectEvent,
  UniPopupShareOnSelect,
  UniPopupShareProps,
  UniPopupShare,
  UniPopupShareInstance,
} from '@/index';

describe('UniPopupShare', () => {
  expectTypeOf<UniPopupShareOnSelectEvent>().toBeObject();
  expectTypeOf<UniPopupShareOnSelectEvent>().toEqualTypeOf<UniHelper.UniPopupShareOnSelectEvent>();

  expectTypeOf<UniPopupShareOnSelect>().toBeFunction();
  expectTypeOf<UniPopupShareOnSelect>().toEqualTypeOf<UniHelper.UniPopupShareOnSelect>();

  expectTypeOf<UniPopupShareProps>().toBeObject();
  expectTypeOf<UniPopupShareProps>().toEqualTypeOf<UniHelper.UniPopupShareProps>();

  expectTypeOf<UniPopupShare>().not.toBeAny();
  expectTypeOf<UniPopupShare>().toEqualTypeOf<UniHelper.UniPopupShare>();

  expectTypeOf<UniPopupShareInstance>().not.toBeAny();
  expectTypeOf<UniPopupShareInstance>().toEqualTypeOf<UniHelper.UniPopupShareInstance>();
});
