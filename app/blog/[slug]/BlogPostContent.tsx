'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import all blog post components
const blogComponents: Record<string, React.ComponentType> = {
  'deep-cleaning-guide-san-diego': dynamic(() => import('@/content/blog/DeepCleaningGuidePage')),
  'move-out-cleaning-checklist': dynamic(() => import('@/content/blog/MoveOutChecklistPage')),
  'benefits-of-regular-cleaning-service': dynamic(() => import('@/content/blog/StandardCleaningBenefitsPage')),
  'how-to-deep-clean-the-kitchen': dynamic(() => import('@/content/blog/KitchenDeepCleanPage')),
  'bathroom-deep-cleaning-checklist': dynamic(() => import('@/content/blog/BathroomChecklistPage')),
  'essential-post-construction-cleaning-checklist-for-homeowners': dynamic(() => import('@/content/blog/PostConstructionChecklistPage')),
  'how-much-does-a-deep-house-cleaning-cost': dynamic(() => import('@/content/blog/DeepCleaningCostPage')),
  'top-10-spring-deep-cleaning-tips': dynamic(() => import('@/content/blog/SpringCleaningTipsPage')),
  'how-to-deep-clean-ceiling-fans': dynamic(() => import('@/content/blog/CeilingFanCleaningPage')),
  'how-to-deep-clean-granite-counters': dynamic(() => import('@/content/blog/GraniteCounterCleaningPage')),
  'how-to-deep-clean-and-sanitize-upholstered-furniture': dynamic(() => import('@/content/blog/UpholsteryCleaningPage')),
  'how-to-eliminate-mold-from-your-home': dynamic(() => import('@/content/blog/MoldRemovalPage')),
  'how-to-get-rid-of-bad-smell-in-the-fridge': dynamic(() => import('@/content/blog/FridgeOdorRemovalPage')),
  'vacation-rental-cleaning-tips-for-hosts': dynamic(() => import('@/content/blog/VacationRentalTipsPage')),
  'how-to-deep-clean-your-laundry-room': dynamic(() => import('@/content/blog/LaundryRoomCleaningPage')),
  'how-to-clean-windows-like-a-pro': dynamic(() => import('@/content/blog/WindowCleaningPage')),
  'declutter-before-deep-cleaning': dynamic(() => import('@/content/blog/HomeOrganizationPage')),
  'how-to-remove-pet-odors-from-your-home': dynamic(() => import('@/content/blog/PetOdorRemovalPage')),
  'how-to-clean-hardwood-and-tile-floors': dynamic(() => import('@/content/blog/FloorCleaningPage')),
  'how-to-deep-clean-your-mattress': dynamic(() => import('@/content/blog/MattressCleaningPage')),
  'move-in-cleaning-checklist': dynamic(() => import('@/content/blog/MoveInChecklistPage')),
  'eco-friendly-cleaning-tips': dynamic(() => import('@/content/blog/GreenCleaningPage')),
  'how-to-clean-your-home-office': dynamic(() => import('@/content/blog/HomeOfficeCleaningPage')),
  'how-to-clean-your-outdoor-patio': dynamic(() => import('@/content/blog/PatioCleaningPage')),
  'how-to-clean-stainless-steel-appliances': dynamic(() => import('@/content/blog/StainlessSteelPage')),
  'weekly-cleaning-schedule-guide': dynamic(() => import('@/content/blog/CleaningSchedulePage')),
  'allergy-proofing-your-home': dynamic(() => import('@/content/blog/AllergyProofingPage')),
  'how-to-prepare-your-guest-room': dynamic(() => import('@/content/blog/GuestRoomPrepPage')),
};

interface BlogPostContentProps {
  slug: string;
}

const BlogPostContent: React.FC<BlogPostContentProps> = ({ slug }) => {
  const Component = blogComponents[slug];
  if (!Component) return null;

  return <Component />;
};

export default BlogPostContent;
