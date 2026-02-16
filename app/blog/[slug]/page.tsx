import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/data/blog-posts';
import { COMPANY_NAME } from '@/constants';
import BlogPostContent from './BlogPostContent';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | ${COMPANY_NAME}`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, alt: post.imageAlt }],
      type: 'article',
      publishedTime: post.datePublished,
    },
  };
}

export default function BlogPostRoute({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) notFound();

  return <BlogPostContent slug={params.slug} />;
}
