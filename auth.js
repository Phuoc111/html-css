// Lưu user mới vào localStorage
function saveUser(username, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Kiểm tra username đã tồn tại chưa
    const exists = users.some(user => user.username === username);
    if (exists) {
      alert("Tên đăng nhập đã tồn tại!");
      return false;
    }
  
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  }
  
  // Kiểm tra user khi đăng nhập
  function checkLogin(username, password) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    return users.some(user => user.username === username && user.password === password);
  }
  
  // Gọi khi nhấn nút "Đăng ký"
  function register() {
    const username = document.getElementById("reg-username").value;
    const password = document.getElementById("reg-password").value;
  
    if (!username || !password) {
      alert("Vui lòng nhập đủ tên đăng nhập và mật khẩu.");
      return;
    }
  
    const success = saveUser(username, password);
    if (success) {
      alert("Đăng ký thành công!");
      window.location.href = "login.html";
    }
  }
  
  // Gọi khi nhấn nút "Đăng nhập"
  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const valid = checkLogin(username, password);
    if (valid) {
      alert("Đăng nhập thành công!");
      window.location.href = "index.html"; // chuyển vào game
    } else {
      alert("Sai tên đăng nhập hoặc mật khẩu.");
    }
  }
  