import Form from "@/components/Form";

export default async function Home() {
  const data = await fetch('http://localhost:3000/api/content');
  const res = await data.json()

  console.log('data', res)

  // flex min-h-screen flex-col items-center justify-between p-24
  return (
    <main className="flex">
      <div className="w-1/2">
        <Form />
      </div>
      <div className="w-1/2">Resume</div>
    </main>
  )
}
