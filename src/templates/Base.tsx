import Html from "@kitajs/html";

export const Base = ({ children }: Html.PropsWithChildren) => (
  <>
    {"<!DOCTYPE html>"}
    <html lang="en">
      <head>
        <script src="/public/js/htmx.min.js"></script>
        <link rel="icon" type="image/jpg" href="/public/favicon.jpg" />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Bun, Elysia, HTMX</title>
      </head>
      <body>${children}</body>
    </html>
  </>
);
