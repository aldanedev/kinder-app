import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { BoyContextProvider } from "~/sections/boys/BoyContextProvider";
import { BoyList } from "~/sections/boys/BoyList";

export default component$(() => {
  return (
    <>
      <BoyContextProvider>
        <BoyList />
      </BoyContextProvider>
    </>
  );
});

export const head: DocumentHead = {
  title: "Lista de productos recolectados",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
