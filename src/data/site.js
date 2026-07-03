import ownerContent from './owner-content.json';

export const businessInfo = {
  name: 'Bullfrog Wine & Spirits',
  tagline: 'North Fort Collins\' easy stop for cold beer, wine, and a spirits wall worth browsing.',
  address: '1820 N College Ave #100, Fort Collins, CO 80524',
  phone: '(970) 221-9100',
  inquiryEmail: 'support@bullfrogwineandspirits.com',
  hoursSummary: 'Mon-Sat 8:30AM-11PM, Sun 10AM-10PM',
  locationNote: 'Right on North College Ave, minutes from Old Town and easy to reach from Highway 287.',
  visitBlurb:
    'Fast cold beer, approachable wine picks, and a spirits selection that covers everything from weeknight staples to allocated bottles.',
  visitHighlights: [
    'Easy access from North College Ave, Old Town, and Highway 287',
    'Quick in-and-out stop for cold beer, mixers, wine, and spirits',
    'Helpful staff for recommendations, pairings, and standout bottle picks',
  ],
  logo: '/store-media/Logo.jpg',
  instagramLink: 'https://www.instagram.com/BULLFROGWINEANDSPIRITS/',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=1820+N+College+Ave+%23100+Fort+Collins+CO+80524',
};

export const ageGateContent = {
  eyebrow: 'Age verification',
  title: 'Please confirm you are 21 or older to enter Bullfrog Wine & Spirits.',
  body: 'By entering this site, you confirm that you are of legal drinking age in your location.',
  exitLink: 'https://www.google.com/',
};

export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Selection', path: '/selection' },
  { label: 'Updates', path: '/updates' },
  { label: 'Community Services', path: '/community-services' },
  { label: 'Contact', path: '/contact' },
];

export const quickStats = [
  { value: 'Cold walls', label: 'beer and ready-to-drink picks kept cold' },
  { value: 'N College', label: 'an easy stop between Old Town and north Fort Collins' },
  { value: 'Open 7 days', label: 'ready for weeknights, weekends, and last-minute plans' },
];

export const campusHighlights = [
  {
    tag: 'Game day run',
    title: 'Cold beer wall',
    body: 'Quick grab-and-go picks when the group chat suddenly becomes a plan.',
  },
  {
    tag: 'Dinner bottle',
    title: 'Wine that is easy to choose',
    body: 'Helpful guidance for gifts, dinners, and bottles that feel like a better call.',
  },
  {
    tag: 'Weekend pickup',
    title: 'Spirits + mixers in one stop',
    body: 'Tequila, vodka, whiskey, and the extras you need without bouncing around town.',
  },
];

export const updateTicker = ownerContent.updateTicker;

export const homeFeaturePanels = [
  {
    tag: 'Trending now',
    title: 'Tequila and canned cocktails',
    body: 'Fast-moving picks for patios, parties, and easy weekend plans.',
    link: '#/category/tequila',
    action: 'Explore tequila',
  },
  {
    tag: 'Staff pick',
    title: 'Bottle advice without the guesswork',
    body: 'Use the store for quick recommendations on wine, whiskey, and easy mixer pairings.',
    link: '#/contact',
    action: 'Contact the store',
  },
  {
    tag: 'How-to',
    title: 'Simple drinks you can make tonight',
    body: 'Easy cocktail recipes help turn a bottle run into a plan for the night.',
    link: '#/cocktail/paloma',
    action: 'View recipes',
  },
];

