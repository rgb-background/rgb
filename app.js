window.addEventListener('resize', windowChanged);
addEventListener("selectstart", event => event.preventDefault());

document.onkeydown = function(e) {
    //s key: swap to inverse color
    //r key: random color
    if (e.key == "s") {
        let r = 255 - document.getElementById("redRange").value
        let g = 255 - document.getElementById("greenRange").value
        let b = 255 - document.getElementById("blueRange").value
        document.getElementById("redRange").value = r
        document.getElementById("greenRange").value = g
        document.getElementById("blueRange").value = b
        sliderChange()
    }
    if (e.key == "r") {
        let r = Math.floor(Math.random() * 256)
        let g = Math.floor(Math.random() * 256)
        let b = Math.floor(Math.random() * 256)
        document.getElementById("redRange").value = r
        document.getElementById("greenRange").value = g
        document.getElementById("blueRange").value = b
        sliderChange()
    }
}

function windowChanged() {
    let number = window.innerHeight/2
    if (number > 20) {
        number -= 70
    }
    document.body.style.marginTop = number.toString() + "px"
}

function sliderChange() {
    let redValue = document.getElementById("redRange").value
    let greenValue = document.getElementById("greenRange").value
    let blueValue = document.getElementById("blueRange").value
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
    let redValue = document.getElementById("redNumber").value
    let greenValue = document.getElementById("greenNumber").value
    let blueValue = document.getElementById("blueNumber").value
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
    document.getElementById("inverse_color").style.color = "rgb("+(255-r)+","+(255-g)+","+(255-b)+")";
    document.getElementById("inverse_color").innerHTML = rgbToHex(r, g, b)
}

function rgbToHex(r, g, b) {
    let r16 = r/16
    let g16 = g/16
    let b16 = b/16
    let rInHex = hex_value(Math.floor(r16)) + hex_value(((r16)-Math.floor(r16))*16)
    let gInHex = hex_value(Math.floor(g16)) + hex_value(((g16)-Math.floor(g16))*16)
    let bInHex = hex_value(Math.floor(b16)) + hex_value(((b16)-Math.floor(b16))*16)
    let final_hex = "#" + rInHex + gInHex + bInHex
    return(final_hex)
}

function hex_value(number) {
    let numberToHexDict = {0: "0", 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "A", 11: "B", 12: "C",
     13: "D", 14: "E", 15: "F"}
    return(numberToHexDict[number])
}

function pageLoaded() {
    windowChanged()
    sliderChange()
}
