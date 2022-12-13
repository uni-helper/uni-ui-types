import { describe, expectTypeOf } from 'vitest';
import type {
  UniEasyinputValue,
  UniEasyinputType,
  UniEasyinputOnConfirmType,
  UniEasyinputTrim,
  UniEasyinputStyles,
  UniEasyinputIconPosition,
  UniEasyinputOnInput,
  UniEasyinputOnClear,
  UniEasyinputOnFocus,
  UniEasyinputOnBlur,
  UniEasyinputOnConfirm,
  UniEasyinputOnIconClick,
  UniEasyinputOnChange,
  UniEasyinputProps,
  UniEasyinput,
} from '@/UniEasyinput';

describe('UniEasyinput', () => {
  expectTypeOf<UniEasyinputValue>().toMatchTypeOf<string | number>();
  expectTypeOf<UniEasyinputValue>().toEqualTypeOf<UniHelper.UniEasyinputValue>();

  expectTypeOf<UniEasyinputType>().toBeString();
  expectTypeOf<UniEasyinputType>().toEqualTypeOf<UniHelper.UniEasyinputType>();

  expectTypeOf<UniEasyinputOnConfirmType>().toBeString();
  expectTypeOf<UniEasyinputOnConfirmType>().toEqualTypeOf<UniHelper.UniEasyinputOnConfirmType>();

  expectTypeOf<UniEasyinputTrim>().toMatchTypeOf<string | boolean>();
  expectTypeOf<UniEasyinputTrim>().toEqualTypeOf<UniHelper.UniEasyinputTrim>();

  expectTypeOf<UniEasyinputStyles>().toBeObject();
  expectTypeOf<UniEasyinputStyles>().toEqualTypeOf<UniHelper.UniEasyinputStyles>();

  expectTypeOf<UniEasyinputIconPosition>().toBeString();
  expectTypeOf<UniEasyinputIconPosition>().toEqualTypeOf<UniHelper.UniEasyinputIconPosition>();

  expectTypeOf<UniEasyinputOnInput>().toBeFunction();
  expectTypeOf<UniEasyinputOnInput>().toEqualTypeOf<UniHelper.UniEasyinputOnInput>();

  expectTypeOf<UniEasyinputOnClear>().toBeFunction();
  expectTypeOf<UniEasyinputOnClear>().toEqualTypeOf<UniHelper.UniEasyinputOnClear>();

  expectTypeOf<UniEasyinputOnFocus>().toBeFunction();
  expectTypeOf<UniEasyinputOnFocus>().toEqualTypeOf<UniHelper.UniEasyinputOnFocus>();

  expectTypeOf<UniEasyinputOnBlur>().toBeFunction();
  expectTypeOf<UniEasyinputOnBlur>().toEqualTypeOf<UniHelper.UniEasyinputOnBlur>();

  expectTypeOf<UniEasyinputOnConfirm>().toBeFunction();
  expectTypeOf<UniEasyinputOnConfirm>().toEqualTypeOf<UniHelper.UniEasyinputOnConfirm>();

  expectTypeOf<UniEasyinputOnIconClick>().toBeFunction();
  expectTypeOf<UniEasyinputOnIconClick>().toEqualTypeOf<UniHelper.UniEasyinputOnIconClick>();

  expectTypeOf<UniEasyinputOnChange>().toBeFunction();
  expectTypeOf<UniEasyinputOnChange>().toEqualTypeOf<UniHelper.UniEasyinputOnChange>();

  expectTypeOf<UniEasyinputProps>().toBeObject();
  expectTypeOf<UniEasyinputProps>().toEqualTypeOf<UniHelper.UniEasyinputProps>();

  expectTypeOf<UniEasyinput>().not.toBeAny();
  expectTypeOf<UniEasyinput>().toEqualTypeOf<UniHelper.UniEasyinput>();
});
