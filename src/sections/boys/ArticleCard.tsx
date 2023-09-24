import { component$ } from "@builder.io/qwik"
import type { Article } from "~/modules/boys/domain/Article"

interface ArticleCardProps {
  article: Article
}

export const ArticleCard = component$<ArticleCardProps>(({ article }) => {
  return (
    <section class="flex px-1 mt-2 gap-2 border-t">
      <span class="text-gray-900  font-medium text-lg">{article.quantity}</span>
      <span class="text-gray-900 text-lg w-full">{article.description}</span>
      <span class="text-gray-900 text-lg w-36">{article.receiptDate}</span>
    </section>
  )
})
