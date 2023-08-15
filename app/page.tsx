
export default async function Home() {
  const data = await fetch('http://localhost:3000/api/content');
  const res = await data.json()

  console.log('data', res)

  // flex min-h-screen flex-col items-center justify-between p-24
  return (
    <main className="columns-2 gap-0">
      <div className="bg-white ">Form</div>
      <div className="bg-stone-400 ">Resume</div>
    </main>
  )
}
