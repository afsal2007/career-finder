
function lvl4Options(primaryCategory) {
  return [
    { label: "Alone, deeply focused on one problem", tag: "Solo-Focused", next: "q5", scores: scoreFor(primaryCategory, 2) },
    { label: "In a small team, building together", tag: "Team Player", next: "q5", scores: scoreFor(primaryCategory, 2) },
    { label: "Freelance, different clients/projects", tag: "Freelancer", next: "q5", scores: scoreFor(primaryCategory, 2) },
    { label: "Fast-paced, high-energy environment", tag: "Fast-Paced", next: "q5", scores: scoreFor(primaryCategory, 2) }
  ];
}

function scoreFor(category, points) {
  const s = {};
  s[category] = points;
  return s;
}

// ===================================================
// DATA: The Question Tree
// ===================================================
const questions = {

  // ---------- LEVEL 1 ----------
  q1: {
    text: "Which area excites you the most?",
    options: [
      { label: "Building or fixing things with technology", tag: "Tech", next: "q2_tech" },
      { label: "Creating art, stories, or visual content",  tag: "Creative", next: "q2_creative" },
      { label: "Working with my hands, tools, or machines", tag: "Trade", next: "q2_trade" },
      { label: "Talking to people, selling, organizing",    tag: "Business", next: "q2_business" }
    ]
  },

  // ---------- LEVEL 2 ----------
  q2_tech: {
    text: "Within technology, what sounds most interesting?",
    options: [
      { label: "Building websites or apps",             tag: "Software", next: "q3_software" },
      { label: "Working with data, numbers, or AI",     tag: "Data & AI", next: "q3_data" },
      { label: "Smart devices, sensors, hardware (IoT)", tag: "IoT", next: "q3_iot" },
      { label: "Protecting systems from hackers/security", tag: "Security", next: "q3_security" }
    ]
  },
  q2_creative: {
    text: "Within creative work, what pulls you in most?",
    options: [
      { label: "Designing visuals — logos, posters, layouts", tag: "Design", next: "q3_design" },
      { label: "Shooting and editing video",                  tag: "Video", next: "q3_video" },
      { label: "Writing, podcasting, or posting content",     tag: "Content", next: "q3_content" },
      { label: "Drawing, animation, or illustration",         tag: "Animation", next: "q3_animation" }
    ]
  },
  q2_trade: {
    text: "Within hands-on trade work, what fits you best?",
    options: [
      { label: "Electrical or electronics work",          tag: "Electrical", next: "q3_electrical" },
      { label: "Mechanical — vehicles, machines, repair", tag: "Mechanical", next: "q3_mechanical" },
      { label: "Construction or building work",           tag: "Construction", next: "q3_construction" },
      { label: "Food, hospitality, or culinary work",     tag: "Culinary", next: "q3_culinary" }
    ]
  },
  q2_business: {
    text: "Within business and people work, what fits best?",
    options: [
      { label: "Selling products or services",                tag: "Sales", next: "q3_sales" },
      { label: "Supporting and helping customers",            tag: "Support", next: "q3_support" },
      { label: "Organizing operations, logistics, or events", tag: "Operations", next: "q3_operations" },
      { label: "Starting and running my own small business",  tag: "Entrepreneur", next: "q3_entrepreneur" }
    ]
  },

  // ---------- LEVEL 3 (Tech) ----------
  q3_software: {
    text: "What kind of software work appeals to you?",
    options: [
      { label: "Designing what users see and click", tag: "Frontend", next: "q4_frontend", scores: { tech: 2 } },
      { label: "Building the engine behind the scenes", tag: "Backend", next: "q4_backend", scores: { tech: 2 } },
      { label: "Making mobile apps", tag: "Mobile", next: "q4_mobile", scores: { tech: 2 } },
      { label: "Making video games", tag: "Game Dev", next: "q4_gamedev", scores: { tech: 2 } }
    ]
  },
  q3_data: {
    text: "What part of data/AI interests you?",
    options: [
      { label: "Finding patterns and insights in numbers", tag: "Data Analysis", next: "q4_dataanalysis", scores: { tech: 2 } },
      { label: "Building AI models that learn", tag: "Machine Learning", next: "q4_ml", scores: { tech: 2 } },
      { label: "Making charts/dashboards for businesses", tag: "BI", next: "q4_bi", scores: { tech: 2 } },
      { label: "Automating repetitive tasks with scripts", tag: "Automation", next: "q4_automation", scores: { tech: 2 } }
    ]
  },
  q3_iot: {
    text: "What excites you about smart devices?",
    options: [
      { label: "Designing the physical device", tag: "Hardware Design", next: "q4_hardwaredesign", scores: { tech: 2 } },
      { label: "Writing the code that runs on it", tag: "Embedded Code", next: "q4_embedded", scores: { tech: 2 } },
      { label: "Connecting devices to the internet", tag: "Connectivity", next: "q4_connectivity", scores: { tech: 2 } },
      { label: "Repairing/maintaining smart systems", tag: "IoT Repair", next: "q4_iotrepair", scores: { tech: 2 } }
    ]
  },
  q3_security: {
    text: "What part of security interests you?",
    options: [
      { label: "Finding weaknesses before hackers do", tag: "Pen Testing", next: "q4_pentest", scores: { tech: 2 } },
      { label: "Protecting networks and servers", tag: "Network Security", next: "q4_netsec", scores: { tech: 2 } },
      { label: "Investigating after something goes wrong", tag: "Forensics", next: "q4_forensics", scores: { tech: 2 } },
      { label: "Teaching people to stay safe online", tag: "Security Training", next: "q4_sectraining", scores: { tech: 2 } }
    ]
  },

  // ---------- LEVEL 3 (Creative) ----------
  q3_design: {
    text: "Which kind of design work sounds most like you?",
    options: [
      { label: "Branding — logos, identity, color systems", tag: "Branding", next: "q4_branding", scores: { creative: 2 } },
      { label: "UI/UX — designing app and website screens", tag: "UI/UX", next: "q4_uiux", scores: { creative: 2 } },
      { label: "Print — posters, packaging, layouts", tag: "Print Design", next: "q4_print", scores: { creative: 2 } },
      { label: "Social media graphics", tag: "Social Graphics", next: "q4_socialgraphics", scores: { creative: 2 } }
    ]
  },
  q3_video: {
    text: "What part of video work interests you most?",
    options: [
      { label: "Filming — camera work, lighting, setup", tag: "Cinematography", next: "q4_cinematography", scores: { creative: 2 } },
      { label: "Editing footage into a final story", tag: "Editing", next: "q4_videoediting", scores: { creative: 2 } },
      { label: "Directing — planning the shoot and story", tag: "Direction", next: "q4_direction", scores: { creative: 2 } },
      { label: "Motion graphics and visual effects", tag: "Motion Graphics", next: "q4_motiongraphics", scores: { creative: 2 } }
    ]
  },
  q3_content: {
    text: "What kind of content do you enjoy making?",
    options: [
      { label: "Short videos for Instagram/YouTube", tag: "Short-Form", next: "q4_shortform", scores: { creative: 2 } },
      { label: "Writing — blogs, scripts, captions", tag: "Writing", next: "q4_writing", scores: { creative: 2 } },
      { label: "Podcasting or voice content", tag: "Podcasting", next: "q4_podcasting", scores: { creative: 2 } },
      { label: "Building a personal brand/community", tag: "Personal Brand", next: "q4_personalbrand", scores: { creative: 2 } }
    ]
  },
  q3_animation: {
    text: "Which kind of drawing/animation work fits you?",
    options: [
      { label: "2D animation", tag: "2D Animation", next: "q4_2danimation", scores: { creative: 2 } },
      { label: "3D animation/modeling", tag: "3D Animation", next: "q4_3danimation", scores: { creative: 2 } },
      { label: "Character illustration", tag: "Illustration", next: "q4_illustration", scores: { creative: 2 } },
      { label: "Comics or storyboarding", tag: "Storyboarding", next: "q4_storyboarding", scores: { creative: 2 } }
    ]
  },

  // ---------- LEVEL 3 (Trade) ----------
  q3_electrical: {
    text: "Which electrical work interests you most?",
    options: [
      { label: "House/building wiring", tag: "Residential Wiring", next: "q4_residentialwiring", scores: { trade: 2 } },
      { label: "Solar panel installation", tag: "Solar Installer", next: "q4_solar", scores: { trade: 2 } },
      { label: "Electronics/appliance repair", tag: "Electronics Repair", next: "q4_electronicsrepair", scores: { trade: 2 } },
      { label: "Industrial electrical systems", tag: "Industrial Electrical", next: "q4_industrialelectrical", scores: { trade: 2 } }
    ]
  },
  q3_mechanical: {
    text: "Which mechanical work interests you most?",
    options: [
      { label: "Car/bike repair", tag: "Auto Repair", next: "q4_autorepair", scores: { trade: 2 } },
      { label: "Mobile phone repair", tag: "Mobile Repair", next: "q4_mobilerepair", scores: { trade: 2 } },
      { label: "AC/refrigeration repair", tag: "AC Technician", next: "q4_actechnician", scores: { trade: 2 } },
      { label: "Industrial machinery/welding", tag: "Welding", next: "q4_welding", scores: { trade: 2 } }
    ]
  },
  q3_construction: {
    text: "Which construction work interests you most?",
    options: [
      { label: "Carpentry/furniture making", tag: "Carpentry", next: "q4_carpentry", scores: { trade: 2 } },
      { label: "Plumbing", tag: "Plumbing", next: "q4_plumbing", scores: { trade: 2 } },
      { label: "Masonry/site work", tag: "Masonry", next: "q4_masonry", scores: { trade: 2 } },
      { label: "Interior fitting/painting", tag: "Interior Work", next: "q4_interiorwork", scores: { trade: 2 } }
    ]
  },
  q3_culinary: {
    text: "Which food/hospitality work interests you most?",
    options: [
      { label: "Cooking — chef/kitchen work", tag: "Culinary Arts", next: "q4_culinaryarts", scores: { trade: 2 } },
      { label: "Baking and pastry", tag: "Baking", next: "q4_baking", scores: { trade: 2 } },
      { label: "Running a food stall/small eatery", tag: "Food Business", next: "q4_foodbusiness", scores: { trade: 2 } },
      { label: "Hotel/hospitality service", tag: "Hospitality", next: "q4_hospitality", scores: { trade: 2 } }
    ]
  },

  // ---------- LEVEL 3 (Business) ----------
  q3_sales: {
    text: "Which kind of selling fits you most?",
    options: [
      { label: "Retail — selling in a shop", tag: "Retail Sales", next: "q4_retailsales", scores: { business: 2 } },
      { label: "Field sales — visiting clients", tag: "Field Sales", next: "q4_fieldsales", scores: { business: 2 } },
      { label: "Online/social media selling", tag: "Online Sales", next: "q4_onlinesales", scores: { business: 2 } },
      { label: "Real estate", tag: "Real Estate", next: "q4_realestate", scores: { business: 2 } }
    ]
  },
  q3_support: {
    text: "Which kind of support work fits you most?",
    options: [
      { label: "Customer service calls/chats", tag: "Customer Service", next: "q4_customerservice", scores: { business: 2 } },
      { label: "Helping customers in person", tag: "In-Person Support", next: "q4_inpersonsupport", scores: { business: 2 } },
      { label: "Technical support/helpdesk", tag: "Tech Support", next: "q4_techsupport", scores: { business: 2 } },
      { label: "Training new staff", tag: "Training", next: "q4_training", scores: { business: 2 } }
    ]
  },
  q3_operations: {
    text: "Which kind of operations work fits you most?",
    options: [
      { label: "Logistics/delivery coordination", tag: "Logistics", next: "q4_logistics", scores: { business: 2 } },
      { label: "Event planning", tag: "Event Planning", next: "q4_eventplanning", scores: { business: 2 } },
      { label: "Office/admin coordination", tag: "Admin", next: "q4_admin", scores: { business: 2 } },
      { label: "Inventory/warehouse management", tag: "Warehouse", next: "q4_warehouse", scores: { business: 2 } }
    ]
  },
  q3_entrepreneur: {
    text: "What kind of small business excites you most?",
    options: [
      { label: "A local shop or service", tag: "Local Business", next: "q4_localbusiness", scores: { business: 2 } },
      { label: "An online store", tag: "Online Store", next: "q4_onlinestore", scores: { business: 2 } },
      { label: "A food/beverage venture", tag: "Food Venture", next: "q4_foodventure", scores: { business: 2 } },
      { label: "A skill-based service (tutoring, freelancing)", tag: "Service Business", next: "q4_servicebusiness", scores: { business: 2 } }
    ]
  },

  // ---------- LEVEL 4 ----------
  q4_frontend: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },
  q4_backend: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },
  q4_mobile: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },
  q4_gamedev: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },
  q4_dataanalysis: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },
  q4_ml: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },
  q4_bi: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },
  q4_automation: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },
  q4_hardwaredesign: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },
  q4_embedded: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },
  q4_connectivity: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },
  q4_iotrepair: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },
  q4_pentest: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },
  q4_netsec: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },
  q4_forensics: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },
  q4_sectraining: { text: "How do you prefer to work day to day?", options: lvl4Options("tech") },

  q4_branding: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },
  q4_uiux: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },
  q4_print: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },
  q4_socialgraphics: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },
  q4_cinematography: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },
  q4_videoediting: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },
  q4_direction: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },
  q4_motiongraphics: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },
  q4_shortform: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },
  q4_writing: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },
  q4_podcasting: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },
  q4_personalbrand: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },
  q4_2danimation: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },
  q4_3danimation: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },
  q4_illustration: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },
  q4_storyboarding: { text: "How do you prefer to work day to day?", options: lvl4Options("creative") },

  q4_residentialwiring: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },
  q4_solar: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },
  q4_electronicsrepair: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },
  q4_industrialelectrical: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },
  q4_autorepair: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },
  q4_mobilerepair: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },
  q4_actechnician: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },
  q4_welding: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },
  q4_carpentry: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },
  q4_plumbing: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },
  q4_masonry: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },
  q4_interiorwork: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },
  q4_culinaryarts: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },
  q4_baking: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },
  q4_foodbusiness: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },
  q4_hospitality: { text: "How do you prefer to work day to day?", options: lvl4Options("trade") },

  q4_retailsales: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },
  q4_fieldsales: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },
  q4_onlinesales: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },
  q4_realestate: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },
  q4_customerservice: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },
  q4_inpersonsupport: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },
  q4_techsupport: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },
  q4_training: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },
  q4_logistics: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },
  q4_eventplanning: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },
  q4_admin: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },
  q4_warehouse: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },
  q4_localbusiness: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },
  q4_onlinestore: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },
  q4_foodventure: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },
  q4_servicebusiness: { text: "How do you prefer to work day to day?", options: lvl4Options("business") },

  // ---------- LEVEL 5-16: SHARED REFINEMENT QUESTIONS ----------
  q5: {
    text: "Do you enjoy continuously learning new tools or skills?",
    options: [
      { label: "Yes, I love learning constantly", tag: "Learner", next: "q6", scores: { tech: 1, creative: 1 } },
      { label: "Somewhat, if it's useful", tag: "Practical Learner", next: "q6", scores: {} },
      { label: "I prefer mastering one thing deeply", tag: "Specialist", next: "q6", scores: { trade: 1 } },
      { label: "Not really my thing", tag: "Applied", next: "q6", scores: { business: 1 } }
    ]
  },
  q6: {
    text: "How do you feel about working with your hands physically?",
    options: [
      { label: "I love hands-on physical work", tag: "Hands-On", next: "q7", scores: { trade: 2 } },
      { label: "I prefer working on a screen/computer", tag: "Screen-Based", next: "q7", scores: { tech: 1 } },
      { label: "A mix of both is ideal", tag: "Mixed", next: "q7", scores: {} },
      { label: "I prefer talking/organizing over doing", tag: "People-Focused", next: "q7", scores: { business: 1 } }
    ]
  },
  q7: {
    text: "How important is a fixed 9-5 schedule to you?",
    options: [
      { label: "Very important, I like structure", tag: "Structured", next: "q8", scores: { business: 1 } },
      { label: "I prefer flexible/freelance hours", tag: "Flexible", next: "q8", scores: { creative: 1 } },
      { label: "Doesn't matter much to me", tag: "Adaptable", next: "q8", scores: {} },
      { label: "I'd like to eventually be my own boss", tag: "Independent", next: "q8", scores: { business: 1 } }
    ]
  },
  q8: {
    text: "How comfortable are you with public speaking or presenting?",
    options: [
      { label: "Very comfortable, I enjoy it", tag: "Confident Speaker", next: "q9", scores: { business: 2 } },
      { label: "Comfortable in small groups only", tag: "Small-Group", next: "q9", scores: {} },
      { label: "Not comfortable at all", tag: "Behind-the-Scenes", next: "q9", scores: { tech: 1 } },
      { label: "I'd rather express through my work, not speech", tag: "Work-Speaks", next: "q9", scores: { creative: 1 } }
    ]
  },
  q9: {
    text: "Do you enjoy solving logical puzzles or brain teasers?",
    options: [
      { label: "Yes, regularly", tag: "Puzzle Solver", next: "q10", scores: { tech: 2 } },
      { label: "Occasionally", tag: "Casual Solver", next: "q10", scores: {} },
      { label: "Not really", tag: "Intuitive", next: "q10", scores: { creative: 1 } },
      { label: "I prefer practical problems over puzzles", tag: "Practical", next: "q10", scores: { trade: 1 } }
    ]
  },
  q10: {
    text: "How do you feel about working outdoors or on-site, not at a desk?",
    options: [
      { label: "I prefer outdoor/on-site work", tag: "On-Site", next: "q11", scores: { trade: 2 } },
      { label: "I prefer indoor/desk work", tag: "Desk-Based", next: "q11", scores: { tech: 1 } },
      { label: "Either is fine", tag: "Flexible Location", next: "q11", scores: {} },
      { label: "I prefer meeting clients in person", tag: "Client-Facing", next: "q11", scores: { business: 1 } }
    ]
  },
  q11: {
    text: "How do you feel about taking financial or business risks?",
    options: [
      { label: "I enjoy risk, I want to start my own thing", tag: "Risk-Taker", next: "q12", scores: { business: 2 } },
      { label: "I prefer stability over risk", tag: "Stability-Seeker", next: "q12", scores: {} },
      { label: "Some risk is fine if I believe in the work", tag: "Calculated Risk", next: "q12", scores: { creative: 1 } },
      { label: "I'd rather have a steady trade/skill income", tag: "Steady Earner", next: "q12", scores: { trade: 1 } }
    ]
  },
  q12: {
    text: "Do you enjoy expressing yourself visually through art, design, or video?",
    options: [
      { label: "Yes, very much", tag: "Visual Expression", next: "q13", scores: { creative: 2 } },
      { label: "A little", tag: "Occasional Creative", next: "q13", scores: {} },
      { label: "Not really", tag: "Non-Visual", next: "q13", scores: { tech: 1 } },
      { label: "I'd rather build or fix than create art", tag: "Builder", next: "q13", scores: { trade: 1 } }
    ]
  },
  q13: {
    text: "How important is helping or serving people directly in your work?",
    options: [
      { label: "Very important to me", tag: "Service-Driven", next: "q14", scores: { business: 1, trade: 1 } },
      { label: "Somewhat important", tag: "Mildly Service-Driven", next: "q14", scores: {} },
      { label: "Not a priority", tag: "Output-Focused", next: "q14", scores: { tech: 1 } },
      { label: "I'd rather impact people through content/art", tag: "Influence Through Craft", next: "q14", scores: { creative: 1 } }
    ]
  },
  q14: {
    text: "Do you prefer learning online or hands-on apprenticeship-style training?",
    options: [
      { label: "I prefer self-learning online", tag: "Self-Taught", next: "q15", scores: { tech: 1, creative: 1 } },
      { label: "I prefer hands-on apprenticeship/training", tag: "Apprentice-Style", next: "q15", scores: { trade: 2 } },
      { label: "I prefer structured classroom learning", tag: "Classroom Learner", next: "q15", scores: { business: 1 } },
      { label: "Doesn't matter, I adapt either way", tag: "Adaptive Learner", next: "q15", scores: {} }
    ]
  },
  q15: {
    text: "What matters most to you in a career right now?",
    options: [
      { label: "Quick income / fast job opportunity", tag: "Fast Income", next: "q16", scores: { trade: 1 } },
      { label: "High growth potential / scalability", tag: "Growth-Oriented", next: "q16", scores: { tech: 1, business: 1 } },
      { label: "Creative freedom and self-expression", tag: "Creative Freedom", next: "q16", scores: { creative: 2 } },
      { label: "Stability and long-term security", tag: "Security-Focused", next: "q16", scores: { business: 1 } }
    ]
  },
  q16: {
    text: "How do you want to grow over the next 2-3 years?",
    options: [
      { label: "Become a specialist/expert in one skill", tag: "Specialist Track", next: "result", scores: { tech: 1, trade: 1 } },
      { label: "Start my own business or brand", tag: "Founder Track", next: "result", scores: { business: 2 } },
      { label: "Build a creative portfolio that gets known", tag: "Portfolio Track", next: "result", scores: { creative: 2 } },
      { label: "Move into leading or managing a team", tag: "Leadership Track", next: "result", scores: { business: 1 } }
    ]
  }
};

