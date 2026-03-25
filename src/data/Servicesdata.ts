// ─── Interfaces ───────────────────────────────────────────────────────────────

export interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
  // Single-page fields
  heroDescription: string;
  detailDescription: string;
  benefits: string[];
  galleryImages: string[];
  processSteps: ProcessStep[];
  faqs: FaqItem[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: 1,
    title: "UI/UX Design",
    description: "We design user interfaces that are visually appealing and easy.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800&q=80",
    slug: "ui-ux-design",
    heroDescription:
      "Our UI/UX design services are crafted to deliver seamless, intuitive, and visually stunning experiences. From concept to execution, we combine user research with creative design to ensure every interaction feels effortless and every screen looks beautiful.",
    detailDescription:
      "We leverage the latest design tools and methodologies — from wireframing and prototyping to usability testing — to build interfaces that users love. Whether it's a mobile app, web platform, or SaaS dashboard, our design team ensures your product stands out and converts.",
    benefits: [
      "Enhanced user satisfaction",
      "Improved conversion rates",
      "Mobile-friendly & responsive design",
      "Reduced development rework",
      "Consistent brand identity",
      "Accessibility-first approach",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    ],
    processSteps: [
      {
        icon: "🔍",
        title: "Research",
        description: "Understand user needs and business goals through interviews, surveys, and competitive analysis.",
      },
      {
        icon: "📋",
        title: "Planning",
        description: "Define information architecture, user flows, and design strategy aligned with project goals.",
      },
      {
        icon: "✏️",
        title: "Wireframing",
        description: "Create low-fidelity wireframes and interactive prototypes to validate concepts early.",
      },
    ],
    faqs: [
      {
        question: "What services does your agency provide?",
        answer:
          "We specialize in UI/UX design, branding, website design and development, social media marketing, digital advertising, video production, and content creation.",
      },
      {
        question: "Who are your typical clients?",
        answer:
          "We work with startups, SMEs, and established enterprises across various industries who want to elevate their digital presence.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "A typical UI/UX project takes 3–6 weeks depending on scope. Complex apps with many screens may take longer.",
      },
      {
        question: "What is your pricing structure?",
        answer:
          "We offer fixed-price packages and hourly billing. Contact us for a custom quote tailored to your needs.",
      },
      {
        question: "Why are UX and UI important?",
        answer:
          "Good UX/UI design directly impacts conversion rates, user retention, and customer satisfaction — making it a critical business investment.",
      },
    ],
  },
  {
    id: 2,
    title: "Web Development",
    description: "We create engaging and impactful content for websites.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    slug: "web-development",
    heroDescription:
      "Our web development services are designed to create dynamic, responsive, and user-friendly websites that drive engagement and deliver exceptional user experiences. From concept to launch, we work closely with you to design and develop websites tailored to your brand.",
    detailDescription:
      "Our expertise spans a wide range of technologies, including custom coding, CMS platforms like WordPress, and e-commerce solutions such as Shopify and Magento. Whether you need a sleek business website, a robust e-commerce platform, or a fully customized web application, our team ensures your online presence is impactful, secure, and optimized for search engines.",
    benefits: [
      "Enhanced online presence",
      "Improved user experience (UX)",
      "Mobile-friendly & responsive design",
      "SEO-optimized architecture",
      "Fast loading performance",
      "Secure & scalable codebase",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    ],
    processSteps: [
      {
        icon: "🔍",
        title: "Research",
        description: "Craft visually appealing designs focused on user experience and technical requirements.",
      },
      {
        icon: "📋",
        title: "Planning",
        description: "Many desktop packages and web page editors now use this structured planning phase.",
      },
      {
        icon: "✏️",
        title: "Wireframing",
        description: "Many desktop packages and web page editors now use detailed wireframes.",
      },
    ],
    faqs: [
      {
        question: "What services does your agency provide?",
        answer:
          "We specialize in including graphic design, branding, website design and development, UX/UI design, social media marketing, digital advertising, video production, and content creation.",
      },
      {
        question: "Who are your typical clients?",
        answer:
          "We work with startups, SMEs, and established enterprises across various industries who want to elevate their digital presence.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary based on scope and complexity. A typical website takes 4–8 weeks, while larger platforms may take longer.",
      },
      {
        question: "What is your pricing structure?",
        answer:
          "We offer flexible pricing models including fixed-price packages and hourly billing. Contact us for a custom quote.",
      },
      {
        question: "Why are UX and UI important?",
        answer:
          "Good UX/UI design ensures your users have a smooth, enjoyable experience, which directly impacts conversion rates and customer satisfaction.",
      },
    ],
  },
  {
    id: 3,
    title: "3D Designs",
    description: "Our team creates stunning graphics for both digital and print.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
    slug: "3d-designs",
    heroDescription:
      "Our 3D design services bring your ideas to life with photorealistic renders, animations, and immersive visualizations. We combine artistry with technical precision to deliver stunning 3D assets for products, architecture, games, and marketing.",
    detailDescription:
      "From 3D modeling and texturing to lighting and rendering, our team uses industry-leading tools like Blender, Cinema 4D, and Unreal Engine. Whether you need product visualizations, architectural walkthroughs, or animated explainer content, we deliver assets that captivate and convert.",
    benefits: [
      "Photorealistic product visualization",
      "Immersive architectural walkthroughs",
      "Engaging animated content",
      "Reduced physical prototyping costs",
      "Multi-platform asset delivery",
      "High-resolution render outputs",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&q=80",
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80",
    ],
    processSteps: [
      {
        icon: "🎨",
        title: "Concept",
        description: "Gather references and define the visual direction, mood, and style for the 3D project.",
      },
      {
        icon: "🖥️",
        title: "Modeling",
        description: "Build detailed 3D models with accurate geometry and optimized polygon counts.",
      },
      {
        icon: "💡",
        title: "Rendering",
        description: "Apply textures, lighting, and cameras then render final high-resolution outputs.",
      },
    ],
    faqs: [
      {
        question: "What 3D software do you use?",
        answer:
          "We use industry-standard tools including Blender, Cinema 4D, 3ds Max, and Unreal Engine depending on the project requirements.",
      },
      {
        question: "Can you animate 3D models?",
        answer:
          "Yes! We offer full animation services including character animation, product animations, and architectural fly-throughs.",
      },
      {
        question: "What file formats do you deliver?",
        answer:
          "We deliver in all standard formats including FBX, OBJ, GLB/GLTF, STL, and high-resolution image/video renders.",
      },
      {
        question: "How long does a 3D project take?",
        answer:
          "Simple product renders take 1–2 weeks. Complex scenes or animations can take 4–8 weeks depending on scope.",
      },
      {
        question: "Do you offer VR/AR asset creation?",
        answer:
          "Absolutely. We create optimized 3D assets for VR, AR, and real-time applications with performance in mind.",
      },
    ],
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "Strategic digital marketing to grow your brand online.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    slug: "digital-marketing",
    heroDescription:
      "Our digital marketing services help you reach the right audience at the right time. From SEO and paid advertising to social media and content marketing, we create data-driven strategies that generate real, measurable results for your business.",
    detailDescription:
      "We combine creativity with analytics to craft campaigns that resonate with your target audience. Our team stays on top of the latest platform algorithms, trends, and best practices to ensure your marketing budget delivers maximum ROI across every channel.",
    benefits: [
      "Increased brand awareness",
      "Higher ROI on ad spend",
      "Data-driven campaign optimization",
      "Targeted audience reach",
      "Multi-channel presence",
      "Detailed performance reporting",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
    ],
    processSteps: [
      {
        icon: "📊",
        title: "Audit",
        description: "Analyse your current digital presence, competitors, and audience to identify opportunities.",
      },
      {
        icon: "🎯",
        title: "Strategy",
        description: "Build a tailored multi-channel marketing strategy with clear KPIs and milestones.",
      },
      {
        icon: "🚀",
        title: "Execution",
        description: "Launch campaigns, monitor performance in real-time, and continuously optimise for results.",
      },
    ],
    faqs: [
      {
        question: "What digital marketing channels do you manage?",
        answer:
          "We manage SEO, Google Ads, Facebook & Instagram Ads, email marketing, content marketing, and social media management.",
      },
      {
        question: "How do you measure campaign success?",
        answer:
          "We track KPIs including impressions, clicks, conversions, cost-per-acquisition, and ROI using tools like Google Analytics and custom dashboards.",
      },
      {
        question: "How quickly will I see results?",
        answer:
          "Paid ads can deliver results within days. SEO and organic strategies typically show meaningful traction within 3–6 months.",
      },
      {
        question: "Do you manage social media accounts?",
        answer:
          "Yes, we offer full social media management including content creation, scheduling, community management, and paid social campaigns.",
      },
      {
        question: "What budget do I need for ads?",
        answer:
          "We work with a range of budgets. We recommend a minimum of $500/month for paid campaigns to see statistically meaningful results.",
      },
    ],
  },
  {
    id: 5,
    title: "Brand Strategy",
    description: "We craft compelling brand identities that resonate with audiences.",
    image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&q=80",
    slug: "brand-strategy",
    heroDescription:
      "A strong brand is more than a logo — it's the story you tell and the feeling you create. Our brand strategy services help you define your positioning, personality, and visual identity so you stand out in a crowded market and connect deeply with your audience.",
    detailDescription:
      "We work through comprehensive discovery workshops, market research, and competitor analysis to craft a brand that is authentic, memorable, and built for long-term growth. From naming and messaging to visual guidelines and brand voice, we deliver everything you need to show up consistently and confidently.",
    benefits: [
      "Clear brand positioning",
      "Memorable visual identity",
      "Consistent brand voice & tone",
      "Stronger customer trust",
      "Increased brand equity",
      "Comprehensive brand guidelines",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
      "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=600&q=80",
    ],
    processSteps: [
      {
        icon: "🧠",
        title: "Discovery",
        description: "Deep-dive workshops to understand your business, audience, values, and competitive landscape.",
      },
      {
        icon: "🎨",
        title: "Identity Design",
        description: "Create logo, colour palette, typography, and visual language that embodies your brand.",
      },
      {
        icon: "📖",
        title: "Guidelines",
        description: "Deliver comprehensive brand guidelines to ensure consistency across all touchpoints.",
      },
    ],
    faqs: [
      {
        question: "What does brand strategy include?",
        answer:
          "Brand strategy covers positioning, audience personas, brand voice, messaging framework, visual identity system, and usage guidelines.",
      },
      {
        question: "Do you redesign existing brands?",
        answer:
          "Yes, we offer brand refresh and full rebrand services to modernise your identity while retaining brand equity where appropriate.",
      },
      {
        question: "Will I receive a brand guidelines document?",
        answer:
          "Absolutely. Every branding project includes a comprehensive PDF and/or interactive brand guidelines document.",
      },
      {
        question: "Can you help with naming?",
        answer:
          "Yes, our naming service includes concept generation, trademark screening guidance, and domain availability checks.",
      },
      {
        question: "How long does branding take?",
        answer:
          "A full brand identity project typically takes 4–8 weeks from kickoff to final delivery.",
      },
    ],
  },
  {
    id: 6,
    title: "Content Creation",
    description: "Compelling content that tells your story and drives engagement.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    slug: "content-creation",
    heroDescription:
      "Great content is the engine of every successful digital strategy. Our content creation services cover everything from blog posts and video scripts to social media content and email campaigns — all crafted to inform, inspire, and convert your audience.",
    detailDescription:
      "Our team of writers, strategists, and creatives work together to produce content that aligns with your brand voice and business goals. We use SEO best practices, audience insights, and compelling storytelling to ensure every piece of content works hard for your business.",
    benefits: [
      "Improved organic search rankings",
      "Higher audience engagement",
      "Consistent publishing cadence",
      "Strong brand storytelling",
      "Lead generation through content",
      "Multi-format content delivery",
    ],
    galleryImages: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80",
    ],
    processSteps: [
      {
        icon: "📝",
        title: "Strategy",
        description: "Define content pillars, audience personas, and an editorial calendar aligned with your goals.",
      },
      {
        icon: "✍️",
        title: "Creation",
        description: "Produce high-quality written, visual, and video content tailored to each platform.",
      },
      {
        icon: "📈",
        title: "Optimisation",
        description: "Analyse performance metrics and continuously refine content for maximum impact.",
      },
    ],
    faqs: [
      {
        question: "What types of content do you create?",
        answer:
          "We create blog posts, articles, social media content, email newsletters, video scripts, whitepapers, case studies, and more.",
      },
      {
        question: "Do you handle publishing and scheduling?",
        answer:
          "Yes, we can manage the full content workflow including writing, editing, publishing, and scheduling across your platforms.",
      },
      {
        question: "How do you ensure content quality?",
        answer:
          "All content goes through a multi-stage review process including editorial checks, SEO review, and brand voice alignment.",
      },
      {
        question: "Can you match our existing brand voice?",
        answer:
          "Absolutely. We conduct a brand voice discovery session at the start of every engagement to ensure all content sounds authentically like you.",
      },
      {
        question: "How many pieces of content do you produce per month?",
        answer:
          "Output depends on your package. We offer flexible plans from 4 pieces/month up to full-scale editorial programmes.",
      },
    ],
  },
];