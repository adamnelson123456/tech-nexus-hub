import { Article, Category } from '../types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'Google Unveils New AI-Powered Search Features',
    source: 'TechCrunch',
    sourceUrl: 'https://techcrunch.com',
    summary: 'Google has announced a major update to its search engine, integrating advanced AI capabilities that will allow users to ask more complex questions and receive more detailed answers. The new features leverage the latest in natural language processing to better understand user intent.',
    fullContent: 'Google has announced a major update to its search engine, integrating advanced AI capabilities that will allow users to ask more complex questions and receive more detailed answers. The new features leverage the latest in natural language processing to better understand user intent.\n\nThe company demonstrated several new capabilities, including the ability to search through images with natural language questions, improved understanding of complex queries, and more contextual information in search results.\n\n"This represents the biggest leap forward in search in the past five years," said Google\'s CEO. "We\'re reimagining what search can do by applying our latest AI advancements."\n\nThe update will roll out gradually over the next few months, with some features initially available only to select users through the Google Search Labs program.',
    imageUrl: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd',
    category: 'AI',
    timestamp: '2023-10-15T14:30:00Z',
    url: '/article/1',
    featured: true,
  },
  {
    id: '2',
    title: 'Major Cybersecurity Breach Affects Millions of Users',
    source: 'Wired',
    sourceUrl: 'https://wired.com',
    summary: 'A significant data breach has been discovered affecting a popular cloud service provider, potentially exposing sensitive information of millions of users worldwide. Security experts are advising users to immediately change their passwords and enable two-factor authentication.',
    fullContent: 'A significant data breach has been discovered affecting a popular cloud service provider, potentially exposing sensitive information of millions of users worldwide. Security experts are advising users to immediately change their passwords and enable two-factor authentication.\n\nThe breach, discovered late yesterday, appears to have targeted user credentials and payment information. Initial reports suggest that the attackers exploited a previously unknown vulnerability in the company\'s authentication system.\n\n"This is one of the most sophisticated attacks we\'ve seen this year," noted a leading cybersecurity researcher. "The methods used suggest this may be the work of a state-sponsored group."\n\nThe affected company has issued a statement confirming the breach and outlining their immediate response, which includes forced password resets and a comprehensive security audit.',
    imageUrl: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
    category: 'Cybersecurity',
    timestamp: '2023-10-14T09:15:00Z',
    url: '/article/2',
  },
  {
    id: '3',
    title: 'Apple Announces Next-Generation M3 Processors',
    source: 'The Verge',
    sourceUrl: 'https://theverge.com',
    summary: 'Apple has revealed its new M3 series of processors, promising significant performance improvements while reducing power consumption. The chips are expected to power the next generation of Mac computers and potentially new iPad Pro models.',
    fullContent: 'Apple has revealed its new M3 series of processors, promising significant performance improvements while reducing power consumption. The chips are expected to power the next generation of Mac computers and potentially new iPad Pro models.\n\nThe M3 family includes three variants: the base M3, M3 Pro, and M3 Max. According to Apple, the standard M3 chip offers up to 20% better CPU performance and 30% better GPU performance compared to the M2, while the M3 Max can deliver up to 40% faster performance for the most demanding professional workloads.\n\n"These are the most powerful and efficient chips we\'ve ever created," said Apple\'s senior VP of Hardware Technologies. "They will enable capabilities in our products that weren\'t possible before."\n\nThe new chips are built on an enhanced 3-nanometer process technology, allowing for greater transistor density and improved energy efficiency.',
    imageUrl: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    category: 'Hardware',
    timestamp: '2023-10-13T16:45:00Z',
    url: '/article/3',
  },
  {
    id: '4',
    title: 'Microsoft Acquires AI Startup for $500 Million',
    source: 'Bloomberg',
    sourceUrl: 'https://bloomberg.com',
    summary: 'Microsoft has announced the acquisition of a promising AI startup specializing in natural language processing for approximately $500 million. The acquisition is part of Microsoft\'s ongoing strategy to enhance its AI capabilities across its product ecosystem.',
    fullContent: 'Microsoft has announced the acquisition of a promising AI startup specializing in natural language processing for approximately $500 million. The acquisition is part of Microsoft\'s ongoing strategy to enhance its AI capabilities across its product ecosystem.\n\nThe startup, founded just three years ago, has developed proprietary technology that significantly improves how machines understand and generate human language. Their innovations have particular applications in customer service automation, content creation, and accessibility features.\n\n"We\'re incredibly excited to join the Microsoft team," said the startup\'s CEO. "With Microsoft\'s resources and reach, we can accelerate our research and bring these technologies to billions of users."\n\nMicrosoft plans to integrate the startup\'s technology into multiple products, including Office, Azure, and its developer tools. This marks Microsoft\'s third AI-focused acquisition this year.',
    imageUrl: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
    category: 'AI',
    timestamp: '2023-10-12T11:20:00Z',
    url: '/article/4',
  },
  {
    id: '5',
    title: 'Revolutionary New Battery Technology Promises Week-Long Smartphone Power',
    source: 'Scientific American',
    sourceUrl: 'https://scientificamerican.com',
    summary: 'Researchers have developed a breakthrough battery technology that could allow smartphones to run for up to a week on a single charge. The technology uses novel materials and a redesigned structure to dramatically increase energy density and reduce degradation.',
    fullContent: 'Researchers have developed a breakthrough battery technology that could allow smartphones to run for up to a week on a single charge. The technology uses novel materials and a redesigned structure to dramatically increase energy density and reduce degradation.\n\nThe innovation comes from a team of scientists at a leading university who have been working on alternative battery chemistries for over five years. Their approach replaces traditional lithium-ion components with a new composite material that can store significantly more energy in the same space.\n\n"Our tests show that this technology can provide at least three times the energy density of current commercial batteries," explained the lead researcher. "And perhaps more importantly, it shows minimal capacity loss even after hundreds of charge cycles."\n\nSeveral major technology companies have already expressed interest in licensing the technology, though commercial products using these batteries are likely still 2-3 years away pending further development and safety testing.',
    imageUrl: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120',
    category: 'Hardware',
    timestamp: '2023-10-11T15:10:00Z',
    url: '/article/5',
  },
  {
    id: '6',
    title: 'Open-Source AI Model Rivals Commercial Alternatives',
    source: 'VentureBeat',
    sourceUrl: 'https://venturebeat.com',
    summary: 'A new open-source large language model has been released that performs on par with leading commercial AI systems while requiring significantly fewer computational resources. The model represents a major breakthrough for the open-source AI community.',
    fullContent: 'A new open-source large language model has been released that performs on par with leading commercial AI systems while requiring significantly fewer computational resources. The model represents a major breakthrough for the open-source AI community.\n\nDeveloped by a consortium of independent researchers and smaller AI labs, the model achieves impressive results on standard benchmarks while being compact enough to run on consumer-grade hardware. This accessibility marks a significant shift in the AI landscape, which has been increasingly dominated by resource-intensive models created by large tech companies.\n\n"We\'ve shown that cutting-edge AI development doesn\'t have to be limited to organizations with massive computing resources," said one of the project\'s coordinators. "This model democratizes access to advanced AI capabilities."\n\nThe model and its training methodology have been fully documented and released under a permissive license, allowing both research and commercial applications. Community contributions have already begun expanding the model\'s capabilities into specialized domains.',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    category: 'AI',
    timestamp: '2023-10-10T13:40:00Z',
    url: '/article/6',
  },
  {
    id: '7',
    title: 'New Startup Raises $50M to Revolutionize Remote Work',
    source: 'Forbes',
    sourceUrl: 'https://forbes.com',
    summary: 'A startup focused on improving remote work collaboration has secured $50 million in Series B funding. Their platform uses AI to enhance virtual meetings, automatically generate notes, and create actionable task lists from conversations.',
    fullContent: 'A startup focused on improving remote work collaboration has secured $50 million in Series B funding. Their platform uses AI to enhance virtual meetings, automatically generate notes, and create actionable task lists from conversations.\n\nFounded by former executives from leading tech companies, the startup has seen explosive growth since its initial launch last year, with their user base increasing by over 300% in just six months. The platform integrates with popular tools like Slack, Microsoft Teams, and Zoom.\n\n"Remote and hybrid work are here to stay, but the tools haven\'t evolved enough to support truly seamless collaboration," explained the company\'s CEO. "We\'re building the missing layer that makes distributed teams more productive than in-person ones."\n\nThe new funding will be used to expand the company\'s engineering team, enhance their AI capabilities, and accelerate international expansion. Several Fortune 500 companies are already among their enterprise customers.',
    imageUrl: 'https://images.unsplash.com/photo-1613979657570-fc5eff453461',
    category: 'Startups',
    timestamp: '2023-10-09T10:50:00Z',
    url: '/article/7',
  },
  {
    id: '8',
    title: 'Major Browser Update Introduces Privacy-Focused Features',
    source: 'Ars Technica',
    sourceUrl: 'https://arstechnica.com',
    summary: 'A popular web browser has released a significant update focused on enhancing user privacy. The new version includes built-in tracking prevention, improved cookie controls, and automatic HTTPS upgrades for all connections.',
    fullContent: 'A popular web browser has released a significant update focused on enhancing user privacy. The new version includes built-in tracking prevention, improved cookie controls, and automatic HTTPS upgrades for all connections.\n\nThe update represents a major shift in the browser\'s approach to privacy, positioning it more directly against competitors that have made privacy protection a central feature. Beyond the visible privacy enhancements, the update also includes under-the-hood changes to reduce fingerprinting capabilities used by advertisers to track users across websites.\n\n"Users shouldn\'t have to choose between a great browsing experience and privacy," said the company\'s director of product. "With this update, we\'re setting a new standard for what users should expect from their browser."\n\nThe privacy features are enabled by default, though users have granular controls to customize their experience. Early performance tests suggest the tracking prevention features may also improve page load times by reducing the amount of third-party scripts that execute.',
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97',
    category: 'Software',
    timestamp: '2023-10-08T12:25:00Z',
    url: '/article/8',
  },
  {
    id: '9',
    title: 'Quantum Computing Breakthrough Brings Practical Applications Closer',
    source: 'MIT Technology Review',
    sourceUrl: 'https://technologyreview.com',
    summary: 'Scientists have achieved a significant breakthrough in quantum error correction, potentially solving one of the biggest challenges in building practical quantum computers. The new technique allows quantum bits to maintain their state for substantially longer periods.',
    fullContent: 'Scientists have achieved a significant breakthrough in quantum error correction, potentially solving one of the biggest challenges in building practical quantum computers. The new technique allows quantum bits to maintain their state for substantially longer periods.\n\nQuantum computers promise exponential speedups for certain types of calculations, but have been held back by the fragility of quantum states, which are extremely vulnerable to interference from their environment. This new approach uses a novel arrangement of qubits that creates redundancy without introducing additional error sources.\n\n"This is the kind of advance that could accelerate the quantum computing timeline by several years," commented a quantum computing expert not involved in the research. "It addresses one of the fundamental roadblocks to scaling these systems."\n\nThe research team has already demonstrated the technique on a small-scale quantum processor and is working with industry partners to implement it in larger systems. The breakthrough could have particular implications for quantum simulations related to materials science and drug discovery.',
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
    category: 'Hardware',
    timestamp: '2023-10-07T14:55:00Z',
    url: '/article/9',
  },
  {
    id: '10',
    title: 'New Framework Promises to Simplify Web3 Development',
    source: 'CoinDesk',
    sourceUrl: 'https://coindesk.com',
    summary: 'A new development framework aims to make creating decentralized applications more accessible to mainstream developers. The tool abstracts away much of the complexity of blockchain interactions, allowing programmers to build Web3 applications using familiar concepts.',
    fullContent: 'A new development framework aims to make creating decentralized applications more accessible to mainstream developers. The tool abstracts away much of the complexity of blockchain interactions, allowing programmers to build Web3 applications using familiar concepts.\n\nThe framework provides standardized components for common Web3 requirements such as wallet connections, transaction management, and smart contract interactions. It works across multiple blockchains, including Ethereum, Solana, and others, using a unified API.\n\n"The technical barriers to Web3 development have been too high for too long," said the creator of the framework. "We\'ve focused on making the developer experience as seamless as possible while maintaining the security and decentralization benefits of blockchain technology."\n\nThe project has received backing from several prominent crypto venture capital firms and has already been adopted by dozens of projects during its beta phase. The full release includes extensive documentation, tutorials, and template applications to help developers get started quickly.',
    imageUrl: 'https://images.unsplash.com/photo-1639762681057-408e52192e55',
    category: 'Web3',
    timestamp: '2023-10-06T11:30:00Z',
    url: '/article/10',
  },
  {
    id: '11',
    title: 'New AI-powered Code Assistant Revolutionizes Software Development',
    source: 'InfoWorld',
    sourceUrl: 'https://infoworld.com',
    summary: 'A new AI-powered code assistant has been released that can understand complex programming tasks and generate high-quality code across multiple languages. Early users report significant productivity improvements, with some claiming it has doubled their coding speed.',
    fullContent: 'A new AI-powered code assistant has been released that can understand complex programming tasks and generate high-quality code across multiple languages. Early users report significant productivity improvements, with some claiming it has doubled their coding speed.\n\nUnlike earlier code completion tools, this assistant can understand broader context and intent, allowing developers to describe functionality in natural language and receive appropriate implementation suggestions. It supports over 20 programming languages and integrates with popular IDEs and code editors.\n\n"This represents a fundamental shift in how software is written," said the company\'s CTO. "Developers can focus more on architecture and problem-solving while the AI handles much of the implementation details."\n\nThe tool also includes features for explaining unfamiliar code, suggesting optimizations, and automatically generating tests. It was trained on a diverse dataset of open-source code and has been fine-tuned based on feedback from thousands of professional developers during an extended beta period.',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159',
    category: 'AI',
    timestamp: '2023-10-05T16:20:00Z',
    url: '/article/11',
  },
  {
    id: '12',
    title: 'Smartphone Manufacturers Agree on Universal Charging Standard',
    source: 'BBC Technology',
    sourceUrl: 'https://bbc.com/technology',
    summary: 'Major smartphone manufacturers have finally reached an agreement to adopt a single universal charging standard for all mobile devices. The new standard will reduce electronic waste and simplify charging for consumers.',
    fullContent: 'Major smartphone manufacturers have finally reached an agreement to adopt a single universal charging standard for all mobile devices. The new standard will reduce electronic waste and simplify charging for consumers.\n\nAfter years of fragmentation and proprietary solutions, the industry has agreed to standardize on USB-C with the USB Power Delivery protocol, establishing a common solution that will work across devices from all manufacturers. The agreement includes provisions for backward compatibility and a transition period to minimize disruption.\n\n"This is a win for consumers and for the environment," said a spokesperson for the industry association that facilitated the agreement. "Reducing charger duplication could prevent thousands of tons of e-waste annually."\n\nThe standardization will be phased in over the next two years, with most manufacturers committing to implementing the universal standard in all new devices by the end of next year. Consumer advocacy groups have praised the move, noting that it will reduce confusion and expense for users.',
    imageUrl: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
    category: 'Mobile',
    timestamp: '2023-10-04T09:45:00Z',
    url: '/article/12',
  },
];

export const getRecentArticles = () => {
  return [...articles].sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });
};

export const getArticlesByCategory = (category: Category) => {
  if (category === 'All') {
    return getRecentArticles();
  }
  return getRecentArticles().filter(article => article.category === category);
};

export const searchArticles = (query: string) => {
  const lowerCaseQuery = query.toLowerCase();
  return getRecentArticles().filter(article => {
    return (
      article.title.toLowerCase().includes(lowerCaseQuery) ||
      article.summary.toLowerCase().includes(lowerCaseQuery) ||
      article.source.toLowerCase().includes(lowerCaseQuery) ||
      article.category.toLowerCase().includes(lowerCaseQuery)
    );
  });
};

export const getArticleById = (id: string) => {
  return articles.find(article => article.id === id);
};

export const getAllCategories = (): Category[] => {
  return ['All', 'AI', 'Cybersecurity', 'Hardware', 'Software', 'Startups', 'Web3', 'Mobile'];
};

export

