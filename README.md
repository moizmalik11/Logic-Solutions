# Agency Landing Website — Full Stack Corporate Portal

A high-performance corporate landing website built with a modern decoupled stack: a **Next.js 14 (App Router)** frontend and a **Laravel 12 (PHP 8.2+)** RESTful API backend. Engineered for visual excellence, modern typography, responsive fluid animations, robust database-driven content, and optimized SEO structure.

---

## 1. Project Overview

This project was built to deliver a premium, high-converting digital storefront for a modern tech agency. Key architectural decisions include:
*   **Next.js 14 (App Router)**: Handpicked for automatic server-side rendering (SSR), optimized image format pipelines (WebP/AVIF), and SEO metadata injection.
*   **Laravel 12 RESTful API**: Serves as the central data repository. Business logic is isolated within service classes to keep controllers clean and thin.
*   **GSAP & ScrollTrigger Animations**: Powers the premium visual effects (such as the word-by-word bold reveal in "Who We Are" and the custom transition timelines in "Our Work").
*   **Decoupled Database Integration**: All sections (Hero, About, Services, Features, Portfolio, Team, FAQs) load dynamic data from the Laravel API. No hardcoded arrays are used for core sections.
*   **Postman Collection**: Located in [`docs/postman_collection.json`](file:///e:/Projects/Assesment Project Moiz Ahmed/docs/postman_collection.json) to easily inspect and run API endpoint tests.

---

## 2. Prerequisites

Ensure your development environment meets the following version requirements:
*   **PHP**: `^8.2`
*   **Composer**: `^2.5`
*   **Node.js**: `^18.0.0` or `^20.0.0` (with `npm`)
*   **Database**: MySQL `^8.0` (or SQLite `^3.0` for local lightweight development)

---

## 3. Installation

Follow these steps to configure both applications on your local machine:

### Backend Setup (Laravel 12)
1.  Navigate to the backend directory:
    ```bash
    cd backend
    ```
2.  Install PHP packages:
    ```bash
    composer install
    ```
3.  Copy the environment template:
    ```bash
    cp .env.example .env
    ```
4.  Generate your application security key:
    ```bash
    php artisan key:generate
    ```
5.  Set up your database connection in `.env` (see Environment Configuration below).
6.  Migrate and seed your database:
    ```bash
    php artisan migrate --seed
    ```

### Frontend Setup (Next.js 14)
1.  Navigate to the frontend directory:
    ```bash
    cd ../frontend
    ```
2.  Install Node dependencies:
    ```bash
    npm install
    ```
3.  Copy the environment template:
    ```bash
    cp .env.example .env.local
    ```
4.  Configure backend endpoints inside `.env.local`.

---

## 4. Environment Configuration

### Backend `.env` Details
*   `DB_CONNECTION`: Database engine (e.g. `mysql` or `sqlite`).
*   `DB_DATABASE`: Name of the database schema (e.g. `logic_solution_db`).
*   `FRONTEND_URL`: CORS-restricted origin configuration (default: `http://localhost:3000` in local dev).

### Frontend `.env.local` Details
*   `NEXT_PUBLIC_API_URL`: Base address of the Laravel backend API (e.g. `http://localhost:8000/api`).
*   `NEXT_PUBLIC_SITE_URL`: Primary frontend canonical URL (e.g. `http://localhost:3000`).

---

## 5. Database Setup

Database configuration is automated using Laravel migrations and seeders:
*   **Run Migrations**: Create all schemas:
    ```bash
    php artisan migrate
    ```
*   **Reset & Fresh Seed**: Clear database and seed demo data:
    ```bash
    php artisan migrate:fresh --seed
    ```

---

## 6. Running the Application

### Backend Development Server
Run the local Laravel web server (usually hosts at `http://127.0.0.1:8000`):
```bash
cd backend
php artisan serve
```

### Frontend Development Server
Start the Next.js dev server with hot-reloading (hosts at `http://localhost:3000`):
```bash
cd frontend
npm run dev
```

---

## 7. API Documentation

All resources respond in a standard consistent JSON envelope:
`{ "success": boolean, "message": string, "errors": null|object, "data": null|object|array }`

### Public Endpoints (No Auth Required)
*   `GET /api/hero`: Fetches active Hero slide configuration.
*   `GET /api/about`: Fetches the dynamic About text, mission, and values.
*   `GET /api/services`: Returns a list of all active services.
*   `GET /api/features`: Returns a list of features with dynamic Lucide icon mappings.
*   `GET /api/portfolio`: Returns all portfolio projects (contains custom dynamic image URLs).
*   `GET /api/testimonials`: Returns customer feedback and ratings.
*   `GET /api/team-members`: Returns team portraits and social handles.
*   `GET /api/faqs`: Returns categorised FAQ items.
*   `POST /api/contact` **(Rate Limited)**: Submits client inquiry. Limits to **5 submissions per minute** per IP.
    *   *Request Body*: `{ "name": "...", "email": "...", "phone": "...", "subject": "...", "message": "..." }`

### Auth Endpoints (Sanctum)
*   `POST /api/login`: Authenticates an admin and returns a Sanctum access token.
    *   *Request Body*: `{ "email": "admin@logicsolution.com", "password": "password" }`
*   `POST /api/logout` **(Protected)**: Revokes the current admin token.
*   `GET /api/user` **(Protected)**: Retrieves the authenticated admin profile.

### Protected Endpoints (Sanctum Auth Required)
Requires a valid admin login session or authorization token sent as `Authorization: Bearer <token>`.
*   `POST /api/{resource}`: Creates a new record for a section.
*   `PUT /api/{resource}/{id}`: Updates a record.
*   `DELETE /api/{resource}/{id}`: Deletes a record.
*   `GET /api/contact`: Retrieves all contact messages submitted by clients.
*   `PATCH /api/contact/{id}/read`: Marks a message as read.

---

## 8. Folder Structure

```markdown
Assesment Project Moiz Ahmed/
├── backend/                        # Laravel 12 Backend API
│   ├── app/
│   │   ├── Http/
│   │   │   ├── Controllers/Api/    # Thin resource controllers (Contact, Service, Portfolio, etc.)
│   │   │   ├── Middleware/         # AdminMiddleware (auth check), CompressResponse (gzip/Brotli)
│   │   │   └── Requests/           # Validation Rules (ContactRequest, FaqRequest, etc.)
│   │   └── Services/               # Business Logic isolation layer (ContactService, FaqService)
│   ├── database/
│   │   ├── migrations/             # Standard schemas with indexes
│   │   └── seeders/                # High-fidelity realistic mock data
│   └── routes/
│       └── api.php                 # Protected & public API routes
├── docs/
│   └── postman_collection.json     # Postman collection for API testing
└── frontend/                       # Next.js 14 Frontend App
    ├── public/
    │   ├── images/                 # Local image fallbacks (staged in Git)
    │   └── hero_poster.jpg         # Hero video fallback thumbnail
    └── src/
        ├── app/                    # Next.js App Router (Layouts, Global CSS, robots.ts, sitemap.ts)
        ├── components/
        │   ├── layout/             # Header, Footer, Navbar
        │   ├── sections/           # Landing page sections (AboutClient, ServicesClient, PortfolioClient)
        │   └── ui/                 # Reusable components (Button, Input, Modal, ParticleWave)
        ├── services/               # Centralized API service layer (no fetch inside components)
        └── types/                  # Centralized TypeScript interface typings
```

---

## 9. Production Build Instructions

### Backend (Production Optimize)
Disable debug logs and cache routes:
```bash
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Frontend (Static Optimization)
Compile TypeScript structures and generate optimized production files:
```bash
npm run build
npm run start
```

---

## 10. Deployment Steps

To deploy this decoupled architecture to a live environment, we recommend **Vercel** for the Next.js frontend and **Railway** for the Laravel backend.

### Backend (Railway)
1. Push your repository to GitHub.
2. In Railway, provision a MySQL Database and note the connection credentials.
3. Import the GitHub repository in Railway and set the **Root Directory** to `/backend`.
4. Update the Railway Environment Variables with your `DB_*` credentials, `APP_KEY`, `APP_ENV=production`, and `FRONTEND_URL`.
5. Railway will automatically build and serve the Laravel application. Run migrations using the Railway CLI (`railway run php artisan migrate --force`).

### Frontend (Vercel)
1. Import the repository into Vercel.
2. Set the **Root Directory** to `frontend`. The framework preset will automatically detect Next.js.
3. Add the Environment Variable: `NEXT_PUBLIC_API_URL` pointing to the live Railway backend domain.
4. Deploy the application. Vercel will automatically build the static assets and host the application globally.

---

## 11. Assumptions

The following design and architecture decisions were made to handle ambiguities in the spec:
1. **Admin Auth Scope**: It was assumed that the backend API will handle Admin CRUD operations securely using Laravel Sanctum. A full frontend Admin dashboard was not built as the requirement was to "Build a Modern SEO-Friendly Company Landing Website," so the admin functionality is exposed strictly via the API to be consumed by any future CMS/Dashboard.
2. **SEO Setup**: It was assumed that metadata should be dynamically injected into the `layout.tsx` (using Next.js App Router conventions) and that JSON-LD structured data is required for the Organization schema.
3. **External Image Hosting**: To keep the repo lightweight, Portfolio items are seeded with official high-speed Unsplash CDN image URLs instead of locally stored binaries.

---

## 12. Known Issues

*   **Hero Video File Size**: The raw video background asset `frontend/public/hero_video.mov` is over 100 MB. It has been excluded and kept unstaged from Git commits to prevent pushing errors on GitHub.
    *   *Workaround*: In a live deployment, compress this file to a web-optimized MP4 (usually 5–15 MB) using Handbrake or ffmpeg before staging, or host it on an external CDN.
