import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Sparkles, Home, Building2, Plane, Hammer, ChefHat, Bath, DollarSign, Flower2, Fan, Gem, Sofa, Bug, ThermometerSnowflake, Key, WashingMachine, Columns, FolderOpen, PawPrint, Layers, Moon, Box, Leaf, Monitor, SunMedium, RefrigeratorIcon, CalendarDays, Shield, Bed } from 'lucide-react';
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
        image: 'https://images.unsplash.com/photo-1749214317455-efbdd57df844?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Cleaning powder being added to a mop bucket for deep house cleaning',
        icon: Sparkles
    },
    {
        slug: 'how-to-deep-clean-the-kitchen',
        title: 'How to Deep Clean the Kitchen: Complete Guide',
        excerpt: 'Transform your San Diego kitchen with our expert deep cleaning guide. Step-by-step instructions for appliances, cabinets, and surfaces.',
        category: 'Kitchen',
        readTime: '10 min read',
        datePublished: '2024-02-05',
        image: 'https://images.unsplash.com/photo-1690310588533-6043216b0b5f?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Clean modern kitchen with marble countertop and white cabinets',
        icon: ChefHat
    },
    {
        slug: 'bathroom-deep-cleaning-checklist',
        title: 'Bathroom Deep Cleaning Checklist: The Ultimate Guide',
        excerpt: 'Our comprehensive bathroom cleaning checklist ensures every surface sparkles. Perfect for San Diego homes dealing with hard water and humidity.',
        category: 'Checklists',
        readTime: '8 min read',
        datePublished: '2024-02-04',
        image: 'https://images.unsplash.com/photo-1721564130821-5ac091ee399c?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Spacious bathroom with bathtub, sink, and walk-in shower ready for deep cleaning',
        icon: Bath
    },
    {
        slug: 'essential-post-construction-cleaning-checklist-for-homeowners',
        title: 'Essential Post-Construction Cleaning Checklist for Homeowners',
        excerpt: 'Just finished a renovation in San Diego? Use our detailed checklist to tackle construction dust and debris like a pro.',
        category: 'Specialty Cleaning',
        readTime: '9 min read',
        datePublished: '2024-02-03',
        image: 'https://images.unsplash.com/photo-1768321914688-86ff62032d47?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Interior room under construction with exposed framing and unfinished walls',
        icon: Hammer
    },
    {
        slug: 'how-much-does-a-deep-house-cleaning-cost',
        title: 'How Much Does a Deep House Cleaning Cost in San Diego?',
        excerpt: 'Understanding deep cleaning costs in San Diego. Get transparent pricing info and learn what factors affect your cleaning quote.',
        category: 'Pricing',
        readTime: '7 min read',
        datePublished: '2024-02-02',
        image: 'https://images.unsplash.com/photo-1746221331496-a87689fc8eb9?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Calculator and office supplies on a desk for estimating cleaning costs',
        icon: DollarSign
    },
    {
        slug: 'top-10-spring-deep-cleaning-tips',
        title: 'Top 10 Spring Deep Cleaning Tips for San Diego Homes',
        excerpt: 'Get your San Diego home ready for spring with our expert cleaning tips. Tackle seasonal allergens and refresh every room.',
        category: 'Seasonal',
        readTime: '8 min read',
        datePublished: '2024-02-01',
        image: 'https://images.unsplash.com/photo-1763412050485-d7e1688f8858?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Open door in a bright room with plants letting in fresh spring air',
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
        image: 'https://images.unsplash.com/photo-1680703261560-11c234762abe?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Bedroom with ceiling fan mounted above a bed with wooden accents',
        icon: Fan
    },
    {
        slug: 'how-to-deep-clean-granite-counters',
        title: 'How to Deep Clean Granite Countertops',
        excerpt: 'Protect your investment with proper granite care. Learn safe cleaning methods and tackle San Diego hard water stains.',
        category: 'How-To',
        readTime: '8 min read',
        datePublished: '2024-01-17',
        image: 'https://images.unsplash.com/photo-1636628751643-2a8c9fd001d4?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Kitchen with marble countertops and bar stools in a modern home',
        icon: Gem
    },
    {
        slug: 'how-to-deep-clean-and-sanitize-upholstered-furniture',
        title: 'How to Deep Clean Upholstered Furniture',
        excerpt: 'Breathe new life into your sofas and chairs. Fabric-safe techniques for every upholstery type, plus pet owner extras.',
        category: 'How-To',
        readTime: '9 min read',
        datePublished: '2024-01-16',
        image: 'https://images.unsplash.com/photo-1759722667224-a5a7143fcbcf?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Close-up of light grey upholstered fabric sofa ready for deep cleaning',
        icon: Sofa
    },
    {
        slug: 'how-to-eliminate-mold-from-your-home',
        title: 'How to Eliminate Mold From Your Home',
        excerpt: 'Safe mold removal methods and prevention tips. Know when to DIY and when to call professionals in San Diego\'s coastal climate.',
        category: 'How-To',
        readTime: '10 min read',
        datePublished: '2024-01-15',
        image: 'https://images.unsplash.com/photo-1692911436905-ec0f5a6cf910?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Damaged bathroom wall showing moisture and mold issues needing treatment',
        icon: Bug
    },
    {
        slug: 'how-to-get-rid-of-bad-smell-in-the-fridge',
        title: 'How to Get Rid of Bad Smell in the Refrigerator',
        excerpt: 'That mystery smell? We\'ll help you find it, eliminate it, and prevent it from coming back. Complete fridge cleaning guide.',
        category: 'How-To',
        readTime: '8 min read',
        datePublished: '2024-01-14',
        image: 'https://images.unsplash.com/photo-1536854704214-f489b6693769?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Open refrigerator showing shelves ready for deep cleaning and organizing',
        icon: ThermometerSnowflake
    },
    {
        slug: 'move-out-cleaning-checklist',
        title: 'Complete Move-Out Cleaning Checklist for San Diego Renters',
        excerpt: 'Moving out? Use our comprehensive cleaning checklist to maximize your chances of getting your full security deposit back. Room-by-room guide with pro tips.',
        category: 'Checklists',
        readTime: '6 min read',
        datePublished: '2024-01-10',
        image: 'https://images.unsplash.com/photo-1757742690834-aa581b9f53b2?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Empty room with wooden floor and large window ready for move-out cleaning',
        icon: Building2
    },
    {
        slug: 'benefits-of-regular-cleaning-service',
        title: 'Why Hire a Regular Cleaning Service? The Benefits Explained',
        excerpt: 'Discover the many benefits of recurring house cleaning services—from saving time to improving your family\'s health and protecting your investment.',
        category: 'Cleaning Tips',
        readTime: '5 min read',
        datePublished: '2024-01-20',
        image: 'https://images.unsplash.com/photo-1749705319317-f9a2bf24fe3d?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Cozy living room with large white sofa and bookshelf maintained by regular cleaning',
        icon: Home
    },
    // Batch 3: Specialty Guides
    {
        slug: 'vacation-rental-cleaning-tips-for-hosts',
        title: 'Vacation Rental Cleaning Tips for San Diego Hosts',
        excerpt: 'Master the turnover process and keep your guests giving you 5-star reviews for cleanliness. Tips for Airbnb and VRBO hosts.',
        category: 'For Hosts',
        readTime: '8 min read',
        datePublished: '2024-01-20',
        image: 'https://images.unsplash.com/photo-1770414173168-f6c666501225?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Bright coastal-themed vacation rental bedroom with a large bed prepared for guests',
        icon: Key
    },
    {
        slug: 'how-to-deep-clean-your-laundry-room',
        title: 'How to Deep Clean Your Laundry Room',
        excerpt: 'From washing machine maintenance to dryer vent safety—essential tips for San Diego homeowners to keep laundry spaces fresh.',
        category: 'How-To',
        readTime: '7 min read',
        datePublished: '2024-01-19',
        image: 'https://images.unsplash.com/photo-1655041448985-f6666cba2d6c?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Laundry room with washer and dryer ready for deep cleaning',
        icon: WashingMachine
    },
    {
        slug: 'how-to-clean-windows-like-a-pro',
        title: 'How to Clean Windows Like a Pro',
        excerpt: 'Professional techniques for streak-free, sparkling windows. Tips for San Diego homes dealing with salt spray and hard water.',
        category: 'How-To',
        readTime: '7 min read',
        datePublished: '2024-01-18',
        image: 'https://images.unsplash.com/photo-1596063323819-0334f21e996c?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Clean white wooden framed glass window letting in natural sunlight',
        icon: Columns
    },
    {
        slug: 'declutter-before-deep-cleaning',
        title: 'Declutter Before Deep Cleaning',
        excerpt: 'Why organizing before you clean leads to dramatically better results—and how to do it efficiently.',
        category: 'Organization',
        readTime: '6 min read',
        datePublished: '2024-01-17',
        image: 'https://images.unsplash.com/photo-1668911491507-be365acf69ee?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'White kitchen with neatly organized open shelves and clutter-free counters',
        icon: FolderOpen
    },
    {
        slug: 'how-to-remove-pet-odors-from-your-home',
        title: 'How to Remove Pet Odors From Your Home',
        excerpt: 'Effective techniques to find, treat, and prevent pet odors—because you love your pets, not their smell.',
        category: 'Pet Owners',
        readTime: '9 min read',
        datePublished: '2024-01-16',
        image: 'https://images.unsplash.com/photo-1663551385059-24dbfc8fe575?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Dog sitting on a living room rug that needs pet odor treatment',
        icon: PawPrint
    },
    // Batch 4: Specialty Guides
    {
        slug: 'how-to-clean-hardwood-and-tile-floors',
        title: 'How to Clean Hardwood and Tile Floors',
        excerpt: 'The right techniques for beautiful, long-lasting floors. Tips for San Diego homes dealing with sand and hard water.',
        category: 'How-To',
        readTime: '8 min read',
        datePublished: '2024-01-22',
        image: 'https://images.unsplash.com/photo-1769736436809-eab3de70b175?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Modern living room with herringbone hardwood floor and contemporary artwork',
        icon: Layers
    },
    {
        slug: 'how-to-deep-clean-your-mattress',
        title: 'How to Deep Clean Your Mattress',
        excerpt: 'Freshen up where you spend a third of your life. Essential tips for San Diego homes dealing with allergens and dust mites.',
        category: 'How-To',
        readTime: '7 min read',
        datePublished: '2024-01-21',
        image: 'https://images.unsplash.com/photo-1762199904077-1c83cebbd205?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Neatly made bed with white linens and pillows after mattress deep cleaning',
        icon: Moon
    },
    {
        slug: 'move-in-cleaning-checklist',
        title: 'Move-In Cleaning Checklist for San Diego Renters',
        excerpt: 'Start fresh in your new home. Clean before you unpack for the best results. Room-by-room guide.',
        category: 'Checklists',
        readTime: '7 min read',
        datePublished: '2024-01-20',
        image: 'https://images.unsplash.com/photo-1741156386380-0236c72eb6f9?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Person holding house keys in front of the entrance to their new home',
        icon: Box
    },
    {
        slug: 'eco-friendly-cleaning-tips',
        title: 'Eco-Friendly Cleaning Tips',
        excerpt: 'Protect the planet while keeping your San Diego home spotless. Natural solutions that work just as well as harsh chemicals.',
        category: 'Green Living',
        readTime: '8 min read',
        datePublished: '2024-01-19',
        image: 'https://images.unsplash.com/photo-1601389784093-1086062cb290?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Person holding eco-friendly spray bottle for natural household cleaning',
        icon: Leaf
    },
    {
        slug: 'how-to-clean-your-home-office',
        title: 'How to Clean Your Home Office',
        excerpt: 'A clean workspace is a productive workspace. Tips for San Diego remote workers to keep home offices fresh.',
        category: 'How-To',
        readTime: '7 min read',
        datePublished: '2024-01-18',
        image: 'https://images.unsplash.com/photo-1760278042149-bbed9b84ba81?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Clean home office desk setup with computer monitor and indoor plant',
        icon: Monitor
    },
    // Batch 5: Final Guides
    {
        slug: 'how-to-clean-your-outdoor-patio',
        title: 'How to Clean Your Outdoor Patio',
        excerpt: 'Keep your outdoor living space beautiful and inviting. Tips for San Diego\'s year-round patio season.',
        category: 'How-To',
        readTime: '8 min read',
        datePublished: '2024-01-24',
        image: 'https://images.unsplash.com/photo-1714296972268-1022b221d415?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Wooden table and chairs on an outdoor patio ready for cleaning',
        icon: SunMedium
    },
    {
        slug: 'how-to-clean-stainless-steel-appliances',
        title: 'How to Clean Stainless Steel Appliances',
        excerpt: 'Get streak-free, fingerprint-free stainless steel. Tips for San Diego homes with hard water stains.',
        category: 'How-To',
        readTime: '6 min read',
        datePublished: '2024-01-23',
        image: 'https://images.unsplash.com/photo-1707255280298-e540809f4c01?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Kitchen filled with stainless steel appliances including a refrigerator and range',
        icon: Sparkles
    },
    {
        slug: 'weekly-cleaning-schedule-guide',
        title: 'Weekly Cleaning Schedule Guide',
        excerpt: 'A realistic routine for busy San Diego lifestyles—keep your home consistently clean without stress.',
        category: 'Guides',
        readTime: '7 min read',
        datePublished: '2024-01-22',
        image: 'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'White weekly planner with pen on top for scheduling cleaning tasks',
        icon: CalendarDays
    },
    {
        slug: 'allergy-proofing-your-home',
        title: 'Allergy-Proofing Your Home',
        excerpt: 'Reduce indoor allergens and breathe easier. Essential strategies for San Diego allergy season.',
        category: 'Health',
        readTime: '8 min read',
        datePublished: '2024-01-21',
        image: 'https://images.unsplash.com/photo-1593030019566-d681b01e877f?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Clean bedroom with white bed linen near window allowing fresh air circulation',
        icon: Shield
    },
    {
        slug: 'how-to-prepare-your-guest-room',
        title: 'How to Prepare Your Guest Room',
        excerpt: 'Make your visitors feel truly welcome. Perfect for San Diego hosts welcoming family and tourists.',
        category: 'Hospitality',
        readTime: '7 min read',
        datePublished: '2024-01-20',
        image: 'https://images.unsplash.com/photo-1742821855639-476d4e1b5cea?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Inviting hotel-style guest room with natural light and welcoming bedding',
        icon: Bed
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
                                            srcSet={`${post.image.split('?')[0]}?w=400&h=300&fit=crop&fm=webp&q=60 400w, ${post.image.split('?')[0]}?w=800&h=600&fit=crop&fm=webp&q=70 800w`}
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            alt={post.imageAlt || post.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                            decoding="async"
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
