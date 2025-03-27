"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { ArrowLeft, Cloud, CloudRain, Sun, Thermometer, AlertTriangle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LanguageSelector from "@/components/language-selector"

export default function AdvisoryPage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const crop = searchParams.get("crop") || ""
  const state = searchParams.get("state") || ""
  const season = searchParams.get("season") || ""
  const [language, setLanguage] = useState(searchParams.get("language") || "english")

  // Placeholder for API data
  const [weatherData, setWeatherData] = useState<any>(null)
  const [mandiData, setMandiData] = useState<any>(null)
  const [advisoryData, setAdvisoryData] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API calls
    setTimeout(() => {
      // Mock weather data
      setWeatherData({
        forecast: [
          { day: "Today", temp: 32, condition: "sunny", humidity: 65 },
          { day: "Tomorrow", temp: 30, condition: "partly_cloudy", humidity: 70 },
          { day: "Day 3", temp: 29, condition: "cloudy", humidity: 75 },
          { day: "Day 4", temp: 31, condition: "rainy", humidity: 80 },
          { day: "Day 5", temp: 33, condition: "sunny", humidity: 60 },
        ],
        alerts: [{ type: "warning", message: "High temperature expected in the next 3 days" }],
      })

      // Mock mandi prices
      setMandiData({
        prices: [
          { mandi: "Local Mandi", price: 2450, trend: "up" },
          { mandi: "District Mandi", price: 2500, trend: "up" },
          { mandi: "State Mandi", price: 2400, trend: "down" },
          { mandi: "Nearby District", price: 2350, trend: "stable" },
        ],
        avgPrice: 2425,
        lastUpdated: "Today, 10:00 AM",
      })

      // Mock advisory data
      setAdvisoryData({
        general: "Based on the current weather conditions and your crop selection, here are some recommendations.",
        irrigation: "Maintain adequate soil moisture. Consider irrigation every 3-4 days due to high temperatures.",
        pestControl: "Monitor for aphids and whiteflies which are common during this season for your crop.",
        fertilizer: "Apply nitrogen-rich fertilizer within the next week to support growth during this phase.",
        harvesting: "Your crop should be ready for harvest in approximately 45-60 days if planted now.",
      })

      setLoading(false)
    }, 1500)
  }, [crop, state, season])

  const translations = {
    english: {
      title: "Agriculture Advisory",
      backButton: "Back",
      loadingText: "Loading your personalized advisory...",
      weatherTab: "Weather",
      pricesTab: "Mandi Prices",
      advisoryTab: "Crop Advisory",
      weatherTitle: "5-Day Weather Forecast",
      weatherSubtitle: `for ${state.charAt(0).toUpperCase() + state.slice(1)}`,
      alertsTitle: "Weather Alerts",
      mandiTitle: "Current Market Prices",
      mandiSubtitle: `for ${crop.charAt(0).toUpperCase() + crop.slice(1)}`,
      advisoryTitle: "Crop Advisory",
      advisorySubtitle: `for ${crop.charAt(0).toUpperCase() + crop.slice(1)} in ${season.charAt(0).toUpperCase() + season.slice(1)} season`,
      day: "Day",
      temperature: "Temp",
      humidity: "Humidity",
      condition: "Condition",
      mandi: "Mandi",
      price: "Price (₹/q)",
      trend: "Trend",
      avgPrice: "Average Price",
      lastUpdated: "Last Updated",
      generalAdvice: "General Advice",
      irrigation: "Irrigation",
      pestControl: "Pest Control",
      fertilizer: "Fertilizer",
      harvesting: "Harvesting",
    },
    hindi: {
      title: "कृषि सलाह",
      backButton: "वापस",
      loadingText: "आपकी व्यक्तिगत सलाह लोड हो रही है...",
      weatherTab: "मौसम",
      pricesTab: "मंडी मूल्य",
      advisoryTab: "फसल सलाह",
      weatherTitle: "5-दिन का मौसम पूर्वानुमान",
      weatherSubtitle: `${state.charAt(0).toUpperCase() + state.slice(1)} के लिए`,
      alertsTitle: "मौसम चेतावनी",
      mandiTitle: "वर्तमान बाजार मूल्य",
      mandiSubtitle: `${crop.charAt(0).toUpperCase() + crop.slice(1)} के लिए`,
      advisoryTitle: "फसल सलाह",
      advisorySubtitle: `${season.charAt(0).toUpperCase() + season.slice(1)} मौसम में ${crop.charAt(0).toUpperCase() + crop.slice(1)} के लिए`,
      day: "दिन",
      temperature: "तापमान",
      humidity: "नमी",
      condition: "स्थिति",
      mandi: "मंडी",
      price: "मूल्य (₹/क्विंटल)",
      trend: "प्रवृत्ति",
      avgPrice: "औसत मूल्य",
      lastUpdated: "अंतिम अपडेट",
      generalAdvice: "सामान्य सलाह",
      irrigation: "सिंचाई",
      pestControl: "कीट नियंत्रण",
      fertilizer: "उर्वरक",
      harvesting: "कटाई",
    },
  }

  const t = translations[language as keyof typeof translations]

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-8 w-8 text-yellow-500" />
      case "partly_cloudy":
        return <Cloud className="h-8 w-8 text-gray-400" />
      case "cloudy":
        return <Cloud className="h-8 w-8 text-gray-600" />
      case "rainy":
        return <CloudRain className="h-8 w-8 text-blue-500" />
      default:
        return <Thermometer className="h-8 w-8 text-red-500" />
    }
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <span className="text-green-600">↑</span>
      case "down":
        return <span className="text-red-600">↓</span>
      case "stable":
        return <span className="text-gray-600">→</span>
      default:
        return null
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50 p-4">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={() => router.back()} className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-2xl font-bold text-green-800">{t.title}</h1>
          </div>
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>

        {loading ? (
          <Card className="border-green-200 shadow-md">
            <CardContent className="flex flex-col items-center justify-center p-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mb-4"></div>
              <p className="text-lg text-center text-gray-700">{t.loadingText}</p>
            </CardContent>
          </Card>
        ) : (
          <Tabs defaultValue="weather" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="weather" className="text-base">
                {t.weatherTab}
              </TabsTrigger>
              <TabsTrigger value="prices" className="text-base">
                {t.pricesTab}
              </TabsTrigger>
              <TabsTrigger value="advisory" className="text-base">
                {t.advisoryTab}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="weather">
              <Card className="border-green-200 shadow-md mb-4">
                <CardHeader className="bg-blue-100 rounded-t-lg">
                  <CardTitle className="text-blue-800">{t.weatherTitle}</CardTitle>
                  <p className="text-blue-600">{t.weatherSubtitle}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    {weatherData.forecast.map((day: any, index: number) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 border-b border-gray-200 last:border-0"
                      >
                        <div className="flex items-center">
                          {getWeatherIcon(day.condition)}
                          <span className="ml-3 text-lg">{day.day}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <div className="font-semibold">{day.temp}°C</div>
                            <div className="text-sm text-gray-500">
                              {day.humidity}% {t.humidity}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {weatherData.alerts.length > 0 && (
                <Card className="border-orange-200 shadow-md bg-orange-50">
                  <CardHeader className="bg-orange-100 rounded-t-lg">
                    <CardTitle className="text-orange-800 flex items-center">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      {t.alertsTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {weatherData.alerts.map((alert: any, index: number) => (
                        <li key={index} className="flex items-start">
                          <AlertTriangle className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                          <span>{alert.message}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="prices">
              <Card className="border-green-200 shadow-md">
                <CardHeader className="bg-green-100 rounded-t-lg">
                  <CardTitle className="text-green-800">{t.mandiTitle}</CardTitle>
                  <p className="text-green-600">{t.mandiSubtitle}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2">{t.mandi}</th>
                          <th className="text-right py-2">{t.price}</th>
                          <th className="text-right py-2">{t.trend}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mandiData.prices.map((item: any, index: number) => (
                          <tr key={index} className="border-b border-gray-200 last:border-0">
                            <td className="py-3">{item.mandi}</td>
                            <td className="text-right py-3">₹{item.price}</td>
                            <td className="text-right py-3 text-xl">{getTrendIcon(item.trend)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between">
                    <span className="font-medium">{t.avgPrice}:</span>
                    <span className="font-bold">₹{mandiData.avgPrice}</span>
                  </div>
                  <div className="mt-2 text-sm text-gray-500 text-right">
                    {t.lastUpdated}: {mandiData.lastUpdated}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advisory">
              <Card className="border-green-200 shadow-md">
                <CardHeader className="bg-green-100 rounded-t-lg">
                  <CardTitle className="text-green-800">{t.advisoryTitle}</CardTitle>
                  <p className="text-green-600">{t.advisorySubtitle}</p>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h3 className="font-semibold text-green-800 mb-1">{t.generalAdvice}</h3>
                      <p>{advisoryData.general}</p>
                    </div>

                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h3 className="font-semibold text-blue-800 mb-1">{t.irrigation}</h3>
                      <p>{advisoryData.irrigation}</p>
                    </div>

                    <div className="p-3 bg-red-50 rounded-lg">
                      <h3 className="font-semibold text-red-800 mb-1">{t.pestControl}</h3>
                      <p>{advisoryData.pestControl}</p>
                    </div>

                    <div className="p-3 bg-yellow-50 rounded-lg">
                      <h3 className="font-semibold text-yellow-800 mb-1">{t.fertilizer}</h3>
                      <p>{advisoryData.fertilizer}</p>
                    </div>

                    <div className="p-3 bg-purple-50 rounded-lg">
                      <h3 className="font-semibold text-purple-800 mb-1">{t.harvesting}</h3>
                      <p>{advisoryData.harvesting}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </main>
  )
}

