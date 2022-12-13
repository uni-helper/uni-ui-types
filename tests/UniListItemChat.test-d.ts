import { describe, expectTypeOf } from 'vitest';
import type {
  UniListItemChatLink,
  UniListItemChatAvatar,
  UniListItemChatOnClick,
  UniListItemChatProps,
  UniListItemChat,
} from '@/UniListItemChat';

describe('UniListItemChat', () => {
  expectTypeOf<UniListItemChatLink>().toBeString();
  expectTypeOf<UniListItemChatLink>().toEqualTypeOf<UniHelper.UniListItemChatLink>();

  expectTypeOf<UniListItemChatAvatar>().toBeObject();
  expectTypeOf<UniListItemChatAvatar>().toEqualTypeOf<UniHelper.UniListItemChatAvatar>();

  expectTypeOf<UniListItemChatOnClick>().toBeFunction();
  expectTypeOf<UniListItemChatOnClick>().toEqualTypeOf<UniHelper.UniListItemChatOnClick>();

  expectTypeOf<UniListItemChatProps>().toBeObject();
  expectTypeOf<UniListItemChatProps>().toEqualTypeOf<UniHelper.UniListItemChatProps>();

  expectTypeOf<UniListItemChat>().not.toBeAny();
  expectTypeOf<UniListItemChat>().toEqualTypeOf<UniHelper.UniListItemChat>();
});
