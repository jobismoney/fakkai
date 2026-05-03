import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://ehuegkxeywnsthgdprch.supabase.co'
const supabaseKey = 'sb_publishable_YE1L_O6G2rzKFcOUlTfLGQ_eHfzAISh'

const supabase = createClient(supabaseUrl, supabaseKey)
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-box input");
  const searchButton = document.querySelector(".search-box button");

  searchButton.addEventListener("click", () => {
    const keyword = searchInput.value.trim();

    if (!keyword) {
      alert("กรุณาพิมพ์คำค้นหา");
      return;
    }

    alert(`กำลังค้นหา: ${keyword}`);
  });
});
async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  })

  if (error) {
    alert(error.message)
  } else {
    alert("สมัครสำเร็จ! เช็คอีเมล")
  }
}
window.signUp = signUp;