const wikiImage = (fileName) => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}`;
const promoImage = (fileName) => `/promo-media/${fileName}`;

export const premiumShelf = ownerContent.premiumShelf;

export const beerWineSpirits = [
  'Cold beer',
  'Wine night picks',
  'Party mixers',
  'Game day runs',
  'Premium spirits',
  'Local favorites',
  'Quick stop snacks',
  'Last-minute hosts',
];

export const spiritCategoryTabs = [
  { slug: 'whiskey', label: 'Whiskey' },
  { slug: 'tequila', label: 'Tequila' },
  { slug: 'vodka', label: 'Vodka' },
  { slug: 'gin', label: 'Gin' },
  { slug: 'rum', label: 'Rum' },
  { slug: 'brandy-cognac', label: 'Brandy & Cognac' },
  { slug: 'liqueurs', label: 'Liqueurs' },
  { slug: 'ready-to-drink', label: 'Ready-to-Drink' },
];

export const spiritHistoryCards = [
  {
    kicker: 'Whiskey',
    title: 'From medicinal roots to modern sipping culture',
    history:
      'Whiskey traces back to medieval distilling traditions in Ireland and Scotland, where grain spirits were first made by monks and later refined into regional styles. Over time bourbon, rye, Scotch, and Irish whiskey each developed their own identity through local grains, barrel aging, and production rules.',
    learn: 'Many shoppers notice how whiskey grew from a practical grain spirit into one of the most style-driven categories on the shelf.',
  },
  {
    kicker: 'Tequila',
    title: 'Built from blue agave and deeply tied to Mexico',
    history:
      'Tequila grew from distilled agave spirits produced in western Mexico, especially around Jalisco. It became globally recognized when tequila production was regulated around blue agave, creating distinct styles like blanco, reposado, and anejo based on aging and barrel time.',
    learn: 'A quick read here helps explain why agave origin, cooking methods, and aging matter so much to flavor.',
  },
  {
    kicker: 'Vodka',
    title: 'A spirit shaped by clarity, texture, and versatility',
    history:
      'Vodka became prominent in Eastern and Northern Europe, especially Russia and Poland, where distillers refined neutral spirits from grains and potatoes. Its rise came from purity, smooth texture, and its ability to work in cocktails without dominating other ingredients.',
    learn: 'It is a useful category to compare because subtle production differences can still change mouthfeel and finish.',
  },
  {
    kicker: 'Gin',
    title: 'A juniper spirit with a long botanical story',
    history:
      'Gin evolved from juniper-based medicinal spirits in Europe, then took off in the Netherlands and later England. London Dry helped define the category, but modern gin now stretches into citrus, floral, herbal, and contemporary botanical styles.',
    learn: 'Gin is a great category to study because it shows how aroma and recipe design shape identity as much as aging does in whiskey.',
  },
  {
    kicker: 'Rum',
    title: 'Sugarcane history that spans trade, travel, and cocktails',
    history:
      'Rum developed in the Caribbean from sugarcane byproducts like molasses, becoming one of the most important spirits in Atlantic trade history. Different islands and traditions led to light, dark, spiced, agricole, and aged expressions that still define the category today.',
    learn: 'Rum helps new drinkers understand how geography and raw material can create completely different styles under one category name.',
  },
  {
    kicker: 'Brandy & Cognac',
    title: 'Fruit distillation with old-world structure',
    history:
      'Brandy is distilled from wine or fermented fruit, and its European history runs back centuries as merchants and distillers looked for ways to preserve and transport wine. Cognac became the most famous subcategory by tying distillation, grape selection, and aging standards to a specific French region.',
    learn: 'This category is a useful bridge for anyone curious about the relationship between wine, oak aging, and spirit texture.',
  },
  {
    kicker: 'Liqueurs',
    title: 'Sweetened spirits built around flavor and tradition',
    history:
      'Liqueurs began as infused or sweetened spirits often tied to monasteries, herbal traditions, and regional ingredients. Over time they expanded into categories like amaro, coffee liqueur, orange liqueur, cream liqueur, and aperitivo, each with its own drinking culture.',
    learn: 'Liqueurs are especially approachable because they show how spirits connect to dessert, coffee, aperitif, and cocktail traditions.',
  },
];

export const categoryPages = {
  whiskey: {
    label: 'Whiskey',
    eyebrow: 'Whiskey guide',
    title: 'Bourbon, rye, Scotch, and Irish whiskey all started from the same core idea: grain, distillation, and time.',
    intro:
      'Whiskey shelves can feel intimidating at first, so this guide breaks the category into approachable bottle styles shoppers are likely to see first.',
    history:
      'Whiskey developed from early grain distillation traditions in Ireland and Scotland, then spread into regional styles shaped by grain choice, barrel aging, and local rules. American whiskey later introduced bourbon and rye as major identities, each with their own mash bills and oak influence.',
    bottles: [
      { name: 'Michter\'s 10 Year', style: 'Aged, rich, complex', note: 'A single barrel Kentucky straight bourbon at the pinnacle of tradition and patience.', image: promoImage('michters-10-year.jpeg') },
      { name: 'Eagle Rare 12 Year', style: 'Toffee, honey, toasted oak', note: 'An award-winning bourbon with a long, elegant finish. Exclusive and rare.', image: promoImage('eagle-rare-12.jpeg') },
      { name: 'Willett Family Estate', style: 'Cask strength, 128.6 proof', note: 'A limited-allocation Kentucky bourbon and a true expression of tradition and heritage.', image: promoImage('willett-family-estate.jpeg') },
      { name: 'Bourye', style: 'Bourbon-rye blend', note: 'A High West blend of straight whiskeys that shows how two families can share one bottle.', image: promoImage('bourye.jpeg') },
    ],
  },
  tequila: {
    label: 'Tequila',
    eyebrow: 'Tequila guide',
    title: 'Tequila starts with blue agave and changes dramatically depending on age, oak, and production style.',
    intro:
      'Tequila is easiest to understand through its three most common age statements: blanco, reposado, and anejo.',
    history:
      'Tequila grew out of distilled agave traditions in western Mexico, especially Jalisco. Modern tequila became defined by blue agave production and legal standards that protect its place of origin and style categories.',
    bottles: [
      { name: 'Patron El Alto', style: 'Rare, polished, premium', note: 'A high-end agave feature from the store\'s curated rare spirits selection.', image: promoImage('patron-el-alto.jpeg') },
      { name: 'Casamigos lineup', style: 'Blanco, reposado, and more', note: 'A recognizable tequila family that covers margaritas through slow sipping.', image: promoImage('casamigos-world-cup.jpeg') },
      { name: 'Margarita central', style: 'Mixers, tequila, and citrus', note: 'Everything you need to make world-class margaritas at home, in one display.', image: promoImage('margarita-display.jpeg') },
      { name: 'Patron El Alto feature', style: 'Curated rare agave', note: 'A second look at the premium side of the agave shelf.', image: promoImage('patron-el-alto-alt.jpeg') },
    ],
  },
  vodka: {
    label: 'Vodka',
    eyebrow: 'Vodka guide',
    title: 'Vodka is less about barrel history and more about texture, purity, and how it behaves in a drink.',
    intro:
      'This category is perfect for learning how base ingredients and filtration can shift a spirit even when the profile stays clean.',
    history:
      'Vodka rose to prominence in Eastern and Northern Europe, especially Russia and Poland, where grain and potato distillation traditions emphasized clarity and smoothness. Over time it became one of the world\'s most versatile cocktail spirits.',
    bottles: [
      { name: 'Wheat Vodka', style: 'Soft, light, clean', note: 'Often shows a rounder and gentler texture on the palate.', image: wikiImage("Absolut vodka bottle.png") },
      { name: 'Potato Vodka', style: 'Creamy, fuller body', note: 'A richer mouthfeel that surprises people who think all vodka tastes the same.', image: wikiImage("Absolut vodka bottle.png") },
      { name: 'Neutral Mixer Vodka', style: 'Crisp, direct, versatile', note: 'Built for cocktails where a clean base matters most.', image: wikiImage("Absolut vodka bottle.png") },
      { name: 'Flavored Vodka', style: 'Fruit or dessert driven', note: 'Shows how vodka often becomes a canvas for approachable flavors.', image: wikiImage("Absolut vodka bottle.png") },
    ],
  },
  gin: {
    label: 'Gin',
    eyebrow: 'Gin guide',
    title: 'Gin teaches flavor through botanicals, especially juniper, citrus, herbs, and floral notes.',
    intro:
      'It is one of the easiest categories to compare because aroma changes so clearly from bottle to bottle.',
    history:
      'Gin evolved from juniper-based medicinal spirits in Europe before becoming a major category in the Netherlands and England. London Dry later helped define a crisp classic style, while modern gin opened the door to more expressive botanical recipes.',
    bottles: [
      { name: 'London Dry', style: 'Juniper, citrus, dry finish', note: 'The reference point for many classic cocktails.', image: wikiImage("Bombay_sapphire_bottle.jpg") },
      { name: 'New Western Gin', style: 'Floral, citrus, softer juniper', note: 'Botanicals take center stage with a gentler pine note.', image: wikiImage("Bombay_sapphire_bottle.jpg") },
      { name: 'Navy Strength Gin', style: 'Bold, concentrated, zesty', note: 'Higher proof makes the botanicals feel louder and brighter.', image: wikiImage("Bombay_sapphire_bottles.jpg") },
      { name: 'Pink Gin', style: 'Berry, citrus, floral', note: 'A modern sub-style that brings a more playful entry point.', image: wikiImage("Bombay_sapphire_bottle.jpg") },
    ],
  },
  rum: {
    label: 'Rum',
    eyebrow: 'Rum guide',
    title: 'Rum covers more range than most people expect, from light cocktail bottles to rich barrel-aged sipping styles.',
    intro:
      'Sugarcane and molasses create the base, but island tradition, distillation, and age shape the final style.',
    history:
      'Rum developed in the Caribbean from sugarcane byproducts and became deeply tied to trade, colonial economies, and maritime culture. Different islands shaped distinct house styles that still matter today.',
    bottles: [
      { name: 'White Rum', style: 'Light, clean, cocktail-ready', note: 'A clear rum style built for mojitos, daiquiris, and easy mixing.', image: wikiImage('Bacardi carta blanca bottle.jpg') },
      { name: 'Dark Rum', style: 'Molasses, caramel, baking spice', note: 'A richer rum style that shows how barrel influence changes sugarcane spirits.', image: wikiImage('Myers Rum Original Dark.jpg') },
      { name: 'Spiced Rum', style: 'Vanilla, spice, soft sweetness', note: 'A familiar flavor lane for mixed drinks and party-ready cocktails.', image: wikiImage('Captain Morgan Original Spiced Rum.jpg') },
      { name: 'Aged Rum', style: 'Oak, dried fruit, round finish', note: 'A sipping-oriented style that helps rum feel closer to whiskey in structure.', image: wikiImage('Diplomatico Reserva Exclusiva Rum.jpg') },
    ],
  },
  'brandy-cognac': {
    label: 'Brandy & Cognac',
    eyebrow: 'Brandy guide',
    title: 'Brandy connects fruit, wine, and oak aging in a way that makes the category feel both classic and approachable.',
    intro:
      'This section helps explain why Cognac feels distinct and how grape-based spirits differ from grain or agave categories.',
    history:
      'Brandy emerged as wine was distilled for transport and preservation, then developed into a wide family of fruit spirits across Europe. Cognac became the best-known style because of its strict production rules, grape use, and regional aging traditions in France.',
    bottles: [
      { name: 'VS Cognac', style: 'Fresh grape, oak, spice', note: 'A younger Cognac that still shows structure and warmth.', image: wikiImage("Hennessy VSOP.jpg") },
      { name: 'VSOP Cognac', style: 'Dried fruit, vanilla, oak', note: 'More aging brings a smoother, richer profile.', image: wikiImage("Hennessy VSOP.jpg") },
      { name: 'Fruit Brandy', style: 'Pear, apple, orchard aromas', note: 'A different angle on brandy built around fruit character.', image: wikiImage("Hennessy VSOP.jpg") },
      { name: 'Aged Brandy', style: 'Round, warm, dessert-like', note: 'Often a comfortable bridge for wine drinkers entering spirits.', image: wikiImage("Hennessy VSOP.jpg") },
    ],
  },
  liqueurs: {
    label: 'Liqueurs',
    eyebrow: 'Liqueur guide',
    title: 'Liqueurs show how spirits can become sweeter, more aromatic, and deeply tied to dessert and cocktail culture.',
    intro:
      'Because they are flavored and sweetened, liqueurs are often the easiest way for newer drinkers to learn how spirits support mixed drinks.',
    history:
      'Liqueurs grew from infused or sweetened spirits tied to herbal traditions, monasteries, and regional ingredients. Over time they expanded into coffee, orange, cream, bitter, and aperitivo categories with very different uses.',
    bottles: [
      { name: 'Chartreuse Green', style: 'Herbal, complex, rare', note: 'A highly allocated French herbal liqueur for collectors and cocktail lovers.', image: promoImage('chartreuse-green.jpeg') },
      { name: 'Stella Rosa Chocolate Hazelnut', style: 'Cream, chocolate, hazelnut', note: 'A dessert-forward cream liqueur that makes the category feel rich and giftable.', image: promoImage('stella-rosa.jpeg') },
      { name: 'Stella Rosa luxury pour', style: 'Indulgent, after-dinner', note: 'A second look at a cream liqueur built for slow, luxurious sipping.', image: promoImage('stella-rosa-luxury.jpeg') },
      { name: 'Lot 40 Manhattan bundle', style: 'Rye + Luxardo cherries', note: 'A bundled pick that pairs Canadian rye with premium ingredients for the ultimate Manhattan.', image: promoImage('lot-40-manhattan-bundle.jpeg') },
    ],
  },
  'ready-to-drink': {
    label: 'Ready-to-Drink',
    eyebrow: 'RTD guide',
    title: 'Ready-to-drink cocktails are the newest category on the shelf and one of the fastest to understand.',
    intro:
      'These are built for convenience, portability, and easy flavor recognition, which makes them one of the most approachable sections in the store.',
    history:
      'Ready-to-drink beverages grew from canned cocktail culture, flavored malt beverages, and spirit-based convenience packaging. Their popularity surged as consumers wanted bar-inspired drinks with less prep and consistent flavor.',
    bottles: [
      { name: 'Canned cocktail lineup', style: 'Margarita, martini, old fashioned', note: 'Four iconic cocktails in ready-to-pour cans, chilled and ready for home or parties.', image: promoImage('rtd-cocktails.jpeg') },
      { name: 'Margarita station', style: 'Grab-and-go margarita picks', note: 'Premium spirits, mixers, and margarita essentials pulled together in one display.', image: promoImage('margarita-display.jpeg') },
      { name: 'Busch Light Lime', style: 'Crisp, refreshing, lime', note: 'A cold, easy-drinking summer pick from the beer wall.', image: promoImage('busch-light-lime.jpeg') },
      { name: 'Cooler doors', style: 'Cold and ready to go', note: 'The cold walls keep seltzers, cans, and party packs ready for the fastest stops.', image: '/store-media/cooler-aisle.jpeg' },
    ],
  },
};

export const categoryStories = [
  {
    kicker: 'Beer',
    title: 'Cold, quick, and stocked for the weekend.',
    description:
      'A beer wall built for quick pickups, local favorites, party packs, and last-minute six-packs that do not slow you down.',
    points: ['Colorado staples', 'Singles and party packs', 'Cold boxes ready to go'],
    details: [
      { label: 'Best for', value: 'Game day, house parties, quick cold runs' },
      { label: 'Look for', value: 'Local craft, easy packs, fast grab-and-go picks' },
    ],
    image: promoImage('busch-light-lime.jpeg'),
    alt: 'Busch Light Lime promotional graphic for Bullfrog Wine & Spirits',
  },
  {
    kicker: 'Wine',
    title: 'Easy recommendations without the guesswork.',
    description:
      'Whether you need a dinner bottle, a gift, or a dependable weeknight favorite, the wine side is designed to feel approachable.',
    points: ['Better host gifts', 'Dinner-ready picks', 'Recommendations that feel personal'],
    details: [
      { label: 'Best for', value: 'Dinner bottles, gifts, date night, host stops' },
      { label: 'Look for', value: 'Easy reds, crisp whites, bottles that feel elevated' },
    ],
    image: '/store-media/aisle-wine.jpeg',
    alt: 'Wine and spirits aisles inside Bullfrog Wine & Spirits',
  },
  {
    kicker: 'Spirits',
    title: 'A spirits aisle that actually feels fun to browse.',
    description:
      'From the staples every house needs to harder-to-find bottles worth asking about, the spirits section is one of the store highlights.',
    points: ['Vodka, tequila, whiskey, and more', 'Featured displays', 'Limited and premium bottles'],
    details: [
      { label: 'Best for', value: 'Top-shelf browsing, cocktails, gifting, collector stops' },
      { label: 'Look for', value: 'Premium tequila, whiskey, vodka, and featured bottle displays' },
    ],
    image: '/store-media/aisle-spirits.jpeg',
    alt: 'Spirits aisle inside Bullfrog Wine & Spirits',
  },
];

export const updateMoments = ownerContent.updateMoments;

export const featuredUpdates = ownerContent.featuredUpdates;

export const tastingUpdates = ownerContent.tastingUpdates;

export const communityServices = {
  intro:
    'Community-focused service updates, local partnerships, and neighborhood announcements from Bullfrog Wine & Spirits.',
  featuredEvent: {
    kicker: 'Community first',
    title: 'A north Fort Collins neighbor that shows up for local events.',
    image: '/community-services/featured-event.jpeg',
    imageAlt: 'Community event feature for Bullfrog Wine & Spirits',
    body:
      'Bullfrog Wine & Spirits is part of a local, family-run pair of Fort Collins stores that believe a neighborhood shop should be useful beyond its shelves. That means supporting local organizations, event weekends, and the people who make north Fort Collins feel like a community.',
    service:
      'From sponsorships to event-weekend support, the store looks for ways to help local gatherings feel more connected and better resourced. Community events rely on nearby businesses to fund the details, build momentum, and keep attention on the people the event is meant to serve.',
    closing:
      'As new sponsorships and community moments happen, they will be featured here first, so check back to see what Bullfrog is supporting next.',
  },
  highlights: [
    {
      kicker: 'Local support',
      title: 'Community partnerships with real neighborhood impact',
      body: 'Bullfrog Wine & Spirits supports local organizations by participating in sponsorships, event partnerships, and service-focused community moments.',
    },
    {
      kicker: 'Event service',
      title: 'Helping local events feel supported and well-planned',
      body: 'From sponsor recognition to event-weekend support, the store can help community gatherings feel more connected and better resourced.',
    },
    {
      kicker: 'Fort Collins roots',
      title: 'A store that wants to be useful outside the store',
      body: 'Community service at Bullfrog Wine & Spirits means using local business presence to support organizations, families, and events across Northern Colorado.',
    },
  ],
};

export const instagramSpotlight = {
  eyebrow: 'Instagram updates',
  title: 'Follow Bullfrog Wine & Spirits on Instagram for the fastest updates.',
  body:
    'For fresh arrivals, featured bottles, tasting announcements, and same-day store moments, Instagram is the quickest place to stay connected.',
  points: [
    'Featured bottles and premium shelf updates',
    'Same-day posts for arrivals, tastings, and weekends',
    'A quick way to see what is happening in store',
  ],
  actionLabel: 'Follow @bullfrogwineandspirits',
};

export const inquiryForm = {
  eyebrow: 'Customer inquiries',
  title: 'Questions, product requests, and event inquiries can start here.',
  body:
    'Use the form below for bottle questions, party planning, availability checks, and general store inquiries.',
  endpoint: `https://formsubmit.co/${businessInfo.inquiryEmail}`,
  subject: 'Bullfrog Wine & Spirits website inquiry',
  reasons: [
    'Ask about featured bottles or category recommendations',
    'Reach out about event weekends, gifts, or group needs',
    'Share a general question before stopping by the store',
  ],
  fields: [
    { name: 'name', label: 'Full name', type: 'text', placeholder: 'Your name', required: true, autoComplete: 'name' },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', required: true, autoComplete: 'email' },
    { name: 'phone', label: 'Phone', type: 'tel', placeholder: '(555) 555-5555', required: false, autoComplete: 'tel' },
    { name: 'topic', label: 'Inquiry topic', type: 'text', placeholder: 'Bottle question, event, product request...', required: true, autoComplete: 'off' },
  ],
};

