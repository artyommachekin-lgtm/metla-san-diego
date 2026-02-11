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
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Professional deep cleaning supplies arranged in a bright San Diego home',
        icon: Sparkles
    },
    {
        slug: 'how-to-deep-clean-the-kitchen',
        title: 'How to Deep Clean the Kitchen: Complete Guide',
        excerpt: 'Transform your San Diego kitchen with our expert deep cleaning guide. Step-by-step instructions for appliances, cabinets, and surfaces.',
        category: 'Kitchen',
        readTime: '10 min read',
        datePublished: '2024-02-05',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Sparkling clean kitchen with gleaming countertops and polished appliances',
        icon: ChefHat
    },
    {
        slug: 'bathroom-deep-cleaning-checklist',
        title: 'Bathroom Deep Cleaning Checklist: The Ultimate Guide',
        excerpt: 'Our comprehensive bathroom cleaning checklist ensures every surface sparkles. Perfect for San Diego homes dealing with hard water and humidity.',
        category: 'Checklists',
        readTime: '8 min read',
        datePublished: '2024-02-04',
        image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Freshly cleaned bathroom with spotless white tile and shining fixtures',
        icon: Bath
    },
    {
        slug: 'essential-post-construction-cleaning-checklist-for-homeowners',
        title: 'Essential Post-Construction Cleaning Checklist for Homeowners',
        excerpt: 'Just finished a renovation in San Diego? Use our detailed checklist to tackle construction dust and debris like a pro.',
        category: 'Specialty Cleaning',
        readTime: '9 min read',
        datePublished: '2024-02-03',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Home renovation site with construction debris ready for professional cleanup',
        icon: Hammer
    },
    {
        slug: 'how-much-does-a-deep-house-cleaning-cost',
        title: 'How Much Does a Deep House Cleaning Cost in San Diego?',
        excerpt: 'Understanding deep cleaning costs in San Diego. Get transparent pricing info and learn what factors affect your cleaning quote.',
        category: 'Pricing',
        readTime: '7 min read',
        datePublished: '2024-02-02',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Homeowner reviewing cleaning service pricing and budget on a notepad',
        icon: DollarSign
    },
    {
        slug: 'top-10-spring-deep-cleaning-tips',
        title: 'Top 10 Spring Deep Cleaning Tips for San Diego Homes',
        excerpt: 'Get your San Diego home ready for spring with our expert cleaning tips. Tackle seasonal allergens and refresh every room.',
        category: 'Seasonal',
        readTime: '8 min read',
        datePublished: '2024-02-01',
        image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Bright living room with open windows letting in fresh spring air',
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
        image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Dusty ceiling fan blades in need of deep cleaning',
        icon: Fan
    },
    {
        slug: 'how-to-deep-clean-granite-counters',
        title: 'How to Deep Clean Granite Countertops',
        excerpt: 'Protect your investment with proper granite care. Learn safe cleaning methods and tackle San Diego hard water stains.',
        category: 'How-To',
        readTime: '8 min read',
        datePublished: '2024-01-17',
        image: 'https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Close-up of polished granite countertop in a modern San Diego kitchen',
        icon: Gem
    },
    {
        slug: 'how-to-deep-clean-and-sanitize-upholstered-furniture',
        title: 'How to Deep Clean Upholstered Furniture',
        excerpt: 'Breathe new life into your sofas and chairs. Fabric-safe techniques for every upholstery type, plus pet owner extras.',
        category: 'How-To',
        readTime: '9 min read',
        datePublished: '2024-01-16',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Plush upholstered sofa ready for professional fabric cleaning',
        icon: Sofa
    },
    {
        slug: 'how-to-eliminate-mold-from-your-home',
        title: 'How to Eliminate Mold From Your Home',
        excerpt: 'Safe mold removal methods and prevention tips. Know when to DIY and when to call professionals in San Diego\'s coastal climate.',
        category: 'How-To',
        readTime: '10 min read',
        datePublished: '2024-01-15',
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Mold growth on a damp bathroom wall requiring professional treatment',
        icon: Bug
    },
    {
        slug: 'how-to-get-rid-of-bad-smell-in-the-fridge',
        title: 'How to Get Rid of Bad Smell in the Refrigerator',
        excerpt: 'That mystery smell? We\'ll help you find it, eliminate it, and prevent it from coming back. Complete fridge cleaning guide.',
        category: 'How-To',
        readTime: '8 min read',
        datePublished: '2024-01-14',
        image: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Open refrigerator with organized shelves being cleaned out',
        icon: ThermometerSnowflake
    },
    {
        slug: 'move-out-cleaning-checklist',
        title: 'Complete Move-Out Cleaning Checklist for San Diego Renters',
        excerpt: 'Moving out? Use our comprehensive cleaning checklist to maximize your chances of getting your full security deposit back. Room-by-room guide with pro tips.',
        category: 'Checklists',
        readTime: '6 min read',
        datePublished: '2024-01-10',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Empty apartment room with moving boxes ready for move-out cleaning',
        icon: Building2
    },
    {
        slug: 'benefits-of-regular-cleaning-service',
        title: 'Why Hire a Regular Cleaning Service? The Benefits Explained',
        excerpt: 'Discover the many benefits of recurring house cleaning services—from saving time to improving your family\'s health and protecting your investment.',
        category: 'Cleaning Tips',
        readTime: '5 min read',
        datePublished: '2024-01-20',
        image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Spotless and well-maintained family living room after professional cleaning',
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
        image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Bright vacation rental bedroom prepared for incoming guests near the coast',
        icon: Key
    },
    {
        slug: 'how-to-deep-clean-your-laundry-room',
        title: 'How to Deep Clean Your Laundry Room',
        excerpt: 'From washing machine maintenance to dryer vent safety—essential tips for San Diego homeowners to keep laundry spaces fresh.',
        category: 'How-To',
        readTime: '7 min read',
        datePublished: '2024-01-19',
        image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Clean laundry room with modern washer and dryer units',
        icon: WashingMachine
    },
    {
        slug: 'how-to-clean-windows-like-a-pro',
        title: 'How to Clean Windows Like a Pro',
        excerpt: 'Professional techniques for streak-free, sparkling windows. Tips for San Diego homes dealing with salt spray and hard water.',
        category: 'How-To',
        readTime: '7 min read',
        datePublished: '2024-01-18',
        image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Crystal-clear window with sunlight streaming through after professional cleaning',
        icon: Columns
    },
    {
        slug: 'declutter-before-deep-cleaning',
        title: 'Declutter Before Deep Cleaning',
        excerpt: 'Why organizing before you clean leads to dramatically better results—and how to do it efficiently.',
        category: 'Organization',
        readTime: '6 min read',
        datePublished: '2024-01-17',
        image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Neatly organized shelves and clutter-free minimalist living space',
        icon: FolderOpen
    },
    {
        slug: 'how-to-remove-pet-odors-from-your-home',
        title: 'How to Remove Pet Odors From Your Home',
        excerpt: 'Effective techniques to find, treat, and prevent pet odors—because you love your pets, not their smell.',
        category: 'Pet Owners',
        readTime: '9 min read',
        datePublished: '2024-01-16',
        image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Friendly dog lounging on a freshly cleaned living room carpet',
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
        image: 'https://images.unsplash.com/photo-1622015663319-e97e697503ee?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Gleaming hardwood floors catching sunlight in a San Diego dining room',
        icon: Layers
    },
    {
        slug: 'how-to-deep-clean-your-mattress',
        title: 'How to Deep Clean Your Mattress',
        excerpt: 'Freshen up where you spend a third of your life. Essential tips for San Diego homes dealing with allergens and dust mites.',
        category: 'How-To',
        readTime: '7 min read',
        datePublished: '2024-01-21',
        image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Fresh white mattress with clean linens in a bright bedroom',
        icon: Moon
    },
    {
        slug: 'move-in-cleaning-checklist',
        title: 'Move-In Cleaning Checklist for San Diego Renters',
        excerpt: 'Start fresh in your new home. Clean before you unpack for the best results. Room-by-room guide.',
        category: 'Checklists',
        readTime: '7 min read',
        datePublished: '2024-01-20',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'New homeowner holding keys at the front door of their San Diego home',
        icon: Box
    },
    {
        slug: 'eco-friendly-cleaning-tips',
        title: 'Eco-Friendly Cleaning Tips',
        excerpt: 'Protect the planet while keeping your San Diego home spotless. Natural solutions that work just as well as harsh chemicals.',
        category: 'Green Living',
        readTime: '8 min read',
        datePublished: '2024-01-19',
        image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Eco-friendly cleaning products arranged alongside fresh green houseplants',
        icon: Leaf
    },
    {
        slug: 'how-to-clean-your-home-office',
        title: 'How to Clean Your Home Office',
        excerpt: 'A clean workspace is a productive workspace. Tips for San Diego remote workers to keep home offices fresh.',
        category: 'How-To',
        readTime: '7 min read',
        datePublished: '2024-01-18',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Clean and organized home office with a tidy desk and monitor setup',
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
        image: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Inviting outdoor patio with clean furniture and potted plants in the sun',
        icon: SunMedium
    },
    {
        slug: 'how-to-clean-stainless-steel-appliances',
        title: 'How to Clean Stainless Steel Appliances',
        excerpt: 'Get streak-free, fingerprint-free stainless steel. Tips for San Diego homes with hard water stains.',
        category: 'How-To',
        readTime: '6 min read',
        datePublished: '2024-01-23',
        image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Streak-free stainless steel refrigerator gleaming in a modern kitchen',
        icon: Sparkles
    },
    {
        slug: 'weekly-cleaning-schedule-guide',
        title: 'Weekly Cleaning Schedule Guide',
        excerpt: 'A realistic routine for busy San Diego lifestyles—keep your home consistently clean without stress.',
        category: 'Guides',
        readTime: '7 min read',
        datePublished: '2024-01-22',
        image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Weekly cleaning schedule written out in a planner notebook with a pen',
        icon: CalendarDays
    },
    {
        slug: 'allergy-proofing-your-home',
        title: 'Allergy-Proofing Your Home',
        excerpt: 'Reduce indoor allergens and breathe easier. Essential strategies for San Diego allergy season.',
        category: 'Health',
        readTime: '8 min read',
        datePublished: '2024-01-21',
        image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Dust-free bedroom with clean air, fresh linens, and bright natural light',
        icon: Shield
    },
    {
        slug: 'how-to-prepare-your-guest-room',
        title: 'How to Prepare Your Guest Room',
        excerpt: 'Make your visitors feel truly welcome. Perfect for San Diego hosts welcoming family and tourists.',
        category: 'Hospitality',
        readTime: '7 min read',
        datePublished: '2024-01-20',
        image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Welcoming guest bedroom with crisp hotel-style bedding and plush pillows',
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
