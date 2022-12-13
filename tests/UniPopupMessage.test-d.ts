import { describe, expectTypeOf } from 'vitest';
import type { UniPopupMessageType, UniPopupMessageProps, UniPopupMessage } from '@/UniPopupMessage';

describe('UniPopupMessage', () => {
  expectTypeOf<UniPopupMessageType>().toBeString();
  expectTypeOf<UniPopupMessageType>().toEqualTypeOf<UniHelper.UniPopupMessageType>();

  expectTypeOf<UniPopupMessageProps>().toBeObject();
  expectTypeOf<UniPopupMessageProps>().toEqualTypeOf<UniHelper.UniPopupMessageProps>();

  expectTypeOf<UniPopupMessage>().not.toBeAny();
  expectTypeOf<UniPopupMessage>().toEqualTypeOf<UniHelper.UniPopupMessage>();
});
