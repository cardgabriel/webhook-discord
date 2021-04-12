function App() {
  const handlerMessageDiscord = () => {
    const urlWebhook =
      "https://discord.com/api/webhooks/830828807836925972/EsUEXNVESi8Xzi3e0W43pbMCTKg63XVItS96I1lJmPqvuSUPLJldt49q1dhJ8pvBoH7h";
    const msg = {
      content: "Hola soy un bot de Discord",
    };
    fetch(urlWebhook + "?wait=true", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(msg),
    })
      .then((a) => a.json())
      .then(console.log);
  };

  const handlerMessageSlack = () => {
    const urlWebhook =
      "https://hooks.slack.com/services/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";
    const msg = {
      text: "Hola soy un bot de Slack",
    };
    fetch(urlWebhook, {
      method: "POST",
      body: JSON.stringify(msg),
    })
      .then((a) => a.json())
      .then(console.log);
  };

  return (
    <div>
      <button
        onClick={() => {
          handlerMessageDiscord();
        }}
      >
        Send Message Discord
      </button>
      <button
        onClick={() => {
          handlerMessageSlack();
        }}
      >
        Send Message Slack
      </button>
    </div>
  );
}

export default App;
