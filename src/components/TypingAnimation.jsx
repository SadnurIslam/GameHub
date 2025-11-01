import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export default function TypingAnimation({ to = "Hello, GameHub!", duration = 2 }) {
  const el = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(el.current, { text: "" });
      gsap.set(cursorRef.current, { opacity: 1, display: "inline-block" });

      gsap.to(el.current, {
        duration,
        text: to,
        ease: "none",
        onComplete: () => {
          gsap.to(cursorRef.current, {
            opacity: 0,
            duration: 0.5,
            delay: 0.2,
            onComplete: () => {
              cursorRef.current.style.display = "none";
            },
          });
        },
      });
    });

    return () => ctx.revert();
  }, [to, duration]);

  return (
    <h1 style={{ whiteSpace: "pre" }}>
      <span ref={el} />
      <span ref={cursorRef} className="cursor">|</span>
    </h1>
  );
}
