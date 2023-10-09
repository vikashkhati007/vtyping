import Footer from "@/components/footer"
import Header from "@/components/header"
import TextArea from "@/components/textarea"
import { Separator } from "@/components/ui/separator"

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-3">
      <Header/>
      <Separator/>
      <TextArea/>
      <Footer/>
    </div>
  )
}

export default page
