function login(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const BASE_URL =
    window.location.hostname === "localhost"
      ? "http://localhost:5000"
      : "https://real-time-seven.vercel.app/";
  fetch(`${BASE_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("تم تسجيل الدخول بنجاح!");
        window.location.href = "./groupChat";
      } else {
        alert("خطأ في تسجيل الدخول!");
      }
    })
    .catch((error) => console.error("Error:", error));
}
