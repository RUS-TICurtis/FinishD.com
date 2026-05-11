# Role & Objective
You are an Expert React Web Developer and UI/UX Designer. 
Your objective is to update and expand a React + Vite promotional website for "FinishD", a comprehensive mobile application for movies and TV shows.
The website must act as a premium, high-converting landing page showcasing the app's core features while providing standard legal and support pages.

# Technical Stack
- **Framework:** React + Vite
- **Routing:** React Router DOM (v6+)
- **Styling:** Tailwind CSS (Focus on modern, premium aesthetics: dark mode themes, glassmorphism, gradients, and subtle animations).
- **Icons:** `lucide-react`

# Core Application Features to Emphasize
When writing copy and designing the sections, emphasize the following core functionalities of the FinishD app:
- **Trailer Feed:** A dynamic feed of fresh movie and TV show trailers.
- **Creator Feed:** A vertical video feed showcasing content from creators.
- **Discover:** Powerful discovery tools for finding new content.
- **Comms & Convos:** Communities and conversations around shared entertainment interests.
- **Recs:** Personalized recommendations.
- **Watchlist, Watching, & FinishD Lists:** Comprehensive tracking for what you want to watch, what you are currently watching, and what you've finished.
- **Deeplinking Services:** Seamless integration with streaming services via deep links.

# Website Architecture & Required Pages

1. **Home Page (`/`)**
   - **Hero Section:** High-impact headline, App Store/Play Store badges, and dynamic background or hero graphic.
   - **App Description & Features:** Visually stunning layout (e.g., alternating feature blocks or a bento-box grid) highlighting the core features listed above.
   - **Screenshots Showcase:** An interactive carousel, scrolling marquee, or sleek grid displaying app screenshots.
   - **Waitlist Section:** *CRITICAL INSTRUCTION:* The current waitlist form already implements a Google Sheets backend. **DO NOT modify the existing waitlist submission logic.** You may style the wrapper and update the UI around it using Tailwind, but leave the form functionality exactly as is.
   - **FAQs:** A clean, collapsible accordion component addressing common questions.

2. **About Page (`/about`)**
   - Content explaining the mission behind FinishD, the story of the app, and the vision for the platform.

3. **Contact Us (`/contact`)**
   - A contact form UI (name, email, message) and links to social media or support emails.

4. **Legal & Support Pages**
   - **Terms of Service (`/terms`)**
   - **Privacy Policy (`/privacy`)**
   - **Community Guidelines (`/guidelines`)**
   - **Help Center (`/help`)**
   - *Note:* Ensure these pages are highly readable, using proper typography hierarchy (H1, H2, prose styles) and a clean, distraction-free layout.

# Design & Aesthetic Guidelines
- **Premium Feel:** The site must look world-class. Avoid generic layouts. 
- **Tailwind Best Practices:** Use Tailwind for all styling. Implement dark mode by default (`bg-gray-950`, etc.). Use `backdrop-blur` for glassmorphism effects on fixed headers or floating cards.
- **Micro-interactions:** Add hover states on all interactive elements. Use transitions (`transition-all duration-300`) to make the site feel responsive.
- **Responsive Design:** Ensure every page is fully responsive. Use mobile-first Tailwind classes to guarantee a flawless experience on phones, tablets, and desktops.

# Step-by-Step Instructions
1. **Analyze Current State:** Review the existing routing setup and components in the repository.
2. **Setup/Verify Tailwind:** Ensure Tailwind configuration is intact and ready for the new designs.
3. **Build Shared Layouts:** Create or update a global `<Layout />` component that includes the Header (Navigation) and Footer. Ensure the Header has a sleek mobile menu.
4. **Implement Pages:** Build out the missing pages (About, Contact, Help) and update the Home page according to the structure above. 
5. **Refine Legal Pages:** Ensure the Terms, Privacy, and Guidelines pages are properly formatted and linked from the Footer.
6. **Final Polish:** Check contrast, spacing, and responsive breakpoints across all new and updated components. Remember to preserve the waitlist logic!

Please present your step-by-step implementation plan before writing the code.
