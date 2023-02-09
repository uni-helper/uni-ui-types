import { describe, expectTypeOf } from 'vitest';
import type { UniListProps, UniList, UniListInstance } from '@/UniList';

describe('UniList', () => {
  expectTypeOf<UniListProps>().toBeObject();
  expectTypeOf<UniListProps>().toEqualTypeOf<UniHelper.UniListProps>();

  expectTypeOf<UniList>().not.toBeAny();
  expectTypeOf<UniList>().toEqualTypeOf<UniHelper.UniList>();

  expectTypeOf<UniListInstance>().not.toBeAny();
  expectTypeOf<UniListInstance>().toEqualTypeOf<UniHelper.UniListInstance>();
});
