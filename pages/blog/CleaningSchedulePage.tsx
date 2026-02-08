/**
 * Weekly Cleaning Schedule Guide - San Diego
 * URL: /blog/weekly-cleaning-schedule-guide
 */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Sparkles,
    CalendarDays,
    Timer,
    RotateCcw,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';

const CleaningSchedulePage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "How long should weekly cleaning take?",
            answer: "A typical weekly cleaning takes 1.5-3 hours depending on home size and how well you maintain throughout the week. Breaking it into daily tasks of 15-30 minutes makes it more manageable and keeps your home consistently clean."
        },
        {
            question: "What's the difference between daily and weekly cleaning?",
            answer: "Daily cleaning is quick maintenance: dishes, counters, tidying. Weekly cleaning is more thorough: vacuuming, mopping, bathroom scrubbing, dusting. Daily habits reduce weekly workload significantly."
        },
        {
            question: "Should I clean one room at a time or task by task?",
            answer: "Task-by-task is more efficient. For example, dust all rooms, then vacuum all rooms. This minimizes equipment changes and keeps you in a rhythm. However, room-by-room can feel more satisfying if you're short on time."
        },
        {
            question: "How do I stay motivated to keep a cleaning schedule?",
            answer: "Link cleaning to existing habits (clean kitchen after dinner). Use a playlist or podcast for entertainment. Focus on how good it feels afterward. Consider rewarding yourself after completing tasks, and don't aim for perfection."
        }
    ];

    const dailyTasks = [
        "Make beds",
        "Wipe kitchen counters",
        "Wash dishes / run dishwasher",
        "Quick bathroom wipe-down",
        "5-minute tidying",
        "Handle mail and papers"
    ];

    const weeklySchedule = [
        {
            day: "Monday",
            tasks: ["Vacuum all floors", "Dust living areas"],
            time: "45 min"
        },
        {
            day: "Tuesday",
            tasks: ["Scrub bathrooms", "Replace towels"],
            time: "40 min"
        },
        {
            day: "Wednesday",
            tasks: ["Change bed linens", "Wash & start laundry"],
            time: "30 min"
        },
        {
            day: "Thursday",
            tasks: ["Mop hard floors", "Clean mirrors & glass"],
            time: "35 min"
        },
        {
            day: "Friday",
            tasks: ["Kitchen deep clean", "Take out trash/recycling"],
            time: "40 min"
        },
        {
            day: "Saturday",
            tasks: ["Project/catch-up day", "Fold & put away laundry"],
            time: "45 min"
        },
        {
            day: "Sunday",
            tasks: ["Plan the week", "Light prep for Monday"],
            time: "20 min"
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `Weekly Cleaning Schedule Guide | ${COMPANY_NAME}`,
            description: 'Create a realistic weekly cleaning schedule that actually works. Daily, weekly, and monthly cleaning checklists for busy San Diego households.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="Weekly Cleaning Schedule Guide"
                description="Complete guide to creating a sustainable cleaning schedule that keeps your home consistently clean without overwhelming you."
                slug="weekly-cleaning-schedule-guide"
                datePublished="2024-01-22"
                dateModified="2024-01-22"
            />
            <FAQSchema faqs={faqs} />

            {/* Hero */}
            <section className="bg-slate-900 text-white pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <Link to="/blog" className="text-teal-400 hover:text-teal-300 mb-4 inline-block">
                            ← Back to Blog
                        </Link>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-purple-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                Guides
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 7 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            Weekly Cleaning Schedule Guide
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            A realistic routine that keeps your home consistently clean—without taking over your life.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 22, 2024</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-slate">

                        {/* Quick Answer Box */}
                        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-xl my-8 not-prose">
                            <h2 className="font-bold text-purple-900 mb-2">Quick Answer</h2>
                            <p className="text-purple-800">
                                <strong>The secret to a clean home:</strong> Do a little every day rather than marathon sessions. 15-30 minutes of daily maintenance + one focused task per day = a consistently clean home. Spread weekly tasks across the week so nothing feels overwhelming.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Most people fall into one of two patterns: either ignoring cleaning until it's overwhelming, or spending entire weekends catching up. Neither is sustainable. The secret to a consistently clean home is a schedule that spreads the work throughout the week.
                        </p>
                        <p className="text-slate-600 mt-4">
                            The schedule below is designed for real life—busy careers, active social lives, and everything else San Diego has to offer. Customize it to fit your lifestyle, but the principle remains: small daily efforts prevent big cleaning emergencies.
                        </p>

                        {/* Stats Box */}
                        <div className="grid grid-cols-3 gap-4 my-8 not-prose">
                            <div className="bg-purple-50 p-4 rounded-xl text-center">
                                <Timer className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">15-30</div>
                                <div className="text-sm text-slate-600">Minutes daily</div>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl text-center">
                                <CalendarDays className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">7</div>
                                <div className="text-sm text-slate-600">Days, small tasks</div>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl text-center">
                                <RotateCcw className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">4x</div>
                                <div className="text-sm text-slate-600">Deep cleans/year</div>
                            </div>
                        </div>

                        {/* Daily Tasks */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Daily Tasks (15-30 minutes)
                        </h2>
                        <p className="text-slate-600 mb-4">
                            These quick tasks prevent messes from accumulating. Do them every day to reduce your weekly cleaning load significantly.
                        </p>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <ul className="space-y-2">
                                {dailyTasks.map((task, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-700">
                                        <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                                        {task}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Weekly Schedule */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Weekly Schedule
                        </h2>
                        <p className="text-slate-600 mb-4">
                            One focused task per day keeps everything manageable. Adjust days to match your rhythms—what matters is consistency.
                        </p>
                        <div className="my-6 not-prose">
                            <div className="space-y-3">
                                {weeklySchedule.map((day, index) => (
                                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                                        <div className="flex items-center gap-4">
                                            <div className="w-24 font-bold text-slate-900">{day.day}</div>
                                            <div className="text-slate-600 text-sm">{day.tasks.join(" • ")}</div>
                                        </div>
                                        <div className="text-teal-600 font-medium text-sm">{day.time}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Monthly & Seasonal */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Monthly & Seasonal Tasks
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Monthly</h3>
                                    <ul className="space-y-2 text-sm text-slate-700">
                                        <li>• Dust ceiling fans & light fixtures</li>
                                        <li>• Clean inside microwave & oven</li>
                                        <li>• Wash trash cans</li>
                                        <li>• Deep clean one cabinet or closet</li>
                                        <li>• Vacuum under furniture</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Seasonal (Every 3 Months)</h3>
                                    <ul className="space-y-2 text-sm text-slate-700">
                                        <li>• Deep clean refrigerator</li>
                                        <li>• Wash windows inside & out</li>
                                        <li>• Flip/rotate mattress</li>
                                        <li>• Clean behind appliances</li>
                                        <li>• Detail baseboards</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* San Diego Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            San Diego Scheduling Tips
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Weekend Balance</h3>
                                    <p className="text-slate-600 text-sm">With beaches, hiking, and perfect weather beckoning, you don't want to spend Saturdays scrubbing. The weekday spread in our schedule keeps weekends free for enjoying San Diego life.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Dust After Santa Anas</h3>
                                    <p className="text-slate-600 text-sm">Santa Ana winds deposit fine dust throughout your home. After wind events, bump up your dusting schedule. A quick HVAC filter check also helps.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Active Lifestyle = More Laundry</h3>
                                    <p className="text-slate-600 text-sm">Beach days, hiking, and year-round outdoor activity mean more sweaty clothes. Consider running laundry loads more frequently—small loads prevent Mount Laundry buildup.</p>
                                </div>
                            </div>
                        </div>

                        {/* Tips for Success */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Tips for Sticking to Your Schedule
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <span><strong>Set phone reminders</strong> for each day's task</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <span><strong>Listen to podcasts or music</strong> while cleaning</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <span><strong>Keep supplies accessible</strong>—one kit per floor</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <span><strong>Done is better than perfect</strong>—aim for 80%</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <span><strong>Involve the household</strong>—delegate age-appropriate tasks</span>
                                </li>
                            </ul>
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
                        </div>

                        {/* CTA */}
                        <div className="bg-teal-600 text-white p-8 rounded-xl my-10 text-center not-prose">
                            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold mb-3">Let Us Handle the Weekly Cleaning</h3>
                            <p className="text-teal-100 mb-6">
                                Prefer to spend your time on other priorities? Our recurring cleaning service handles the weekly work while you focus on what matters to you.
                            </p>
                            <Link
                                to="/service/standard-cleaning"
                                className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                            >
                                Learn About Recurring Cleaning
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
};

export default CleaningSchedulePage;
