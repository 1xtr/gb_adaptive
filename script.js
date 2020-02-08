function blur_body() {
    let blur = document.getElementById('blur').className;
    if (blur == "blur_active") {
        blur = "blur";
    } else {
        blur += "_active";
    }
    console.log(blur);
}