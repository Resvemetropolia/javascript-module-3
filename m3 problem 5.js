<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>
    <style>
        /* Add some basic styling for better visualization */
        .card {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px;
        }

        img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>

<section id="target"></section>

<script>
    // Sample array of data
    var picArray = [
        {
            title: "Title 1",
            medium_image: "path/to/image1.jpg",
            caption: "Caption for Image 1",
            description: "Description for Image 1"
        },
        {
            title: "Title 2",
            medium_image: "path/to/image2.jpg",
            caption: "Caption for Image 2",
            description: "Description for Image 2"
        },
        // Add more data as needed
    ];
    var targetElement = document.getElementById("target");
    for (var i = 0; i < picArray.length; i++) {
        var articleElement = document.createElement("article");
        articleElement.classList.add("card");
        var headingElement = document.createElement("h2");
        headingElement.textContent = picArray[i].title;
        articleElement.appendChild(headingElement);
        var figureElement = document.createElement("figure");
        var imageElement = document.createElement("img");
        imageElement.src = picArray[i].medium_image;
        imageElement.alt = picArray[i].title;
        figureElement.appendChild(imageElement);
        var figcaptionElement = document.createElement("figcaption");
        figcaptionElement.textContent = picArray[i].caption;
        figureElement.appendChild(figcaptionElement);
        articleElement.appendChild(figureElement);

        var descriptionElement = document.createElement("p");
        descriptionElement.textContent = picArray[i].description;
        articleElement.appendChild(descriptionElement);

        targetElement.appendChild(articleElement);
    }
</script>

</body>
</html>
