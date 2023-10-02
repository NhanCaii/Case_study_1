const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const result = document.getElementById("result");

// Danh sách tên và đường link tương ứng
const data = [
    { name: "Google", link: "https://www.google.com" },
    { name: "Facebook", link: "https://www.facebook.com" },
    { name: "Twitter", link: "https://www.twitter.com" }
];

// Xử lý sự kiện tìm kiếm khi nhấn Enter
searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        handleSearch();
    }
});

// Xử lý sự kiện khi nhấn nút "Tìm kiếm"
searchButton.addEventListener("click", handleSearch);

// Xử lý tìm kiếm và chuyển hướng
function handleSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    result.innerHTML = ""; // Xóa kết quả trước đó

    // Tìm trong danh sách dựa trên tên
    const foundItem = data.find(item => item.name.toLowerCase() === searchTerm);

    if (foundItem) {
        // Nếu tìm thấy, chuyển hướng đến đường link tương ứng
        window.location.href = foundItem.link;
    } else {
        result.innerHTML = "Không tìm thấy kết quả.";
    }
}
