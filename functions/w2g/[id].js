// this is a bit scuffed, but these are cf pages redirect functions

/** @type {PagesFunction} */
export function onRequest ({ params }) {
  try {
    const id = params.id
    const html = /* html */`
<!DOCTYPE html>
<html style=background:#000>
  <head>
    <meta http-equiv=refresh content="5; url=https://techterra.x10.mx">
    <meta property="og:title" content="Watch Together">
    <meta property="og:description" content="Instala Minecraft, Java, Forge y los mods del servidor con facilidad.">
    <meta property="og:site_name" content="ZLauncher">
    <meta property="og:image" content=http://techterra.x10.mx/minecraft_title.png>
    <meta property="og:url" content=migu://w2g/${id}>
    <meta data-vmid="twitter:card" name="twitter:card" content="summary_large_image">
    <meta name="theme-color" content="#17191C">
  </head>
  <body>
    <iframe src=migu://w2g/${id} style=border:none></iframe>Redirecting...
  </body>
</html>`

    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8'
      }
    })
  } catch (e) {
    return Response.redirect('https://techterra.x10.mx/')
  }
}
