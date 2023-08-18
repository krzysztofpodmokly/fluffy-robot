import Form from "@/components/Form";
import Resume from "@/components/Resume";

export default async function Home() {
  const data = await fetch('http://localhost:3000/api/content');
  const res = await data.json()

  // flex min-h-screen flex-col items-center justify-between p-24
  return (
    <main className="flex">
      <div className="w-1/2">
        <Form />
      </div>
      <div className="w-1/2">
        <Resume format="A6" />
      </div>
    </main>
  )
}
