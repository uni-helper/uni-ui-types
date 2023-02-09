import { describe, expectTypeOf } from 'vitest';
import type {
  UniSearchBarValue,
  UniSearchBarClearButton,
  UniSearchBarCancelButton,
  UniSearchBarBaseDetail,
  UniSearchBarOnConfirmDetail,
  UniSearchBarOnConfirm,
  UniSearchBarOnInputDetail,
  UniSearchBarOnInput,
  UniSearchBarOnCancelDetail,
  UniSearchBarOnCancel,
  UniSearchBarOnClearDetail,
  UniSearchBarOnClear,
  UniSearchBarOnFocusDetail,
  UniSearchBarOnFocus,
  UniSearchBarOnBlurDetail,
  UniSearchBarOnBlur,
  UniSearchBarProps,
  UniSearchBar,
  UniSearchBarInstance,
} from '@/UniSearchBar';

describe('UniSearchBar', () => {
  expectTypeOf<UniSearchBarValue>().toMatchTypeOf<string | number>();
  expectTypeOf<UniSearchBarValue>().toEqualTypeOf<UniHelper.UniSearchBarValue>();

  expectTypeOf<UniSearchBarClearButton>().toBeString();
  expectTypeOf<UniSearchBarClearButton>().toEqualTypeOf<UniHelper.UniSearchBarClearButton>();

  expectTypeOf<UniSearchBarCancelButton>().toBeString();
  expectTypeOf<UniSearchBarCancelButton>().toEqualTypeOf<UniHelper.UniSearchBarCancelButton>();

  expectTypeOf<UniSearchBarBaseDetail>().toBeObject();
  expectTypeOf<UniSearchBarBaseDetail>().toEqualTypeOf<UniHelper.UniSearchBarBaseDetail>();

  expectTypeOf<UniSearchBarOnConfirmDetail>().toBeObject();
  expectTypeOf<UniSearchBarOnConfirmDetail>().toEqualTypeOf<UniHelper.UniSearchBarOnConfirmDetail>();

  expectTypeOf<UniSearchBarOnConfirm>().toBeObject();
  expectTypeOf<UniSearchBarOnConfirm>().toEqualTypeOf<UniHelper.UniSearchBarOnConfirm>();

  expectTypeOf<UniSearchBarOnInputDetail>().toBeObject();
  expectTypeOf<UniSearchBarOnInputDetail>().toEqualTypeOf<UniHelper.UniSearchBarOnInputDetail>();

  expectTypeOf<UniSearchBarOnInput>().toBeObject();
  expectTypeOf<UniSearchBarOnInput>().toEqualTypeOf<UniHelper.UniSearchBarOnInput>();

  expectTypeOf<UniSearchBarOnCancelDetail>().toBeObject();
  expectTypeOf<UniSearchBarOnCancelDetail>().toEqualTypeOf<UniHelper.UniSearchBarOnCancelDetail>();

  expectTypeOf<UniSearchBarOnCancel>().toBeObject();
  expectTypeOf<UniSearchBarOnCancel>().toEqualTypeOf<UniHelper.UniSearchBarOnCancel>();

  expectTypeOf<UniSearchBarOnClearDetail>().toBeObject();
  expectTypeOf<UniSearchBarOnClearDetail>().toEqualTypeOf<UniHelper.UniSearchBarOnClearDetail>();

  expectTypeOf<UniSearchBarOnClear>().toBeObject();
  expectTypeOf<UniSearchBarOnClear>().toEqualTypeOf<UniHelper.UniSearchBarOnClear>();

  expectTypeOf<UniSearchBarOnFocusDetail>().toBeObject();
  expectTypeOf<UniSearchBarOnFocusDetail>().toEqualTypeOf<UniHelper.UniSearchBarOnFocusDetail>();

  expectTypeOf<UniSearchBarOnFocus>().toBeObject();
  expectTypeOf<UniSearchBarOnFocus>().toEqualTypeOf<UniHelper.UniSearchBarOnFocus>();

  expectTypeOf<UniSearchBarOnBlurDetail>().toBeObject();
  expectTypeOf<UniSearchBarOnBlurDetail>().toEqualTypeOf<UniHelper.UniSearchBarOnBlurDetail>();

  expectTypeOf<UniSearchBarOnBlur>().toBeObject();
  expectTypeOf<UniSearchBarOnBlur>().toEqualTypeOf<UniHelper.UniSearchBarOnBlur>();

  expectTypeOf<UniSearchBarProps>().toBeObject();
  expectTypeOf<UniSearchBarProps>().toEqualTypeOf<UniHelper.UniSearchBarProps>();

  expectTypeOf<UniSearchBar>().not.toBeAny();
  expectTypeOf<UniSearchBar>().toEqualTypeOf<UniHelper.UniSearchBar>();

  expectTypeOf<UniSearchBarInstance>().not.toBeAny();
  expectTypeOf<UniSearchBarInstance>().toEqualTypeOf<UniHelper.UniSearchBarInstance>();
});
