import { describe, expectTypeOf } from 'vitest';
import type { UniTooltipProps, UniTooltip } from '@/UniTooltip';

describe('UniTooltip', () => {
  expectTypeOf<UniTooltipProps>().toBeObject();
  expectTypeOf<UniTooltipProps>().toEqualTypeOf<UniHelper.UniTooltipProps>();

  expectTypeOf<UniTooltip>().not.toBeAny();
  expectTypeOf<UniTooltip>().toEqualTypeOf<UniHelper.UniTooltip>();
});
