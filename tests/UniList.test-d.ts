import { describe, expectTypeOf } from 'vitest';
import type { UniListProps, UniList } from '@/UniList';

describe('UniList', () => {
  expectTypeOf<UniListProps>().toBeObject();
  expectTypeOf<UniListProps>().toEqualTypeOf<UniHelper.UniListProps>();

  expectTypeOf<UniList>().not.toBeAny();
  expectTypeOf<UniList>().toEqualTypeOf<UniHelper.UniList>();
});
