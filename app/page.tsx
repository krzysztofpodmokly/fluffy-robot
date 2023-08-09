import AuthCheck from "@/components/AuthCheck";

export default async function Home() {
  const data = await fetch('http://localhost:3000/api/content');
  const res = await data.json()

  console.log('data', res)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Test

      <AuthCheck>
        aasdas
      </AuthCheck>
    </main>
  )
}
