import { ReactNode, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: ReactNode;
  animation?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideUp";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
  triggerOnce?: boolean;
}

const getInitialStyles = (animation: string) => {
  switch (animation) {
    case "fadeIn":
      return { opacity: 0 };
    case "fadeInUp":
      return { opacity: 0, transform: "translateY(2rem)" };
    case "fadeInDown":
      return { opacity: 0, transform: "translateY(-2rem)" };
    case "fadeInLeft":
      return { opacity: 0, transform: "translateX(-2rem)" };
    case "fadeInRight":
      return { opacity: 0, transform: "translateX(2rem)" };
    case "scaleIn":
      return { opacity: 0, transform: "scale(0.95)" };
    case "slideUp":
      return { opacity: 0, transform: "translateY(3rem)" };
    default:
      return { opacity: 0, transform: "translateY(2rem)" };
  }
};

export const AnimateOnScroll = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 600,
  className,
  threshold = 0.1,
  triggerOnce = true,
}: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const initialStyles = getInitialStyles(animation);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (triggerOnce) {
              setHasAnimated(true);
            }
          }, delay);
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, threshold, triggerOnce]);

  const finalStyles = isVisible || hasAnimated
    ? { opacity: 1, transform: "translateY(0) translateX(0) scale(1)" }
    : initialStyles;

  return (
    <div
      ref={elementRef}
      className={cn("transition-all ease-out", className)}
      style={{
        ...finalStyles,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {children}
    </div>
  );
};

