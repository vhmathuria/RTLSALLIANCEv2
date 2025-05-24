export default function TestDeploy() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Deployment Test</h1>
      <p>If you can see this page, the deployment worked!</p>

      <div className="mt-4">
        <a
          href="/api/test-db-simple"
          className="bg-blue-500 text-white px-4 py-2 rounded inline-block"
          target="_blank"
          rel="noreferrer"
        >
          Test API Route
        </a>
      </div>
    </div>
  )
}
