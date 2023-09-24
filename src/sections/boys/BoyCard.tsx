import { component$, useSignal } from "@builder.io/qwik";
import type { Boy } from "~/modules/boys/domain/Boy";
import { ArticleList } from "./ArticleList";

interface BoyCardProps {
  boy: Boy
}

export const BoyCard = component$<BoyCardProps>(({ boy }) => {
  const isOpen = useSignal(false);
  return (
    <section onClick$={() => isOpen.value = !isOpen.value}
      class="p-2 bg-white cursor-pointer rounded-lg my-2 flex flex-col shadow shadow-gray-200 border-2 border-blue-100">
      <header class="text-blue-600 my-1 font-bold flex justify-between">
        <h2>
          {boy.name}
        </h2>
        <span>
          {!isOpen.value &&
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#0F0F0F" />
            </svg>
          } 
          {
            isOpen.value &&
<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"/>
</svg>
          }
        </span>
      </header>
      {isOpen.value && <ArticleList articles={boy.articles} />}
    </section>

  )
})