// ===================================================
// CAREER CATEGORY -> JOB SUGGESTIONS
// ===================================================
const careerResults = {
  tech: {
    title: "Technology & Software",
    jobs: ["Web Developer", "App Developer", "Data Analyst", "IoT Technician", "Cybersecurity Support"],
    explanation: "Your answers show strong interest in logical problem-solving and building with technology. This path has many entry routes that don't require a college degree — coding bootcamps, certifications, and self-taught portfolios are widely accepted in tech."
  },
  creative: {
    title: "Creative & Content",
    jobs: ["Graphic Designer", "Video Editor", "Content Creator", "Photographer", "Animator"],
    explanation: "You lean toward visual expression and storytelling. This field rewards a strong portfolio over formal degrees — many successful creators are self-taught."
  },
  trade: {
    title: "Skilled Trade & Hands-On Work",
    jobs: ["Electrician", "AC Repair Technician", "Solar Panel Installer", "Mobile Repair Technician", "Welder"],
    explanation: "You prefer hands-on, practical work. Skilled trades offer fast entry through apprenticeships and ITI-style training, often with quicker income than degree-based paths."
  },
  business: {
    title: "Business, Sales & People",
    jobs: ["Sales Executive", "Customer Support Lead", "Small Business Owner", "Real Estate Agent", "Operations Coordinator"],
    explanation: "You're drawn to people, organization, and growth. This field values communication skills and initiative, often more than formal qualifications."
  }
};

