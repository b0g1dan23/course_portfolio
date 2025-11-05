"use client";

import { handleFreebie } from "@/actions/handleFreebieForm";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

const FreebieForm = () => {
  const [state, action, pending] = useActionState(handleFreebie, null);

  useEffect(() => {
    if (state === null) return;

    if (state.success) {
      toast.success("Freebie sent to your email!");
      return;
    }
    if (state.error) {
      toast.error(state.error);
      return;
    }
  }, [state]);

  return (
    <form className="flex gap-[1.2rem] flex-col" action={action}>
      <div className="">
        <div className="flex gap-[1.6rem] max-md:flex-col">
          <input
            type="email"
            name="email"
            id="input-email"
            className="p-[1.6rem]! flex-1 rounded-[.4rem] border border-(--primary-600)"
            placeholder="Enter your email address"
          />
          <Button variant="gradient" type="submit">
            {pending ? "Sending freebie..." : "Get your freebie"}
          </Button>
        </div>
      </div>
      <p className="text-[1.2rem]">
        By clicking Sign Up you're confirming that you agree with our{" "}
        <Link href="/terms">Terms and Conditions</Link>.
      </p>
    </form>
  );
};
export default FreebieForm;
