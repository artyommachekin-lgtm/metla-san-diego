import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Sparkles, Home, Building2, Plane, Hammer, ChefHat, Bath, DollarSign, Flower2, Fan, Gem, Sofa, Bug, ThermometerSnowflake } from 'lucide-react';
import { COMPANY_NAME } from '../constants';
import { updatePageSEO, resetSEO } from '../utils/seo';

// Blog post data
export const BLOG_POSTS = [
    {
        slug: 'deep-cleaning-guide-san-diego',
        title: 'The Ultimate Deep Cleaning Guide for San Diego Homes',
        excerpt: 'Learn how to deep clean your San Diego home like a professional. Our step-by-step guide covers everything from tackling coastal dust and allergens to sanitizing every room.',
        category: 'Cleaning Guides',
        readTime: '8 min read',
        datePublished: '2024-01-15',
        image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&fm=webp',
        icon: Sparkles
    },
    {
        slug: 'how-to-deep-clean-the-kitchen',
        title: 'How to Deep Clean the Kitchen: Complete Guide',
        excerpt: 'Transform your San Diego kitchen with our expert deep cleaning guide. Step-by-step instructions for appliances, cabinets, and surfaces.',
        category: 'Kitchen',
        readTime: '10 min read',
        datePublished: '2024-02-05',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&fm=webp',
        icon: ChefHat
    },
    {
        slug: 'bathroom-deep-cleaning-checklist',
        title: 'Bathroom Deep Cleaning Checklist: The Ultimate Guide',
        excerpt: 'Our comprehensive bathroom cleaning checklist ensures every surface sparkles. Perfect for San Diego homes dealing with hard water and humidity.',
        category: 'Checklists',
        readTime: '8 min read',
        datePublished: '2024-02-04',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&fm=webp',
        icon: Bath
    },
    {
        slug: 'essential-post-construction-cleaning-checklist-for-homeowners',
        title: 'Essential Post-Construction Cleaning Checklist for Homeowners',
        excerpt: 'Just finished a renovation in San Diego? Use our detailed checklist to tackle construction dust and debris like a pro.',
        category: 'Specialty Cleaning',
        readTime: '9 min read',
        datePublished: '2024-02-03',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&fm=webp',
        icon: Hammer
    },
    {
        slug: 'how-much-does-a-deep-house-cleaning-cost',
        title: 'How Much Does a Deep House Cleaning Cost in San Diego?',
        excerpt: 'Understanding deep cleaning costs in San Diego. Get transparent pricing info and learn what factors affect your cleaning quote.',
        category: 'Pricing',
        readTime: '7 min read',
        datePublished: '2024-02-02',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&fm=webp',
        icon: DollarSign
    },
    {
        slug: 'top-10-spring-deep-cleaning-tips',
        title: 'Top 10 Spring Deep Cleaning Tips for San Diego Homes',
        excerpt: 'Get your San Diego home ready for spring with our expert cleaning tips. Tackle seasonal allergens and refresh every room.',
        category: 'Seasonal',
        readTime: '8 min read',
        datePublished: '2024-02-01',
        image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=800&fm=webp',
        icon: Flower2
    },
    // Batch 2: How-To Guides
    {
        slug: 'how-to-deep-clean-ceiling-fans',
        title: 'How to Deep Clean Ceiling Fans: The Complete Guide',
        excerpt: 'Master the pillowcase trick and keep your fans dust-free without making a mess. Essential tips for San Diego homes with year-round fan use.',
        category: 'How-To',
        readTime: '7 min read',
        datePublished: '2024-01-18',
        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&fm=webp',
        icon: Fan
    },
    {
        slug: 'how-to-deep-clean-granite-counters',
        title: 'How to Deep Clean Granite Countertops',
        excerpt: 'Protect your investment with proper granite care. Learn safe cleaning methods and tackle San Diego hard water stains.',
        category: 'How-To',
        readTime: '8 min read',
        datePublished: '2024-01-17',
        image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=800&fm=webp',
        icon: Gem
    },
    {
        slug: 'how-to-deep-clean-and-sanitize-upholstered-furniture',
        title: 'How to Deep Clean Upholstered Furniture',
        excerpt: 'Breathe new life into your sofas and chairs. Fabric-safe techniques for every upholstery type, plus pet owner extras.',
        category: 'How-To',
        readTime: '9 min read',
        datePublished: '2024-01-16',
        image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&fm=webp',
        icon: Sofa
    },
    {
        slug: 'how-to-eliminate-mold-from-your-home',
        title: 'How to Eliminate Mold From Your Home',
        excerpt: 'Safe mold removal methods and prevention tips. Know when to DIY and when to call professionals in San Diego\'s coastal climate.',
        category: 'How-To',
        readTime: '10 min read',
        datePublished: '2024-01-15',
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=800&fm=webp',
        icon: Bug
    },
    {
        slug: 'how-to-get-rid-of-bad-smell-in-the-fridge',
        title: 'How to Get Rid of Bad Smell in the Refrigerator',
        excerpt: 'That mystery smell? We\'ll help you find it, eliminate it, and prevent it from coming back. Complete fridge cleaning guide.',
        category: 'How-To',
        readTime: '8 min read',
        datePublished: '2024-01-14',
        image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=800&fm=webp',
        icon: ThermometerSnowflake
    },
    {
        slug: 'move-out-cleaning-checklist',
        title: 'Complete Move-Out Cleaning Checklist: Get Your Deposit Back',
        excerpt: 'Moving out? Use our comprehensive cleaning checklist to ensure you get your full security deposit back. Room-by-room guide with pro tips.',
        category: 'Checklists',
        readTime: '6 min read',
        datePublished: '2024-01-10',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&fm=webp',
        icon: Building2
    },
    {
        slug: 'benefits-of-regular-cleaning-service',
        title: 'Why Hire a Regular Cleaning Service? The Benefits Explained',
        excerpt: 'Discover the many benefits of recurring house cleaning services—from saving time to improving your family\'s health and protecting your investment.',
        category: 'Cleaning Tips',
        readTime: '5 min read',
        datePublished: '2024-01-20',
        image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&fm=webp',
        icon: Home
    },
    {
        slug: 'airbnb-turnover-cleaning-guide',
        title: 'Airbnb Cleaning Guide: Turnover Tips for Superhost Status',
        excerpt: 'Master the art of vacation rental turnovers with our comprehensive guide. Learn pro tips for fast, thorough cleaning that earns 5-star reviews.',
        category: 'Vacation Rentals',
        readTime: '7 min read',
        datePublished: '2024-01-18',
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=800&fm=webp',
        icon: Plane
    },
    {
        slug: 'post-construction-cleaning-guide',
        title: 'Post-Construction Cleaning: Complete Guide for San Diego Homes',
        excerpt: 'Just finished a renovation? Here\'s everything you need to know about getting construction dust out and your space move-in ready.',
        category: 'Specialty Cleaning',
        readTime: '7 min read',
        datePublished: '2024-01-12',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&fm=webp',
        icon: Hammer
    }
];


