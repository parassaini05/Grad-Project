# Deployment Plan: Discovery Engine Dashboard

This document outlines the step-by-step strategy for deploying the Discovery Engine project. 
The architecture consists of a React/Vite **Frontend** deployed to Vercel, and a Python **Backend** deployed to Railway.

## 🏗 Architecture Overview
- **Frontend:** React + Vite + TailwindCSS 
  - **Host:** [Vercel](https://vercel.com/) (Best in class for Vite/React edge caching and CI/CD).
- **Backend:** Python API (e.g., FastAPI / Flask)
  - **Host:** [Railway](https://railway.app/) (Excellent for seamless Python deployments, background workers, and easy scaling).
- **Version Control:** GitHub (Already connected).

---

## 🚀 Phase 1: Backend Deployment (Railway)

Since the frontend relies on the backend API to fetch real data (if connected), we must deploy the backend first to generate a production URL.

### 1. Prepare Backend Configuration
Ensure the backend has the necessary files in the root directory for Railway to build it:
1. `requirements.txt`: Ensure all your Python dependencies (FastAPI, uvicorn, groq, pandas, etc.) are listed.
2. `Procfile` (Optional but recommended): Tell Railway exactly how to start the app. Create a file named `Procfile` in the root with:
   ```bash
   web: uvicorn src.main:app --host 0.0.0.0 --port $PORT
   ```
   *(Update `src.main:app` based on where your FastAPI app is initialized).*

### 2. Deploy to Railway
1. Log in to [Railway](https://railway.app/).
2. Click **New Project** -> **Deploy from GitHub repo**.
3. Select the `Grad-Project` repository.
4. **Environment Variables:**
   - Go to the **Variables** tab in your Railway service.
   - Add your API keys (e.g., `GROQ_API_KEY`, `YOUTUBE_API_KEY`, etc.).
   - Add `PORT` (usually Railway maps this automatically, but explicitly adding it ensures no binding errors).
5. **Generate Domain:**
   - Go to the **Settings** tab.
   - Under "Domains", click **Generate Domain** (e.g., `grad-project-backend.up.railway.app`).
   - *Save this URL for the frontend configuration.*

---

## 💻 Phase 2: Frontend Deployment (Vercel)

### 1. Prepare Frontend Configuration
Ensure your API calls in the frontend utilize an environment variable rather than a hardcoded `localhost:8000`. 
In your frontend `.env` (or Vite config), you should have:
```env
VITE_API_URL=https://grad-project-backend.up.railway.app
```
And your frontend fetch calls should look like: `fetch(`${import.meta.env.VITE_API_URL}/api/scrape`)`

### 2. Deploy to Vercel
1. Log in to [Vercel](https://vercel.com/).
2. Click **Add New** -> **Project**.
3. Import the `Grad-Project` GitHub repository.
4. **Configure the Build Settings:**
   - **Framework Preset:** Vite
   - **Root Directory:** Edit this and select the `frontend` folder. (This is critical since your frontend is not in the repository root).
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. **Environment Variables:**
   - Add `VITE_API_URL` and set its value to your newly generated Railway backend domain.
6. Click **Deploy**. Vercel will build the React app and provide a live URL (e.g., `discovery-engine.vercel.app`).

---

## 🔒 Phase 3: Security & Final Wiring (CORS)

Once both are deployed, they won't talk to each other until you explicitly allow it via CORS.

1. **Update Backend CORS Policy:**
   In your Python backend (`src.main` or wherever your API runs), you must update the CORS middleware to allow requests from the Vercel domain.
   ```python
   from fastapi.middleware.cors import CORSMiddleware

   app.add_middleware(
       CORSMiddleware,
       allow_origins=[
           "http://localhost:5173", 
           "https://discovery-engine.vercel.app" # <--- Add your Vercel URL here
       ],
       allow_credentials=True,
       allow_methods=["*"],
       allow_headers=["*"],
   )
   ```
2. Commit and push the updated backend code to GitHub. Railway will automatically rebuild and deploy the new CORS rules.

## ✅ Verification Checklist
- [ ] Railway build completes successfully (check deploy logs).
- [ ] Railway endpoint returns `200 OK` on health check (`/`).
- [ ] Vercel builds successfully from the `frontend` root.
- [ ] Live Vercel app loads styling (CSS) correctly.
- [ ] Clicking "Start Live Scrape" in the Vercel app successfully contacts the Railway API without a CORS block (check browser network tab).
