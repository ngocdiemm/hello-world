document.getElementById("moreInfoBtn").addEventListener("click", function() {
    var moreInfo = document.getElementById("moreInfo");
    if (moreInfo.classList.contains("hidden")) {
        moreInfo.classList.remove("hidden");
        this.textContent = "Show Less";
    } else {
        moreInfo.classList.add("hidden");
        this.textContent = "Learn More About Me";
    }
});