const Html = ({ body }) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="METER ">
    <meta name="author" content="">

    <title>METER </title>

    <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" as="images"/>
    <link rel="preload" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" as="style" onload="this.rel='stylesheet'" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" />
    <link rel="preload" type="text/css" href="/css/main.css" as="style" onload="this.rel='stylesheet'" />
    <link rel="stylesheet" type="text/css" href="/css/main.css" />

    </head>
    <body>
      <div id="root">${body}</div>
      <script type="text/javascript" src="/js/bundle.js?v=COMMITHASH1"></script>
      </body>
  </html>
`
}

export default Html
