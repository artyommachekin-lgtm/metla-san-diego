/**
 * Metla House Cleaning - San Diego Location
 * 
 * This file contains all location-specific data for the San Diego franchise:
 * - Contact information and address
 * - Services with San Diego-specific descriptions
 * - Location pages for San Diego neighborhoods
 * - Testimonials from San Diego customers
 */
import { Service, Location, Testimonial } from './types';

export const COMPANY_NAME = "Metla House Cleaning";
export const PHONE_NUMBER = "(707) 414-8930";
export const PHONE_NUMBER_INTL = "+1-707-414-8930";
export const COMPANY_EMAIL = "metlacleanteam@gmail.com";
export const COMPANY_ADDRESS = {
  street: "330 13th Street",
  city: "San Diego",
  state: "CA",
  zip: "92101",
  full: "330 13th Street, San Diego, CA 92101"
};
export const BUSINESS_HOURS = {
  days: "Monday - Sunday",
  open: "8:00 AM",
  close: "7:00 PM",
  display: "Mon-Sun 8am-7pm"
};
export const BOOKING_LINK = "/booking";


export const SERVICES: Service[] = [
  {
    id: 'standard',
    title: "Standard Cleaning",
    slug: "standard-cleaning",
    shortDescription: "Recurring maintenance to keep your home consistently pristine.",
    fullDescription: `Our Standard Cleaning is engineered for the discerning homeowner who requires a consistently pristine living environment. Designed to keep your home in showroom condition, this service is most effective on a weekly or bi-weekly schedule. We focus on maintaining the baseline of cleanliness and order that busy San Diego families deserve.

## What to Expect From Your Standard Cleaning

When you book a Standard Cleaning with Metla, you're not just getting a surface wipe-down—you're investing in a systematic approach to home maintenance developed over years of serving San Diego homeowners. Our trained cleaning professionals follow a detailed checklist that covers every room in your home, ensuring nothing is overlooked.

Before your first appointment, we'll discuss your specific needs and any areas that require extra attention. We believe in complete transparency: you'll know exactly what's included before we arrive, and our team will walk through the home with you afterward to ensure your complete satisfaction.

## Our Commitment to Transparency

We know that inviting someone into your home requires trust. That's why we're upfront about our process from the very beginning. Every Metla cleaner undergoes thorough background checks, carries proper insurance, and has been trained in our proprietary 50-point cleaning protocol.

You'll receive a confirmation before each visit with your assigned cleaner's name and expected arrival time. After the cleaning, we provide a summary of the work completed and invite your feedback. If something doesn't meet your expectations, simply let us know within 24 hours and we'll make it right—that's our satisfaction commitment.

## Customer Service That Sets Us Apart

We're not just a cleaning company—we're your partners in maintaining a comfortable home. Our local San Diego-based support team is available to answer questions, adjust schedules, and handle any concerns promptly. You'll never be transferred to an overseas call center or left waiting for days for a response.

Need to reschedule? Just give us 24 hours' notice and we'll find a new time that works for you. Have a last-minute request for extra attention in a particular room? Our team can accommodate most requests on the spot. We're flexible because we understand that life doesn't always go according to plan.

## How Our Process Works

**Booking:** Request your service online or by phone. We'll confirm your appointment and answer any questions about what's included.

**Preparation:** On the day of your cleaning, our team arrives with all necessary supplies and equipment. You don't need to provide anything.

**The Cleaning:** We work systematically through your home, following our comprehensive checklist. High-touch surfaces are disinfected, floors are vacuumed and mopped, and every room receives attention.

**Quality Check:** Before leaving, we do a final walkthrough. If you're home, we'll invite you to inspect our work. If not, we'll secure your home and send you a notification that we've finished.

**Follow-Up:** We'll check in to ensure you're satisfied. Your feedback helps us continuously improve our service.

## Building a Lasting Relationship

Many of our clients have been with us for years. They appreciate the consistency of having the same cleaning professional who knows their preferences, their home's quirks, and their standards. Our goal is not just to clean your home—it's to give you back your time and the peace of mind that comes with knowing your space is always ready for whatever life brings.

We understand that every home is different. That's why we listen carefully to your needs and customize our approach accordingly. Whether you're a busy professional, a growing family, or an empty-nester enjoying retirement, we tailor our service to fit your lifestyle.

## The Metla Difference

Choosing Metla means choosing a team that genuinely cares about your satisfaction. We're locally owned and operated right here in San Diego, so our reputation in this community matters to us. We don't cut corners, we don't rush, and we don't disappear after the first few appointments. We show up, we do exceptional work, and we're here for the long term.

We focus on maintaining the baseline of cleanliness and order:`,
    focusPoints: [
      {
        title: "Surface Management",
        description: "Routine dusting of furniture, fixtures, and décor to maintain clarity and prevent buildup.",
        iconName: 'Feather'
      },
      {
        title: "Key Area Sanitization",
        description: "Thorough cleaning and disinfection of bathrooms and kitchen countertops.",
        iconName: 'ShieldCheck'
      },
      {
        title: "Visual Reset",
        description: "Light straightening of cushions, chairs, and throw blankets for a composed, orderly look.",
        iconName: 'Armchair'
      },
      {
        title: "Floor Care",
        description: "Vacuuming and mopping to ensure high-traffic areas remain spotless.",
        iconName: 'Sparkles'
      }
    ],
    suitability: {
      title: "Is the Maintenance Clean right for you?",
      text: "This service is designed exclusively for routine upkeep. It is the perfect match if your home has been professionally detailed within the last 30 days and you wish to maintain showroom condition effortlessly.",
      points: [
        "You are looking for reliable weekly or bi-weekly housekeeping.",
        "Your home is generally organized but requires professional surface management.",
        "You want to ensure a consistently pristine environment without the effort.",
        "You do not currently need deep tasks like inside-appliance cleaning (available as add-ons)."
      ],
      footer: "Still unsure if we cover a specific area? Go through the comprehensive checklist below to see exactly what we touch!"
    },
    iconName: 'Sparkles',
    benefits: ["Weekly / Bi-Weekly Schedule", "Surface Disinfection", "Linens & Beds Made"],
    checklist: {
      "Bedrooms": [
        "Furniture dusted",
        "Mirrors cleaned",
        "Bedside tables cleaned",
        "Cobwebs removed",
        "Beds made",
        "Floors vacuumed/mopped"
      ],
      "Bathrooms": [
        "Mirrors cleaned",
        "Sinks and countertop cleaned",
        "Toilet cleaned inside and out",
        "Shower and bathtub cleaned",
        "Cobwebs removed",
        "Garbage disposed of",
        "Floors vacuumed/mopped"
      ],
      "Kitchen": [
        "Fridge exterior cleaned and polished",
        "Cooktop cleaned and polished",
        "Oven exterior cleaned",
        "Microwave cleaned inside and out",
        "Countertops cleaned and disinfected",
        "Sink cleaned",
        "Dishwasher cleaned and polished",
        "Garbage disposed of",
        "Floors vacuumed/mopped",
        "Counter cleaned and polished"
      ],
      "Dining Room": [
        "Furniture dusted",
        "Dining table cleaned",
        "Floors vacuumed/mopped"
      ],
      "Living Areas": [
        "General straighten up",
        "Mirrors cleaned",
        "Coffee tables cleaned",
        "Furniture dusted",
        "Cobwebs removed",
        "Floors vacuumed/mopped"
      ],
      "Office/Study": [
        "Desks cleaned",
        "Furniture dusted",
        "Cobwebs removed",
        "Floors vacuumed/mopped"
      ],
      "Laundry Room": [
        "Light dusting",
        "Cobwebs removed",
        "Floors vacuumed/mopped"
      ],
      "Other": [
        "Light dusting throughout the home",
        "All floors vacuumed and mopped"
      ]
    }
  },
  {
    id: 'deep',
    title: "Deep Cleaning",
    slug: "deep-cleaning",
    shortDescription: "The ultimate home restoration. A top-to-bottom detail designed to eliminate heavy buildup and return your home to immaculate condition.",
    fullDescription: `Our Deep Cleaning is the foundational service for a truly healthy home. Recommended as an initial service for all new clients or as a quarterly refresh, this rigorous detail goes far beyond surface maintenance. We target the "invisible" layer of dirt—the grime that accumulates on baseboards, the dust clinging to ceiling fans, and the residue on cabinet fronts.

## What Makes Deep Cleaning Different

A Standard Cleaning maintains your home's cleanliness. A Deep Cleaning transforms it. Think of it as pressing the reset button—we address the buildup that accumulates over months or even years, returning your home to a baseline of true cleanliness that's easier to maintain going forward.

This service takes significantly more time than a standard cleaning because we're not just wiping surfaces—we're detail-cleaning every area of your home. From scrubbing grout lines to removing hard water deposits, from dusting individual blinds to cleaning the tops of door frames, we leave nothing untouched.

## Complete Transparency in Our Process

We believe you deserve to know exactly what you're paying for. Before your Deep Cleaning appointment, we provide a comprehensive breakdown of what's included. Our detailed checklist (available below) shows every task we'll complete, so there are no surprises.

During the cleaning, our team works methodically room by room. If we encounter areas that need additional attention beyond our standard scope—such as heavy staining or significant buildup—we'll communicate with you before proceeding. You're always in control, and we never add charges without your approval.

After we finish, we invite you to walk through your home with our team. We want you to see the difference and ask any questions. Your satisfaction isn't just a goal—it's our standard.

## Customer-Focused Service From Start to Finish

Scheduling a Deep Cleaning should be easy. Contact us by phone or online, and we'll discuss your home's specific needs. How long has it been since the last professional cleaning? Are there particular areas of concern? Do you have pets or specific products you prefer we use? We listen carefully so we can tailor our approach.

On the day of your service, our team arrives on time with all necessary supplies and equipment. We respect your home—wearing shoe covers, protecting your furniture, and treating your belongings with care. We bring our own professional-grade cleaning products unless you have specific preferences.

Throughout the cleaning, we're available to answer questions or address concerns. You're welcome to remain home, step out, or work from another room. Many clients use Deep Cleaning days as an opportunity to run errands, returning to a transformed home.

## Our Rigorous Training and Standards

Every Metla cleaner has undergone extensive training in our Deep Cleaning protocol. They understand the proper techniques for different surfaces—how to safely clean natural stone versus tile, how to address stainless steel without leaving streaks, how to remove buildup without damaging finishes.

We're fully insured and bonded, and every team member has passed thorough background checks. When you trust us with your home, you can have confidence that our team is professional, reliable, and committed to excellence.

## When You Need a Deep Cleaning

We recommend Deep Cleaning in several situations:

**Before Starting Recurring Service:** If it's been more than a month since your last professional cleaning, we start with a Deep Clean to establish a proper baseline.

**Seasonal Refresh:** Many San Diego homeowners schedule quarterly deep cleans—particularly before the holidays, after fire season, or at the start of summer.

**Special Occasions:** Hosting a major event? A Deep Clean ensures your home makes the right impression on guests.

**After Extended Absence:** Returning from a long trip? A Deep Clean addresses the dust and staleness that accumulates in vacant homes.

## The Metla Commitment

We stand behind every Deep Cleaning with our satisfaction commitment. If something doesn't meet your expectations, contact us within 24 hours and we'll address the issue at no additional charge. Our reputation in San Diego's neighborhoods matters to us—we succeed when you're genuinely delighted with our work.

We're not here for just one cleaning. We're building lasting relationships with San Diego families who value a clean, healthy home. That's why we take the time to get it right.`,
    focusPoints: [
      {
        title: "Intensive Scrubbing",
        description: "Heavy-duty removal of tough soap scum, mineral deposits in bathrooms, and grease buildup in the kitchen.",
        iconName: 'Brush'
      },
      {
        title: "Vertical Detailing",
        description: "We hand-wipe baseboards, door frames, window sills, and cabinet fronts to remove months of accumulated dust.",
        iconName: 'PanelTop'
      },
      {
        title: "High-Low Reach",
        description: "Addressing neglected areas often missed, from ceiling fan blades and AC vents down to floor corners.",
        iconName: 'Fan'
      },
      {
        title: "Fixture Restoration",
        description: "Deep polishing of chrome, stainless steel, and glass fixtures to remove stubborn water spots and restore shine.",
        iconName: 'Gem'
      }
    ],
    suitability: {
      title: "Is the Deep Clean right for you?",
      text: "This service is designed for homes that need a \"hard reset.\" It is the required starting point for most recurring clients to bring the residence up to our professional maintenance standard.",
      points: [
        "It has been more than 30 days since your last professional cleaning.",
        "You can see visible dust on baseboards, blinds, or air vents.",
        "Your kitchen or bathrooms require heavy scrubbing to remove grime or scale.",
        "You are preparing to host an event or beginning a recurring service schedule."
      ],
      footer: "Still unsure if you need a Deep or Standard clean? Check the comprehensive checklist below to see the specific inclusions for this heavy-duty service."
    },
    iconName: 'ShieldCheck',
    benefits: ["Baseboards & Door Frames", "Microwave Inside & Out", "Fans, Blinds & Light Fixtures"],
    checklist: {
      "Bedrooms": [
        "Furniture dusted",
        "Ceiling fans dusted",
        "Window sills dusted",
        "Lamps dusted",
        "Mirrors cleaned",
        "Doors, door frames and door handles cleaned/disinfected",
        "Bedside tables cleaned",
        "Wall hangings dusted",
        "Baseboards dusted",
        "Cobwebs removed",
        "Walls spot cleaned",
        "Blinds dusted"
      ],
      "Bathrooms": [
        "Mirrors cleaned",
        "Sinks and countertop cleaned",
        "Cupboard faces cleaned",
        "Baseboards dusted",
        "Toilet cleaned inside and out",
        "Doors, door frames and door handles cleaned/disinfected",
        "Shower and bathtub cleaned",
        "Towel rack dusted",
        "Soap dispensers, toothbrush holders etc cleaned",
        "Window sills dusted",
        "Cobwebs removed",
        "Garbage disposed",
        "Walls spot cleaned"
      ],
      "Kitchen": [
        "Fridge, oven, dishwasher exterior cleaned/polished",
        "Backsplash cleaned",
        "Cooktop cleaned and polished",
        "Doors, door frames and door handles cleaned/disinfected",
        "Countertops cleaned and disinfected",
        "Microwave cleaned inside and out",
        "Sink cleaned and polished",
        "Sink window cleaned inside",
        "Blinds dusted",
        "Light fixtures dusted",
        "Walls spot cleaned",
        "Baseboards dusted",
        "Cupboard faces cleaned",
        "Garbage disposed"
      ],
      "Dining Room": [
        "Furniture dusted",
        "Wall hangings dusted",
        "Light fixtures dusted",
        "Window sills dusted",
        "Doors, door frames and door handles cleaned/disinfected",
        "Dining table cleaned",
        "Baseboards dusted",
        "Blinds dusted"
      ],
      "Living Areas": [
        "General straighten up",
        "Mirrors cleaned",
        "Light fixtures dusted",
        "Coffee tables cleaned",
        "Wall hangings dusted",
        "Furniture dusted",
        "Walls spot cleaned",
        "Baseboards dusted",
        "Doors, door frames and door handles cleaned/disinfected",
        "Blinds dusted",
        "Ceiling fans dusted",
        "Window sills dusted"
      ],
      "Office/Study": [
        "Desks cleaned",
        "Wall hangings dusted",
        "Doors, door frames and door handles cleaned/disinfected",
        "Ceiling fans dusted",
        "Blinds dusted"
      ],
      "Laundry Room": [
        "Appliance exteriors cleaned",
        "Bench cleaned",
        "Cupboard faces cleaned",
        "Walls spot cleaned",
        "Doors, door frames and door handles cleaned/disinfected"
      ],
      "Other": [
        "Light dusting throughout home",
        "Soap scum removal in showers",
        "All floors vacuumed/mopped",
        "Cobwebs removed",
        "Basic bed making"
      ]
    }
  },
  {
    id: 'post-construction',
    title: "Post-Construction Cleaning",
    slug: "post-construction-cleaning",
    shortDescription: "The final step of your renovation. We remove fine dust and construction residue to reveal the true beauty of your new investment.",
    fullDescription: `Renovation creates a unique type of mess that standard cleaning cannot handle. "Fine particulate dust" settles into the pores of your new flooring, coats your walls, and hides inside air vents. Our Post-Construction Cleaning is a specialized detail designed to safely extract this dust without scratching your new luxury finishes. We use advanced dust-removal methods and microfiber technology to eliminate the "white haze" left behind by drywall and sanding, turning a construction site into a move-in ready home.

## Understanding Post-Construction Cleaning

Construction dust isn't ordinary dust—it's a fine powder composed of drywall compound, sawdust, concrete particles, and other materials that can damage surfaces if not properly removed. Standard vacuums simply recirculate these particles back into the air. Our specialized approach captures and removes this dust permanently.

This isn't about making a dirty home look clean—it's about transitioning a construction zone into a livable space. We understand the substantial investment you've made in your renovation, and we treat every surface with the care it deserves.

## Our Transparent Process

Before we begin, we walk through your property together (virtually or in person) to assess the scope of work. We'll identify areas with heavy dust accumulation, check for adhesive residue on new windows, and note any surfaces requiring special attention. You'll receive a clear explanation of what we'll address and how long the process typically takes.

We communicate openly about what post-construction cleaning does and doesn't include. For example, we clean construction dust but don't remove paint splatters (that's the contractor's responsibility) or deep-clean carpets (a separate specialty service). By setting clear expectations upfront, we ensure your complete satisfaction with the results.

## Protecting Your Investment

Your new countertops, flooring, and fixtures represent a significant investment. We use only non-abrasive techniques and products specifically designed for post-construction cleaning. Our team is trained to identify different materials—natural stone, hardwood, porcelain, stainless steel—and apply appropriate cleaning methods for each.

We take inventory of your home's new features before we begin, documenting their condition. If we discover any issues that appear to be contractor-related (scratches, damage, incomplete work), we'll alert you before proceeding. This documentation protects both you and us, ensuring transparency throughout the process.

## Scheduling and Coordination

Post-construction cleaning should happen after all contractor work is complete but before furniture delivery and move-in. We recommend scheduling your cleaning at least 24-48 hours after the final construction activities to allow any remaining airborne dust to settle.

We coordinate timing carefully. Rushing this process doesn't serve anyone—dust that hasn't settled will simply reappear after we leave. We'd rather schedule correctly the first time than have you disappointed with the results.

If your project involved extensive work, we may recommend a two-phase approach: an initial heavy cleaning immediately after construction, followed by a detail cleaning before move-in. We'll discuss which approach makes sense for your specific situation.

## Customer Service You Can Count On

We know construction projects are stressful. Timelines slip, budgets stretch, and by the time you're ready for cleaning, you're exhausted. That's why we make the final step easy.

Our team arrives prepared with all necessary equipment and supplies. We work efficiently but thoroughly, respecting your timeline while delivering exceptional results. You're welcome to remain on-site to observe our progress or handle other moving logistics—whatever works best for you.

After completing the cleaning, we do a detailed walkthrough together. We want you to see every cleaned surface, open every cabinet, and verify that your new home is truly move-in ready. If anything doesn't meet your expectations, we address it before leaving.

## Our Commitment to Excellence

Post-Construction Cleaning requires specialized skills that not every cleaning service possesses. Our team has extensive experience with renovation cleanups throughout San Diego County, from condo renovations in Downtown to whole-house remodels in La Jolla and Coronado.

We're fully insured with coverage specifically designed for post-construction work. This protects your investment and gives you confidence that we stand behind our service completely.

Your renovation deserves a proper finishing touch. Let us reveal the beauty of your investment.`,
    focusPoints: [
      {
        title: "Fine Dust Extraction",
        description: "We meticulously remove the microscopic layer of drywall dust that settles on walls, baseboards, and ledges.",
        iconName: 'Fan'
      },
      {
        title: "Label & Residue Removal",
        description: "Gentle removal of manufacturer stickers, protective tape, and adhesive residue from new windows and appliances.",
        iconName: 'Eraser'
      },
      {
        title: "Sawdust Removal",
        description: "Deep vacuuming of new cabinetry, drawers, and closets to remove trapped wood shavings and debris.",
        iconName: 'Layers'
      },
      {
        title: "Surface Safety",
        description: "We prioritize the protection of your new investment, using versatile, non-abrasive methods to lift dust and debris without scratching or dulling your finishes.",
        iconName: 'ShieldCheck'
      }
    ],
    suitability: {
      title: "Is Post-Construction Cleaning right for you?",
      text: "This service is designed for properties where major renovation work has just been completed. Please note: All contractors must be fully finished with their work before we arrive.",
      points: [
        "Your builders have vacated, but the home is covered in dust.",
        "You see a \"hazy\" film on your floors or tiles.",
        "New cabinets and drawers are full of sawdust or debris.",
        "You need the space finalized for furniture delivery or photography."
      ],
      footer: "Still unsure if we cover a specific area? Go through the comprehensive checklist below to see exactly what we touch!"
    },
    iconName: 'Hammer',
    benefits: ["Fine Dust Removal", "Inside Cabinets & Drawers", "Interior Windows & Sills"],
    checklist: {
      "Bedrooms": [
        "Ceiling fans dusted",
        "Interior Windows cleaned and sills dusted",
        "Mirrors cleaned",
        "Doors, door frames and door handles cleaned/disinfected",
        "Baseboards dusted",
        "Cobwebs removed",
        "Walls spot cleaned",
        "Blinds dusted"
      ],
      "Bathrooms": [
        "Mirrors cleaned",
        "Sinks cleaned",
        "Cupboards/drawers cleaned inside and out",
        "Baseboards dusted",
        "Toilet cleaned inside and out",
        "Doors, door frames and door handles cleaned/disinfected",
        "Shower and bathtub cleaned",
        "Towel rack dusted",
        "Interior Windows cleaned and sills dusted",
        "Cobwebs removed",
        "Garbage disposed",
        "Walls spot cleaned"
      ],
      "Kitchen": [
        "Fridge, oven, dishwasher exterior cleaned/polished",
        "Fridge, oven interior cleaned",
        "Backsplash cleaned",
        "Cooktop cleaned and polished",
        "Doors, door frames and door handles cleaned/disinfected",
        "Countertops cleaned and disinfected",
        "Microwave cleaned inside and out",
        "Sink cleaned and polished",
        "Interior Windows cleaned and sills dusted",
        "Blinds dusted",
        "Light fixtures dusted",
        "Walls spot cleaned",
        "Baseboards dusted",
        "Cupboards/drawers cleaned inside and out"
      ],
      "Dining Room": [
        "Light fixtures dusted",
        "Windows cleaned and sills dusted",
        "Doors, door frames and door handles cleaned/disinfected",
        "Dining table cleaned",
        "Baseboards dusted",
        "Blinds dusted"
      ],
      "Living Areas": [
        "Light fixtures dusted",
        "Walls spot cleaned",
        "Baseboards dusted",
        "Doors, door frames and door handles cleaned/disinfected",
        "Blinds dusted",
        "Ceiling fans dusted",
        "Window sills dusted"
      ],
      "Office/Study": [
        "Doors, door frames and door handles cleaned/disinfected",
        "Ceiling fans dusted",
        "Blinds dusted"
      ],
      "Laundry Room": [
        "Appliance exteriors cleaned",
        "Bench cleaned",
        "Cupboards/drawers cleaned inside and out",
        "Walls spot cleaned",
        "Doors, door frames and door handles cleaned/disinfected"
      ],
      "Other": [
        "Soap scum removal in showers",
        "All floors vacuumed/mopped",
        "Cobwebs removed",
        "Details to make home look as close to new as possible"
      ]
    }
  },
  {
    id: 'vacation-rental',
    title: "Vacation Rental Cleaning",
    slug: "vacation-rental-cleaning-airbnb",
    shortDescription: "Seamless turnovers for high-performing hosts. We ensure your property is hotel-ready for every single guest check-in.",
    fullDescription: `In the competitive San Diego short-term rental market, cleanliness is the single biggest factor in your guest ratings. Our Vacation Rental service is not just a cleaning—it's a "hospitality turnover." We act as your eyes and ears on the ground, staging your property for maximum visual impact and ensuring that every guest feels they're the first person to stay there. We help hosts maintain their reputation with consistent, reliable quality on every turnover.

## Built for Airbnb, VRBO, and Short-Term Rental Hosts

We understand the unique pressures of vacation rental management. Check-out at 11 AM, check-in at 3 PM—and everything needs to be perfect. Our turnover service is designed around these tight windows, combining efficiency with thoroughness to get your property guest-ready on schedule.

We've cleaned hundreds of vacation rentals across Pacific Beach, La Jolla, Coronado, and throughout San Diego County. We know what guests expect in this market and what triggers negative reviews. Cleanliness complaints are the number one reason for rating downgrades—and the easiest to prevent with the right cleaning partner.

## Complete Transparency in Our Service

You'll always know exactly what we do during each turnover. Our comprehensive checklist (detailed below) covers every room and every task, from stripping beds to restocking toiletries. You can review this list before your first booking to ensure it matches your property's specific needs.

After each cleaning, we send you a completion notification so you know the property is ready. If you use a property management platform that integrates with scheduling tools, we can coordinate timing to minimize gaps between guest stays.

We're upfront about what's included and what falls outside standard turnover scope. Deep cleaning tasks (oven interiors, refrigerator deep-clean, etc.) are available when needed but aren't part of every turnover. We'll recommend them when we notice buildup that regular turnovers won't address.

## Communication You Can Rely On

The worst thing a host can experience is radio silence from their cleaning team. A guest is arriving in hours, and you don't know if the property is ready. We eliminate that anxiety.

You'll receive confirmation when our team arrives and notification when we're finished. If we encounter any issues—damage from a previous guest, items that need restocking, maintenance problems we notice—we alert you immediately with photos. This gives you time to address issues before the next guest arrives.

Scheduling changes happen. Guests extend stays, cancel last-minute, or arrive early. We're flexible and work with you to adjust as needed. Just give us as much notice as possible, and we'll do our best to accommodate.

## Damage Reporting and Property Protection

We function as your property's first line of defense. During every turnover, our team conducts a visual inspection. We document any damage, stains, or missing items we discover—information you need to file claims with guests or platforms.

This isn't just about protecting you financially. It's about maintaining your property's condition over time. Catching issues early (a drip under the bathroom sink, a cracked tile, a malfunctioning lock) prevents small problems from becoming expensive repairs.

We photograph the property during our inspections, giving you a record of its condition after each guest. This documentation has proven invaluable for hosts handling damage disputes.

## Hotel-Style Presentation

First impressions matter. When your guests walk in, they should feel like they've entered a professionally managed hotel—not someone's spare bedroom. Our staging protocols ensure consistent, welcoming presentation.

Towels are folded in uniform style. Beds are made with crisp, tight corners. Decorative elements are arranged attractively. The space looks intentional and cared for.

These details might seem small, but they're what separate good reviews from great ones. They tell guests that the host cares about their experience.

## Building a Partnership

Managing vacation rentals is demanding work. You deserve a cleaning partner who reduces your stress rather than adding to it. We show up when scheduled, we do exceptional work, and we communicate proactively.

Many of our clients have been with us since they started hosting. They trust us with their properties, their reviews, and their rental income. We take that responsibility seriously.

Whether you manage one unit or a portfolio of properties, we bring the same level of care and professionalism to every turnover. Your guests' five-star reviews—and your peace of mind—are our ultimate goal.`,
    focusPoints: [
      {
        title: "Rapid Turnover",
        description: "Efficient, focused workflows designed to get your unit perfectly prepped and ready within standard check-out/check-in windows.",
        iconName: 'Clock'
      },
      {
        title: "Hotel-Style Staging",
        description: "We arrange linens, fold towels, and organize amenities to create a professional, welcoming first impression for guests.",
        iconName: 'Bed'
      },
      {
        title: "Damage Reporting",
        description: "If we spot damage, stains, or missing items from a previous guest, we notify you immediately so you can manage claims.",
        iconName: 'Camera'
      },
      {
        title: "Sanitization Focus",
        description: "Priority disinfection of high-touch points to ensure guest safety and peace of mind.",
        iconName: 'Sparkles'
      }
    ],
    suitability: {
      title: "Is the Vacation Rental service right for you?",
      text: "This service is specifically tailored for Airbnb, VRBO, and short-term rental hosts. It focuses on presentation and sanitization between guest stays.",
      points: [
        "You manage a short-term rental and need reliable turnovers.",
        "You need a cleaning partner who understands \"check-in ready\" presentation.",
        "You require notification of any issues or damages left by previous guests.",
        "You are looking to maintain or achieve 5-star cleanliness ratings."
      ],
      footer: "Need to know if we handle laundry or specific restocking? Check the comprehensive checklist below for our turnover specifications."
    },
    iconName: 'Key',
    benefits: ["Linen Turnover & Staging", "Visual Verification Photos", "Damage Reporting"],
    checklist: {
      "Bedrooms": [
        "Linen Turnover: Strip beds; wash and change all linens",
        "Staging: Make beds with 'hospital corners' and arrange pillows neatly",
        "Guest Check: Check drawers and under beds for left-behind items",
        "Furniture: Dust all surfaces, including headboards and bedside tables",
        "Mirrors: Clean and polish streak-free",
        "Floors: Vacuum carpets (including under the bed) and mop hard floors",
        "Sanitize: Wipe down light switches and door handles"
      ],
      "Bathrooms": [
        "Restocking: Refill hand soap, shampoo/conditioner, ensure extra toilet paper",
        "Towels: Replace used towels with fresh, professionally folded sets",
        "Deep Clean: Scrub toilet (inside/out/base), shower walls, bathtub, and sink",
        "Detailing: Polish faucets and mirrors; ensure no hair in drains",
        "Floors: Vacuum and mop, paying attention to corners/behind toilet",
        "Trash: Empty bin and replace liner"
      ],
      "Kitchen": [
        "Fridge: Empty all food; wipe down interior shelves and exterior",
        "Appliances: Clean microwave (in/out), wipe stovetop, check oven interior",
        "Dishes: Empty dishwasher; check cupboards for clean/chip-free dishes",
        "Restocking: Refill coffee/tea, replace paper towels, fresh sponge/trash bag",
        "Sanitize: Disinfect countertops, sink, and cabinet handles",
        "Floors: Vacuum and mop; wipe down baseboards"
      ],
      "Living Areas": [
        "Staging: Fluff sofa cushions, arrange throw blankets, straighten decor",
        "Sanitize High-Touch: Disinfect TV remotes, WiFi router, and light switches",
        "Furniture: Dust coffee tables, TV stands, and shelves",
        "Floors: Vacuum area rugs, sofas (under cushions), and mop floors",
        "Patio/Entry: Sweep entrance and wipe down outdoor furniture"
      ],
      "Dining Room": [
        "Furniture: Dust dining table and chairs; wipe down placemats",
        "Staging: Arrange chairs neatly and ensure centerpiece is centered",
        "Floors: Vacuum and mop thoroughly"
      ],
      "Laundry / Utility Room": [
        "Appliances: Wipe down washer/dryer exterior; clean dryer lint trap",
        "Restocking: Ensure laundry detergent and dryer sheets are stocked",
        "Floors: Vacuum and mop"
      ],
      "General / Inspections": [
        "Damage Check: Walk through and report broken items/stains immediately",
        "Safety Check: Test smoke detectors and check smart lock/keypad",
        "Thermostat: Reset to standard temperature (e.g., 72°F)",
        "Lights: Check all bulbs; replace if dimmed or burnt out",
        "Secure: Ensure all windows and doors are locked before leaving"
      ]
    }
  },
  {
    id: 'move-in-out',
    title: "Move-In / Move-Out Cleaning",
    slug: "move-in-out-cleaning",
    shortDescription: "A comprehensive reset for empty homes. Designed to meet strict property management standards and help you achieve a pristine fresh start for your new residence.",
    fullDescription: `Our Move-In / Move-Out service is our most exhaustive cleaning package, engineered exclusively for empty properties. Whether you're handing the keys back to a landlord, preparing a newly purchased home for your family, or turning over a rental unit between tenants, this service leaves zero trace of the previous occupants. Unlike furnished home cleanings, this service reaches the areas usually blocked by furniture—we focus on "interior" detailing to ensure the property is truly turnkey ready.

## What Makes Move-In/Move-Out Cleaning Different

Empty homes reveal what furnished homes hide. When furniture moves out, you see dust bunnies behind sofas, scuff marks on baseboards, grime inside cabinets, and residue in appliances. Our Move-In/Move-Out service addresses all of this—the complete interior of your home, from ceiling to floor, inside and out.

This isn't a quick surface clean. We clean inside every cabinet, every drawer, every closet. We detail appliance interiors—the oven, refrigerator, microwave, and dishwasher. We scrub bathrooms to remove hard water deposits and soap scum buildup. We eliminate the traces that time and daily living leave behind.

## Complete Transparency From Start to Finish

We know this cleaning often ties into important deadlines—lease end dates, closing timelines, or new tenant move-ins. That's why we're crystal clear about our process and timing from the beginning.

Before your cleaning, we'll discuss the property's size, condition, and any specific concerns. We'll give you an honest assessment of how long the job will take and what results you can expect. If the property needs more extensive work than a standard move-in/out clean, we'll tell you upfront rather than surprising you later.

Our comprehensive checklist (below) shows exactly what we include. You'll know what we clean, how we clean it, and what areas receive the most attention. There are no hidden tasks—what we promise is what we deliver.

## Meeting Property Management Standards

If you're a renter fulfilling lease requirements, you need a cleaning that satisfies your landlord or property manager. Our service is designed to meet professional real estate standards for turnover cleanliness.

We understand what property managers look for during walkthroughs: clean appliance interiors, spotless bathroom fixtures, dust-free blinds, and floors free of marks and residue. We address each of these systematically, helping you leave your rental in condition that meets—or exceeds—lease requirements.

For landlords and property managers, we deliver units that are ready for listing photos and tenant showings. A professionally cleaned unit rents faster and attracts quality tenants who expect a high standard of maintenance.

## Customer Service Throughout the Process

Moving is one of life's most stressful experiences. The last thing you need is uncertainty about whether your cleaning will be done on time and done right.

When you book with us, you'll receive confirmation of your appointment and clear communication about arrival time. Our team shows up prepared with all necessary supplies and equipment—you don't need to provide anything.

During the cleaning, we're focused but available. If you need to ask a question or point out a specific concern, we're happy to address it. If you're not on-site, we'll secure the property and let you know when we're finished.

After completion, we recommend being present for a final walkthrough if possible. We want you to see the results before we leave and address any concerns on the spot. Your satisfaction with our work is our priority.

## Scheduling Flexibility When You Need It

We understand that moving timelines shift. Closings get delayed, lease end dates change, furniture delivery gets rescheduled. We work with you to accommodate these changes whenever possible.

Need an evening or weekend appointment? We offer flexible scheduling to fit your timeline. Need to adjust your booking at the last minute? Contact us, and we'll do our best to find a solution.

## The Metla Standard

Every Move-In/Move-Out cleaning comes with our satisfaction commitment. If something doesn't meet your expectations, let us know within 24 hours and we'll address it. We're not satisfied until you are.

Your new beginning—or your successful property turnover—starts with a truly clean space. Let us help you achieve it.`,
    focusPoints: [
      {
        title: "Cabinetry Interiors",
        description: "We vacuum and hand-wipe the interior and exterior of all kitchen and bathroom cabinets, drawers, and shelving.",
        iconName: 'Layers'
      },
      {
        title: "Appliance Detailing",
        description: "Deep cleaning of the interiors of the refrigerator, oven, and microwave to remove food residue and odors.",
        iconName: 'Sparkles'
      },
      {
        title: "Full Sanitization",
        description: "A complete disinfection of all surfaces, switches, and handles to ensure a hygienic environment for the new resident.",
        iconName: 'ShieldCheck'
      },
      {
        title: "Inspection Ready",
        description: "We adhere to professional real estate checklists to ensure the home meets the rigorous cleanliness standards required for turnover.",
        iconName: 'ClipboardCheck'
      }
    ],
    suitability: {
      title: "Is the Move-In / Move-Out Clean right for you?",
      text: "This service is strictly for homes that are completely empty (no furniture). It is the professional standard for lease turnovers and real estate closings.",
      points: [
        "The home is empty of all furniture and personal items.",
        "You need a \"clean slate\" feeling before moving your family in.",
        "You are a tenant looking to fulfill your lease's professional cleaning requirements.",
        "You are a landlord or realtor preparing a unit for listing photos."
      ],
      footer: "Still unsure if we cover a specific area? Go through the comprehensive checklist below to see exactly what we touch!"
    },
    iconName: 'Move',
    benefits: ["Inside Fridge & Oven", "Inside Cabinets & Drawers", "Interior Windows & Sills"],
    checklist: {
      "Bedrooms": [
        "Ceiling fans dusted",
        "Interior Windows cleaned and sills dusted",
        "Mirrors cleaned",
        "Doors, door frames and door handles cleaned/disinfected",
        "Baseboards dusted",
        "Cobwebs removed",
        "Walls spot cleaned",
        "Blinds dusted"
      ],
      "Bathrooms": [
        "Mirrors cleaned",
        "Sinks cleaned",
        "Cupboards/drawers cleaned inside and out",
        "Baseboards dusted",
        "Toilet cleaned inside and out",
        "Doors, door frames and door handles cleaned/disinfected",
        "Shower and bathtub cleaned",
        "Towel rack dusted",
        "Interior Windows cleaned and sills dusted",
        "Cobwebs removed",
        "Garbage disposed",
        "Walls spot cleaned"
      ],
      "Kitchen": [
        "Fridge, oven, dishwasher exterior cleaned/polished",
        "Fridge, oven interior cleaned",
        "Backsplash cleaned",
        "Cooktop cleaned and polished",
        "Doors, door frames and door handles cleaned/disinfected",
        "Countertops cleaned and disinfected",
        "Microwave cleaned inside and out",
        "Sink cleaned and polished",
        "Interior Windows cleaned and sills dusted",
        "Blinds dusted",
        "Light fixtures dusted",
        "Walls spot cleaned",
        "Baseboards dusted",
        "Cupboards/drawers cleaned inside and out"
      ],
      "Dining Room": [
        "Light fixtures dusted",
        "Windows cleaned and sills dusted",
        "Doors, door frames and door handles cleaned/disinfected",
        "Dining table cleaned",
        "Baseboards dusted",
        "Blinds dusted"
      ],
      "Living Areas": [
        "Light fixtures dusted",
        "Walls spot cleaned",
        "Baseboards dusted",
        "Doors, door frames and door handles cleaned/disinfected",
        "Blinds dusted",
        "Ceiling fans dusted",
        "Window sills dusted"
      ],
      "Office/Study": [
        "Doors, door frames and door handles cleaned/disinfected",
        "Ceiling fans dusted",
        "Blinds dusted"
      ],
      "Laundry Room": [
        "Appliance exteriors cleaned",
        "Bench cleaned",
        "Cupboards/drawers cleaned inside and out",
        "Walls spot cleaned",
        "Doors, door frames and door handles cleaned/disinfected"
      ],
      "Other": [
        "Soap scum removal in showers",
        "All floors vacuumed/mopped",
        "Cobwebs removed",
        "Details to make home look as close to new as possible"
      ]
    }
  }
];

