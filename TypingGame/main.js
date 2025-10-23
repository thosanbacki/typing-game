document.addEventListener("DOMContentLoaded", () => {
  // --- Xử lý Đăng ký ---
  if (window.location.pathname.includes("register.html")) {
    const form = document.getElementById("registerForm");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("username").value.trim();
      const pass = document.getElementById("password").value.trim();

      if (!user || !pass) return alert("Vui lòng nhập đầy đủ thông tin!");

      localStorage.setItem("username", user);
      localStorage.setItem("password", pass);
      alert("Đăng ký thành công! Giờ bạn có thể đăng nhập.");
      window.location.href = "login.html";
    });
  }

  // --- Xử lý Đăng nhập ---
  if (window.location.pathname.includes("login.html")) {
    const form = document.getElementById("loginForm");
    form?.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("username").value.trim();
      const pass = document.getElementById("password").value.trim();
      const savedUser = localStorage.getItem("username");
      const savedPass = localStorage.getItem("password");

      if (user === savedUser && pass === savedPass) {
        alert("Đăng nhập thành công!");
        localStorage.setItem("loggedIn", "true");
        window.location.href = "tapgophim.html"; // ✅ Sửa chỗ này
      } else {
        alert("Sai tài khoản hoặc mật khẩu!");
      }
    });
  }

  // --- Kiểm tra trạng thái đăng nhập ở tapgophim.html ---
  if (window.location.pathname.includes("tapgophim.html")) { // ✅ Sửa chỗ này
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn !== "true") {
      alert("Bạn cần đăng nhập trước!");
      window.location.href = "login.html";
    }

    // Nút đăng xuất
    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn?.addEventListener("click", () => {
      if (confirm("Bạn có muốn đăng xuất không?")) {
        localStorage.setItem("loggedIn", "false");
        alert("Đã đăng xuất!");
        window.location.href = "login.html";
      }
    });
  }
});
