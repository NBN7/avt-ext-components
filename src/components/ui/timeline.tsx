import * as React from "react";
import { twMerge } from "tailwind-merge";

export type TimelineItem = {
  title: string;
  description?: string;
};

interface TimelineProps {
  items: TimelineItem[];
  circleClassName?: string;
  lineClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const Timeline: React.FC<TimelineProps> = ({
  items,
  circleClassName,
  lineClassName,
  titleClassName,
  descriptionClassName,
}) => {
  return (
    <ol
      className={twMerge("relative border-s border-primary/30", lineClassName)}
    >
      {items.map((item, index) => (
        <li key={index} className="mb-10 ms-4">
          <div
            className={twMerge(
              "absolute -start-1.5 mt-2 size-3 rounded-full border border-white bg-primary",
              circleClassName
            )}
          ></div>
          <h3
            className={twMerge(
              "text-pretty text-lg font-semibold",
              titleClassName
            )}
          >
            {item.title}
          </h3>
          {item.description && (
            <p className={twMerge("text-gray-500", descriptionClassName)}>
              {item.description}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
};

export { Timeline };
