import { describe, expectTypeOf } from 'vitest';
import type { UniBreadcrumbItemProps, UniBreadcrumbItem } from '@/UniBreadcrumbItem';

describe('UniBreadcrumbItem', () => {
  expectTypeOf<UniBreadcrumbItemProps>().toBeObject();
  expectTypeOf<UniBreadcrumbItemProps>().toEqualTypeOf<UniHelper.UniBreadcrumbItemProps>();

  expectTypeOf<UniBreadcrumbItem>().not.toBeAny();
  expectTypeOf<UniBreadcrumbItem>().toEqualTypeOf<UniHelper.UniBreadcrumbItem>();
});
