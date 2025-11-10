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
            required
          />
          <Button variant="gradient" type="submit" className="max-md:w-full">
            {pending ? "Sending freebie..." : "Get your freebie"}
          </Button>
        </div>
      </div>

      {/* GDPR Consent */}
      <div className="flex flex-col gap-[1.2rem]">
        <label className="flex items-start gap-[1.2rem] cursor-pointer">
          <input
            type="checkbox"
            name="gdpr_consent"
            required
            className="w-6 h-6 accent-(--primary-400) cursor-pointer shrink-0"
          />
          <span className="text-[1.2rem]">
            I agree to receive the freebie and understand my data will be processed according to the{" "}
            <Link href="/privacy-policy" className="text-(--primary-400) hover:underline">
              Privacy Policy
            </Link>. *
          </span>
        </label>

        <label className="flex items-start gap-[1.2rem] cursor-pointer">
          <input
            type="checkbox"
            name="newsletter_consent"
            className="w-6 h-6 accent-(--primary-400) cursor-pointer shrink-0"
          />
          <span className="text-[1.2rem]">
            I would like to receive updates, tips, and exclusive content via email. You can unsubscribe at any time.
          </span>
        </label>
      </div>

      <p className="text-[1rem] opacity-70">
        By submitting this form, you agree to our{" "}
        <Link href="/terms" className="text-(--primary-400) hover:underline">
          Terms and Conditions
        </Link>. * Required fields
      </p>
    </form>
  );
};
export default FreebieForm;
