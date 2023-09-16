import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
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
