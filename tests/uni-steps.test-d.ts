import { describe, expectTypeOf } from 'vitest';
import type {
  UniStepsDirection,
  UniStepsOption,
  UniStepsProps,
  UniSteps,
  UniStepsInstance,
} from '@/index';

describe('UniSteps', () => {
  expectTypeOf<UniStepsDirection>().toBeString();
  expectTypeOf<UniStepsDirection>().toEqualTypeOf<UniHelper.UniStepsDirection>();

  expectTypeOf<UniStepsOption>().toBeObject();
  expectTypeOf<UniStepsOption>().toEqualTypeOf<UniHelper.UniStepsOption>();

  expectTypeOf<UniStepsProps>().toBeObject();
  expectTypeOf<UniStepsProps>().toEqualTypeOf<UniHelper.UniStepsProps>();

  expectTypeOf<UniSteps>().not.toBeAny();
  expectTypeOf<UniSteps>().toEqualTypeOf<UniHelper.UniSteps>();

  expectTypeOf<UniStepsInstance>().not.toBeAny();
  expectTypeOf<UniStepsInstance>().toEqualTypeOf<UniHelper.UniStepsInstance>();
});
