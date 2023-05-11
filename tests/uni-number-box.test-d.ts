import { describe, expectTypeOf } from 'vitest';
import type {
  UniNumberBoxValue,
  UniNumberBoxOnChange,
  UniNumberBoxOnInput,
  UniNumberBoxOnFocusEvent,
  UniNumberBoxOnFocus,
  UniNumberBoxOnBlurEvent,
  UniNumberBoxOnBlur,
  UniNumberBoxProps,
  UniNumberBox,
  UniNumberBoxInstance,
} from '@/index';

describe('UniNumberBox', () => {
  expectTypeOf<UniNumberBoxValue>().toBeNumber();
  expectTypeOf<UniNumberBoxValue>().toEqualTypeOf<UniHelper.UniNumberBoxValue>();

  expectTypeOf<UniNumberBoxOnChange>().toBeFunction();
  expectTypeOf<UniNumberBoxOnChange>().toEqualTypeOf<UniHelper.UniNumberBoxOnChange>();

  expectTypeOf<UniNumberBoxOnInput>().toBeFunction();
  expectTypeOf<UniNumberBoxOnInput>().toEqualTypeOf<UniHelper.UniNumberBoxOnInput>();

  expectTypeOf<UniNumberBoxOnFocusEvent>().toBeObject();
  expectTypeOf<UniNumberBoxOnFocusEvent>().toEqualTypeOf<UniHelper.UniNumberBoxOnFocusEvent>();

  expectTypeOf<UniNumberBoxOnFocus>().toBeFunction();
  expectTypeOf<UniNumberBoxOnFocus>().toEqualTypeOf<UniHelper.UniNumberBoxOnFocus>();

  expectTypeOf<UniNumberBoxOnBlurEvent>().toBeObject();
  expectTypeOf<UniNumberBoxOnBlurEvent>().toEqualTypeOf<UniHelper.UniNumberBoxOnBlurEvent>();

  expectTypeOf<UniNumberBoxOnBlur>().toBeFunction();
  expectTypeOf<UniNumberBoxOnBlur>().toEqualTypeOf<UniHelper.UniNumberBoxOnBlur>();

  expectTypeOf<UniNumberBoxProps>().toBeObject();
  expectTypeOf<UniNumberBoxProps>().toEqualTypeOf<UniHelper.UniNumberBoxProps>();

  expectTypeOf<UniNumberBox>().not.toBeAny();
  expectTypeOf<UniNumberBox>().toEqualTypeOf<UniHelper.UniNumberBox>();

  expectTypeOf<UniNumberBoxInstance>().not.toBeAny();
  expectTypeOf<UniNumberBoxInstance>().toEqualTypeOf<UniHelper.UniNumberBoxInstance>();
});
