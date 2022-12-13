import { describe, expectTypeOf } from 'vitest';
import type { UniIconsType, UniIconsProps, UniIcons } from '@/UniIcons';

describe('UniIcons', () => {
  expectTypeOf<UniIconsType>().toBeString();
  expectTypeOf<UniIconsType>().toEqualTypeOf<UniHelper.UniIconsType>();

  expectTypeOf<UniIconsProps>().toBeObject();
  expectTypeOf<UniIconsProps>().toEqualTypeOf<UniHelper.UniIconsProps>();

  expectTypeOf<UniIcons>().not.toBeAny();
  expectTypeOf<UniIcons>().toEqualTypeOf<UniHelper.UniIcons>();
});
