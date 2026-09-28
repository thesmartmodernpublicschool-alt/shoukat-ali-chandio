/* ========================================
   Authentication Module
   Demo Credentials:
   Admin:   admin / admin123
   Teacher: teacher / teacher123
   Student: student / student123
   Parent:  parent / parent123
   ======================================== */

const DEMO_USERS = {
  admin: { username: 'admin', password: 'admin123', role: 'admin', name: 'Shokat Ali', title: 'Administrator' },
  teacher: { username: 'teacher', password: 'teacher123', role: 'teacher', name: 'Mr. Imran Khan', title: 'Teacher', teacherId: 'TCH001' },
  student: { username: 'student', password: 'student123', role: 'student', name: 'Ahmed Khan', title: 'Student', studentId: 'STU001' },
  parent: { username: 'parent', password: 'parent123', role: 'parent', name: 'Muhammad Khan', title: 'Parent', studentId: 'STU001' }
};

function login(username, password, role) {
  const user = DEMO_USERS[role];
  if (!user) {
    return { success: false, message: 'Invalid role' };
  }
  if (username === user.username && password === user.password) {
    const session = {
      username: user.username,
      role: user.role,
      name: user.name,
      title: user.title,
      studentId: user.studentId || null,
      teacherId: user.teacherId || null,
      loginTime: new Date().toISOString()
    };
    localStorage.setItem('session', JSON.stringify(session));
    return { success: true, session };
  }
  return { success: false, message: 'Invalid username or password' };
}

function logout() {
  localStorage.removeItem('session');
  // Redirect based on current path
  const path = window.location.pathname;
  if (path.includes('/admin/')) {
    window.location.href = 'login.html';
  } else if (path.includes('/teacher/')) {
    window.location.href = 'login.html';
  } else if (path.includes('/student/')) {
    window.location.href = 'login.html';
  } else if (path.includes('/parent/')) {
    window.location.href = 'login.html';
  } else {
    window.location.href = 'index.html';
  }
}

function checkAuth(allowedRoles = []) {
  const session = JSON.parse(localStorage.getItem('session') || 'null');
  if (!session) {
    return false;
  }
  if (allowedRoles.length && !allowedRoles.includes(session.role)) {
    return false;
  }
  return session;
}

function redirectIfLoggedIn() {
  const session = JSON.parse(localStorage.getItem('session') || 'null');
  if (session) {
    if (session.role === 'admin') window.location.href = 'dashboard.html';
    else if (session.role === 'teacher') window.location.href = '../teacher/dashboard.html';
    else if (session.role === 'student') window.location.href = '../student/dashboard.html';
    else if (session.role === 'parent') window.location.href = '../parent/dashboard.html';
  }
}

// Handle login form
function handleLoginForm(formId, role, redirectUrl) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = form.querySelector('[name="username"]').value.trim();
    const password = form.querySelector('[name="password"]').value;
    const result = login(username, password, role);
    if (result.success) {
      showToast('Login successful! Redirecting...', 'success');
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 800);
    } else {
      showToast(result.message || 'Login failed', 'error');
    }
  });
}