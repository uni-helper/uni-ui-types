import { describe, expectTypeOf } from 'vitest';
import type {
  UniCollapseItemTitleBorder,
  UniCollapseItemProps,
  UniCollapseItem,
} from '@/UniCollapseItem';

describe('UniCollapseItem', () => {
  expectTypeOf<UniCollapseItemTitleBorder>().toBeString();
  expectTypeOf<UniCollapseItemTitleBorder>().toEqualTypeOf<UniHelper.UniCollapseItemTitleBorder>();

  expectTypeOf<UniCollapseItemProps>().toBeObject();
  expectTypeOf<UniCollapseItemProps>().toEqualTypeOf<UniHelper.UniCollapseItemProps>();

  expectTypeOf<UniCollapseItem>().not.toBeAny();
  expectTypeOf<UniCollapseItem>().toEqualTypeOf<UniHelper.UniCollapseItem>();
});
