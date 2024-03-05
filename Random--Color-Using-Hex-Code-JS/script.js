// function colors() {
//     const randomNumber = Math.floor(Math.random()*16,777,216)
//     const randomHexCode = "#"+randomNumber.toString(16)
//     document.body.style.backgroundColor = randomHexCode;
//     document.getElementById("color-code").innerText = randomHexCode;
// }

// document.getElementById("btn").addEventListener(
//     "click",
//     colors()
// )

// colors()

const getColor = () => {
    // Hex Code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode)
}

//event call
document.getElementById("btn").addEventListener(
    "click",
    getColor
)


// init call
getColor();