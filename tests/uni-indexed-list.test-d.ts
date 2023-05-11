import { describe, expectTypeOf } from 'vitest';
import type {
  UniIndexedListOption,
  UniIndexedListOnClickEvent,
  UniIndexedListOnClick,
  UniIndexedListProps,
  UniIndexedList,
  UniIndexedListInstance,
} from '@/index';

describe('UniIndexedList', () => {
  expectTypeOf<UniIndexedListOption>().toBeObject();
  expectTypeOf<UniIndexedListOption>().toEqualTypeOf<UniHelper.UniIndexedListOption>();

  expectTypeOf<UniIndexedListOnClickEvent>().toBeObject();
  expectTypeOf<UniIndexedListOnClickEvent>().toEqualTypeOf<UniHelper.UniIndexedListOnClickEvent>();

  expectTypeOf<UniIndexedListOnClick>().toBeFunction();
  expectTypeOf<UniIndexedListOnClick>().toEqualTypeOf<UniHelper.UniIndexedListOnClick>();

  expectTypeOf<UniIndexedListProps>().toBeObject();
  expectTypeOf<UniIndexedListProps>().toEqualTypeOf<UniHelper.UniIndexedListProps>();

  expectTypeOf<UniIndexedList>().not.toBeAny();
  expectTypeOf<UniIndexedList>().toEqualTypeOf<UniHelper.UniIndexedList>();

  expectTypeOf<UniIndexedListInstance>().not.toBeAny();
  expectTypeOf<UniIndexedListInstance>().toEqualTypeOf<UniHelper.UniIndexedListInstance>();
});
