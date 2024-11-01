import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export const BentoItems = [
  {
    title: `Boosting Business. Today and Tomorrow.`,
    description:
      'You invest in branding to brighten your sales.\n' +
      'We understand that.',
    content: (
      <Image
        src="/assets/boostingbusiness.png"
        width={450}
        height={500}
        className="rounded-xl"
        alt="boostingbusiness"
      />
    ),
  },
  {
    title: 'Some of our Work.',
    description:
      'We have worked with company across time zones and have a portfolio laden with companies from Healthcare to Dental, HoReCa to Automobile and more.',
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
        <div className="flex w-full h-full">
          <Image
            src="/assets/someofwork.png"
            width={400}
            height={400}
            alt="works"
            className="rounded-xl object-cover h-full"
          />
        </div>
      </div>
    ),
  },

  {
    title: 'Team',
    description: 'We are a team of',
    content: (
      <div className="w-fit h-full flex flex-col justify-between">
        <p className="text-center text-6xl font-extrabold md:mt-6 md:mb-10">
          15+
        </p>
        <p className="text-center text-xs md:text-lg text-black inline-block dark:hidden ">
          creative wizards who help you achieve your goals
        </p>
        <p className="text-center text-xs md:text-lg text-white dark:inline-block hidden ">
          creative wizards who help you achieve your goals
        </p>
      </div>
    ),
  },

  {
    title: 'We provide Services. A lot of services.',
    description:
      'Our Company provides a lot of services ranging from Brand strategies to SEO Optimization to Web Content Management',
    content: (
      <div className="max-w-[700px] flex flex-col justify-between w-full">
        <div className="flex md:mt-6 w-full">
          <Image
            src="/assets/Servicesgroup.png"
            width={600}
            height={400}
            alt="service"
            className="mx-auto"
          />
        </div>
        <div className="mx-auto flex justify-center">
          <Link href="/services" className="mt-5 md:mt-0">
            <Button
              variant="light"
              className="rounded-full md:my-32 px-6 md:mt-10 md:px-10 font-medium z-20"
            >
              View our services
            </Button>
          </Link>
        </div>
      </div>
    ),
  },
];
