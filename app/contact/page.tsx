import { cn } from "@/lib/utils";
import { kobe } from "../fonts/fonts";
import { ContactForm } from "@/components/contact/contact-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

function PinIcon() {
  return (
    <svg
      width="22"
      height="28"
      viewBox="0 0 22 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.9948 13.9466C11.7281 13.9466 12.3559 13.6855 12.8781 13.1633C13.4003 12.6411 13.6615 12.0133 13.6615 11.2799C13.6615 10.5466 13.4003 9.91884 12.8781 9.39661C12.3559 8.87439 11.7281 8.61328 10.9948 8.61328C10.2615 8.61328 9.63368 8.87439 9.11146 9.39661C8.58924 9.91884 8.32812 10.5466 8.32812 11.2799C8.32812 12.0133 8.58924 12.6411 9.11146 13.1633C9.63368 13.6855 10.2615 13.9466 10.9948 13.9466ZM10.9948 23.7466C13.7059 21.2577 15.717 18.9966 17.0281 16.9633C18.3392 14.9299 18.9948 13.1244 18.9948 11.5466C18.9948 9.12439 18.2226 7.14106 16.6781 5.59661C15.1337 4.05217 13.2392 3.27995 10.9948 3.27995C8.75035 3.27995 6.8559 4.05217 5.31146 5.59661C3.76701 7.14106 2.99479 9.12439 2.99479 11.5466C2.99479 13.1244 3.65035 14.9299 4.96146 16.9633C6.27257 18.9966 8.28368 21.2577 10.9948 23.7466ZM10.9948 27.2799C7.41701 24.2355 4.74479 21.4077 2.97813 18.7966C1.21146 16.1855 0.328125 13.7688 0.328125 11.5466C0.328125 8.21328 1.40035 5.55773 3.54479 3.57995C5.68924 1.60217 8.17257 0.613281 10.9948 0.613281C13.817 0.613281 16.3003 1.60217 18.4448 3.57995C20.5892 5.55773 21.6615 8.21328 21.6615 11.5466C21.6615 13.7688 20.7781 16.1855 19.0115 18.7966C17.2448 21.4077 14.5726 24.2355 10.9948 27.2799Z"
        fill="#181E1B"
      />
    </svg>
  );
}

function GoToIconBlack() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="#000"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 0.96875C10.7333 0.96875 11.8958 1.20625 12.9875 1.68125C14.0792 2.15625 15.0333 2.80208 15.85 3.61875C16.6667 4.43542 17.3125 5.38958 17.7875 6.48125C18.2625 7.57292 18.5 8.73542 18.5 9.96875C18.5 11.2021 18.2625 12.3646 17.7875 13.4563C17.3125 14.5479 16.6667 15.5021 15.85 16.3188C15.0333 17.1354 14.0792 17.7812 12.9875 18.2563C11.8958 18.7313 10.7333 18.9688 9.5 18.9688C8.81667 18.9688 8.15833 18.8938 7.525 18.7437C6.89167 18.5938 6.25833 18.3771 5.625 18.0938L7.15 16.5688C7.53333 16.7021 7.92083 16.8021 8.3125 16.8688C8.70417 16.9354 9.1 16.9688 9.5 16.9688C11.4333 16.9688 13.0833 16.2854 14.45 14.9187C15.8167 13.5521 16.5 11.9021 16.5 9.96875C16.5 8.03542 15.8167 6.38542 14.45 5.01875C13.0833 3.65208 11.4333 2.96875 9.5 2.96875C7.56667 2.96875 5.91667 3.65208 4.55 5.01875C3.18333 6.38542 2.5 8.03542 2.5 9.96875C2.5 10.3688 2.53333 10.7646 2.6 11.1562C2.66667 11.5479 2.76667 11.9354 2.9 12.3188L1.4 13.8188C1.1 13.2188 0.875 12.5979 0.725 11.9563C0.575 11.3146 0.5 10.6521 0.5 9.96875C0.5 8.73542 0.7375 7.57292 1.2125 6.48125C1.6875 5.38958 2.33333 4.43542 3.15 3.61875C3.96667 2.80208 4.92083 2.15625 6.0125 1.68125C7.10417 1.20625 8.26667 0.96875 9.5 0.96875ZM10.5 13.9688V10.3688L1.9 18.9688L0.5 17.5688L9.1 8.96875H5.5V6.96875H12.5V13.9688H10.5Z"
        fill="#000"
      />
    </svg>
  );
}

