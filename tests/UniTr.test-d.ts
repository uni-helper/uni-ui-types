import { describe, expectTypeOf } from 'vitest';
import type { UniTrProps, UniTr } from '@/UniTr';

describe('UniTr', () => {
  expectTypeOf<UniTrProps>().toBeObject();
  expectTypeOf<UniTrProps>().toEqualTypeOf<UniHelper.UniTrProps>();

  expectTypeOf<UniTr>().not.toBeAny();
  expectTypeOf<UniTr>().toEqualTypeOf<UniHelper.UniTr>();
});
