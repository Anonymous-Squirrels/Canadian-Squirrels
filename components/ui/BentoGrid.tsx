import { cn } from "@/utils/cn";
import GlassMorphism from "./GlassMorphism";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return <div className={cn(className)}>{children}</div>;
};

export const BentoGridItem = ({
  className,
  title,
  description,
  content,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  content?: string | React.ReactNode;
}) => {
  return (
    <GlassMorphism
      variant="light"
      className={cn(
        "h-72 md:h-[400px] overflow-hidden rounded-xl group/bento transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:-white/[0.2] space-y-4",
        className
      )}
    >
      <div className="text-sm transition duration-200">
        <span
          className="text-center text-xl font-bold block mb-5"
          dangerouslySetInnerHTML={{ __html: title ?? "" }}
        ></span>
        <span className="text-center text-xs md:text-lg inline-block text-[#D2D2D2]">
          {description}
        </span>
      </div>
      <div className="grid place-items-center items-center  w-full h-fit">
        {content}
      </div>
    </GlassMorphism>
  );
};
