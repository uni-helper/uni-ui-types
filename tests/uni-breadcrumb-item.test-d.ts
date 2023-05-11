import { describe, expectTypeOf } from 'vitest';
import type { UniBreadcrumbItemProps, UniBreadcrumbItem, UniBreadcrumbItemInstance } from '@/index';

describe('UniBreadcrumbItem', () => {
  expectTypeOf<UniBreadcrumbItemProps>().toBeObject();
  expectTypeOf<UniBreadcrumbItemProps>().toEqualTypeOf<UniHelper.UniBreadcrumbItemProps>();

  expectTypeOf<UniBreadcrumbItem>().not.toBeAny();
  expectTypeOf<UniBreadcrumbItem>().toEqualTypeOf<UniHelper.UniBreadcrumbItem>();

  expectTypeOf<UniBreadcrumbItemInstance>().not.toBeAny();
  expectTypeOf<UniBreadcrumbItemInstance>().toEqualTypeOf<UniHelper.UniBreadcrumbItemInstance>();
});
