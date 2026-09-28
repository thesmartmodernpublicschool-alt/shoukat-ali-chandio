/* ========================================
   Shokat Ali Public School - Main JS
   ======================================== */

// Initialize demo data on first load
function initDemoData() {
  if (!localStorage.getItem('school_initialized')) {
    // Students
    const students = [
      { id: 'STU001', name: 'Ahmed Khan', fatherName: 'Muhammad Khan', dob: '2012-05-15', gender: 'Male', class: '8', section: 'A', rollNo: '01', phone: '03001234567', address: 'Lahore, Pakistan', admissionDate: '2023-04-01', photo: '' },
      { id: 'STU002', name: 'Fatima Ali', fatherName: 'Ali Hassan', dob: '2013-08-22', gender: 'Female', class: '7', section: 'B', rollNo: '05', phone: '03009876543', address: 'Karachi, Pakistan', admissionDate: '2023-04-01', photo: '' },
      { id: 'STU003', name: 'Usman Raza', fatherName: 'Raza Ahmed', dob: '2011-03-10', gender: 'Male', class: '9', section: 'A', rollNo: '12', phone: '03111234567', address: 'Islamabad, Pakistan', admissionDate: '2022-04-01', photo: '' },
      { id: 'STU004', name: 'Ayesha Malik', fatherName: 'Malik Hussain', dob: '2014-11-05', gender: 'Female', class: '6', section: 'A', rollNo: '08', phone: '03219876543', address: 'Rawalpindi, Pakistan', admissionDate: '2024-04-01', photo: '' },
      { id: 'STU005', name: 'Bilal Ahmed', fatherName: 'Ahmed Shah', dob: '2010-07-18', gender: 'Male', class: '10', section: 'B', rollNo: '03', phone: '03331234567', address: 'Faisalabad, Pakistan', admissionDate: '2021-04-01', photo: '' }
    ];
    localStorage.setItem('students', JSON.stringify(students));

    // Teachers
    const teachers = [
      { id: 'TCH001', name: 'Mr. Imran Khan', subject: 'Mathematics', classes: '8,9,10', phone: '03001112233', email: 'imran@school.pk', address: 'Lahore', joinDate: '2020-03-01' },
      { id: 'TCH002', name: 'Ms. Sara Ahmed', subject: 'English', classes: '6,7,8', phone: '03004445566', email: 'sara@school.pk', address: 'Lahore', joinDate: '2019-08-15' },
      { id: 'TCH003', name: 'Mr. Ali Raza', subject: 'Science', classes: '9,10', phone: '03007778899', email: 'ali@school.pk', address: 'Lahore', joinDate: '2021-01-10' },
      { id: 'TCH004', name: 'Ms. Nadia Malik', subject: 'Urdu', classes: '6,7', phone: '03112223344', email: 'nadia@school.pk', address: 'Lahore', joinDate: '2022-04-01' }
    ];
    localStorage.setItem('teachers', JSON.stringify(teachers));

    // Classes
    localStorage.setItem('classes', JSON.stringify(['6', '7', '8', '9', '10']));

    // Admissions (pending)
    const admissions = [
      { appNo: 'APP2025001', studentName: 'Hassan Ali', fatherName: 'Ali Akbar', motherName: 'Fatima Bibi', dob: '2013-02-14', gender: 'Male', classApplying: '7', previousSchool: 'City School', address: 'Multan', phone: '03005556677', email: 'hassan@email.com', status: 'Pending', date: '2025-03-10' }
    ];
    localStorage.setItem('admissions', JSON.stringify(admissions));

    // Fees
    const fees = [
      { id: 'FEE001', studentId: 'STU001', studentName: 'Ahmed Khan', class: '8', month: 'March 2025', amount: 5000, paid: 5000, status: 'Paid', date: '2025-03-05' },
      { id: 'FEE002', studentId: 'STU002', studentName: 'Fatima Ali', class: '7', month: 'March 2025', amount: 4500, paid: 0, status: 'Pending', date: '' },
      { id: 'FEE003', studentId: 'STU003', studentName: 'Usman Raza', class: '9', month: 'March 2025', amount: 5500, paid: 5500, status: 'Paid', date: '2025-03-08' },
      { id: 'FEE004', studentId: 'STU004', studentName: 'Ayesha Malik', class: '6', month: 'March 2025', amount: 4000, paid: 2000, status: 'Partial', date: '2025-03-12' },
      { id: 'FEE005', studentId: 'STU005', studentName: 'Bilal Ahmed', class: '10', month: 'March 2025', amount: 6000, paid: 0, status: 'Pending', date: '' }
    ];
    localStorage.setItem('fees', JSON.stringify(fees));

    // Notices
    const notices = [
      { id: 1, title: 'Mid-Term Examinations Schedule', content: 'Mid-term exams will commence from 15th April 2025. Students are advised to prepare accordingly.', date: '2025-03-20', published: true },
      { id: 2, title: 'Parent-Teacher Meeting', content: 'PTM will be held on 5th April 2025 from 10:00 AM to 1:00 PM. All parents are requested to attend.', date: '2025-03-18', published: true },
      { id: 3, title: 'Annual Sports Day', content: 'Annual Sports Day will be celebrated on 25th April 2025. Students interested in participating should register with their class teachers.', date: '2025-03-15', published: true }
    ];
    localStorage.setItem('notices', JSON.stringify(notices));

    // Events
    const events = [
      { id: 1, title: 'Annual Day Celebration', date: '2025-05-10', description: 'Join us for a day of performances, awards and fun!', image: '' },
      { id: 2, title: 'Science Exhibition', date: '2025-04-20', description: 'Students will showcase their innovative science projects.', image: '' },
      { id: 3, title: 'Independence Day Ceremony', date: '2025-08-14', description: 'Flag hoisting and cultural program to celebrate Independence Day.', image: '' }
    ];
    localStorage.setItem('events', JSON.stringify(events));

    // Attendance sample
    const attendance = [
      { date: '2025-03-25', class: '8', records: { 'STU001': 'Present' } },
      { date: '2025-03-26', class: '8', records: { 'STU001': 'Present' } }
    ];
    localStorage.setItem('attendance', JSON.stringify(attendance));

    // Results sample
    const results = [
      { studentId: 'STU001', exam: 'Mid Term 2025', subjects: [
        { name: 'Mathematics', marks: 85, total: 100 },
        { name: 'English', marks: 78, total: 100 },
        { name: 'Science', marks: 92, total: 100 },
        { name: 'Urdu', marks: 88, total: 100 },
        { name: 'Islamiyat', marks: 90, total: 100 }
      ] }
    ];
    localStorage.setItem('results', JSON.stringify(results));

    // Timetable
    const timetable = [
      { class: '8', day: 'Monday', periods: [
        { subject: 'Mathematics', teacher: 'Mr. Imran Khan', start: '08:00', end: '08:45' },
        { subject: 'English', teacher: 'Ms. Sara Ahmed', start: '08:45', end: '09:30' },
        { subject: 'Science', teacher: 'Mr. Ali Raza', start: '09:45', end: '10:30' }
      ]},
      { class: '8', day: 'Tuesday', periods: [
        { subject: 'Urdu', teacher: 'Ms. Nadia Malik', start: '08:00', end: '08:45' },
        { subject: 'Mathematics', teacher: 'Mr. Imran Khan', start: '08:45', end: '09:30' }
      ]}
    ];
    localStorage.setItem('timetable', JSON.stringify(timetable));

    // Gallery (placeholder categories)
    localStorage.setItem('gallery', JSON.stringify([
      { id: 1, category: 'Building', title: 'School Building', url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400' },
      { id: 2, category: 'Classroom', title: 'Modern Classroom', url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=400' },
      { id: 3, category: 'Sports', title: 'Sports Day', url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba6851?w=400' },
      { id: 4, category: 'Events', title: 'Annual Function', url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400' },
      { id: 5, category: 'Students', title: 'Students in Library', url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400' },
      { id: 6, category: 'Teachers', title: 'Teaching Staff', url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400' }
    ]));

    localStorage.setItem('school_initialized', 'true');
  }
}

// Toast notification
function showToast(message, type = 'success') {
  const container = document.querySelector('.toast-container') || createToastContainer();
  const toastId = 'toast-' + Date.now();
  const bg = type === 'success' ? 'bg-success' : type === 'error' ? 'bg-danger' : 'bg-warning';
  const html = `
    <div id="${toastId}" class="toast align-items-center text-white ${bg} border-0 show" role="alert">
      <div class="d-flex">
        <div class="toast-body">${message}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
      </div>
    </div>`;
  container.insertAdjacentHTML('beforeend', html);
  setTimeout(() => {
    const el = document.getElementById(toastId);
    if (el) el.remove();
  }, 3500);
}

function createToastContainer() {
  const div = document.createElement('div');
  div.className = 'toast-container';
  document.body.appendChild(div);
  return div;
}

// Format date
function formatDate(dateStr) {
  if (!dateStr) return '-';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-PK', { year: 'numeric', month: 'short', day: 'numeric' });
}

// Generate ID
function generateId(prefix) {
  return prefix + Date.now().toString().slice(-6);
}

// Confirm delete
function confirmDelete(message = 'Are you sure you want to delete this?') {
  return confirm(message);
}

// Get current user session
function getSession() {
  return JSON.parse(localStorage.getItem('session') || 'null');
}

function setSession(user) {
  localStorage.setItem('session', JSON.stringify(user));
}

function clearSession() {
  localStorage.removeItem('session');
}

function requireAuth(roles = []) {
  const session = getSession();
  if (!session) {
    window.location.href = '../admin/login.html';
    return null;
  }
  if (roles.length && !roles.includes(session.role)) {
    showToast('Access denied', 'error');
    window.location.href = '../admin/login.html';
    return null;
  }
  return session;
}

// Sidebar toggle for mobile
function toggleSidebar() {
  document.querySelector('.sidebar')?.classList.toggle('show');
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  initDemoData();
});