import { describe, expectTypeOf } from 'vitest';
import type {
  UniCountdownOnUpdate,
  UniCountdownOnTimeup,
  UniCountdownProps,
  UniCountdown,
} from '@/UniCountdown';

describe('UniCountdown', () => {
  expectTypeOf<UniCountdownOnUpdate>().toBeFunction();
  expectTypeOf<UniCountdownOnUpdate>().toEqualTypeOf<UniHelper.UniCountdownOnUpdate>();

  expectTypeOf<UniCountdownOnTimeup>().toBeFunction();
  expectTypeOf<UniCountdownOnTimeup>().toEqualTypeOf<UniHelper.UniCountdownOnTimeup>();

  expectTypeOf<UniCountdownProps>().toBeObject();
  expectTypeOf<UniCountdownProps>().toEqualTypeOf<UniHelper.UniCountdownProps>();

  expectTypeOf<UniCountdown>().not.toBeAny();
  expectTypeOf<UniCountdown>().toEqualTypeOf<UniHelper.UniCountdown>();
});
