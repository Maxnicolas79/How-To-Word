let currentPageIndex = 1;

function showPage(currentPageIndex, direction) {
  const currentPage = document.getElementById(`P${currentPageIndex}`);
  const nextPageIndex =
    direction === "next" ? currentPageIndex + 1 : currentPageIndex - 1;
  const nextPage = document.getElementById(`P${nextPageIndex}`);

  if (currentPage && nextPage) {
    currentPage.classList.add("hidden");
    nextPage.classList.remove("hidden");
    return nextPageIndex;
  }

  return currentPageIndex;
}

function navigate(direction) {
  currentPageIndex = showPage(currentPageIndex, direction);
}

navigate("next");
navigate("back");
