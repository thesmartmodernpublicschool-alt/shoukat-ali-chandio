# Shokat Ali Public School - Website + Management System

A complete, modern, professional and fully responsive **School Website + School Management System** built with HTML5, CSS3, JavaScript, Bootstrap 5 and LocalStorage.

**Owner:** Shokat Ali  
**Location:** Pakistan  
**School Name:** Shokat Ali Public School

---

## Demo Login Credentials

| Role    | Username | Password    |
|---------|----------|-------------|
| Admin   | admin    | admin123    |
| Teacher | teacher  | teacher123  |
| Student | student  | student123  |
| Parent  | parent   | parent123   |

---

## Features

### Public Website
- Attractive Homepage with Hero, Welcome Message, Why Choose Us, Facilities, News, Events, Achievements, Testimonials
- About School (History, Mission, Vision, Values, Director Message)
- Online Admission Form (saves to LocalStorage with Application Number)
- Academics (Classes, Subjects, Exam System, Calendar, Timetable)
- Gallery with Lightbox and Category Filter
- Contact Page with Form and Map Placeholder

### School Management System (Admin)
- Dashboard with statistics (Students, Teachers, Classes, Pending Admissions, Fees)
- Student Management (Add / Edit / Delete / Search / Filter)
- Teacher Management (Add / Edit / Delete)
- Attendance Management (Daily, by Class)
- Fees Management (View / Mark Paid)
- Exams & Results (View Result Card / Print)
- Timetable
- Notices (Add / Delete) – shown on public website
- Events (Add / Delete)
- Gallery Management (Add / Delete images by URL)

### Role-based Portals
- **Admin**: Full access
- **Teacher**: Attendance, Students, Results
- **Student**: Profile, Notices, Results
- **Parent**: Child Profile, Fees, Notices

---

## Folder Structure

```
school-website/
├── index.html
├── about.html
├── admissions.html
├── academics.html
├── gallery.html
├── contact.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── auth.js
├── admin/
│   ├── login.html
│   ├── dashboard.html
│   ├── students.html
│   ├── teachers.html
│   ├── attendance.html
│   ├── fees.html
│   ├── exams.html
│   ├── timetable.html
│   ├── notices.html
│   ├── events.html
│   └── gallery.html
├── student/
│   ├── login.html
│   └── dashboard.html
├── teacher/
│   ├── login.html
│   └── dashboard.html
├── parent/
│   ├── login.html
│   └── dashboard.html
└── assets/
    ├── images/
    └── icons/
```

---

## How to Run

1. Download / clone the project.
2. Open `index.html` directly in any modern browser (Chrome, Firefox, Edge).
3. **No server required** – everything works offline with LocalStorage.
4. Demo data is automatically loaded on first visit.

---

## Setup Instructions

1. Extract the folder.
2. Double-click `index.html` or open it via Live Server (VS Code).
3. Navigate using the menu.
4. Use the Login dropdown for different portals.

---

## Customize for Your School

### Change School Name
Search and replace `Shokat Ali Public School` in all HTML files.

### Change Owner / Director Name
Search for `Shokat Ali` and update.

### Change Contact Information
Edit the Footer and Contact page:
- Address
- Phone: `+92 300 1234567`
- WhatsApp
- Email: `info@shokatalischool.pk`

### Change Logo
Replace the Font Awesome graduation-cap icon or add an `<img>` tag with your logo in the navbar.

### Change Colors
Edit CSS variables in `css/style.css`:

```css
:root {
  --primary: #1a5276;
  --secondary: #e67e22;
  /* ... */
}
```

### Add Real Photos
Replace Unsplash/placeholder URLs in gallery and use your own images in `assets/images/`.

---

## Important Notes

- This is a **frontend demo project**.
- All data is stored in **browser LocalStorage**.
- Data will be lost if browser cache/LocalStorage is cleared.
- For production use, connect a real backend (Node.js, PHP, Python) + database (MySQL, MongoDB) and implement proper authentication & security.
- Never use LocalStorage for sensitive real student data in production.

---

## GitHub Pages Deployment

1. Create a new GitHub repository.
2. Upload all project files.
3. Go to **Settings → Pages**.
4. Select branch `main` and folder `/ (root)`.
5. Save. Your site will be live at `https://yourusername.github.io/repository-name/`.

---

## Technologies Used

- HTML5
- CSS3 (Custom + Bootstrap 5)
- JavaScript (Vanilla)
- Bootstrap 5.3
- Font Awesome 6
- LocalStorage API

---

## License

This is a demo/educational project. Free to use and modify for your school.

---

**Developed for Shokat Ali**  
*Quality Education for a Brighter Future*
