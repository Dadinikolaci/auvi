# MediaReview Platform

This is a SaaS platform for collaborative review of video, audio, and photo materials, built with Next.js, TypeScript, and Supabase.

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set up Supabase
This project requires a Supabase backend for authentication, database storage, and file uploads.

**A. Create a Supabase Project:**
1. Go to [supabase.com](https://supabase.com/) and create a new project.
2. Keep a copy of your **Project URL** and **anon (public) key**.

**B. Set up Database Schema:**
1. In your Supabase project, go to the **SQL Editor**.
2. Click **"New query"**.
3. Copy the entire contents of the `schema.sql` file from this repository and paste it into the query editor.
4. Click **"Run"** to execute the script. This will create the necessary tables (`projects`, `comments`, `annotations`) and enable Row Level Security (RLS) policies.

**C. Create Storage Bucket:**
The application requires a storage bucket for file uploads.
1. In your Supabase project, go to **Storage**.
2. Click **"New bucket"**.
3. Enter the bucket name as **`media`**. This is required.
4. For this MVP, you can set the bucket to **Public**.
5. Click **"Create bucket"**.

### 4. Configure Environment Variables
1. Create a file named `.env.local` in the root of the project.
2. Add your Supabase project credentials to it:

```
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

Replace `YOUR_SUPABASE_PROJECT_URL` and `YOUR_SUPABASE_ANON_KEY` with the credentials from your Supabase project.

### 5. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
