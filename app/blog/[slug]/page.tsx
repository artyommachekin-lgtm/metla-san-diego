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

  const title = `${post.title} | ${COMPANY_NAME}`;

  return {
    title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title,
      description: post.excerpt,
      url: `/blog/${params.slug}`,
      images: [{ url: post.image, alt: post.imageAlt }],
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: post.excerpt,
    },
  };
}

export default function BlogPostRoute({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);
  if (!post) notFound();

  return <BlogPostContent slug={params.slug} />;
}
