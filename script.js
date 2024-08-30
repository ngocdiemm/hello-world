// Lấy phần tử với id "moreInfoBtn" và gán sự kiện "click" cho nó
document.getElementById("moreInfoBtn").addEventListener("click", function() {
    var moreInfo = document.getElementById("moreInfo");
    // Kiểm tra xem phần tử "moreInfo" có chứa class "hidden" không
    if (moreInfo.classList.contains("hidden")) {
        // Nếu có class "hidden", xóa class đó để hiển thị nội dung
        moreInfo.classList.remove("hidden");
        this.textContent = "Show Less";
    } else {
        // Nếu không có class "hidden", thêm class này vào để ẩn nội dung
        moreInfo.classList.add("hidden");
        this.textContent = "Learn More About Me";
    }
});
