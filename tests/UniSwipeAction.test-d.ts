import { describe, expectTypeOf } from 'vitest';
import type {
  UniSwipeActionResize,
  UniSwipeActionCloseAll,
  UniSwipeActionProps,
  UniSwipeAction,
} from '@/UniSwipeAction';

describe('UniSwipeAction', () => {
  expectTypeOf<UniSwipeActionResize>().toBeFunction();
  expectTypeOf<UniSwipeActionResize>().toEqualTypeOf<UniHelper.UniSwipeActionResize>();

  expectTypeOf<UniSwipeActionCloseAll>().toBeFunction();
  expectTypeOf<UniSwipeActionCloseAll>().toEqualTypeOf<UniHelper.UniSwipeActionCloseAll>();

  expectTypeOf<UniSwipeActionProps>().toBeObject();
  expectTypeOf<UniSwipeActionProps>().toEqualTypeOf<UniHelper.UniSwipeActionProps>();

  expectTypeOf<UniSwipeAction>().not.toBeAny();
  expectTypeOf<UniSwipeAction>().toEqualTypeOf<UniHelper.UniSwipeAction>();
});
