import { describe, expectTypeOf } from 'vitest';
import type { UniBreadcrumbProps, UniBreadcrumb, UniBreadcrumbInstance } from '@/index';

describe('UniBreadcrumb', () => {
  expectTypeOf<UniBreadcrumbProps>().toBeObject();
  expectTypeOf<UniBreadcrumbProps>().toEqualTypeOf<UniHelper.UniBreadcrumbProps>();

  expectTypeOf<UniBreadcrumb>().not.toBeAny();
  expectTypeOf<UniBreadcrumb>().toEqualTypeOf<UniHelper.UniBreadcrumb>();

  expectTypeOf<UniBreadcrumbInstance>().not.toBeAny();
  expectTypeOf<UniBreadcrumbInstance>().toEqualTypeOf<UniHelper.UniBreadcrumbInstance>();
});
