import { describe, expectTypeOf } from 'vitest';
import type {
  UniNumberBoxValue,
  UniNumberBoxOnChange,
  UniNumberBoxOnFocus,
  UniNumberBoxOnBlur,
  UniNumberBoxProps,
  UniNumberBox,
} from '@/UniNumberBox';

describe('UniNumberBox', () => {
  expectTypeOf<UniNumberBoxValue>().toBeNumber();
  expectTypeOf<UniNumberBoxValue>().toEqualTypeOf<UniHelper.UniNumberBoxValue>();

  expectTypeOf<UniNumberBoxOnChange>().toBeFunction();
  expectTypeOf<UniNumberBoxOnChange>().toEqualTypeOf<UniHelper.UniNumberBoxOnChange>();

  expectTypeOf<UniNumberBoxOnFocus>().toBeFunction();
  expectTypeOf<UniNumberBoxOnFocus>().toEqualTypeOf<UniHelper.UniNumberBoxOnFocus>();

  expectTypeOf<UniNumberBoxOnBlur>().toBeFunction();
  expectTypeOf<UniNumberBoxOnBlur>().toEqualTypeOf<UniHelper.UniNumberBoxOnBlur>();

  expectTypeOf<UniNumberBoxProps>().toBeObject();
  expectTypeOf<UniNumberBoxProps>().toEqualTypeOf<UniHelper.UniNumberBoxProps>();

  expectTypeOf<UniNumberBox>().not.toBeAny();
  expectTypeOf<UniNumberBox>().toEqualTypeOf<UniHelper.UniNumberBox>();
});
