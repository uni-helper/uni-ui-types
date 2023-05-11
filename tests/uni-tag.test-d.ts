import { describe, expectTypeOf } from 'vitest';
import type {
  UniTagType,
  UniTagSize,
  UniTagCustomStyle,
  UniTagOnClick,
  UniTagProps,
  UniTag,
  UniTagInstance,
} from '@/index';

describe('UniTag', () => {
  expectTypeOf<UniTagType>().toBeString();
  expectTypeOf<UniTagType>().toEqualTypeOf<UniHelper.UniTagType>();

  expectTypeOf<UniTagSize>().toBeString();
  expectTypeOf<UniTagSize>().toEqualTypeOf<UniHelper.UniTagSize>();

  expectTypeOf<UniTagCustomStyle>().toBeString();
  expectTypeOf<UniTagCustomStyle>().toEqualTypeOf<UniHelper.UniTagCustomStyle>();

  expectTypeOf<UniTagOnClick>().toBeFunction();
  expectTypeOf<UniTagOnClick>().toEqualTypeOf<UniHelper.UniTagOnClick>();

  expectTypeOf<UniTagProps>().toBeObject();
  expectTypeOf<UniTagProps>().toEqualTypeOf<UniHelper.UniTagProps>();

  expectTypeOf<UniTag>().not.toBeAny();
  expectTypeOf<UniTag>().toEqualTypeOf<UniHelper.UniTag>();

  expectTypeOf<UniTagInstance>().not.toBeAny();
  expectTypeOf<UniTagInstance>().toEqualTypeOf<UniHelper.UniTagInstance>();
});
