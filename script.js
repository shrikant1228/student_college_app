document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-list a");
  const bookSearchInput = document.getElementById("book-search");
  const bookItems = document.querySelectorAll(".book-list li");
  const uploadInput = document.getElementById("upload-resource");
  const uploadStatus = document.createElement("p");
  uploadStatus.className = "status-note";

  if (uploadInput && uploadInput.parentNode) {
    uploadInput.parentNode.appendChild(uploadStatus);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((item) => item.classList.remove("active"));
      this.classList.add("active");
    });
  });

  function filterBooks() {
    if (!bookSearchInput || !bookItems.length) return;

    const query = bookSearchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    bookItems.forEach((item) => {
      const text = item.textContent.toLowerCase();
      const match = text.includes(query);
      item.style.display = match ? "block" : "none";
      if (match) visibleCount += 1;
    });

    if (query === "") {
      uploadStatus.textContent = "Search books by title, author, or ISBN.";
    } else if (visibleCount > 0) {
      uploadStatus.textContent = `${visibleCount} book(s) found.`;
    } else {
      uploadStatus.textContent = "No matching books found.";
    }
  }

  if (bookSearchInput) {
    bookSearchInput.addEventListener("input", filterBooks);
  }

  if (uploadInput) {
    uploadInput.addEventListener("change", function () {
      const fileName = this.files.length ? this.files[0].name : "No file selected";
      uploadStatus.textContent = `Selected file: ${fileName}`;
    });
  }

  const loginBtn = document.getElementById("login-button");
  const signupBtn = document.getElementById("signup-button");
  const complaintBtn = document.getElementById("complaint-submit");
  const feedbackBtn = document.getElementById("mess-feedback");
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");

  function showToast(message) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.right = "1rem";
    toast.style.bottom = "1rem";
    toast.style.padding = "14px 18px";
    toast.style.background = "rgba(44, 62, 80, 0.95)";
    toast.style.color = "#fff";
    toast.style.borderRadius = "14px";
    toast.style.boxShadow = "0 12px 30px rgba(0, 0, 0, 0.18)";
    toast.style.zIndex = "999";
    document.body.appendChild(toast);
    setTimeout(() => document.body.removeChild(toast), 2500);
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", function (event) {
      event.preventDefault();
      showToast("Opening login page...");
      window.location.href = "login.html";
    });
  }

  if (signupBtn) {
    signupBtn.addEventListener("click", function (event) {
      event.preventDefault();
      showToast("Opening signup page...");
      window.location.href = "signup.html";
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      showToast("Login successful. Redirecting...");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 700);
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      showToast("Account created. Redirecting to login...");
      setTimeout(() => {
        window.location.href = "login.html";
      }, 700);
    });
  }

  if (complaintBtn) {
    complaintBtn.addEventListener("click", function (event) {
      event.preventDefault();
      showToast("Hostel complaint submitted.");
    });
  }

  if (feedbackBtn) {
    feedbackBtn.addEventListener("click", function (event) {
      event.preventDefault();
      showToast("Mess feedback recorded.");
    });
  }
});