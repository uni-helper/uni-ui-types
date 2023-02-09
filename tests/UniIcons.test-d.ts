import { describe, expectTypeOf } from 'vitest';
import type { UniIconsType, UniIconsProps, UniIcons, UniIconsInstance } from '@/UniIcons';

describe('UniIcons', () => {
  expectTypeOf<UniIconsType>().toBeString();
  expectTypeOf<UniIconsType>().toEqualTypeOf<UniHelper.UniIconsType>();

  expectTypeOf<UniIconsProps>().toBeObject();
  expectTypeOf<UniIconsProps>().toEqualTypeOf<UniHelper.UniIconsProps>();

  expectTypeOf<UniIcons>().not.toBeAny();
  expectTypeOf<UniIcons>().toEqualTypeOf<UniHelper.UniIcons>();

  expectTypeOf<UniIconsInstance>().not.toBeAny();
  expectTypeOf<UniIconsInstance>().toEqualTypeOf<UniHelper.UniIconsInstance>();
});
