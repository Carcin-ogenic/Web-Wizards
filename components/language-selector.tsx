"use client"

import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

interface LanguageSelectorProps {
  language: string
  setLanguage: (language: string) => void
}

export default function LanguageSelector({ language, setLanguage }: LanguageSelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="h-9 gap-1">
          <Globe className="h-4 w-4" />
          {language === "english" ? "English" : "हिंदी"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("english")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("hindi")}>हिंदी (Hindi)</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

