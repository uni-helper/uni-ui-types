import { describe, expectTypeOf } from 'vitest';
import type { UniBreadcrumbProps, UniBreadcrumb } from '@/UniBreadcrumb';

describe('UniBreadcrumb', () => {
  expectTypeOf<UniBreadcrumbProps>().toBeObject();
  expectTypeOf<UniBreadcrumbProps>().toEqualTypeOf<UniHelper.UniBreadcrumbProps>();

  expectTypeOf<UniBreadcrumb>().not.toBeAny();
  expectTypeOf<UniBreadcrumb>().toEqualTypeOf<UniHelper.UniBreadcrumb>();
});
