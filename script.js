function openTab(evt, memberName) {
    var i, tabcontent, tablinks;
    
    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    
    // Show the current tab
    document.getElementById(memberName).style.display = "block";
    
    // Add an active class to the button that opened the tab
    evt.currentTarget.style.backgroundColor = "#ccc";
}

function toggleInfo(infoId) {
    var info = document.getElementById(infoId);
    if (info.style.display === "none" || info.style.display === "") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
}

// Open the first tab by default
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tablink").click();
});