const BlogPage: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        updatePageSEO({
            title: `Cleaning Tips & Guides | ${COMPANY_NAME} Blog`,
            description: 'Expert cleaning tips, guides, and checklists from San Diego\'s trusted house cleaning professionals. Learn how to maintain a pristine home.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            {/* Hero */}
            <section className="bg-slate-900 text-white pt-32 pb-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                        Cleaning Tips & Expert Guides
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Professional insights and practical advice for keeping your San Diego home spotless.
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid gap-8">
                            {BLOG_POSTS.map((post) => (
                                <Link
                                    key={post.slug}
                                    to={`/blog/${post.slug}`}
                                    className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all flex flex-col md:flex-row"
                                >
                                    <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                            width={800}
                                            height={533}
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6 md:w-2/3 flex flex-col justify-center">
                                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                                            {post.title}
                                        </h2>
                                        <p className="text-slate-600 mb-4">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm text-slate-500">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {new Date(post.datePublished).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                {post.readTime}
                                            </span>
                                        </div>
                                        <span className="mt-4 text-teal-700 font-medium inline-flex items-center">
                                            Read article <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 mb-4">
                        Need Professional Help?
                    </h2>
                    <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                        Let our expert team handle the cleaning while you focus on what matters most.
                    </p>
                    <Link
                        to="/booking"
                        className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-bold rounded hover:bg-teal-700 transition-colors"
                    >
                        Get a Free Quote
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
