import { json } from "@remix-run/node";
export async function loader({ request }) {
  const url = new URL(request.url);
  // Extract Shopify store & HMAC for security verification
  const shop = url.searchParams.get("shop");
  const hmac = url.searchParams.get("hmac");
  // TODO: Verify HMAC (Security Step - Required in production)
  return json({
    htmlContent: `
      <div>
        <h2>App Proxy Test Page</h2>
        <p>This content is loaded via Shopify App Proxy.</p>
        <div id="data-container"></div>
        <script>
          fetch("/api/data") // Load additional data dynamically
          .then(response => response.json())
          .then(data => {
            document.getElementById("data-container").innerHTML = "<strong>" + data.message + "</strong>";
          })
          .catch(error => console.error("Error:", error));
        </script>
      </div>
    `,
  });
}












