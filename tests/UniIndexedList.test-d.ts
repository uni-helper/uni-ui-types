import { describe, expectTypeOf } from 'vitest';
import type {
  UniIndexedListOption,
  UniIndexedListOnClickDetail,
  UniIndexedListOnClick,
  UniIndexedListProps,
  UniIndexedList,
  UniIndexedListInstance,
} from '@/UniIndexedList';

describe('UniIndexedList', () => {
  expectTypeOf<UniIndexedListOption>().toBeObject();
  expectTypeOf<UniIndexedListOption>().toEqualTypeOf<UniHelper.UniIndexedListOption>();

  expectTypeOf<UniIndexedListOnClickDetail>().toBeObject();
  expectTypeOf<UniIndexedListOnClickDetail>().toEqualTypeOf<UniHelper.UniIndexedListOnClickDetail>();

  expectTypeOf<UniIndexedListOnClick>().toBeFunction();
  expectTypeOf<UniIndexedListOnClick>().toEqualTypeOf<UniHelper.UniIndexedListOnClick>();

  expectTypeOf<UniIndexedListProps>().toBeObject();
  expectTypeOf<UniIndexedListProps>().toEqualTypeOf<UniHelper.UniIndexedListProps>();

  expectTypeOf<UniIndexedList>().not.toBeAny();
  expectTypeOf<UniIndexedList>().toEqualTypeOf<UniHelper.UniIndexedList>();

  expectTypeOf<UniIndexedListInstance>().not.toBeAny();
  expectTypeOf<UniIndexedListInstance>().toEqualTypeOf<UniHelper.UniIndexedListInstance>();
});
