const searchInput = document.getElementById("file-name-search");
  const fileCards = document.querySelectorAll(".file-card");

  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    fileCards.forEach((card) => {
      const fileName = card.querySelector(".file-name").textContent.toLowerCase();

      if (fileName.includes(searchText)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
function goBack() {
  window.history.back();
}
