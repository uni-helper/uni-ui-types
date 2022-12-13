import { describe, expectTypeOf } from 'vitest';
import type { UniLinkProps, UniLink } from '@/UniLink';

describe('UniLink', () => {
  expectTypeOf<UniLinkProps>().toBeObject();
  expectTypeOf<UniLinkProps>().toEqualTypeOf<UniHelper.UniLinkProps>();

  expectTypeOf<UniLink>().not.toBeAny();
  expectTypeOf<UniLink>().toEqualTypeOf<UniHelper.UniLink>();
});
