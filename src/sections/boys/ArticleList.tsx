import { component$ } from "@builder.io/qwik";
import type { Article } from "~/modules/boys/domain/Article";
import { ArticleCard } from "./ArticleCard";

interface ArticleListProps {
  articles: Article[]
}

export const ArticleList = component$<ArticleListProps>(({ articles }) => {
  return (<ul class="ease-linear">
    {articles.map(article => <li key={article.description}>
      <ArticleCard article={article} />
    </li>)}
  </ul>);
})

