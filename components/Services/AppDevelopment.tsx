import React from 'react';
import Image from 'next/image';

type TechnologyCardProps = {
  src: string;
  alt: string;
  description: string;
};

const technologies: TechnologyCardProps[] = [
  {
    src: '/assets/kotlin.png',
    alt: 'Kotlin',
    description:
      'We specialize in creating powerful, cross-platform mobile apps using the latest technologies like Kotlin and Flutter.',
  },
  {
    src: '/assets/flutter.png',
    alt: 'Flutter',
    description:
      'Flutter enables fast development and expressive, flexible UI, providing a delightful experience for users across platforms.',
  },
  {
    src: '/assets/xamarin.png',
    alt: 'Xamarin',
    description:
      'With Xamarin, we deliver native app experiences using a single codebase, reducing time-to-market while maintaining quality.',
  },
  {
    src: '/assets/reactnative.png',
    alt: 'React Native',
    description:
      'React Native allows us to create robust and scalable mobile apps with a focus on performance and native-like experience.',
  },
];

const AppDevelopment = () => {
  return (
    <section className="p-4 lg:w-1/2 col-span-1">
      <header className="text-xl md:text-4xl font-semibold text-black dark:text-white text-center mb-5 md:mb-10 lg:mb-28">
        <h1>
          APP<span className="text-[#9747FF] ml-2">DEVELOPMENT</span>
        </h1>
      </header>

      <div className="flex flex-col gap-7 md:gap-12 items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-[1244px]">
          {technologies.map((tech, index) => (
            <article
              key={index}
              className="relative p-5 dark:bg-[#111111] bg-white rounded-xl"
            >
              <div className="flex flex-col gap-y-2 max-w-2xl items-center">
                <Image
                  src={tech.src}
                  alt={`${tech.alt} development`}
                  width={80}
                  height={80}
                  className="mb-4 rounded-xl shadow-valuesContainerShadow"
                  priority={index < 2}
                />
                <h2 className="text-black dark:text-white">{tech.alt}</h2>
                <p className="text-black dark:text-[#969696] text-center">
                  {tech.description.split(' ').map((word, idx) => (
                    <span
                      key={idx}
                      className={
                        word.includes('powerful') ||
                        word.includes('robust') ||
                        word.includes('scalable') ||
                        word.includes('performance') ||
                        word.includes('maintaining') ||
                        word.includes('quality')
                          ? 'text-black dark:text-[#c4c2c2] font-extrabold'
                          : ''
                      }
                    >
                      {word}{' '}
                    </span>
                  ))}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-black dark:text-[#969696] md:text-lg text-center md:text-justify max-w-[550px]">
          Our team of skilled developers specializes in crafting{' '}
          <span className="text-black dark:text-[#c4c2c2] font-extrabold">scalable</span> and{' '}
          <span className="text-black dark:text-[#c4c2c2] font-extrabold">
            high-performance apps
          </span>{' '}
          using the latest technologies, including Kotlin, Flutter, and React
          Native. We&apos;ll create a{' '}
          <span className="text-black dark:text-[#c4c2c2] font-extrabold">mobile solution</span>{' '}
          that seamlessly integrates with your{' '}
          <span className="text-black dark:text-[#c4c2c2] font-extrabold">brand</span> and
          empowers your business to reach new heights.
        </p>
      </div>
    </section>
  );
};

export default AppDevelopment;
