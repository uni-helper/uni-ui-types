import { describe, expectTypeOf } from 'vitest';
import type {
  UniTransitionModeClass,
  UniTransitionTimingFunction,
  UniTransitionConfig,
  UniTransitionType,
  UniTransitionInit,
  UniTransitionStep,
  UniTransitionRun,
  UniTransitionOnClick,
  UniTransitionOnChangeDetail,
  UniTransitionOnChange,
  UniTransitionProps,
  UniTransition,
  UniTransitionInstance,
} from '@/UniTransition';

describe('UniTransition', () => {
  expectTypeOf<UniTransitionModeClass>().toBeString();
  expectTypeOf<UniTransitionModeClass>().toEqualTypeOf<UniHelper.UniTransitionModeClass>();

  expectTypeOf<UniTransitionTimingFunction>().toBeString();
  expectTypeOf<UniTransitionTimingFunction>().toEqualTypeOf<UniHelper.UniTransitionTimingFunction>();

  expectTypeOf<UniTransitionConfig>().toBeObject();
  expectTypeOf<UniTransitionConfig>().toEqualTypeOf<UniHelper.UniTransitionConfig>();

  expectTypeOf<UniTransitionType>().toBeObject();
  expectTypeOf<UniTransitionType>().toEqualTypeOf<UniHelper.UniTransitionType>();

  expectTypeOf<UniTransitionInit>().toBeFunction();
  expectTypeOf<UniTransitionInit>().toEqualTypeOf<UniHelper.UniTransitionInit>();

  expectTypeOf<UniTransitionStep>().toBeFunction();
  expectTypeOf<UniTransitionStep>().toEqualTypeOf<UniHelper.UniTransitionStep>();

  expectTypeOf<UniTransitionRun>().toBeFunction();
  expectTypeOf<UniTransitionRun>().toEqualTypeOf<UniHelper.UniTransitionRun>();

  expectTypeOf<UniTransitionOnClick>().toBeFunction();
  expectTypeOf<UniTransitionOnClick>().toEqualTypeOf<UniHelper.UniTransitionOnClick>();

  expectTypeOf<UniTransitionOnChangeDetail>().toBeObject();
  expectTypeOf<UniTransitionOnChangeDetail>().toEqualTypeOf<UniHelper.UniTransitionOnChangeDetail>();

  expectTypeOf<UniTransitionOnChange>().toBeFunction();
  expectTypeOf<UniTransitionOnChange>().toEqualTypeOf<UniHelper.UniTransitionOnChange>();

  expectTypeOf<UniTransitionProps>().toBeObject();
  expectTypeOf<UniTransitionProps>().toEqualTypeOf<UniHelper.UniTransitionProps>();

  expectTypeOf<UniTransition>().not.toBeAny();
  expectTypeOf<UniTransition>().toEqualTypeOf<UniHelper.UniTransition>();

  expectTypeOf<UniTransitionInstance>().not.toBeAny();
  expectTypeOf<UniTransitionInstance>().toEqualTypeOf<UniHelper.UniTransitionInstance>();
});
