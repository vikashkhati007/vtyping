import React, { HtmlHTMLAttributes, MouseEventHandler } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogFooter } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { RegisterUser } from "@/helper/register";

const InputField = () => {

  async function formHandler(formData: FormData & any) {
    "use server";
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    }
    console.log(data);
    RegisterUser(data);
    };


  return (
    <>
    <form action={formHandler}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input
            name="username"
            placeholder={"username"}
            className="col-span-3"
          />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Password
          </Label>
          <Input
            name="password"
            placeholder={"password"}
            className="col-span-3"
          />
        </div>
      </div>
      <DialogFooter>
          <Button onClick={formHandler} type="submit">SUBMIT</Button>
        </DialogFooter>
      </form>
    </>
  );
};

export default InputField;
