import "./App.css";

function App() {
  const handlerMessage = () => {
    const urlWebhook =
      "https://discord.com/api/webhooks/830828807836925972/EsUEXNVESi8Xzi3e0W43pbMCTKg63XVItS96I1lJmPqvuSUPLJldt49q1dhJ8pvBoH7h";

    const msg = {
      content: "Hola soy un bot",
    };

    fetch(urlWebhook + "?wait=true", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(msg),
    })
      .then((a) => a.json())
      .then(console.log);
  };

  return (
    <div>
      <button
        onClick={() => {
          handlerMessage();
          console.log("enviado");
        }}
      >
        Send Message
      </button>
    </div>
  );
}

export default App;
