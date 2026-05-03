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
