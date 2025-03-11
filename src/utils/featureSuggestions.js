// Feature suggestions based on project type
export const getSuggestedFeatures = (projectType) => {
  const featureSuggestions = {
    'Web Application': 'User dashboard, Settings page, Notifications, Search functionality, User profiles',
    'Mobile App': 'Push notifications, Offline mode, User profiles, Settings screen, Authentication',
    'Landing Page': 'Hero section, Features overview, Testimonials, Call to action, Contact form',
    'Dashboard': 'Data visualization, Filters, Export data, User management, Activity log',
    'E-commerce Site': 'Product listings, Shopping cart, Checkout process, User accounts, Search and filter',
    'Portfolio': 'Project showcase, About me section, Skills list, Contact form, Resume download',
    'Blog': 'Article listings, Categories, Comments, Author profiles, Search functionality',
    'Social Network': 'User profiles, News feed, Messaging, Notifications, Friend/Follow system',
    'Tool/Utility': 'Core functionality, Settings, Export/Save features, History/Recent items',
    'Game': 'Game mechanics, Scoring system, Levels, User profiles, Settings'
  };
  
  return featureSuggestions[projectType] || '';
};

// More detailed features by project type for recommendations
export const getDetailedFeatures = (projectType) => {
  const detailedFeatures = {
    'Web Application': [
      'User authentication (login/signup)',
      'User dashboard with activity summary',
      'User profile management',
      'Settings and preferences',
      'Search functionality',
      'Notifications system',
      'Responsive layout for all devices'
    ],
    'Mobile App': [
      'User authentication',
      'Push notifications',
      'Offline functionality',
      'User profiles',
      'Settings screen',
      'Navigation menu/tabs',
      'Data synchronization'
    ],
    'Landing Page': [
      'Hero section with value proposition',
      'Features overview with icons/illustrations',
      'Testimonials carousel',
      'Pricing section (if applicable)',
      'FAQ section',
      'Newsletter signup',
      'Contact form',
      'Footer with social links'
    ],
    'Dashboard': [
      'Overview/summary metrics',
      'Data visualizations (charts/graphs)',
      'Filterable data tables',
      'Export functionality (CSV, PDF)',
      'User/team management',
      'Activity log/audit trail',
      'Customizable widgets'
    ],
    'E-commerce Site': [
      'Product catalog with categories',
      'Product detail pages',
      'Shopping cart functionality',
      'Secure checkout process',
      'User accounts and order history',
      'Product search and filters',
      'Reviews and ratings',
      'Related products'
    ],
    'Portfolio': [
      'Project showcase with images',
      'About me/company section',
      'Skills/services listing',
      'Resume/CV information',
      'Testimonials',
      'Contact form',
      'Social media integration'
    ],
    'Blog': [
      'Article listings with pagination',
      'Category and tag filtering',
      'Comments system',
      'Author profiles',
      'Related posts',
      'Search functionality',
      'Social sharing',
      'Newsletter subscription'
    ],
    'Social Network': [
      'User profiles',
      'News/activity feed',
      'Friend/follow system',
      'Messaging/chat',
      'Notifications',
      'Content sharing',
      'Like/reaction system',
      'Comment threads'
    ],
    'Tool/Utility': [
      'Core tool functionality',
      'User settings/preferences',
      'Save/export functionality',
      'History/recent items',
      'User accounts (if applicable)',
      'Keyboard shortcuts',
      'Help/documentation'
    ],
    'Game': [
      'Core game mechanics',
      'Level/progression system',
      'Scoring/achievements',
      'User profiles/avatars',
      'Settings (audio, controls)',
      'Tutorial/onboarding',
      'Leaderboard'
    ]
  };
  
  return detailedFeatures[projectType] || [];
};