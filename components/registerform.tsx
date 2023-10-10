import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import GroupHoverButton from "./grouphoverbutton";
import CreateIcon from "./authenticate/createicon";
import InputField from "./form/input";
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
        <DialogContent className="w-[90%] sm:max-w-[425px]">
          <InputField />
        </DialogContent>
      </Dialog>
    </>
  );
}
