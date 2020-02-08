function blur_body() {
    if (document.getElementById("top-menu").checked) {
        document.getElementById('body').className = "blured";
    } else {
        document.getElementById('body').className = "";
    }

}