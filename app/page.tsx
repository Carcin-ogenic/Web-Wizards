"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import LanguageSelector from "@/components/language-selector"

export default function HomePage() {
  const router = useRouter()
  const [crop, setCrop] = useState("")
  const [state, setState] = useState("")
  const [season, setSeason] = useState("")
  const [language, setLanguage] = useState("english")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (crop && state && season) {
      router.push(`/advisory?crop=${crop}&state=${state}&season=${season}&language=${language}`)
    }
  }

  const crops = [
    "Rice",
    "Wheat",
    "Maize",
    "Pulses",
    "Sugarcane",
    "Cotton",
    "Jute",
    "Groundnut",
    "Soybean",
    "Mustard",
    "Potato",
    "Onion",
    "Tomato",
    "Chilli",
    "Turmeric",
  ]

  const states = [
    "Andhra Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Tamil Nadu",
    "Telangana",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ]

  const seasons = ["Kharif", "Rabi", "Zaid"]

  const translations = {
    english: {
      title: "Agriculture Advisory Platform",
      subtitle: "Get personalized crop advice, weather updates, and market prices",
      cropLabel: "Select Crop",
      stateLabel: "Select State",
      seasonLabel: "Select Season",
      nextButton: "Next",
      placeholderCrop: "Choose your crop",
      placeholderState: "Choose your state",
      placeholderSeason: "Choose growing season",
    },
    hindi: {
      title: "कृषि सलाहकार मंच",
      subtitle: "व्यक्तिगत फसल सलाह, मौसम अपडेट और बाजार मूल्य प्राप्त करें",
      cropLabel: "फसल चुनें",
      stateLabel: "राज्य चुनें",
      seasonLabel: "मौसम चुनें",
      nextButton: "आगे बढ़ें",
      placeholderCrop: "अपनी फसल चुनें",
      placeholderState: "अपना राज्य चुनें",
      placeholderSeason: "उगाने का मौसम चुनें",
    },
  }

  const t = translations[language as keyof typeof translations]

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-green-800">{t.title}</h1>
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>

        <Card className="border-green-200 shadow-md">
          <CardHeader className="bg-green-100 rounded-t-lg">
            <CardTitle className="text-center text-green-800">{t.subtitle}</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-lg font-medium text-gray-700">{t.cropLabel}</label>
                <Select value={crop} onValueChange={setCrop}>
                  <SelectTrigger className="h-14 text-lg border-green-300 focus:ring-green-500">
                    <SelectValue placeholder={t.placeholderCrop} />
                  </SelectTrigger>
                  <SelectContent>
                    {crops.map((c) => (
                      <SelectItem key={c} value={c.toLowerCase()} className="text-base">
                        {c}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-lg font-medium text-gray-700">{t.stateLabel}</label>
                <Select value={state} onValueChange={setState}>
                  <SelectTrigger className="h-14 text-lg border-green-300 focus:ring-green-500">
                    <SelectValue placeholder={t.placeholderState} />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((s) => (
                      <SelectItem key={s} value={s.toLowerCase()} className="text-base">
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-lg font-medium text-gray-700">{t.seasonLabel}</label>
                <Select value={season} onValueChange={setSeason}>
                  <SelectTrigger className="h-14 text-lg border-green-300 focus:ring-green-500">
                    <SelectValue placeholder={t.placeholderSeason} />
                  </SelectTrigger>
                  <SelectContent>
                    {seasons.map((s) => (
                      <SelectItem key={s} value={s.toLowerCase()} className="text-base">
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button
                type="submit"
                className="w-full h-14 text-lg bg-green-600 hover:bg-green-700"
                disabled={!crop || !state || !season}
              >
                {t.nextButton}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

