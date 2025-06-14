// Xử lý đăng ký
document.getElementById("registerForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
    alert("Đăng ký thành công!");
    location.href = "login.html";
  });
  
  // Xử lý đăng nhập
  document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;
    if (
      user === localStorage.getItem("user") &&
      pass === localStorage.getItem("pass")
    ) {
      alert("Đăng nhập thành công!");
      location.href = "index.html";
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  });
  