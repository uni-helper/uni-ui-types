import { describe, expectTypeOf } from 'vitest';
import type { UniTdAlign, UniTdProps, UniTd } from '@/UniTd';

describe('UniTd', () => {
  expectTypeOf<UniTdAlign>().toBeString();
  expectTypeOf<UniTdAlign>().toEqualTypeOf<UniHelper.UniTdAlign>();

  expectTypeOf<UniTdProps>().toBeObject();
  expectTypeOf<UniTdProps>().toEqualTypeOf<UniHelper.UniTdProps>();

  expectTypeOf<UniTd>().not.toBeAny();
  expectTypeOf<UniTd>().toEqualTypeOf<UniHelper.UniTd>();
});
