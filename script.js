let currentPage = 0;

const pages = document.querySelectorAll(".screen");

function showPage(pageNumber) {
    pages.forEach((page, index) => {
        page.classList.toggle("active", index === pageNumber);
    });
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function restart() {
    currentPage = 0;
    showPage(currentPage);
}

// Make sure the first page is visible
showPage(currentPage);