<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hover Effect</title>
    <style>
        /* Add some basic styling for better visualization */
        #target {
            max-width: 100%;
            height: auto;
            transition: transform 0.3s ease-in-out;
        }

        #trigger {
            cursor: pointer;
        }
    </style>
</head>
<body>

<p id="trigger">Hover over me</p>
<img id="target" src="picA.jpg" alt="Original Image">

<script>
    var triggerElement = document.getElementById("trigger");
    var targetImage = document.getElementById("target");
    function changeImage() {
        targetImage.src = "picB.jpg";
    }
    function revertImage() {
        targetImage.src = "picA.jpg";
    }
    triggerElement.addEventListener("mouseover", changeImage);
    triggerElement.addEventListener("mouseout", revertImage);
</script>

</body>
</html>
