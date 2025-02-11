// app/routes/test.jsx
export default function TestPage() {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>🚀 Test Page</h1>
        <p>This is a test page to check if JS is working.</p>
        <button
          onClick={() => {
            alert("✅ JS is working!");
          }}
          style={{
            padding: "10px 20px",
            background: "#3498db",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
  