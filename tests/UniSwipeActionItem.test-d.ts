import { describe, expectTypeOf } from 'vitest';
import type {
  UniSwipeActionItemShow,
  UniSwipeActionItemOption,
  UniSwipeActionItemOnClickDetail,
  UniSwipeActionItemOnClick,
  UniSwipeActionItemOnChange,
  UniSwipeActionItemProps,
  UniSwipeActionItem,
  UniSwipeActionItemInstance,
} from '@/UniSwipeActionItem';

describe('UniSwipeActionItem', () => {
  expectTypeOf<UniSwipeActionItemShow>().toBeString();
  expectTypeOf<UniSwipeActionItemShow>().toEqualTypeOf<UniHelper.UniSwipeActionItemShow>();

  expectTypeOf<UniSwipeActionItemOption>().toBeObject();
  expectTypeOf<UniSwipeActionItemOption>().toEqualTypeOf<UniHelper.UniSwipeActionItemOption>();

  expectTypeOf<UniSwipeActionItemOnClickDetail>().toBeObject();
  expectTypeOf<UniSwipeActionItemOnClickDetail>().toEqualTypeOf<UniHelper.UniSwipeActionItemOnClickDetail>();

  expectTypeOf<UniSwipeActionItemOnClick>().toBeFunction();
  expectTypeOf<UniSwipeActionItemOnClick>().toEqualTypeOf<UniHelper.UniSwipeActionItemOnClick>();

  expectTypeOf<UniSwipeActionItemOnChange>().toBeObject();
  expectTypeOf<UniSwipeActionItemOnChange>().toEqualTypeOf<UniHelper.UniSwipeActionItemOnChange>();

  expectTypeOf<UniSwipeActionItemProps>().toBeObject();
  expectTypeOf<UniSwipeActionItemProps>().toEqualTypeOf<UniHelper.UniSwipeActionItemProps>();

  expectTypeOf<UniSwipeActionItem>().not.toBeAny();
  expectTypeOf<UniSwipeActionItem>().toEqualTypeOf<UniHelper.UniSwipeActionItem>();

  expectTypeOf<UniSwipeActionItemInstance>().not.toBeAny();
  expectTypeOf<UniSwipeActionItemInstance>().toEqualTypeOf<UniHelper.UniSwipeActionItemInstance>();
});
