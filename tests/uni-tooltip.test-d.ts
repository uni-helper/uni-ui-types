import { describe, expectTypeOf } from 'vitest';
import type { UniTooltipProps, UniTooltip, UniTooltipInstance } from '@/index';

describe('UniTooltip', () => {
  expectTypeOf<UniTooltipProps>().toBeObject();
  expectTypeOf<UniTooltipProps>().toEqualTypeOf<UniHelper.UniTooltipProps>();

  expectTypeOf<UniTooltip>().not.toBeAny();
  expectTypeOf<UniTooltip>().toEqualTypeOf<UniHelper.UniTooltip>();

  expectTypeOf<UniTooltipInstance>().not.toBeAny();
  expectTypeOf<UniTooltipInstance>().toEqualTypeOf<UniHelper.UniTooltipInstance>();
});
