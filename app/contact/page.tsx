import { cn } from "@/lib/utils";
import { kobe } from "../fonts/fonts";
import CTAMobile from "@/components/ui/cta-mobile";
import { ContactForm } from "@/components/contact/contact-form";

export default function ContactPage() {
  return (
    <main className="">
      <div className="bg-td-beige py-10 px-4">
        <h1 className={cn("font-bold text-[56px]", kobe.className)}>contact</h1>
      </div>
      <section className="px-4 py-10">
        <h1 className={cn("font-bold text-[40px] mb-10", kobe.className)}>
          get in touch with us
        </h1>
        <p className="text-sm leading-tight">
          Your feedback, questions, and enquiries are important to us. Let us
          know what you enjoyed, what we could do better, or anything else
          you&apos;d like to share.
        </p>
      </section>
      <section>
        <ContactForm />
      </section>
      <CTAMobile />
    </main>
  );
}
