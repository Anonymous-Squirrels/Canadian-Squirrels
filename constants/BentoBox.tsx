import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

export const BentoItems = [
  {
    title: "Custom Pricing",
    description: `Not everyone can fit S, nor can everyone wear XXL. 
    We tailor the packages to fit your budget.
    `,
    content: (
      <Image
        src="/assets/graph.png"
        width={250}
        height={250}
        alt="graph"
        className="h-48 w-48 md:w-[300px] md:h-[300px]"
      />
    ),
  },
  {
    title: `Boosting Business. Today and Tomorrow.`,
    description:
      "You invest in branding to brighten your sales.\n" +
      "We understand that.",
    content: (
      <Image
        src="/assets/boost_business.png"
        width={400}
        height={400}
        className="rounded-xl"
        alt="boost_business"
      />
    ),
  },
  {
    title: "Easy Collaboration",
    description: `1 POC
That's it!`,
    content: (
      <div className="w-full grid place-items-center h-72 p-6">
        <Image
          src="/assets/collaboration.png"
          width={180}
          height={180}
          alt="collaboration"
          className="w-full"
        />
      </div>
    ),
  },
  {
    title: "Our Wonders",
    description:
      "We have handled projects for more than 50+ companies. Would love to add you to our clientele.",
    content: (
      <div className="w-fit h-fit">
        <Link href="/project">
          {/*<Button
            variant="light"
            className="rounded-2xl py-0 font-medium px-6 md:py-1 md:px-10"
          >
            View More
          </Button>*/}
        </Link>
        <div className="flex w-fit">
          <Image
            src="/assets/oyoOfficial.png"
            width={200}
            height={200}
            alt="Oyo"
            className="h-20 md:h-fit mt-10"
          />

          <Image
            src="/assets/leo9.png"
            width={200}
            height={200}
            alt="Leo 9"
            className={"w-40 h-40 md:w-fit md:h-fit "}
          />
        </div>
      </div>
    ),
  },

  {
    title: "We provide Services. A lot of services.",
    description:
      "Our Company provides a lot of services ranging from Brand strategies to SEO Optimization to Web Content Management",
    content: (
      <Link href="/services" className="mt-10 ">
        <Button
          variant="light"
          className="rounded-full md:my-32 px-6 md:mt-16 md:px-10 font-medium z-20"
        >
          View our services
        </Button>
      </Link>
    ),
  },
];
