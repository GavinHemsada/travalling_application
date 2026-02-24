# Sri Lanka Tours & Travels Web Application 🌍✈️

## Overview
This is a modern, fully localized, next-generation web application for a travel agency built using **Next.js 16 (App Router)**. It provides a highly interactive and visually stunning platform for discovering tours and destinations across Sri Lanka. The website offers full dual-language support (English and Sinhala) and features rich, dynamic animations to deliver a premium user experience.

## Features ✨
- **Multilingual Support (i18n):** Complete English (`en`) and Sinhala (`si`) localization using `next-intl`, making the platform accessible to both local and international tourists.
- **Dynamic Destinations & Tours:** Rich destination and tour detail pages, seamlessly loading unique image galleries, highlighting 'why to visit', optimal times, and dress codes.
- **Advanced Filtering & Search:** A real-time, interactive search and category filtering system for destinations, complete with pagination.
- **Fluid Animations:** Butter-smooth page transitions, hover effects, and scroll animations implemented via `framer-motion`.
- **Responsive Design:** A mobile-first approach ensuring the platform looks spectacular on devices of all sizes using **Tailwind CSS**.
- **Supabase Integration:** Configured with `@supabase/ssr` and `@supabase/supabase-js` for robust backend functionality setup.

## Technology Stack 🛠️
*   **Framework:** [Next.js](https://nextjs.org/) 16 (React 19) using the App Router
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
*   **Database & Auth:** [Supabase](https://supabase.com/)
*   **Language:** TypeScript
*   **Icons & Assets:** Optimized specific SVG elements and Next.js Image optimization (`next/image`).

## Getting Started 🚀

### Prerequisites
Make sure you have Node.js (v18 or higher recommended) installed on your system.

### Installation
1. Clone the repository to your local environment.
2. Navigate into the project directory:
   ```bash
   cd tuorist_web
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server
Start the Next.js development server:
```bash
npm run dev
```
The application will be available at [http://localhost:3000](http://localhost:3000). You can navigate to `/en` for English or `/si` for Sinhala.

## Project Structure 📁
- `/app`: Core Next.js App Router structure, including the `/[locale]` dynamic segment responsible for routing between English and Sinhala pages seamlessly.
- `/components`: Reusable UI components including the complex `Navbar`, `Footer`, `DestinationsMegaMenu`, and Home page sections.
- `/data`: Static TypeScript data files housing the rich destination mappings (`destinationsData.ts`) and tour configurations (`tours.ts`).
- `/messages`: Core JSON dictionary files (`en.json`, `si.json`) containing hundreds of localized strings for every page context.
- `/public`: Static assets including optimized gallery images, tour thumbnails, and site logos.

## Managing Data & Content 📝
To update tours or destinations across the platform:
1. Update arrays in `/data/destinationsData.ts` or `/data/tours.ts`. Ensure your images map to valid paths in your `/public` folder.
2. For strings to render correctly, add the corresponding localized text keys (titles, descriptions, badges) into both `/messages/en.json` and `/messages/si.json` using the established JSON syntax.

## Contact & Booking 📞
For guided tours, customized trips, inquiries, or support:
- **Email:** gavinhemsada@gmail.com
- **Phone / WhatsApp:** +94718721716

---
*Built with ❤️ to showcase the unparalleled beauty of Sri Lanka.*
