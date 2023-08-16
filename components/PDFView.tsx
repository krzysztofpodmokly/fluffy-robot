import dynamic from "next/dynamic";

const TemplatePDF = dynamic(() => import("./PDF"), {
  loading: () => <p>Loading...</p>,
  ssr: false
})

export default TemplatePDF;