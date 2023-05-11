import { describe, expectTypeOf } from 'vitest';
import type { UniTrProps, UniTr, UniTrInstance } from '@/index';

describe('UniTr', () => {
  expectTypeOf<UniTrProps>().toBeObject();
  expectTypeOf<UniTrProps>().toEqualTypeOf<UniHelper.UniTrProps>();

  expectTypeOf<UniTr>().not.toBeAny();
  expectTypeOf<UniTr>().toEqualTypeOf<UniHelper.UniTr>();

  expectTypeOf<UniTrInstance>().not.toBeAny();
  expectTypeOf<UniTrInstance>().toEqualTypeOf<UniHelper.UniTrInstance>();
});
