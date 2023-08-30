import Form from "@/components/form/Form";
import ResumeWrapper from "@/components/resume/ResumeWrapper";


export default async function Home() {
  const data = await fetch('http://localhost:3000/api/content');
  const res = await data.json()

  return (
    <main className="flex">
      <div className="w-1/2">
        <Form />
      </div>
      <div className="w-1/2 fixed right-0">
        <ResumeWrapper format="A6" isPreview />
      </div>
    </main>
  )
}
