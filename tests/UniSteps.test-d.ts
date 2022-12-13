import { describe, expectTypeOf } from 'vitest';
import type { UniStepsDirection, UniStepsOption, UniStepsProps, UniSteps } from '@/UniSteps';

describe('UniSteps', () => {
  expectTypeOf<UniStepsDirection>().toBeString();
  expectTypeOf<UniStepsDirection>().toEqualTypeOf<UniHelper.UniStepsDirection>();

  expectTypeOf<UniStepsOption>().toBeObject();
  expectTypeOf<UniStepsOption>().toEqualTypeOf<UniHelper.UniStepsOption>();

  expectTypeOf<UniStepsProps>().toBeObject();
  expectTypeOf<UniStepsProps>().toEqualTypeOf<UniHelper.UniStepsProps>();

  expectTypeOf<UniSteps>().not.toBeAny();
  expectTypeOf<UniSteps>().toEqualTypeOf<UniHelper.UniSteps>();
});
