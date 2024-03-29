import Link from 'next/link';
import { ArticleLink } from './article-link';
import { getClient } from '@/lib/client';
import { graphql } from '@/services/graphql';
import { ArticleNotFound } from './article-not-found';

export type ArticleCategory =
	| 'Web Development'
	| 'Software Engineering'
	| 'Adventures & Learnings'
	| 'Growth & Reflections'
	| 'All';

type ArticleListProps = {
	categories?: Exclude<ArticleCategory, 'All'>[];
	limit?: number;
	showSeeAll?: boolean;
};

const articlesQuery = graphql(`
	query GetArticleTitles($categories: StringFilterInput, $limit: Int) {
		articles(filters: { category: $categories }, pagination: { limit: $limit }) {
			data {
				attributes {
					title
					slug
					createdAt
				}
			}
		}
	}
`);

export const ArticleList = async ({ categories, limit, showSeeAll = true }: ArticleListProps) => {
	const client = getClient();
	const {
		data: { articles },
	} = await client.query({
		query: articlesQuery,
		variables: {
			categories: {
				in: categories,
			},
			limit,
		},
	});

	const thereIsArticles = Boolean(articles?.data.length);

	if (thereIsArticles) {
		return (
			<>
				<ul>
					{articles?.data.map(({ attributes }) => (
						<ArticleLink
							key={attributes?.slug as string}
							createdAt={attributes?.createdAt as string}
							slug={attributes?.slug as string}
						>
							{attributes?.title}
						</ArticleLink>
					))}
				</ul>
				{showSeeAll && (
					<Link
						className="block border-t-2 p-2 text-center text-base text-gray-600 transition-colors duration-100 hover:bg-gray-100 dark:border-secondary/30 dark:text-lightGray/75 dark:hover:bg-quaternary"
						href="/articles"
					>
						See all articles...
					</Link>
				)}
			</>
		);
	}

	return <ArticleNotFound withLink />;
};
