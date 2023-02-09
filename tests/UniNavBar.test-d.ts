import { describe, expectTypeOf } from 'vitest';
import type { UniNavBarProps, UniNavBar, UniNavBarInstance } from '@/UniNavBar';

describe('UniNavBar', () => {
  expectTypeOf<UniNavBarProps>().toBeObject();
  expectTypeOf<UniNavBarProps>().toEqualTypeOf<UniHelper.UniNavBarProps>();

  expectTypeOf<UniNavBar>().not.toBeAny();
  expectTypeOf<UniNavBar>().toEqualTypeOf<UniHelper.UniNavBar>();

  expectTypeOf<UniNavBarInstance>().not.toBeAny();
  expectTypeOf<UniNavBarInstance>().toEqualTypeOf<UniHelper.UniNavBarInstance>();
});
