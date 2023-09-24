import type { Signal } from "@builder.io/qwik";
import { Slot, component$, createContextId, useContextProvider, useSignal, useTask$ } from "@builder.io/qwik";
import type { Boy } from "~/modules/boys/domain/Boy";
import type { BoyRepository } from "~/modules/boys/domain/BoyRepository";
import { createApiBoyRepository } from "~/modules/boys/infrastructure/ApiBoyRepository";



const repository: BoyRepository = createApiBoyRepository();

interface BoyContext {
  boys: Signal<Boy[]>;
}

export const boyContextId = createContextId<BoyContext>("kinder.boy");


export const BoyContextProvider = component$(() => {
  const boys = useSignal<Boy[]>([]);


  useTask$(async () => {
    boys.value = await repository.getAll();
  });

  useContextProvider(boyContextId, { boys });

  return (
    <>
      <Slot />
    </>
  );
});


