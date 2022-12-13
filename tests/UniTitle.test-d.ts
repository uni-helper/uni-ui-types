import { describe, expectTypeOf } from 'vitest';
import type { UniTitleType, UniTitleAlign, UniTitleProps, UniTitle } from '@/UniTitle';

describe('UniTitle', () => {
  expectTypeOf<UniTitleType>().toBeString();
  expectTypeOf<UniTitleType>().toEqualTypeOf<UniHelper.UniTitleType>();

  expectTypeOf<UniTitleAlign>().toBeString();
  expectTypeOf<UniTitleAlign>().toEqualTypeOf<UniHelper.UniTitleAlign>();

  expectTypeOf<UniTitleProps>().toBeObject();
  expectTypeOf<UniTitleProps>().toEqualTypeOf<UniHelper.UniTitleProps>();

  expectTypeOf<UniTitle>().not.toBeAny();
  expectTypeOf<UniTitle>().toEqualTypeOf<UniHelper.UniTitle>();
});
