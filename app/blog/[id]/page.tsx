import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/lib/data';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';

// Required for static export — the index links to every post by id.
export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: String(post.id) }));
}

interface BlogPostPageProps {
  params: { id: string };
}

function findPost(id: string) {
  return blogPosts.find((post) => String(post.id) === id) ?? blogPosts[0];
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = findPost(params.id);

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    openGraph: {
      title: `${post.title} | NutriVault`,
      description: post.excerpt,
      type: 'article',
      images: [post.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | NutriVault`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = findPost(params.id);
  const relatedPosts = blogPosts.filter((other) => other.id !== post.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <article className="container mx-auto px-4 py-8">
        <nav className="mb-8">
          <ol className="flex flex-wrap items-center gap-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-sage">Home</Link></li>
            <li>/</li>
            <li><Link href="/blog" className="hover:text-sage">Blog</Link></li>
            <li>/</li>
            <li className="text-earth font-medium line-clamp-1">{post.category}</li>
          </ol>
        </nav>

        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex min-h-[44px] items-center text-gray-600 hover:text-sage mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          <Badge className="mb-4 bg-green-100 text-green-700">{post.category}</Badge>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-playfair text-earth mb-4">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-500 mb-8">
            <span className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </span>
            <span className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readTime}
            </span>
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>

          <div className="space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 shadow-sm border text-center">
            <h2 className="text-xl sm:text-2xl font-bold font-playfair text-earth mb-3">
              Taste what we write about
            </h2>
            <p className="text-gray-600 mb-6">
              Every product mentioned here is in our range, sourced and packed for freshness.
            </p>
            <Button asChild size="lg" className="btn-sage">
              <Link href="/products">Browse the Collection</Link>
            </Button>
          </div>
        </div>

        <section className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold font-playfair text-earth mb-8">
            Keep Reading
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Card key={related.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <Badge className="mb-3 bg-green-100 text-green-700">{related.category}</Badge>
                    <Link href={`/blog/${related.id}`}>
                      <h3 className="text-lg font-semibold text-earth hover:text-sage transition-colors mb-3 line-clamp-2">
                        {related.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{related.excerpt}</p>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/blog/${related.id}`}>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
