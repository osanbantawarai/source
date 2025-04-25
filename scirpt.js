function onLogin() {
  const un = document.querySelector(".username");
  const pw = document.querySelector(".password");
  console.log(
    "Login called",
    "username is:",
    un.value,
    ", password is:",
    pw.value
  );
  const data =
    un.value == "" || pw.value == ""
      ? alert("Please enter username and password")
      : alert("Login successful");
}

function onRegister() {
  const un = document.querySelector(".username");
  const el = document.querySelector(".email");
  const pw = document.querySelector(".password");
  const cpw = document.querySelector(".c-password");
  const data =
    un.value == "" || el.value == "" || pw.value == "" || cpw.value == ""
      ? alert("Please enter all fields")
      : alert("Registration successful, welcome to login")((window.location.href = "index.html"));
}
