# Product Requirements Document (PRD)

## Project Name: MONOLITH
**Subtitle:** Tactile E-Commerce Experience  
**Status:** Draft  
**Author:** Antigravity (AI Coding Assistant)  
**Date:** June 18, 2026

---

## 1. Project Overview
MONOLITH is a high-performance, single-page React e-commerce application that challenges flat, uninspired grid layouts. Inspired by physical industrial design, instrument consoles, and architectural relief, MONOLITH uses a sophisticated modern skeuomorphic design language. It relies entirely on white light values, depth-mapped shadows, and tactile structural physics rather than traditional borders or colored outlines.

The interface is engineered to feel like a premium physical console milled from a solid sheet of material. Products are treated as curated "sculptural objects" nested inside recessed pockets, while dynamic dials, switches, and responsive UI elements react realistically to user interaction.

---

## 2. Core Features & Interactive Mechanics

### 2.1 Physical Depth UI
- **Description:** A completely borderless design where interface hierarchy is dictated purely by the illusion of physical elevation, using custom multi-layered box-shadow styling (raised and recessed states).
- **Raised State:** Elements appear to lift off the screen.
- **Recessed State:** Elements (inputs, image bays) appear carved into the screen.
- **Color Palette:** Pure monochromatic shades of light grey/white (e.g., `#F0F2F5` or `#E0E5EC`) to allow shadow gradients to render cleanly without color interference.

### 2.2 Skeuomorphic Navigation Dock (The "Page Switcher")
- **Description:** A floating, tactile navigation dock at the bottom of the screen to switch seamlessly between application views.
- **Visual Design:** A recessed groove in the main console containing raised tactile button keys.
- **Key Indicators:** Each key features an integrated physical "LED light" that glows green/orange when active.
- **Views Supported:**
  - **Showcase (Shop Grid):** Main catalogue of architectural products.
  - **Product Detail:** Dedicated inspect panel for individual products.
  - **Shopping Cart:** Tactile register showing order details, subtotal dial, and checkout slider.
  - **System Dashboard:** System settings and stats (e.g., API status, latency dial, shadow theme adjuster).

### 2.3 Dynamic Shopping Engine
- **Description:** Fast global React state context handling real-time cart synchronization, increment/decrement mechanics, and instant badge feedback.
- **Cart Context:** Lightweight state wrapper that minimizes component re-renders.
- **Instant Badge Feedback:** Cart count in navigation dock pulses and scales instantly upon item additions.

### 2.4 Curated Inventory Fetching
- **Description:** Fetching products from an external API (like FakeStore API) and displaying them inside standardized, aesthetic showcase frames.
- **Showcase Frames:** Uniform aspect-square recesses with overflow-hidden and image background blending.

---

## 3. High-Fidelity Execution Details

### 3.1 Dual-Shadow Illusion (Light Source Modeling)
True skeuomorphism relies on consistent lighting. The light source is positioned at the top-left (135 degrees):
- **Base Background:** Slate/Grey-white `#E2E8F0` or `#E0E5EC`.
- **Top-Left Light Source (Highlight):** Pure white shadow.
- **Bottom-Right Shadow (Occlusion):** Muted grey-blue shadow.

#### CSS Variables for Elevation:
```css
:root {
  --mono-bg: #E2E8F0;
  
  /* Raised state: Light from top-left, Shadow on bottom-right */
  --shadow-raised: 
    -6px -6px 14px rgba(255, 255, 255, 0.9), 
     6px  6px 14px rgba(163, 177, 198, 0.4);

  /* Recessed state: Inset shadow, Light on bottom-right edge, Shadow on top-left edge */
  --shadow-recessed: 
    inset -6px -6px 14px rgba(255, 255, 255, 0.8), 
    inset  6px  6px 14px rgba(163, 177, 198, 0.4);
    
  /* Mini Tactile Raised (for keys/buttons) */
  --shadow-key-raised: 
    -3px -3px 8px rgba(255, 255, 255, 0.9), 
     3px  3px 8px rgba(163, 177, 198, 0.4);

  /* Mini Tactile Recessed */
  --shadow-key-recessed: 
    inset -3px -3px 8px rgba(255, 255, 255, 0.8), 
    inset  3px  3px 8px rgba(163, 177, 198, 0.4);
}
```

### 3.2 Image Blend and Standardized Frame Assets
To prevent external product images with white/colored backgrounds from breaking the skeuomorphic depth:
- **Frame Style:** Aspect-ratio `1/1` (square), recessed depth shadow (`var(--shadow-recessed)`), overflow hidden.
- **Blending:** Product image uses `mix-blend-multiply` and a light desaturation filter so it appears printed onto the physical card.
- **Scale on Hover:** Soft zoom inside the card recess.

### 3.3 Tactile Spring Physics (Transitions)
- **Transition Curve:** `transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);`
- **Active State (Press):** Switching instantly to recessed shadows when clicked, simulating a mechanical key travel.
- **Feedback:** Physical snap feeling on hover and click.

### 3.4 Isolated State Control & Performance
- **Quantity Adjusters:** Isolated controls on product cards to prevent re-rendering the whole catalogue grid. Only the clicked item card updates local quantity states.
- **Cart Count Pulse:** Navbar/Dock cart icon scales up (e.g. `scale(1.2)`) and rebounds using an elastic keyframe animation when items are added.

### 3.5 Production-Grade Code Quality
- **Language:** React + TypeScript (Vite template).
- **Routing:** React-based single-page view switcher managed by state (Showcase -> Details -> Cart).
- **Semantics:** 
  - `<header>` for top system panel.
  - `<main>` for active viewport view.
  - `<article>` for product cards.
  - `<nav>` for the navigation dock.
  - `<footer>` for copyright/spec specs.

---

## 4. View Architecture

### 4.1 Header System Panel
- Title "MONOLITH // TACTILE UNIT" in monospace font.
- Skeuomorphic toggle for Dark Mode / Light Mode (depth-inverted toggle switch).
- Connection status LED indicator (pulsing green for online).

### 4.2 Main Viewport: Showcase (Shop)
- Grid of recessed pocket frames containing product cards.
- Filters: Skeuomorphic segmented tabs (All, Electronics, Jewelery, Clothing) that physically depress when active.

### 4.3 Main Viewport: Product Detail
- Two-column split-console layout.
- Left: Large recessed frame displaying the selected image.
- Right: Description sheet, skeuomorphic price indicator dial, and a toggle select button for size/type.
- Tactile "ADD TO CART" push button with spring-back animation.

### 4.4 Main Viewport: Shopping Cart
- Recessed ledger listing item rows.
- Each row has skeuomorphic increase/decrease buttons and a trash toggle.
- Right side: Receipt sheet with debossed checkout slider widget (user slides an elevation knob from left to right to authorize checkout).

### 4.5 Navigation Dock
- Floating capsule at the bottom center.
- Contains buttons for: `[ SHOWCASE ]`, `[ CART (X) ]`, `[ SYSTEM ]`.
- Active view highlighted with an green LED glow.

---

## 5. Non-Functional Requirements
- **Performance:** Instant interaction feedback (< 100ms first response).
- **Accessibility:** Use proper ARIA attributes for buttons/states (e.g., `aria-pressed`, `aria-selected`).
- **Responsive:** Flex and Grid layout adjustments to support mobile screens (dock shrinks, grid shifts to 1 column).
