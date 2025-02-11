fetch("https://test-store987654.myshopify.com/apps/test-proxy")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("app-container").innerHTML = data.htmlContent;
  })
  .catch((error) => console.error("Error loading proxy content:", error));