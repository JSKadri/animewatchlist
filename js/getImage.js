// Set Default Image Background
var imgUrl = "/images/default-bg.jpg";
document.querySelector('.background').style.setProperty('--bgImage', "url('" + imgUrl + "')");

var allText;
var response;
const myArray = [];
var randomImage = ""

function imageStatus(imageURL, callback) {
    // create a new Image object
    let img = new Image();

    // set the src attribute to the URL of the image you want to check
    img.src = imageURL;

    // when the image has finished loading, set callback to true
    img.onload = function() {
        callback(true)
    };
    
    // when the image fails to load, set callback to false
    img.onerror = function() {
        callback(false)
    };
}

// Gets all the lines in the URL File
function grabLines(text) {
    var num = 0;
    var test = "";
    for(var i = 0; i < text.length; i++) {
        test = test.concat(text[i]);
        if(text[i] == '\n') {
            myArray[num] = test;
            test = '';
            num+=1;
        }
    }
    return myArray
}

// Grabs all the text in a file
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
}

// read the contents of the text file and split it into an array of image URLs
readTextFile("/pythonScript/urls.txt");

var imageList = allText;
const urlArray = grabLines(imageList);
var count = urlArray.length;

// set a timer to update the background image every 10 seconds
setInterval(function() {
    // choose a new random image
    var num = Math.floor(Math.random() * count);
    randomImage = urlArray[num];
    
    // check if the image is accessible
    imageStatus(randomImage, function(isAccessible) {
        console.log("Test: "+isAccessible)
        if (isAccessible) {
            // Remove line breaks
            randomImage = randomImage.replace(/(\r\n|\n|\r)/gm, "");

            // create a string for the URL of the new background image
            var bg = "url('" + randomImage + "')";
            let background = document.querySelector('.background');
            
            // fade out the current background image
            background.style.setProperty('--trans', '0.5s');
            //background.style.setProperty('--opp', '0'); Don't need this

            // update the background image when the fade-out is complete
            setTimeout(function() {
                background.style.setProperty('--bgImage', bg);
                background.style.setProperty('--opp', '1');
            }, 100);
        }
    });
}, 5000);