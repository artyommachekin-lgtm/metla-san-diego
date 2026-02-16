/**
 * Guest Room Prep Guide - San Diego
 * URL: /blog/how-to-prepare-your-guest-room
 */
'use client';
import React from 'react';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Bed,
    Heart,
    Users,
    MapPin
} from 'lucide-react';
import { PHONE_NUMBER } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';

const GuestRoomPrepPage: React.FC = () => {

    const faqs: FAQItem[] = [
        {
            question: "What essentials should a guest room have?",
            answer: "Fresh linens, extra blankets and pillows, bedside lamp and alarm clock, power outlets/chargers, mirror, trash can, empty drawer/closet space, drinking water, and basic toiletries. WiFi password prominently displayed is also essential."
        },
        {
            question: "How far in advance should I prepare for guests?",
            answer: "Start cleaning 1-2 days before arrival for a thorough job without last-minute stress. Final touches (fresh flowers, setting out supplies) can be done the morning of arrival. This timeline also allows linens to fully dry after washing."
        },
        {
            question: "What if I don't have a dedicated guest room?",
            answer: "Transform any space with the same principles: fresh, clean bedding, a clear sleeping area, storage for belongings, and thoughtful touches. A quality air mattress with good bedding beats a neglected guest room."
        },
        {
            question: "How do I make guests feel at home without hovering?",
            answer: "Create a small welcome area with everything they need: WiFi password, house rules, local recommendations, toiletries, snacks. This empowers guests to settle in comfortably and helps them feel less like they're imposing."
        }
    ];

    const howToSteps = [
        {
            name: "Deep Clean the Room",
            text: "Start with a thorough cleaning: dust all surfaces including tops of frames and furniture, vacuum floors and under the bed, wash windows, clean the door handle. A truly clean room is the foundation of hospitality."
        },
        {
            name: "Wash All Linens Fresh",
            text: "Wash sheets, pillowcases, and duvet cover—even if they've been sitting unused. Add extra pillows and blankets for different sleep preferences. Use unscented detergent to avoid triggering guest allergies."
        },
        {
            name: "Make the Bed Inviting",
            text: "Layer the bed hotel-style: fitted sheet, flat sheet tucked tight, then duvet. Arrange pillows attractively. Turn down the covers slightly for a welcoming touch. Fresh, crisp linens make the biggest impression."
        },
        {
            name: "Clear Space for Belongings",
            text: "Empty at least one drawer and section of the closet. Add hangers. Provide a luggage rack or designated spot for suitcases. Guests shouldn't have to live out of their bags."
        },
        {
            name: "Stock Essential Supplies",
            text: "Set out fresh towels, washcloths, and a robe if available. In the bathroom, provide toiletries: soap, shampoo, toothpaste, and new toothbrushes. Include a hair dryer if not already present."
        },
        {
            name: "Add Thoughtful Touches",
            text: "Fresh flowers or a plant, a water carafe and glass, local treats or snacks, a few magazines or books. A handwritten welcome note makes guests feel truly special."
        },
        {
            name: "Check the Details",
            text: "Test all lamps and replace dead bulbs. Ensure outlets are accessible for phone chargers. Set the thermostat to a comfortable temperature. Place a small trash can within reach."
        },
        {
            name: "Create a Welcome Guide",
            text: "Include WiFi password, house instructions (thermostat, coffee maker, door codes), your contact info, and local recommendations. A small binder or printed card works perfectly."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="How to Prepare Your Guest Room for Visitors"
                description="Complete guide to preparing a welcoming guest room. Cleaning checklist and hospitality tips for making visitors feel at home."
                slug="how-to-prepare-your-guest-room"
                datePublished="2024-01-20"
                dateModified="2024-01-20"
            />
            <HowToSchema
                name="How to Prepare a Guest Room"
                description="Step-by-step guide to creating a comfortable, welcoming space for your visitors."
                totalTime="PT3H"
                supply={[
                    "Fresh bed linens",
                    "Extra pillows and blankets",
                    "Towels and washcloths",
                    "Toiletries",
                    "Welcome treats/snacks"
                ]}
                tool={[
                    "Cleaning supplies",
                    "Vacuum cleaner",
                    "Iron or steamer"
                ]}
                steps={howToSteps}
            />
            <FAQSchema faqs={faqs} />

            {/* Hero */}
            <section className="bg-slate-900 text-white pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <Link href="/blog" className="text-teal-400 hover:text-teal-300 mb-4 inline-block">
                            ← Back to Blog
                        </Link>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-rose-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                Hospitality
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 7 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            How to Prepare Your Guest Room
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Make your visitors feel truly welcome with a thoughtfully prepared space. It's the little details that matter most.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 20, 2024</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-slate">

                        {/* Quick Answer Box */}
                        <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-xl my-8 not-prose">
                            <h2 className="font-bold text-rose-900 mb-2">Quick Answer</h2>
                            <p className="text-rose-800">
                                <strong>Guest room essentials:</strong> A deeply cleaned room, fresh linens (including extras), empty space for belongings, toiletries and towels, working lamps and accessible outlets, and thoughtful touches like snacks and WiFi password. Start preparing 1-2 days before arrival.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            San Diego is one of the most-visited cities in America, and your guest room probably sees plenty of action—family visits, old friends, and out-of-town colleagues. Whether guests stay one night or one week, a well-prepared space makes all the difference in their experience and your stress levels.
                        </p>
                        <p className="text-slate-600 mt-4">
                            The best hosts make hospitality look effortless, but there's actually a method behind the magic. Here's your complete guide to preparing a guest room that earns rave reviews and return visits.
                        </p>

                        {/* Stats Box */}
                        <div className="grid grid-cols-3 gap-4 my-8 not-prose">
                            <div className="bg-rose-50 p-4 rounded-xl text-center">
                                <Bed className="w-8 h-8 text-rose-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">1-2</div>
                                <div className="text-sm text-slate-600">Days advance prep</div>
                            </div>
                            <div className="bg-rose-50 p-4 rounded-xl text-center">
                                <Heart className="w-8 h-8 text-rose-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">Details</div>
                                <div className="text-sm text-slate-600">Make the difference</div>
                            </div>
                            <div className="bg-rose-50 p-4 rounded-xl text-center">
                                <Users className="w-8 h-8 text-rose-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">35M+</div>
                                <div className="text-sm text-slate-600">SD visitors/year</div>
                            </div>
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Guest Room Preparation Process
                        </h2>

                        <div className="space-y-4 my-8 not-prose">
                            {howToSteps.map((step, index) => (
                                <div key={index} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{step.name}</h3>
                                        <p className="text-slate-600 text-sm">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Guest Room Checklist */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Guest Room Essentials Checklist
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Bedding & Comfort</h3>
                                    <ul className="space-y-2 text-sm text-slate-700">
                                        {[
                                            "Fresh sheets and pillowcases",
                                            "Extra blanket or throw",
                                            "Multiple pillow options",
                                            "Mattress protector",
                                            "Bedside rug/mat"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Bathroom/Toiletries</h3>
                                    <ul className="space-y-2 text-sm text-slate-700">
                                        {[
                                            "Fresh towels and washcloths",
                                            "Shampoo, conditioner, body wash",
                                            "New toothbrush and toothpaste",
                                            "Hair dryer",
                                            "Tissues and cotton pads"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Convenience</h3>
                                    <ul className="space-y-2 text-sm text-slate-700">
                                        {[
                                            "Phone chargers/adapters",
                                            "Working bedside lamp",
                                            "Alarm clock",
                                            "Full-length mirror",
                                            "Small trash can"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Thoughtful Extras</h3>
                                    <ul className="space-y-2 text-sm text-slate-700">
                                        {[
                                            "Water carafe and glass",
                                            "Snacks or treats",
                                            "Fresh flowers",
                                            "WiFi password card",
                                            "Local recommendations"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* San Diego Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            San Diego Host Tips
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-rose-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Local Recommendations</h3>
                                    <p className="text-slate-600 text-sm">Create a mini guide: your favorite coffee shops, restaurants, and beaches. Include less-touristy spots only locals know. Guests love insider tips, and it saves you from repeating yourself.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-rose-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Beach Gear</h3>
                                    <p className="text-slate-600 text-sm">Stock an extra beach bag with towels, sunscreen, and a cooler your guests can use. Visitors often don't pack beach supplies. This thoughtful touch makes beach days effortless.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-rose-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Temperature Notes</h3>
                                    <p className="text-slate-600 text-sm">Coastal areas cool down significantly at night, surprising visitors expecting constant warmth. Provide an extra blanket and explain how to work the A/C or heating—especially for guests from different climates.</p>
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-6">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4 my-6 not-prose">
                            {faqs.map((faq, index) => (
                                <div key={index} className="p-4 bg-slate-50 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                                    <p className="text-slate-600 text-sm">{faq.answer}</p>
                                </div>
                            ))}
                        </div>                        <RelatedArticles currentSlug="how-to-prepare-your-guest-room" />



                        {/* CTA */}
                        <div className="bg-teal-600 text-white p-8 rounded-xl my-10 text-center not-prose">
                            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold mb-3">Pre-Guest Whole-Home Clean</h3>
                            <p className="text-teal-100 mb-6">
                                Expecting visitors? Let us deep clean your entire home before they arrive. You'll greet your guests stress-free with a spotless space.
                            </p>
                            <Link
                                href="/booking"
                                className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                            >
                                Book a Cleaning
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                href="/service/standard-cleaning"
                                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition-colors"
                            >
                                Learn About Standard Cleaning
                            </Link>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
};

export default GuestRoomPrepPage;