// ===================================================
// STATE
// ===================================================
let currentQuestionId = "q1";
let questionCount = 1;
const scores = { tech: 0, creative: 0, trade: 0, business: 0 };
const trail = [];
const TOTAL_QUESTIONS = 16;

// ===================================================
// ROUTE RAIL (signature element): builds 16 nodes once,
// then marks them active as the user progresses.
// ===================================================
function buildRouteRail() {
  const rail = document.getElementById("route-rail");
  const fill = document.createElement("div");
  fill.className = "rail-fill";
  fill.id = "rail-fill";
  rail.appendChild(fill);

  for (let i = 0; i < TOTAL_QUESTIONS; i++) {
    const node = document.createElement("div");
    node.className = "rail-node";
    node.dataset.index = i;
    // Spread nodes evenly down the rail height
    node.style.top = (i * (100 / (TOTAL_QUESTIONS - 1))) + "%";
    rail.appendChild(node);
  }
}

function updateRouteRail(step) {
  const rail = document.getElementById("route-rail");
  const fill = document.getElementById("rail-fill");
  const nodes = rail.querySelectorAll(".rail-node");
  const railHeight = rail.offsetHeight - 12; // account for top/bottom inset

  const pct = (step - 1) / (TOTAL_QUESTIONS - 1);
  fill.style.height = Math.max(0, pct * railHeight) + "px";

  nodes.forEach(function (node) {
    const idx = parseInt(node.dataset.index, 10);
    if (idx <= step - 1) {
      node.classList.add("active");
    }
  });
}

