"use client"
import { Button } from "../../ui/button"
export function ScheduleButton() {
  const handleClick = () => alert("Schedule surgery clicked")
  return <Button onClick={handleClick}>Schedule Surgery</Button>
}
