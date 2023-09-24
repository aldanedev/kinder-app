import { component$, useContext } from "@builder.io/qwik";
import { BoyCard } from "./BoyCard";
import { boyContextId } from "./BoyContextProvider";


export const BoyList = component$(() => {
  const { boys } = useContext(boyContextId);

  return (
    <section class="px-4">
      <header>
        <h1 class="text-2xl font-bold uppercase text-center my-5 text-gray-800">Lista de productos recolectados</h1>
      </header>
      <ul>
        {boys.value.map(boy => (
          <li key={boy.name}>
            <BoyCard boy={boy} />
          </li>
        ))}
      </ul>
    </section>
  )
})
