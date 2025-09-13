export default function GlobalNotFound() {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold">404</h1>
            <p className="mt-2">Page not found</p>
            <a
              href="/"
              className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded"
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
