import { describe, expectTypeOf } from 'vitest';
import type { UniLinkProps, UniLink, UniLinkInstance } from '@/UniLink';

describe('UniLink', () => {
  expectTypeOf<UniLinkProps>().toBeObject();
  expectTypeOf<UniLinkProps>().toEqualTypeOf<UniHelper.UniLinkProps>();

  expectTypeOf<UniLink>().not.toBeAny();
  expectTypeOf<UniLink>().toEqualTypeOf<UniHelper.UniLink>();

  expectTypeOf<UniLinkInstance>().not.toBeAny();
  expectTypeOf<UniLinkInstance>().toEqualTypeOf<UniHelper.UniLinkInstance>();
});