// ===================================================
// RENDER LOGIC
// ===================================================
function showQuestion(id) {
  const q = questions[id];

  if (!q) {
    document.getElementById("question-text").innerText =
      "Something went wrong loading question: " + id;
    return;
  }

  document.getElementById("q-number").innerText = "QUESTION " + questionCount;
  document.getElementById("question-text").innerText = q.text;

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  const letters = ["A", "B", "C", "D"];
  q.options.forEach(function (option, index) {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML =
      '<span class="letter">' + letters[index] + "</span><span>" + option.label + "</span>";
    btn.onclick = function () {
      handleAnswer(option);
    };
    container.appendChild(btn);
  });

  const pct = Math.round((questionCount / TOTAL_QUESTIONS) * 100);
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-label").innerText = questionCount + " of " + TOTAL_QUESTIONS;

  updateRouteRail(questionCount);
}

function renderTrail() {
  const trailEl = document.getElementById("trail");
  trailEl.innerHTML = trail
    .map(function (t) {
      return '<span class="trail-step">' + t + "</span>";
    })
    .join("");
}

function handleAnswer(option) {
  if (option.scores) {
    for (const category in option.scores) {
      scores[category] += option.scores[category];
    }
  }

  if (option.tag) {
    trail.push(option.tag);
    renderTrail();
  }

  if (option.next === "result") {
    showResult();
  } else {
    currentQuestionId = option.next;
    questionCount++;
    showQuestion(currentQuestionId);
  }
}

