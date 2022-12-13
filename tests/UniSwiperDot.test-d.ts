import { describe, expectTypeOf } from 'vitest';
import type {
  UniSwiperDotMode,
  UniSwiperDotDotsStyles,
  UniSwiperDotProps,
  UniSwiperDot,
} from '@/UniSwiperDot';

describe('UniSwiperDot', () => {
  expectTypeOf<UniSwiperDotMode>().toBeString();
  expectTypeOf<UniSwiperDotMode>().toEqualTypeOf<UniHelper.UniSwiperDotMode>();

  expectTypeOf<UniSwiperDotDotsStyles>().toBeObject();
  expectTypeOf<UniSwiperDotDotsStyles>().toEqualTypeOf<UniHelper.UniSwiperDotDotsStyles>();

  expectTypeOf<UniSwiperDotProps>().toBeObject();
  expectTypeOf<UniSwiperDotProps>().toEqualTypeOf<UniHelper.UniSwiperDotProps>();

  expectTypeOf<UniSwiperDot>().not.toBeAny();
  expectTypeOf<UniSwiperDot>().toEqualTypeOf<UniHelper.UniSwiperDot>();
});
