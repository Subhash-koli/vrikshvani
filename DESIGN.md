# Vriksh Vani Design System™
## Document Code: VV-DS-1.0 | Version: 1.0 | Status: Living Design Blueprint
## Classification: Definitive Source of Truth for Design & Engineering

> **The Primary Commandment:**
> Technology should disappear. Nature should become understandable.
> Every pixel should strengthen the relationship between humans and living systems rather than distract from it.
> The interface is not the product. **Understanding is the product.**

---

## Table of Contents

01. [Introduction](#01-introduction)
02. [Design Philosophy](#02-design-philosophy)
03. [Brand DNA](#03-brand-dna)
04. [Visual Principles](#04-visual-principles)
05. [Experience Principles & Goals](#05-experience-principles--goals)
06. [Layout System](#06-layout-system)
07. [Grid System](#07-grid-system)
08. [Spacing System](#08-spacing-system)
09. [Responsive System](#09-responsive-system)
10. [Color System](#10-color-system)
11. [Typography System](#11-typography-system)
12. [Iconography System](#12-iconography-system)
13. [Illustration System](#13-illustration-system)
14. [Photography System](#14-photography-system)
15. [Component Library Specifications](#15-component-library-specifications)
16. [Motion Language System](#16-motion-language-system)
17. [Microinteractions & Feedback](#17-microinteractions--feedback)
18. [Accessibility (WCAG 2.2 AA)](#18-accessibility-wcag-22-aa)
19. [AI Experience Design](#19-ai-experience-design)
20. [Nature Intelligence™ UX (NIOS Loop)](#20-nature-intelligence-ux-nios-loop)
21. [Dashboard Design Architecture](#21-dashboard-design-architecture)
22. [Mobile Application Design](#22-mobile-application-design)
23. [Website Page System](#23-website-page-system)
24. [Product & Hardware Experience](#24-product--hardware-experience)
25. [Research Portal & Open Science](#25-research-portal--open-science)
26. [Community & Social UX](#26-community--social-ux)
27. [Empty States & Educational UI](#27-empty-states--educational-ui)
28. [Notification System & Alerts](#28-notification-system--alerts)
29. [Error Handling & Edge States](#29-error-handling--edge-states)
30. [Future Design Rules & Governance](#30-future-design-rules--governance)

---

# 01. Introduction

The **Vriksh Vani Design System™** is the authoritative visual, spatial, motion, and interaction specification for all Vriksh Vani touchpoints — including the marketing website, web dashboard, mobile applications, AI conversational interfaces, research portal, and physical hardware display units.

Vriksh Vani is positioning itself as the world's first **Nature Intelligence™** company. Consequently, this design system does not emulate standard SaaS dashboards, aggressive eCommerce storefronts, or lifestyle plant care apps. It merges the craftsmanship of **Apple's Human Interface Guidelines**, the mathematical discipline of **Google's Material Design**, the dark precision of **Linear**, and the physical elegance of **Tesla**, grounded entirely in the biological ethos of **Vriksh Vani**.

---

# 02. Design Philosophy

Every single screen, component, animation, and paragraph of copy must pass one fundamental test:

> **Does this help people understand nature more deeply?**
> If not, it should not exist.

### The Nature Intelligence Model™ Flow
```
Observe  ──►  Interpret  ──►  Understand  ──►  Connect  ──►  Care  ──►  Coexist
```

1. **Observe:** Capture biological and environmental signals without invading nature.
2. **Interpret:** Use ethical machine learning to decode raw data into patterns.
3. **Understand:** Translate patterns into clear, empathetic human language.
4. **Connect:** Foster an emotional, empathetic bond between human and living plant.
5. **Care:** Guide responsible, confident, proactive action.
6. **Coexist:** Achieve a permanent state of harmony between humans, technology, and nature.

---

# 03. Brand DNA

Every Vriksh Vani experience must strictly embody the **Wise Caregiver** archetype:

### What Vriksh Vani MUST Feel Like:
- **Calm:** Whitespace, soft lighting, quiet typography, zero alarmism.
- **Premium:** Apple-grade alignment, glassmorphic depth, refined geometry.
- **Organic:** Curved radii, natural easing curves, leaf/water motion, biological palettes.
- **Intelligent:** Data transformed into plain-language wisdom before raw numbers.
- **Scientific:** Credible, transparent AI explanations, grounded in real plant biology.
- **Emotional:** Warm, caring tone that honors the living nature of the plant.
- **Hopeful & Minimal:** Clean, uncluttered layouts that inspire quiet wonder.

### What Vriksh Vani Must NEVER Feel Like:
- ❌ **Corporate / Mechanical:** Rigid grids without breathing room, cold enterprise tables.
- ❌ **Busy / Noisy:** Cluttered charts, flashing badges, aggressive popups.
- ❌ **Aggressive / Sales-Driven:** Countdown timers, manipulative dark patterns, pushy upsells.
- ❌ **Cyberpunk / Sci-Fi:** Neon green on jet black, glitch effects, robotic HUD elements.

---

# 04. Visual Principles

1. **Nature Before Technology:** Technology is always the supporting character; nature is the hero. Real plants, leaf structures, and natural light take visual precedence over chip diagrams or network nodes.
2. **Whitespace is a Core Feature:** Empty space is not empty — it is room to breathe. Never fill whitespace with decorative fluff.
3. **Typography Before Graphics:** Establish hierarchy, tone, and authority through masterfully sized typography before adding visual decorations.
4. **Glass as Depth:** Use glassmorphism (`backdrop-blur`) to create spatial layers, representing transparency between technology and nature.
5. **Dark Mode by Default:** Forest Black (`#070B08`) and Deep Green (`#0F2B18`) simulate deep forest shade, reducing eye strain and bringing organic colors to life.

---

# 05. Experience Principles & Goals

### The Visitor Emotional Journey

```
Curiosity  ──►  Understanding  ──►  Trust  ──►  Wonder  ──►  Connection  ──►  Action
```

1. **Curiosity:** *"What is Nature Intelligence?"* (Triggered by Hero, thermal teaser, bold headlines).
2. **Understanding:** *"I see how plant signals become words."* (Triggered by translation demo, NIOS flow).
3. **Trust:** *"This is grounded in real plant biology and privacy-first AI."* (Triggered by research notes, specs).
4. **Wonder:** *"Imagine actually knowing what my Monstera feels."* (Triggered by interactive companion demo).
5. **Connection:** *"I feel closer to my plants."* (Triggered by Plant Passport, story quotes).
6. **Action:** *"I want to join the waitlist and bring this home."* (Triggered by seamless, calm Waitlist form).

---

# 06. Layout System

Layouts are built on strict structural boundaries while maintaining spatial breathing room.

- **Max Container Width:** `1440px` (`max-w-[1440px]`)
- **Max Content Width (Text/Readability):** `1280px` (`max-w-7xl`) or `768px` for editorial body text.
- **Page Outer Padding:**
  - Desktop (≥1024px): `80px` (`px-20`)
  - Tablet (768px–1023px): `32px` (`px-8`)
  - Mobile (<768px): `20px` (`px-5`)
- **Section Vertical Padding:**
  - Desktop: `120px` to `160px` (`py-30` / `py-40`)
  - Tablet: `96px` (`py-24`)
  - Mobile: `64px` to `80px` (`py-16` / `py-20`)

---

# 07. Grid System

The design system uses a flexible 12-column grid anchored to an 8px base unit.

```
Desktop (1440px):   12 Columns | 80px Margins | 24px Gutters
Tablet  (768px):    8 Columns  | 32px Margins | 20px Gutters
Mobile  (375px):    4 Columns  | 20px Margins | 16px Gutters
```

### Grid Alignment Rules:
- Cards alignment: Span 4 columns on desktop (3-up), 6 columns on tablet (2-up), 12 columns on mobile (1-up).
- Hero split: 7 columns for headline/copy, 5 columns for primary visual.
- Feature deep-dive: 6 columns text, 6 columns interactive visual preview.

---

# 08. Spacing System

All padding, margins, gaps, and component dimensions derive from an **8px linear scale**:

| Token | Value | Rem Equivalent | Common Usage |
|-------|-------|----------------|--------------|
| `space-1` | 4px | 0.25rem | Micro inline padding, badge gap |
| `space-2` | 8px | 0.5rem | Button icon gap, dense list padding |
| `space-3` | 12px | 0.75rem | Compact input padding |
| `space-4` | 16px | 1.0rem | Card internal padding (mobile), standard gap |
| `space-6` | 24px | 1.5rem | Card internal padding (desktop), grid gap |
| `space-8` | 32px | 2.0rem | Section sub-gap, modal padding |
| `space-12` | 48px | 3.0rem | Header-to-grid spacing |
| `space-16` | 64px | 4.0rem | Major component block gap |
| `space-24` | 96px | 6.0rem | Tablet section padding |
| `space-32` | 128px | 8.0rem | Desktop section padding |

---

# 09. Responsive System

```
Breakpoints:
  sm: 640px    (Mobile Large / Small Tablet)
  md: 768px    (Tablet Portrait)
  lg: 1024px   (Tablet Landscape / Small Laptop)
  xl: 1280px   (Desktop)
 2xl: 1440px   (Large Desktop / Max Container)
```

### Responsive Design Directives:
- **Mobile First Construction:** Write base utilities for mobile, then layer `md:`, `lg:`, `xl:` variants.
- **Touch Target Minimum:** On touch devices (`<1024px`), all interactive elements MUST have a minimum tap target of `44px × 44px`.
- **Navigation Adaptation:** Full top bar with mega-menus on `≥768px`; glass drawer + bottom sticky bar on `<768px`.

---

# 10. Color System

The Nature Intelligence Color System is built on a clean, organic Light Mode default palette inspired by sunlight on foliage, warm organic paper, and deep forest biomes.

### 10.1 Primary Colors (Light Mode Default)

| Token Name | Hex Code | HSL Value | Usage |
|------------|----------|-----------|-------|
| **Warm White** | `#FAFAF7` | `hsl(50, 20%, 97%)` | Primary background canvas (Light Mode default) |
| **Soft Ivory** | `#F7F6F2` | `hsl(45, 18%, 96%)` | Secondary container & surface fill |
| **Deep Forest Green** | `#0B4D2E` | `hsl(148, 75%, 17%)` | Primary brand color, headlines, main CTA buttons |
| **Emerald** | `#2E9E6A` | `hsl(152, 55%, 40%)` | Secondary interactive accents & hover states |

### 10.2 Accent & Glow Palette

| Token Name | Hex Code | Usage |
|------------|----------|-------|
| **Leaf Green** | `#7BC96F` | Active status highlights & leaf badges |
| **Nature Gold** | `#E8D07C` | Hero highlights, press badges & premium accents |
| **AI Cyan** | `#4AB7D8` | AI translation interactions ONLY (used sparingly) |

### 10.3 Neutral & Text Palette

| Token Name | Hex Code | Usage |
|------------|----------|-------|
| **Deep Charcoal** | `#1C1C1C` | Primary text on Light background |
| **Slate Forest** | `#4A5568` | Secondary body text & quiet labels |
| **Muted Stone** | `#A8B0A8` | Captions, subtle borders, disabled icons |
| **Forest Black** | `#070B08` | Canvas background in Dark Mode toggle state |

### 10.4 Contrast & Usage Hierarchy
- Body text (`#F7F6F2`) on Forest Black (`#070B08`) achieves a contrast ratio of **18.2:1** (exceeds AAA requirement).
- Secondary text (`#E8ECE7`) on Deep Green (`#0F2B18`) achieves a contrast ratio of **11.4:1**.
- Primary Button text (Forest Black `#070B08`) on Vriksh Green (`#3FAE2A`) achieves **8.1:1** contrast.

---

# 11. Typography System

Typography must visually communicate clarity, trust, calmness, and intelligence.

### 11.1 Font Stacks
- **Primary / Display & Body:** `SF Pro Display` / `Inter` (fallback: `system-ui`, `-apple-system`, `sans-serif`)
- **Secondary / Supporting:** `SF Pro Text`
- **Code / Specs:** `JetBrains Mono`, `Consolas`, `monospace`

### 11.2 Type Scale Specification

| Level | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing | Tailwind Class |
|-------|----------------|---------------|--------|-------------|----------------|----------------|
| **Display Hero** | 80px (5.0rem) | 48px (3.0rem) | 700 (Bold) | 105% (1.05) | -0.03em | `text-5xl lg:text-8xl` |
| **Heading 1 (H1)** | 56px (3.5rem) | 36px (2.25rem)| 700 (Bold) | 110% (1.10) | -0.02em | `text-4xl lg:text-6xl` |
| **Heading 2 (H2)** | 40px (2.5rem) | 28px (1.75rem)| 600 (Semibold)| 120% (1.20) | -0.01em | `text-3xl lg:text-4xl` |
| **Heading 3 (H3)** | 28px (1.75rem)| 22px (1.375rem)|600 (Semibold)| 130% (1.30) | 0.00em | `text-2xl lg:text-3xl` |
| **Heading 4 (H4)** | 22px (1.375rem)|18px (1.125rem)|500 (Medium) | 140% (1.40) | 0.00em | `text-lg lg:text-xl` |
| **Body Large** | 20px (1.25rem) | 18px (1.125rem)|400 (Regular) | 150% (1.50) | 0.00em | `text-lg lg:text-xl` |
| **Body Regular**| 16px (1.0rem) | 16px (1.0rem) | 400 (Regular) | 160% (1.60) | 0.00em | `text-base` |
| **Body Small** | 14px (0.875rem)|14px (0.875rem)|400 (Regular) | 150% (1.50) | 0.01em | `text-sm` |
| **Caption / Label**| 12px (0.75rem)|12px (0.75rem)|500 (Medium) | 140% (1.40) | 0.05em (UPPER)| `text-xs uppercase` |

### 11.3 Typography Rules:
- Maximum body copy width: 68 characters per line (`max-w-prose`) to ensure optimal readability.
- **NEVER** use decorative, cyberpunk, display script, or overly futuristic fonts.
- **NEVER** apply full uppercase to body text or headings. Uppercase is reserved strictly for small metadata tags and captions.

---

# 12. Iconography System

Icons combine Nature, Intelligence, and Communication into a unified, minimal visual vocabulary.

- **Grid Size:** Built on a `24px × 24px` vector bounding box.
- **Stroke Width:** `1.75px` consistent stroke weight across all scales.
- **Cap & Join:** `stroke-linecap="round"` and `stroke-linejoin="round"`.
- **Geometry:** Smooth, organic rounded curves (`2px` to `4px` corner radii on geometric paths).
- **Coloring:** Inherits `currentColor` from parent text. Never use multi-colored cartoon icons.
- **Filled vs Line:** Line icons by default. Filled icons are used ONLY to indicate active selection states (e.g., bottom navigation active tab).

---

# 13. Illustration System

Illustrations must reveal hidden biological relationships rather than serve as decorative fantasy.

### Allowed Illustration Styles:
1. **Scientific Line Art:** Clean vector diagrams depicting plant cell walls, water transpiration paths, and soil root architectures.
2. **Thermal Overlays:** Gradient heatmaps (blue → green → yellow → warm gold) illustrating leaf transpiration and heat stress.
3. **Invisible Signal Visualizations:** Subtle animated concentric wave circles representing bio-signals emitting from leaves.
4. **NIOS Pipeline Maps:** Step-by-step schematic flows connecting sensors to AI models to plain language output.

### Forbidden Illustration Styles:
- ❌ Cartoon characters or mascot figures.
- ❌ 3D claymorphism or bubbly plastic shapes.
- ❌ Abstract tech doodles, floating geometric shapes, or random sparkles.

---

# 14. Photography System

Photography must convey relationship, understanding, and authentic communication.

### Mandatory Photography Criteria:
- **Subjects:** Real living plants, authentic indoor biophilic spaces, human hands gently touching leaves, natural light streaming through windows.
- **Lighting:** Warm morning light, natural golden hour, soft indirect daylight.
- **Color Grading:** Deep natural greens, warm earthy tones, soft whites. Rich shadow detail without artificial contrast boosting.

### Strict Photography NEVER List:
- ❌ Stock office photos with fake smiling business people.
- ❌ Generic AI-generated surreal plant monsters.
- ❌ Plastic or artificial fake plants.
- ❌ Sterile clinical laboratory environments without human warmth.

---

# 15. Component Library Specifications

## 15.1 Buttons
Buttons use an **18px border radius** (`rounded-[18px]`) with responsive height and soft glow effects.

```
Primary Button:
- Background: linear-gradient(135deg, #3FAE2A 0%, #8AD74C 100%)
- Text: Forest Black (#070B08), font-weight: 600
- Padding: 16px 32px (Desktop), 14px 24px (Mobile)
- Shadow: 0 0 20px rgba(63, 174, 42, 0.25)
- Hover: scale 1.02, shadow 0 0 30px rgba(138, 215, 76, 0.4)
- Active: scale 0.98

Secondary Button (Glass):
- Background: rgba(15, 43, 24, 0.5)
- Border: 1px solid rgba(255, 255, 255, 0.15)
- Text: Ivory White (#F7F6F2), font-weight: 500
- Hover: bg rgba(15, 43, 24, 0.8), border rgba(63, 174, 42, 0.5)

Ghost Button:
- Background: transparent
- Text: Soft Mist (#E8ECE7)
- Hover: text-vriksh-lime, underline offset 4px
```

## 15.2 Cards
Cards use a **24px border radius** (`rounded-[24px]`) with glassmorphic backing.

```
Glass Feature Card:
- Background: rgba(15, 43, 24, 0.4)
- Backdrop Blur: 24px
- Border: 1px solid rgba(255, 255, 255, 0.08)
- Padding: 32px (Desktop), 20px (Mobile)
- Hover State: translateY(-6px), border-color rgba(63, 174, 42, 0.3), shadow 0 20px 40px rgba(0,0,0,0.4)
```

## 15.3 Status Badges
Badges communicate health states cleanly using 12px uppercase medium text:

```
Thriving Badge:    bg-[#3FAE2A]/15  text-[#8AD74C]  border 1px solid [#3FAE2A]/30  (Green dot)
Attention Badge:  bg-[#E8D07C]/15  text-[#E8D07C]  border 1px solid [#E8D07C]/30  (Yellow dot)
Alert Badge:      bg-red-500/15    text-red-400    border 1px solid red-500/30    (Soft red dot)
Category Badge:   bg-white/5       text-[#A8B0A8]  border 1px solid white/10
```

---

# 16. Motion Language System

Animations follow natural biological rhythms: leaf sway, water ripples, breathing, and sunrise fades.

### 16.1 Natural Easing Curves
```typescript
export const MOTION_EASING = {
  // Smooth organic easing (leaves moving in wind)
  organic: [0.16, 1, 0.3, 1],
  // Gentle breathing pulse
  breathing: [0.4, 0, 0.2, 1],
  // Quick responsive feedback (button press)
  snappy: [0.25, 1, 0.5, 1],
};
```

### 16.2 Motion Timing Rules:
- **Microinteractions (hovers, presses):** `150ms` – `250ms`
- **Component reveals (cards, drawers):** `400ms` – `600ms`
- **Page transitions / Full overlays:** `600ms` – `800ms`
- **Ambient background cycles (particles, light glow):** `6000ms` – `12000ms` (continuous loop)

---

# 17. Microinteractions & Feedback

- **Hover Lifts:** Feature cards lift `-6px` vertically on hover with a smooth `400ms` transition.
- **Button Glow Pulses:** Primary CTAs emit a soft green radial aura (`rgba(138, 215, 76, 0.2)`) on mouse enter.
- **Cursor Tilt (Desktop):** Hero cards tilt `3°` following cursor position via subtle 3D transform.
- **Pulsing Status Rings:** Device status rings pulse continuously at `0.25Hz` (1 pulse every 4 seconds, matching calm resting breath).

---

# 18. Accessibility (WCAG 2.2 AA)

Vriksh Vani is built for everyone, regardless of ability.

1. **Color Contrast:** All text elements maintain a minimum contrast ratio of **4.5:1** for standard text and **3:1** for large text against their background.
2. **Keyboard Navigation:** Every interactive element has a visible, high-contrast focus ring (`2px solid #8AD74C`, `offset 2px`).
3. **Screen Reader Attributes:** All icons have `aria-hidden="true"`; all interactive controls have descriptive `aria-label` tags.
4. **Reduced Motion Support:** Respect `prefers-reduced-motion: reduce`. All complex animations disable automatically, falling back to simple opacity cross-fades.
5. **Touch Targets:** All buttons, links, and input triggers are at least `44px × 44px` on touch viewports.

---

# 19. AI Experience Design

Vriksh Vani's AI companion ("Vriksh") is NOT a chatbot. It is a translator between humans and nature.

### Naming Hierarchy Rule:
- ❌ **NEVER USE:** "Chatbot", "Bot", "AI Assistant", "Virtual Assistant"
- ✅ **ALWAYS USE:** "Nature Guide", "Nature Translation Engine™", "Plant Voice", "Plant Insights"

### Conversation UI Design:
- **Plant Message Bubble:** Left-aligned, dark green fill (`#0F2B18`), subtle green border (`#3FAE2A`/30), plant avatar attached.
- **User Message Bubble:** Right-aligned, forest black fill (`#070B08`), subtle ivory border (`white/15`).
- **Plant Tone:** Warm, gentle, wise, slightly poetic. Always speaks in first person as the plant (*"I'm feeling a little dry today..."*).

---

# 20. Nature Intelligence™ UX (NIOS Loop)

Every feature UI reflects the 6-stage Nature Intelligence Operating System (NIOS) pipeline:

```
[1. SIGNAL]       Bio-signals emitted by plant
       │
[2. OBSERVE]      RGB Camera + Thermal Sensor capture visual & heat data
       │
[3. INTERPRET]    Edge AI processes raw patterns on device
       │
[4. UNDERSTAND]   Nature Translation Engine converts data → plain language
       │
[5. CONNECT]      User reads plant's voice → feels empathy & connection
       │
[6. CARE]         User takes informed, confident care action
```

---

# 21. Dashboard Design Architecture

The Web Dashboard prioritizes **Understanding Before Data**.

### Bad Dashboard Design (Generic IoT):
```
Soil Moisture: 18%
Leaf Temperature: 34°C
Light: 420 Lux
[ALERT: CRITICAL LOW MOISTURE]
```

### Vriksh Vani Dashboard Design (Nature Intelligence):
```
┌──────────────────────────────────────────────────────────┐
│  🌿 Monstera "Monty" · Thriving                         │
│                                                          │
│  "I'm feeling comfortable today! My leaves are absorbing │
│   morning light well. Soil is moist — no water needed."  │
│                                                          │
│  💧 Moisture: Ideal  │  🌡️ Temp: 22°C  │  ☀️ Light: Good  │
└──────────────────────────────────────────────────────────┘
```

---

# 22. Mobile Application Design

The mobile application is optimized for quick, single-handed interaction near plants.

- **5-Tab Bottom Navigation:** `Home` | `Plants` | `AI Chat` | `Analytics` | `Profile`
- **Floating Action Button (FAB):** Centered `+ Log Care` button with custom radial action menu.
- **Live Thermal View Toggle:** One-tap toggle between standard RGB camera view and thermal stress overlay.

---

# 23. Website Page System

The marketing website contains 15 core sections built using React Server Components:

1. **Hero Section:** High-impact typography, dual CTAs, interactive particle field.
2. **Trust Ticker:** Press logos, research partners, waitlist count ticker.
3. **Problem Statement:** Uninformed plant care statistics and signal loss visualization.
4. **NIOS Category Section:** Animated 6-stage model diagram explaining Nature Intelligence™.
5. **Product Showcase:** 360° interactive rendering of the Nature Intelligence Hub.
6. **3-Step How It Works:** Place → Hub Observes → You Understand.
7. **14 Feature Grid:** Interactive feature cards expanding into detail drawers.
8. **Interactive AI Demo:** Live chat widget demonstrating Nature Translation Engine™.
9. **App Preview:** Sleek device frames highlighting mobile features.
10. **Testimonials:** Verified early caregiver quotes and ratings.
11. **Research Portal Teaser:** Research Kit™ and Community Library™ highlights.
12. **Community Gallery:** Masonry gallery of real user plant collections.
13. **100-Year Vision Timeline:** Scalable roadmap from single plant to planet.
14. **Primary Waitlist CTA:** Full-width high-contrast signup form with instant referral feedback.
15. **Footer:** Comprehensive sitemap, newsletter form, regulatory links, social icons.

---

# 24. Product & Hardware Experience

The physical **Nature Intelligence Hub** hardware integrates seamlessly with the digital UI:

- **LED Status Ring:** Emits a slow, calm breathing glow matching the plant's current state (Green = Thriving, Gold = Attention Needed, Soft Red = Urgent Care).
- **OLED Display:** Local 0.96" display provides instant status readouts without needing to pick up a smartphone.
- **Non-Invasive Centralized Sensing:** Positioned 30–60cm away on a shelf or table — monitors up to 12 plants simultaneously without placing probes or wires into pots.

---

# 25. Research Portal & Open Science

Vriksh Vani serves scientists, students, and developers through the **Research Kit™** and **Community Library™**:

- **Dataset Explorer:** Clean, filterable datatable of public plant thermal and bio-signal datasets.
- **Code & Model Repository:** Open-source model weights for researchers training plant computer vision algorithms.
- **Academic Citation Format:** Standardized bibtex/APA citations provided for all Vriksh Vani research papers.

---

# 26. Community & Social UX

Community features encourage shared learning and green connection:

- **Plant Passport:** A shareable digital health certificate tracking a plant's entire life history, new leaves, and recovery milestones.
- **Caregiver Badges:** Earned badges based on consistent care and research contributions (`Plant Parent`, `Bio-AI Contributor`, `Community Guide`).
- **Masonry Inspiration Gallery:** Community plant photo feed overlaid with anonymized AI insights.

---

# 27. Empty States & Educational UI

Empty states must ALWAYS teach rather than display dead ends.

### Bad Empty State:
> *"No data found."*

### Vriksh Vani Empty State:
```
┌──────────────────────────────────────────────────────────┐
│                      🌱                                  │
│         Your Nature Journey Begins Here                  │
│                                                          │
│  You haven't added any plants yet. Add your first plant  │
│  or connect a Nature Intelligence Hub to start listening.│
│                                                          │
│              [+ Add Your First Plant]                    │
└──────────────────────────────────────────────────────────┘
```

---

# 28. Notification System & Alerts

Notifications educate instead of triggering panic.

- ❌ **NEVER USE:** `⚠️ URGENT ALERT! YOUR PLANT IS DYING!`
- ✅ **ALWAYS USE:** `"We've noticed something worth observing: your Monstera is showing heat stress."`

### Quiet Hours Protocol:
No non-critical notifications are dispatched between `10:00 PM` and `07:00 AM` local time. Plants rest at night; so should plant caregivers.

---

# 29. Error Handling & Edge States

- **404 Page:** Features a gentle illustration of a wilting plant looking lost, with copy: *"Hmm. This page seems to have wandered off. Even plants get lost sometimes."*
- **500 Server Error:** Hub icon with pulsing gold light, auto-retrying in 5 seconds.
- **Offline Mode:** Top banner: *"No internet connection — showing cached plant insights."*

---

# 30. Future Design Rules & Governance

### The Immutability Principles:
1. **Never Design a Component Twice:** Every new UI element MUST be added to this Design System document and built as a reusable component in `src/components/ui/`.
2. **The Hero DNA Rule:** The approved Hero Banner styling (colors, typography, glassmorphism, spacing) serves as the visual DNA for every future page.
3. **The Final Test Before Shipping:** Every designer and developer must ask:
   > *"Does this screen feel like corporate software?"*
   > If yes, redesign it.
   > *"Does this feel like a calm, intelligent bridge between humans and nature?"*
   > If yes, it is Vriksh Vani.

---

*Vriksh Vani Design System™ — Version 1.0*
*Master Specification for Design & Engineering*
*Let Your Plants Speak.*