// Import San Diego locations from dedicated file
export { LOCATIONS } from './san-diego-locations';

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Maria L.",
    location: "La Jolla",
    rating: 5,
    text: "After trying three other services, Metla is the only one that understands what 'clean' really means. They even cleaned the salt residue off my patio furniture without me asking. Worth every penny."
  },
  {
    name: "David K.",
    location: "Scripps Ranch (Airbnb Host)",
    rating: 5,
    text: "Managing Airbnbs in Scripps Ranch requires perfection. Metla hasn't missed a single turnover in 8 months, and my guests constantly mention how clean the place is. Game changer for my business."
  },
  {
    name: "Jennifer T.",
    location: "Coronado",
    rating: 5,
    text: "Finally, a cleaning service that treats my home with the care it deserves. They handled my vintage tile and antique fixtures perfectly. Professional, punctual, and thorough."
  },
  {
    name: "Michael R.",
    location: "Pacific Beach",
    rating: 5,
    text: "Beach living means sand everywhere. Metla actually gets it all—even from places I didn't know existed. My condo has never looked better."
  },
  {
    name: "Sarah H.",
    location: "Poway",
    rating: 5,
    text: "Our 4,500 sq ft home takes most cleaners all day. Metla's team works efficiently and thoroughly—done in 4 hours and the quality is exceptional. Finally found our forever cleaning service."
  }
];

