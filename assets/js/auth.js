import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://ehuegkxeywnsthgdprch.supabase.co'
const supabaseKey = 'sb_publishable_YE1L_O6G2rzKFcOUlTfLGQ_eHfzAISh'

const supabase = createClient(supabaseUrl, supabaseKey)

const showLogin = document.getElementById("showLogin");
const showRegister = document.getElementById("showRegister");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

showLogin.addEventListener("click", () => {
  loginForm.classList.remove("hidden");
  registerForm.classList.add("hidden");
  showLogin.classList.add("active");
  showRegister.classList.remove("active");
});

showRegister.addEventListener("click", () => {
  registerForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  showRegister.classList.add("active");
  showLogin.classList.remove("active");
});

registerForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;

  const { error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    alert("สมัครไม่สำเร็จ: " + error.message);
    return;
  }

  alert("สมัครสำเร็จ! กรุณาเช็คอีเมลเพื่อยืนยันบัญชี");
});

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert("เข้าสู่ระบบไม่สำเร็จ: " + error.message);
    return;
  }

  alert("เข้าสู่ระบบสำเร็จ");
  window.location.href = "./index.html";
});
