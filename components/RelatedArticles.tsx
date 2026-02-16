import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog-posts';
import { getRelatedPostSlugs } from '../utils/internalLinks';

interface RelatedArticlesProps {
    currentSlug: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ currentSlug }) => {
    const relatedSlugs = getRelatedPostSlugs(currentSlug);
    const relatedPosts = relatedSlugs
        .map(slug => BLOG_POSTS.find(p => p.slug === slug))
        .filter(Boolean);

    if (relatedPosts.length === 0) return null;

    return (
        <div className="bg-slate-50 p-6 rounded-xl my-8 not-prose">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-600" />
                Related Articles
            </h3>
            <div className="grid gap-3">
                {relatedPosts.map((post) => (
                    <Link
                        key={post!.slug}
                        href={`/blog/${post!.slug}`}
                        className="flex items-start gap-3 p-3 bg-white rounded-lg border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-colors group"
                    >
                        <div className="flex-1">
                            <h4 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors text-sm">
                                {post!.title}
                            </h4>
                            <p className="text-xs text-slate-500 mt-1">{post!.readTime}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-teal-500 flex-shrink-0 mt-1" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default RelatedArticles;
