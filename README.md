# Fundraising Intern Portal – Round 1 Submission

This is a basic full stack intern portal developed as part of the Round 1 Task for the Full Stack Developer Internship. The project includes a dummy login/signup page, dashboard with referral information and donations, and a static leaderboard page.

---

## 💻 Tech Stack Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Hosting:**
  - Frontend: [[Netlify](https://www.netlify.com/)](https://magical-sunshine-38d27b.netlify.app)
  - Backend: [[Render](https://render.com/) ](https://fundraising-portal-c5tp.onrender.com)

---

## 🔐 Features Implemented

### ✅ Frontend Pages
- `index.html` – Dummy Login page
- 'Signup.html' - Dummy Signup page
- `dashboard.html` – Displays:
  - Intern name
  - Referral code (`yourname2025`)
  - Total donations raised (dummy value: ₹1000)
  - Static rewards section
- `leaderboard.html` – Static top fundraisers list

### ✅ Backend (REST API)
- `GET /api/user` – Returns dummy JSON data:
```json
{
  "name": "Mohan",
  "referralCode": "mohan2025",
  "totalDonations": 1000
}