function showResult() {
  let topCategory = "tech";
  let topScore = -1;
  for (const category in scores) {
    if (scores[category] > topScore) {
      topScore = scores[category];
      topCategory = category;
    }
  }

  const result = careerResults[topCategory];
  const total = scores.tech + scores.creative + scores.trade + scores.business || 1;

  const breakdownRows = Object.keys(careerResults)
    .map(function (cat) {
      const pct = Math.round((scores[cat] / total) * 100);
      return (
        '<div class="row"><span>' +
        careerResults[cat].title +
        '</span><div class="bar-bg"><div class="bar-fill" style="width:' +
        pct +
        '%"></div></div><span>' +
        pct +
        "%</span></div>"
      );
    })
    .join("");

  updateRouteRail(TOTAL_QUESTIONS + 1);

  document.getElementById("quiz-box").innerHTML =
    '<div class="result-eyebrow">Your path</div>' +
    '<div class="result-box">' +
    "<h2>" + result.title + "</h2>" +
    '<p class="explain">' + result.explanation + "</p>" +
    '<ul class="role-list">' +
    result.jobs.map(function (job) { return "<li>" + job + "</li>"; }).join("") +
    "</ul>" +
    '<div class="score-breakdown">' + breakdownRows + "</div>" +
    '<button id="restart-btn" onclick="location.reload()">Take the quiz again</button>' +
    "</div>";
}

// ===================================================
// INIT
// ===================================================
document.addEventListener("DOMContentLoaded", function () {
  buildRouteRail();
  showQuestion(currentQuestionId);
});