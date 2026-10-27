# FinTrack · Personal Finance Dashboard

A minimalist, **fully offline** personal finance dashboard for desktop, **iPhone and Android**.
Track your portfolio, monthly expenses, debts and savings, and watch your net worth over time.

- The whole app lives in `fintrack.html` (HTML, CSS and JavaScript, no libraries, no internet needed, charts included)
- Your data stays **in your own browser** (`localStorage`). Nothing is uploaded anywhere.
- Light / dark theme, responsive on phone and desktop, installable to the phone Home Screen

## Files

| File | Purpose |
| --- | --- |
| `fintrack.html` | The app. On a computer, this is the only file you need. |
| `manifest.webmanifest`, `sw.js`, `icons/` | Make it installable on phones and work offline when it is hosted at a web link |

## Features

| Area | What you can do |
| --- | --- |
| **Overview** | Net worth (assets − debts), portfolio, debt, expenses vs budget, savings & savings rate, plus the change vs the previous month |
| **Trends** | Line chart of net worth, portfolio, debt, expenses and savings across all months. Click a legend chip to show or hide a line, hover for details, click a point to jump to that month |
| **Breakdowns** | Doughnut charts for portfolio allocation (by asset type) and expenses (by category) |
| **Portfolio** | Add, edit and delete assets (cash, savings, FD, stocks, ETFs, crypto, EPF, gold, property…) |
| **Expenses** | Add, edit and delete expenses per category, with per-category budget bars (green / amber / red) |
| **Debts** | Add, edit and delete loans and cards with outstanding balance and monthly repayment (shows months left) |
| **Savings** | Monthly income plus what you saved this month and your savings rate |
| **Goals** | Savings goals with progress bars and the required monthly amount to hit the target date |
| **Budgets** | Manage expense categories and monthly budgets |

## How to use

1. **Computer:** double-click `fintrack.html` to open it in Chrome, Edge, Firefox or Safari. **Phone:** see the next section.
2. Click **Start this month**, or **Try with demo data** to explore first.
3. Each month, click **+ Month**. Keep “Copy all entries from the previous month” ticked, then update the numbers.
4. Use ← / → (or the arrows in the header) to move between months.

## Use it on iPhone or Android

> **Why it shows a blank page on a phone:** when you open the HTML file from Files, WhatsApp, Telegram or email,
> the phone shows it in a *preview* that doesn't run JavaScript, so the app can't start.
> Phones need to open it from a **web link** (`https://…`).

### 1. Put it online once (free)

Upload the **whole folder** (`fintrack.html`, `manifest.webmanifest`, `sw.js`, `icons/`). Pick one option:

- **GitHub Pages:** create a GitHub repository, click *Add file → Upload files* and drag in everything from this folder.
  Then go to *Settings → Pages → Deploy from a branch → main → / (root)*.
  After about a minute your link is `https://<your-username>.github.io/<repo-name>/` (it opens `fintrack.html` automatically).
- **Netlify Drop:** go to <https://app.netlify.com/drop>, drag the whole folder in and you get a link immediately.
  Create a free account to keep the link permanently.

Hosting it publicly is safe: the files contain **no data**. Each person's numbers are stored only on their own device.

### 2. Install it on your phone

- **iPhone / iPad (Safari):** open the link → tap **Share** → **Add to Home Screen** → **Add**.
- **Android (Chrome):** open the link → tap **⋮** → **Add to Home screen** (or **Install app**).

FinTrack then opens full screen from its own icon and **works offline**, charts included. When you're online it picks up new versions automatically.

**Tips:**
- Always open it the same way (the Home Screen icon). On iPhone, the Home Screen app keeps its data separately from the same link opened in Safari.
- To move your data between your computer and phone, use **Export backup** on one device and **Import backup** on the other.

### Quick test over home Wi‑Fi (optional)

On your computer, run `npx http-server -p 8080` inside this folder. Then on your phone (on the same Wi‑Fi), open
`http://<your-computer-IP>:8080/fintrack.html`. Use this only for testing: offline mode needs an `https://` link.

## Back up & move your data

Data is saved automatically in the browser you're using. It is **per browser and per device**, and clearing browser data erases it.

- **⋮ menu → Export backup (JSON)** downloads a `fintrack-backup-YYYY-MM-DD.json` file.
- **⋮ menu → Import backup** restores that file on any device or browser. It replaces the current data.

Export regularly, for example once a month after updating your numbers.

## Sharing

- **Best: share your hosted link** (see *Use it on iPhone or Android*). It works on every phone and computer, and everyone gets their own private, empty dashboard.
- For computer users, you can also send `fintrack.html` directly (chat, email, USB). They just double-click it.

## Settings

From the **⋮** menu you can change the currency (MYR by default; SGD, USD, EUR, GBP and more are available), load demo data, delete the current month, or reset everything.