export const cocktailCentral = {
  eyebrow: 'Cocktail central',
  title: 'Learn a few easy drinks to make with bottles, mixers, and citrus you can grab at Bullfrog.',
  body:
    'Simple cocktail recipes make it easier to choose bottles, mixers, and citrus for a night in, a dinner, or a get-together.',
  drinks: [
    {
      slug: 'cherry-lime-margarita',
      name: 'Cherry Lime Margarita',
      image: wikiImage('Margarita with lime in a margarita glass - Evan Swigart.jpg'),
      spirit: 'Tequila',
      build: 'Tequila, lime juice, cherry syrup, orange liqueur, ice',
      intro: 'A fruit-forward twist on the classic margarita that stays bright, easy, and group-friendly.',
      ingredients: [
        '2 oz tequila blanco',
        '1 oz lime juice',
        '3/4 oz orange liqueur',
        '1/2 oz cherry syrup or muddled cherries',
        'Ice and a lime wheel',
      ],
      steps: [
        'Shake tequila, lime juice, orange liqueur, and cherry syrup with ice.',
        'Strain into a salt-rimmed rocks glass over fresh ice.',
        'Garnish with lime and cherry.',
      ],
    },
    {
      slug: 'mint-julep',
      name: 'Mint Julep',
      image: wikiImage('Mint Julep2.jpg'),
      spirit: 'Bourbon',
      build: 'Bourbon, mint, simple syrup, crushed ice',
      intro: 'A classic bourbon cocktail that teaches how mint, dilution, and crushed ice change the whole experience.',
      ingredients: [
        '2 oz bourbon',
        '1/2 oz simple syrup',
        '8 to 10 mint leaves',
        'Crushed ice',
        'Mint sprig garnish',
      ],
      steps: [
        'Lightly press mint with simple syrup in the bottom of the cup or glass.',
        'Add bourbon and fill with crushed ice.',
        'Stir until frosty and top with more ice and mint.',
      ],
    },
    {
      slug: 'passion-fruit-margarita',
      name: 'Passion Fruit Margarita',
      image: wikiImage('Margarita.jpg'),
      spirit: 'Tequila',
      build: 'Tequila, lime, passion fruit, orange liqueur',
      intro: 'A tropical margarita variation that still teaches the same tequila-lime-orange liqueur balance as the original.',
      ingredients: [
        '2 oz tequila blanco',
        '1 oz lime juice',
        '3/4 oz orange liqueur',
        '3/4 oz passion fruit puree or syrup',
        'Ice',
      ],
      steps: [
        'Shake all ingredients hard with ice.',
        'Strain into a chilled coupe or rocks glass over fresh ice.',
        'Garnish with lime or passion fruit if available.',
      ],
    },
    {
      slug: 'limoncello-spritz',
      name: 'Limoncello Spritz',
      image: wikiImage('Limoncello Spritz mit Prosecco.jpg'),
      spirit: 'Limoncello',
      build: 'Limoncello, prosecco, soda water, lemon',
      intro: 'One of the easiest warm-weather drinks to build and a clean introduction to liqueur-based highballs.',
      ingredients: [
        '2 oz limoncello',
        '3 oz prosecco',
        '1 oz soda water',
        'Lemon slice',
        'Ice',
      ],
      steps: [
        'Fill a large wine glass with ice.',
        'Add limoncello, prosecco, and soda water.',
        'Stir lightly and garnish with lemon.',
      ],
    },
    {
      slug: 'paloma',
      name: 'Paloma',
      image: wikiImage('Paloma Cocktail2.jpg'),
      spirit: 'Tequila',
      build: 'Tequila, grapefruit soda, lime, salt rim',
      intro: 'A highly approachable tequila highball that is bright, refreshing, and easy to make without special tools.',
      ingredients: [
        '2 oz tequila blanco',
        '1/2 oz lime juice',
        '4 oz grapefruit soda',
        'Pinch of salt or salt rim',
        'Ice',
      ],
      steps: [
        'Build tequila and lime in an ice-filled glass.',
        'Top with grapefruit soda and stir gently.',
        'Finish with a pinch of salt or a salted rim.',
      ],
    },
  ],
};

