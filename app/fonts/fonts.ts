import { Work_Sans } from "next/font/google";
import localFont from "next/font/local";

export const workSans = Work_Sans({ subsets: ["latin"] });

export const kobe = localFont({
  src: [
    {
      path: "./Kobe-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Kobe-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Kobe-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});
