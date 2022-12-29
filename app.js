window.addEventListener('resize', windowChanged);
addEventListener("selectstart", event => event.preventDefault());

function windowChanged() {
    number = window.innerHeight/2
    if (number > 20) {
        number -= 35
    }
    document.body.style.marginTop = number.toString() + "px"
}

function sliderChange() {
    redValue = document.getElementById("redRange").value
    greenValue = document.getElementById("greenRange").value
    blueValue = document.getElementById("blueRange").value
    console.log(redValue, greenValue, blueValue)
    document.getElementById("redNumber").value = parseInt(redValue)
    document.getElementById("greenNumber").value = parseInt(greenValue)
    document.getElementById("blueNumber").value = parseInt(blueValue)
    document.getElementById("redRange").value = parseInt(redValue)
    document.getElementById("greenRange").value = parseInt(greenValue)
    document.getElementById("blueRange").value = parseInt(blueValue)
    changeColor(redValue, greenValue, blueValue)
}

function numberChange() {
    redValue = document.getElementById("redNumber").value
    greenValue = document.getElementById("greenNumber").value
    blueValue = document.getElementById("blueNumber").value
    if (redValue < 0 || redValue=="") {
        redValue = 0
        document.getElementById("redNumber").value = redValue
       }
       else if (redValue > 255) {
        redValue = Number(redValue.toString().slice(0, -1))
        if (redValue < 255) {
            document.getElementById("redNumber").value = redValue
        }
        else {
            redValue = 255
            document.getElementById("redNumber").value = redValue
        }
       }
       if (greenValue < 0 || greenValue=="") {
        greenValue = 0
        document.getElementById("greenNumber").value = greenValue
       }
       else if (greenValue > 255) {
        greenValue = Number(greenValue.toString().slice(0, -1))
        if (greenValue < 255) {
            document.getElementById("greenNumber").value = greenValue
        }
        else {
            greenValue = 255
            document.getElementById("greenNumber").value = greenValue
        }
       }
       if (blueValue < 0 || blueValue=="") {
        blueValue = 0
        document.getElementById("blueNumber").value = blueValue
       }
       else if (blueValue > 255) {
        blueValue = Number(blueValue.toString().slice(0, -1))
        if (blueValue < 255) {
            document.getElementById("blueNumber").value = blueValue
        }
        else {
            blueValue = 255
            document.getElementById("blueNumber").value = blueValue
        }
       }
        document.getElementById("redRange").value = parseInt(redValue)
        document.getElementById("greenRange").value = parseInt(greenValue)
        document.getElementById("blueRange").value = parseInt(blueValue)
        document.getElementById("redNumber").value = parseInt(redValue)
        document.getElementById("greenNumber").value = parseInt(greenValue)
        document.getElementById("blueNumber").value = parseInt(blueValue)
        changeColor(redValue, greenValue, blueValue)
}

function changeColor(r, g, b) {
    document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}