export const sliderPhotos = [
  {
    src: '/store-media/storefront.jpeg',
    alt: 'Bullfrog Wine & Spirits storefront on North College Ave',
    caption: 'The Bullfrog storefront is easy to spot right on North College Ave.',
  },
  {
    src: '/store-media/interior-front.jpeg',
    alt: 'Front sales floor inside Bullfrog Wine & Spirits',
    caption: 'A bright, open sales floor makes browsing feel fast and easy.',
  },
  {
    src: '/store-media/aisle-spirits.jpeg',
    alt: 'Spirits aisle inside Bullfrog Wine & Spirits',
    caption: 'The spirits aisles are stocked deep with staples and standouts.',
  },
  {
    src: '/store-media/aisle-wine.jpeg',
    alt: 'Wine aisle inside Bullfrog Wine & Spirits',
    caption: 'Wine picks stay easy to compare with wide, clear aisles.',
  },
  {
    src: '/store-media/svedka-display.jpeg',
    alt: 'Featured display inside Bullfrog Wine & Spirits',
    caption: 'Featured displays add color and energy in the middle of the store.',
  },
  {
    src: '/store-media/aisle-displays.jpeg',
    alt: 'Featured stacks and displays inside Bullfrog Wine & Spirits',
    caption: 'Featured stacks keep the store feeling open and easy to shop.',
  },
  {
    src: '/store-media/cooler-aisle.jpeg',
    alt: 'Cooler aisle inside Bullfrog Wine & Spirits',
    caption: 'Cold walls keep beer, seltzers, and RTDs ready for quick pickups.',
  },
  {
    src: '/store-media/cooler-vodka.jpeg',
    alt: 'Coolers and vodka section inside Bullfrog Wine & Spirits',
    caption: 'Cold selections sit right beside the spirits for one-stop runs.',
  },
  {
    src: promoImage('weller-lineup.jpeg'),
    alt: 'Weller bourbon lineup promotional graphic for Bullfrog Wine & Spirits',
    caption: 'Allocated bourbon lineups bring collector appeal to the shelf.',
  },
  {
    src: promoImage('michters-10-year.jpeg'),
    alt: 'Michter\'s 10 Year bourbon promotional graphic for Bullfrog Wine & Spirits',
    caption: 'Legendary bourbon features make the premium section feel curated.',
  },
  {
    src: promoImage('casamigos-world-cup.jpeg'),
    alt: 'Casamigos tequila lineup promotional graphic for Bullfrog Wine & Spirits',
    caption: 'Premium tequila features make agave shopping easier to browse.',
  },
];

export const pages = {
  home: {
    heroVideo: '',
    heroPoster: '/store-media/storefront.jpeg',
    quotes: [
      'Cold beer for game day, pregame plans, and last-minute runs',
      'Whether it is a quick beer run, a weekend party pack, or the bottle that makes the night feel planned, Bullfrog keeps it easy.',
      'Fridge-ready packs, local favorites, and easy crowd-pleasers',
      'Beer runs made quick, cold, and easy on North College',
      'Top-shelf tequila, whiskey, vodka, and bottle picks worth browsing',
      'A north Fort Collins stop with more color, more shelf energy, and easier shopping',
    ],
  },
  contact: {
    image: '/store-media/interior-front.jpeg',
  },
};
