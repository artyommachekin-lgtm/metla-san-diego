export interface BlogPostAuthor {
    name: string;
    slug: string;
    role: string;
    bio: string;
}

export const DEFAULT_AUTHOR: BlogPostAuthor = {
    name: 'Art Machekin',
    slug: 'art-machekin',
    role: 'Founder',
    bio: 'Art Machekin is the founder of Metla House Cleaning. Before starting the company, Art worked as a professional cleaner — hands-on experience that gives him a deep understanding of the techniques and details that matter most in delivering a spotless home.',
};

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    datePublished: string;
    dateModified: string;
    image: string;
    imageAlt: string;
    iconName: string;
    author: BlogPostAuthor;
}

export const BLOG_POSTS: BlogPost[] = [
    {
        slug: 'deep-cleaning-guide-san-diego',
        title: 'The Ultimate Deep Cleaning Guide for San Diego Homes',
        excerpt: 'Learn how to deep clean your San Diego home like a professional. Our step-by-step guide covers everything from tackling coastal dust and allergens to sanitizing every room.',
        category: 'Cleaning Guides',
        readTime: '8 min read',
        datePublished: '2024-01-15',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1749214317455-efbdd57df844?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Cleaning powder being added to a mop bucket for deep house cleaning',
        iconName: 'Sparkles',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-to-deep-clean-the-kitchen',
        title: 'How to Deep Clean the Kitchen: Complete Guide',
        excerpt: 'Transform your San Diego kitchen with our expert deep cleaning guide. Step-by-step instructions for appliances, cabinets, and surfaces.',
        category: 'Kitchen',
        readTime: '10 min read',
        datePublished: '2024-02-05',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1690310588533-6043216b0b5f?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Clean modern kitchen with marble countertop and white cabinets',
        iconName: 'ChefHat',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'bathroom-deep-cleaning-checklist',
        title: 'Bathroom Deep Cleaning Checklist: The Ultimate Guide',
        excerpt: 'Our comprehensive bathroom cleaning checklist ensures every surface sparkles. Perfect for San Diego homes dealing with hard water and humidity.',
        category: 'Checklists',
        readTime: '8 min read',
        datePublished: '2024-02-04',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1721564130821-5ac091ee399c?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Spacious bathroom with bathtub, sink, and walk-in shower ready for deep cleaning',
        iconName: 'Bath',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'essential-post-construction-cleaning-checklist-for-homeowners',
        title: 'Post-Construction Cleaning Checklist for Homeowners',
        excerpt: 'Just finished a renovation in San Diego? Use our detailed checklist to tackle construction dust and debris like a pro.',
        category: 'Specialty Cleaning',
        readTime: '9 min read',
        datePublished: '2024-02-03',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1768321914688-86ff62032d47?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Interior room under construction with exposed framing and unfinished walls',
        iconName: 'Hammer',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-much-does-a-deep-house-cleaning-cost',
        title: 'How Much Does a Deep House Cleaning Cost in San Diego?',
        excerpt: 'Understanding deep cleaning costs in San Diego. Get transparent pricing info and learn what factors affect your cleaning quote.',
        category: 'Pricing',
        readTime: '7 min read',
        datePublished: '2024-02-02',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1746221331496-a87689fc8eb9?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Calculator and office supplies on a desk for estimating cleaning costs',
        iconName: 'DollarSign',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'top-10-spring-deep-cleaning-tips',
        title: 'Top 10 Spring Deep Cleaning Tips for San Diego Homes',
        excerpt: 'Get your San Diego home ready for spring with our expert cleaning tips. Tackle seasonal allergens and refresh every room.',
        category: 'Seasonal',
        readTime: '8 min read',
        datePublished: '2024-02-01',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1763412050485-d7e1688f8858?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Open door in a bright room with plants letting in fresh spring air',
        iconName: 'Flower2',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-to-deep-clean-ceiling-fans',
        title: 'How to Deep Clean Ceiling Fans: The Complete Guide',
        excerpt: 'Master the pillowcase trick and keep your fans dust-free without making a mess. Essential tips for San Diego homes with year-round fan use.',
        category: 'How-To',
        readTime: '7 min read',
        datePublished: '2024-01-18',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1680703261560-11c234762abe?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Bedroom with ceiling fan mounted above a bed with wooden accents',
        iconName: 'Fan',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-to-deep-clean-granite-counters',
        title: 'How to Deep Clean Granite Countertops',
        excerpt: 'Protect your investment with proper granite care. Learn safe cleaning methods and tackle San Diego hard water stains.',
        category: 'How-To',
        readTime: '8 min read',
        datePublished: '2024-01-17',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1636628751643-2a8c9fd001d4?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Kitchen with marble countertops and bar stools in a modern home',
        iconName: 'Gem',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-to-deep-clean-and-sanitize-upholstered-furniture',
        title: 'How to Deep Clean Upholstered Furniture',
        excerpt: 'Breathe new life into your sofas and chairs. Fabric-safe techniques for every upholstery type, plus pet owner extras.',
        category: 'How-To',
        readTime: '9 min read',
        datePublished: '2024-01-16',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1759722667224-a5a7143fcbcf?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Close-up of light grey upholstered fabric sofa ready for deep cleaning',
        iconName: 'Sofa',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-to-eliminate-mold-from-your-home',
        title: 'How to Eliminate Mold From Your Home',
        excerpt: 'Safe mold removal methods and prevention tips. Know when to DIY and when to call professionals in San Diego\'s coastal climate.',
        category: 'How-To',
        readTime: '10 min read',
        datePublished: '2024-01-15',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1692911436905-ec0f5a6cf910?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Damaged bathroom wall showing moisture and mold issues needing treatment',
        iconName: 'Bug',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-to-get-rid-of-bad-smell-in-the-fridge',
        title: 'How to Get Rid of Bad Smell in the Refrigerator',
        excerpt: 'That mystery smell? We\'ll help you find it, eliminate it, and prevent it from coming back. Complete fridge cleaning guide.',
        category: 'How-To',
        readTime: '8 min read',
        datePublished: '2024-01-14',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1536854704214-f489b6693769?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Open refrigerator showing shelves ready for deep cleaning and organizing',
        iconName: 'ThermometerSnowflake',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'move-out-cleaning-checklist',
        title: 'Move-Out Cleaning Checklist: San Diego Renters',
        excerpt: 'Moving out? Use our comprehensive cleaning checklist to maximize your chances of getting your full security deposit back. Room-by-room guide with pro tips.',
        category: 'Checklists',
        readTime: '6 min read',
        datePublished: '2024-01-10',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1757742690834-aa581b9f53b2?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Empty room with wooden floor and large window ready for move-out cleaning',
        iconName: 'Building2',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'benefits-of-regular-cleaning-service',
        title: 'Benefits of Hiring a Regular Cleaning Service',
        excerpt: 'Discover the many benefits of recurring house cleaning services—from saving time to improving your family\'s health and protecting your investment.',
        category: 'Cleaning Tips',
        readTime: '5 min read',
        datePublished: '2024-01-20',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1749705319317-f9a2bf24fe3d?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Cozy living room with large white sofa and bookshelf maintained by regular cleaning',
        iconName: 'Home',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'vacation-rental-cleaning-tips-for-hosts',
        title: 'Vacation Rental Cleaning Tips for San Diego Hosts',
        excerpt: 'Master the turnover process and keep your guests giving you 5-star reviews for cleanliness. Tips for Airbnb and VRBO hosts.',
        category: 'For Hosts',
        readTime: '8 min read',
        datePublished: '2024-01-20',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1770414173168-f6c666501225?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Bright coastal-themed vacation rental bedroom with a large bed prepared for guests',
        iconName: 'Key',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-to-deep-clean-your-laundry-room',
        title: 'How to Deep Clean Your Laundry Room',
        excerpt: 'From washing machine maintenance to dryer vent safety—essential tips for San Diego homeowners to keep laundry spaces fresh.',
        category: 'How-To',
        readTime: '7 min read',
        datePublished: '2024-01-19',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1655041448985-f6666cba2d6c?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Laundry room with washer and dryer ready for deep cleaning',
        iconName: 'WashingMachine',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-to-clean-windows-like-a-pro',
        title: 'How to Clean Windows Like a Pro',
        excerpt: 'Professional techniques for streak-free, sparkling windows. Tips for San Diego homes dealing with salt spray and hard water.',
        category: 'How-To',
        readTime: '7 min read',
        datePublished: '2024-01-18',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1596063323819-0334f21e996c?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Clean white wooden framed glass window letting in natural sunlight',
        iconName: 'Columns',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'declutter-before-deep-cleaning',
        title: 'Declutter Before Deep Cleaning',
        excerpt: 'Why organizing before you clean leads to dramatically better results—and how to do it efficiently.',
        category: 'Organization',
        readTime: '6 min read',
        datePublished: '2024-01-17',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1668911491507-be365acf69ee?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'White kitchen with neatly organized open shelves and clutter-free counters',
        iconName: 'FolderOpen',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-to-remove-pet-odors-from-your-home',
        title: 'How to Remove Pet Odors From Your Home',
        excerpt: 'Effective techniques to find, treat, and prevent pet odors—because you love your pets, not their smell.',
        category: 'Pet Owners',
        readTime: '9 min read',
        datePublished: '2024-01-16',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1663551385059-24dbfc8fe575?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Dog sitting on a living room rug that needs pet odor treatment',
        iconName: 'PawPrint',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-to-clean-hardwood-and-tile-floors',
        title: 'How to Clean Hardwood and Tile Floors',
        excerpt: 'The right techniques for beautiful, long-lasting floors. Tips for San Diego homes dealing with sand and hard water.',
        category: 'How-To',
        readTime: '8 min read',
        datePublished: '2024-01-22',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1769736436809-eab3de70b175?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Modern living room with herringbone hardwood floor and contemporary artwork',
        iconName: 'Layers',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-to-deep-clean-your-mattress',
        title: 'How to Deep Clean Your Mattress',
        excerpt: 'Freshen up where you spend a third of your life. Essential tips for San Diego homes dealing with allergens and dust mites.',
        category: 'How-To',
        readTime: '7 min read',
        datePublished: '2024-01-21',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1762199904077-1c83cebbd205?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Neatly made bed with white linens and pillows after mattress deep cleaning',
        iconName: 'Moon',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'move-in-cleaning-checklist',
        title: 'Move-In Cleaning Checklist for San Diego Renters',
        excerpt: 'Start fresh in your new home. Clean before you unpack for the best results. Room-by-room guide.',
        category: 'Checklists',
        readTime: '7 min read',
        datePublished: '2024-01-20',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1741156386380-0236c72eb6f9?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Person holding house keys in front of the entrance to their new home',
        iconName: 'Box',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'eco-friendly-cleaning-tips',
        title: 'Eco-Friendly Cleaning Tips',
        excerpt: 'Protect the planet while keeping your San Diego home spotless. Natural solutions that work just as well as harsh chemicals.',
        category: 'Green Living',
        readTime: '8 min read',
        datePublished: '2024-01-19',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1601389784093-1086062cb290?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Person holding eco-friendly spray bottle for natural household cleaning',
        iconName: 'Leaf',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-to-clean-your-home-office',
        title: 'How to Clean Your Home Office',
        excerpt: 'A clean workspace is a productive workspace. Tips for San Diego remote workers to keep home offices fresh.',
        category: 'How-To',
        readTime: '7 min read',
        datePublished: '2024-01-18',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1760278042149-bbed9b84ba81?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Clean home office desk setup with computer monitor and indoor plant',
        iconName: 'Monitor',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-to-clean-your-outdoor-patio',
        title: 'How to Clean Your Outdoor Patio',
        excerpt: 'Keep your outdoor living space beautiful and inviting. Tips for San Diego\'s year-round patio season.',
        category: 'How-To',
        readTime: '8 min read',
        datePublished: '2024-01-24',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1714296972268-1022b221d415?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Wooden table and chairs on an outdoor patio ready for cleaning',
        iconName: 'SunMedium',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-to-clean-stainless-steel-appliances',
        title: 'How to Clean Stainless Steel Appliances',
        excerpt: 'Get streak-free, fingerprint-free stainless steel. Tips for San Diego homes with hard water stains.',
        category: 'How-To',
        readTime: '6 min read',
        datePublished: '2024-01-23',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1707255280298-e540809f4c01?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Kitchen filled with stainless steel appliances including a refrigerator and range',
        iconName: 'Sparkles',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'weekly-cleaning-schedule-guide',
        title: 'Weekly Cleaning Schedule Guide',
        excerpt: 'A realistic routine for busy San Diego lifestyles—keep your home consistently clean without stress.',
        category: 'Guides',
        readTime: '7 min read',
        datePublished: '2024-01-22',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'White weekly planner with pen on top for scheduling cleaning tasks',
        iconName: 'CalendarDays',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'allergy-proofing-your-home',
        title: 'Allergy-Proofing Your Home',
        excerpt: 'Reduce indoor allergens and breathe easier. Essential strategies for San Diego allergy season.',
        category: 'Health',
        readTime: '8 min read',
        datePublished: '2024-01-21',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1593030019566-d681b01e877f?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Clean bedroom with white bed linen near window allowing fresh air circulation',
        iconName: 'Shield',
        author: DEFAULT_AUTHOR
    },
    {
        slug: 'how-to-prepare-your-guest-room',
        title: 'How to Prepare Your Guest Room',
        excerpt: 'Make your visitors feel truly welcome. Perfect for San Diego hosts welcoming family and tourists.',
        category: 'Hospitality',
        readTime: '7 min read',
        datePublished: '2024-01-20',
        dateModified: '2026-02-17',
        image: 'https://images.unsplash.com/photo-1742821855639-476d4e1b5cea?w=800&h=600&fit=crop&fm=webp&auto=format&q=80',
        imageAlt: 'Inviting hotel-style guest room with natural light and welcoming bedding',
        iconName: 'Bed',
        author: DEFAULT_AUTHOR
    }
];
