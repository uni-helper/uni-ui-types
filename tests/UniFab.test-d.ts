import { describe, expectTypeOf } from 'vitest';
import type {
  UniFabPattern,
  UniFabHorizontal,
  UniFabVertical,
  UniFabDirection,
  UniFabContentElement,
  UniFabContent,
  UniFabOnTriggerDetail,
  UniFabOnTrigger,
  UniFabOnFabClick,
  UniFabProps,
  UniFab,
  UniFabInstance,
} from '@/UniFab';

describe('UniFab', () => {
  expectTypeOf<UniFabPattern>().toBeObject();
  expectTypeOf<UniFabPattern>().toEqualTypeOf<UniHelper.UniFabPattern>();

  expectTypeOf<UniFabHorizontal>().toBeString();
  expectTypeOf<UniFabHorizontal>().toEqualTypeOf<UniHelper.UniFabHorizontal>();

  expectTypeOf<UniFabVertical>().toBeString();
  expectTypeOf<UniFabVertical>().toEqualTypeOf<UniHelper.UniFabVertical>();

  expectTypeOf<UniFabDirection>().toBeString();
  expectTypeOf<UniFabDirection>().toEqualTypeOf<UniHelper.UniFabDirection>();

  expectTypeOf<UniFabContentElement>().toBeObject();
  expectTypeOf<UniFabContentElement>().toEqualTypeOf<UniHelper.UniFabContentElement>();

  expectTypeOf<UniFabContent>().toBeArray();
  expectTypeOf<UniFabContent>().toEqualTypeOf<UniHelper.UniFabContent>();

  expectTypeOf<UniFabOnTriggerDetail>().toBeObject();
  expectTypeOf<UniFabOnTriggerDetail>().toEqualTypeOf<UniHelper.UniFabOnTriggerDetail>();

  expectTypeOf<UniFabOnTrigger>().toBeFunction();
  expectTypeOf<UniFabOnTrigger>().toEqualTypeOf<UniHelper.UniFabOnTrigger>();

  expectTypeOf<UniFabOnFabClick>().toBeFunction();
  expectTypeOf<UniFabOnFabClick>().toEqualTypeOf<UniHelper.UniFabOnFabClick>();

  expectTypeOf<UniFabProps>().toBeObject();
  expectTypeOf<UniFabProps>().toEqualTypeOf<UniHelper.UniFabProps>();

  expectTypeOf<UniFab>().not.toBeAny();
  expectTypeOf<UniFab>().toEqualTypeOf<UniHelper.UniFab>();

  expectTypeOf<UniFabInstance>().not.toBeAny();
  expectTypeOf<UniFabInstance>().toEqualTypeOf<UniHelper.UniFabInstance>();
});
