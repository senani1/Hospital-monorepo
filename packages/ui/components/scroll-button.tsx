"use client"
import { Button } from "../../ui/button"
export function ScrollButton() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return <Button onClick={scrollToTop}>Scroll to Top</Button>;
}