function GoToIconWhite() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 0.96875C10.7333 0.96875 11.8958 1.20625 12.9875 1.68125C14.0792 2.15625 15.0333 2.80208 15.85 3.61875C16.6667 4.43542 17.3125 5.38958 17.7875 6.48125C18.2625 7.57292 18.5 8.73542 18.5 9.96875C18.5 11.2021 18.2625 12.3646 17.7875 13.4563C17.3125 14.5479 16.6667 15.5021 15.85 16.3188C15.0333 17.1354 14.0792 17.7812 12.9875 18.2563C11.8958 18.7313 10.7333 18.9688 9.5 18.9688C8.81667 18.9688 8.15833 18.8938 7.525 18.7437C6.89167 18.5938 6.25833 18.3771 5.625 18.0938L7.15 16.5688C7.53333 16.7021 7.92083 16.8021 8.3125 16.8688C8.70417 16.9354 9.1 16.9688 9.5 16.9688C11.4333 16.9688 13.0833 16.2854 14.45 14.9187C15.8167 13.5521 16.5 11.9021 16.5 9.96875C16.5 8.03542 15.8167 6.38542 14.45 5.01875C13.0833 3.65208 11.4333 2.96875 9.5 2.96875C7.56667 2.96875 5.91667 3.65208 4.55 5.01875C3.18333 6.38542 2.5 8.03542 2.5 9.96875C2.5 10.3688 2.53333 10.7646 2.6 11.1562C2.66667 11.5479 2.76667 11.9354 2.9 12.3188L1.4 13.8188C1.1 13.2188 0.875 12.5979 0.725 11.9563C0.575 11.3146 0.5 10.6521 0.5 9.96875C0.5 8.73542 0.7375 7.57292 1.2125 6.48125C1.6875 5.38958 2.33333 4.43542 3.15 3.61875C3.96667 2.80208 4.92083 2.15625 6.0125 1.68125C7.10417 1.20625 8.26667 0.96875 9.5 0.96875ZM10.5 13.9688V10.3688L1.9 18.9688L0.5 17.5688L9.1 8.96875H5.5V6.96875H12.5V13.9688H10.5Z"
        fill="#fff"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="">
      <div className="bg-td-beige py-10 px-4">
        <h1
          className={cn("font-bold text-[56px] leading-none", kobe.className)}
        >
          contact
        </h1>
      </div>
      <section className="px-4 py-10">
        <h1
          className={cn(
            "font-bold text-[40px] mb-10 leading-none",
            kobe.className,
          )}
        >
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
      <section className="px-4 flex flex-col gap-y-10 pb-10">
        <Card className="bg-td-black text-td-white rounded-3xl shadow-none border-none">
          <CardHeader>
            <FaWhatsapp size={32} />
            <CardTitle
              className={cn(
                "font-bold text-[40px]  leading-none",
                kobe.className,
              )}
            >
              whatsapp
            </CardTitle>
            <CardContent className="px-0 pt-1 text-sm leading-tight">
              Need help quickly? Reach out to us directly via WhatsApp.
            </CardContent>
            <CardFooter className="px-0 pb-0 pt-4">
              <Button className="w-full bg-td-white text-td-black font-medium text-xl flex flex-row items-center gap-x-4">
                <GoToIconBlack />
                WhatsApp us
              </Button>
            </CardFooter>
          </CardHeader>
        </Card>
        <Card className="bg-td-beige text-td-black rounded-3xl shadow-none border-none">
          <CardHeader>
            <PinIcon />
            <CardTitle
              className={cn(
                "font-bold text-[40px]  leading-none",
                kobe.className,
              )}
            >
              get directions
            </CardTitle>
            <CardContent className="px-0 pt-1 text-sm leading-tight">
              Find your way to our space
            </CardContent>
            <CardFooter className="px-0 pb-0 pt-4">
              <Button className="w-full bg-td-black text-td-white font-medium text-xl flex flex-row items-center gap-x-4">
                <GoToIconWhite />
                Get directions
              </Button>
            </CardFooter>
          </CardHeader>
        </Card>
      </section>
    </main>
  );
}
