import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import GroupHoverButton from "./grouphoverbutton"
import CreateIcon from "./authenticate/createicon"
import { RegisterUser } from "@/helper/register"
import InputField from "./form/input"
export function RegisterDialog() {
 
  return (
    <>
    <Dialog>
      <GroupHoverButton
            svg={
                <>
                <DialogTrigger asChild>
                <CreateIcon />
                </DialogTrigger>
              </>
            }
            hovertext={"Sign IN"}
          />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create Account</DialogTitle>
          <DialogDescription>
            Join With Us
          </DialogDescription>
        </DialogHeader>
      <InputField/>
      </DialogContent>
    </Dialog>
    </>
  )
}
