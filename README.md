# Analytics Dashboard

A fully functional analytics dashboard built with Next.js 15, TypeScript, Tailwind CSS and Recharts. Features interactive charts, transaction management, notification toggles and a responsive sidebar layout.

## Live Demo

 **[dashboard-app-five-teal.vercel.app](https://dashboard-app-five-teal.vercel.app/)**

---

## Features

-  **Dashboard Overview** — Stat cards, bar chart, line chart and recent transactions table
-  **Analytics Page** — Pie chart, area chart and traffic source breakdown with progress bars
-  **Transactions Page** — Filter by status, sort by amount, clear filters and masked email display
-  **Settings Page** — Profile form with success feedback and notification toggle switches
-  **Sidebar Navigation** — Active link highlighting with `usePathname`
-  **Mobile Responsive** — Scrollable table, collapsible columns, adaptive layouts

---

## Charts Built with Recharts

| Chart | Type | Page |
|---|---|---|
| Monthly Revenue vs Expenses | Bar Chart | Dashboard |
| User Growth | Line Chart | Dashboard |
| Traffic Sources | Pie Chart | Analytics |
| Weekly Sales Trend | Area Chart | Analytics |

---

## Key Concepts Demonstrated

### Recharts — Client Component Requirement
Charts use browser APIs so they must be Client Components:

```tsx
'use client'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

export default function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={monthlyRevenue}>
        <Bar dataKey="revenue" fill="#166534" radius={[4,4,0,0]} />
        <XAxis dataKey="month" />
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
  );
}
```

### URL Pathname for Active Navigation
```tsx
'use client'
import { usePathname } from "next/navigation";

const pathname = usePathname();

// highlights active link based on current URL
className={pathname === link.href ? "bg-blue-600 text-white" : "text-gray-400"}
```

### Debounced-style State for Filtering
```tsx
// filter transactions by status in real time
if(search){
  transactions = transactions.filter(
    txs => txs.status.toLowerCase() === search.toLowerCase()
  )
}

// sort by amount — ascending or descending
if(sort === "ascending"){
  transactions = [...transactions].sort((a, b) => a.amount - b.amount)
}
```

### Toggle Switches — Pure CSS, No Library
```tsx
<button
  onClick={() => handleToggle(key)}
  className={`relative w-11 h-6 rounded-full transition-colors ${
    value ? "bg-green-600" : "bg-gray-200"
  }`}
>
  <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
    value ? "translate-x-6" : "translate-x-1"
  }`} />
</button>
```

### Success Feedback with setTimeout
```tsx
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSaved(true);
  setTimeout(() => setSaved(false), 3000); // hide after 3 seconds
};
```

### Email Masking
```tsx
// adebayo@gmail.com → a..@..com
{tx.email.split("@")[0].slice(0, 1)}..@..{tx.email.split("@")[1].slice(-3)}
```

### String.slice() with Negative Index
```tsx
// slice(-3) returns last 3 characters
"gmail.com".slice(-3) // → "com"
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 15 | Framework — App Router, SSR |
| TypeScript | Type safety throughout |
| Tailwind CSS | Utility-first styling |
| Recharts | Chart library — Bar, Line, Pie, Area |
| Mock Data | Hardcoded Nigerian-themed dataset |

---

## ⚛️ React & Next.js Concepts

- `usePathname` — active link detection in sidebar
- `useState` — filter, sort, form and toggle state
- `useMemo` — could be applied for expensive filter operations
- `setTimeout` — timed success message display
- Client Components — required for Recharts and interactive UI
- Server Components — layout and static page wrappers
- `Object.entries()` — iterating notification preferences
- `Array.filter()` — status-based transaction filtering
- `Array.sort()` with spread — non-mutating sort
- `String.split()` + `String.slice()` — email masking
- TypeScript union types — `"completed" | "pending" | "failed"`
- `keyof typeof` — type-safe object key access

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx                   → Root layout with sidebar Navbar
│   ├── page.tsx                     → Dashboard overview
│   ├── analytics/
│   │   └── page.tsx                 → Charts and traffic breakdown
│   ├── transactions/
│   │   └── page.tsx                 → Filterable, sortable table
│   └── settings/
│       └── page.tsx                 → Profile form + notification toggles
├── components/
│   ├── Navbar.tsx                   → Sidebar with active link detection
│   ├── StatCard.tsx                 → Reusable stat card component
│   ├── RevenueChart.tsx             → Bar chart (Client Component)
│   ├── UserGrowthChart.tsx          → Line chart (Client Component)
│   ├── TrafficChart.tsx             → Pie chart (Client Component)
│   └── WeeklySalesChart.tsx         → Area chart (Client Component)
├── data/
│   └── mockData.ts                  → All mock data — revenue, users, transactions
└── types/
    └── index.ts                     → TypeScript interfaces
```

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/Oluwamighty/dashboard-app.git

# Navigate into the project
cd dashboard-app

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📱 Responsive Design

| Screen | Behavior |
|---|---|
| 📱 Mobile | Single column, scrollable table, hidden Email/Date columns |
| 💻 Tablet | Two-column charts grid, full table visible |
| 🖥️ Desktop | Sidebar + content layout, four-column stat cards |

---

## 🔮 Future Improvements

- Connect to a real database for live data
- Date range filter for transactions
- Export transactions as CSV
- Dark/Light mode toggle
- User authentication with NextAuth
- Real-time data updates with WebSockets

---

## 👨‍💻 Author

**Ojo Azeez Olawale**
- GitHub: [@Oluwamighty](https://github.com/Oluwamighty)
- Portfolio: [oluwamighty.github.io/portfolio](https://oluwamighty.github.io/portfolio)
- Email: olawaleojo42@gmail.com

---

## 📄 License

MIT License — feel free to use this project as a reference or starting point.