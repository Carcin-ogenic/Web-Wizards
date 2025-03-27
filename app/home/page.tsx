"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, Sprout, MapPin, Calendar } from "lucide-react";
import bgImage from "../../public/istockphoto-1401722160-612x612.jpg";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LanguageSelector from "@/components/language-selector";

export default function HomePage() {
  const router = useRouter();
  const [crop, setCrop] = useState("");
  const [state, setState] = useState("");
  const [season, setSeason] = useState("");
  const [language, setLanguage] = useState("english");

  const [cropSearchTerm, setCropSearchTerm] = useState("");
  const [stateSearchTerm, setStateSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (crop && state && season) {
      router.push(`/advisory?crop=${crop}&state=${state}&season=${season}&language=${language}`);
    }
  };

  const crops = [
    "Alsandikai",
    "Amaranthus",
    "Amla(Nelli Kai)",
    "Amphophalus",
    "Apple",
    "Arecanut(Betelnut/Supari)",
    "Arhar (Tur/Red Gram)(Whole)",
    "Arhar Dal(Tur Dal)",
    "Asgand",
    "Ashgourd",
    "Ashwagandha",
    "Astera",
    "Bajra(Pearl Millet/Cumbu)",
    "Banana",
    "Banana - Green",
    "Barley (Jau)",
    "Beans",
    "Beetroot",
    "Bengal Gram Dal (Chana Dal)",
    "Bengal Gram(Gram)(Whole)",
    "Ber(Zizyphus/Borehannu)",
    "Betal Leaves",
    "Bhindi(Ladies Finger)",
    "Bitter gourd",
    "Black Gram (Urd Beans)(Whole)",
    "Black Gram Dal (Urd Dal)",
    "Black pepper",
    "Bottle gourd",
    "Brinjal",
    "Buttery",
    "Cabbage",
    "Capsicum",
    "Carrot",
    "Castor Seed",
    "Cauliflower",
    "Chennangi Dal",
    "Chikoos(Sapota)",
    "Chili Red",
    "Chilly Capsicum",
    "Chrysanthemum(Loose)",
    "Cluster beans",
    "Cock",
    "Coconut",
    "Coconut Oil",
    "Coconut Seed",
    "Coffee",
    "Colacasia",
    "Copra",
    "Coriander(Leaves)",
    "Corriander seed",
    "Cotton",
    "Cowpea (Lobia/Karamani)",
    "Cowpea(Veg)",
    "Cucumber(Kheera)",
    "Cummin Seed(Jeera)",
    "Drumstick",
    "Dry Chillies",
    "Duster Beans",
    "Elephant Yam (Suran)",
    "Field Pea",
    "Firewood",
    "Fish",
    "Foxtail Millet(Navane)",
    "French Beans (Frasbean)",
    "Garlic",
    "Ghee",
    "Ginger(Dry)",
    "Ginger(Green)",
    "Gram Raw(Chholia)",
    "Grapes",
    "Green Avare (W)",
    "Green Chilli",
    "Green Gram (Moong)(Whole)",
    "Green Gram Dal (Moong Dal)",
    "Green Peas",
    "Ground Nut Seed",
    "Groundnut",
    "Groundnut pods (raw)",
    "Guar",
    "Guar Seed(Cluster Beans Seed)",
    "Guava",
    "Gur(Jaggery)",
    "Indian Beans (Seam)",
    "Isabgul (Psyllium)",
    "Jack Fruit",
    "Jasmine",
    "Jowar(Sorghum)",
    "Kabuli Chana(Chickpeas-White)",
    "Karbuja(Musk Melon)",
    "Kinnow",
    "Knool Khol",
    "Kodo Millet(Varagu)",
    "Kulthi(Horse Gram)",
    "Kutki",
    "Lak(Teora)",
    "Leafy Vegetable",
    "Lemon",
    "Lentil (Masur)(Whole)",
    "Lime",
    "Linseed",
    "Little gourd (Kundru)",
    "Long Melon(Kakri)",
    "Maize",
    "Mango",
    "Mango (Raw-Ripe)",
    "Marigold(Calcutta)",
    "Marigold(loose)",
    "Masur Dal",
    "Mataki",
    "Methi Seeds",
    "Methi(Leaves)",
    "Millets",
    "Mint(Pudina)",
    "Mousambi(Sweet Lime)",
    "Mushrooms",
    "Mustard",
    "Mustard Oil",
    "Niger Seed (Ramtil)",
    "Nutmeg",
    "Onion",
    "Onion Green",
    "Orange",
    "Other green and fresh vegetables",
    "Paddy(Dhan)(Basmati)",
    "Paddy(Dhan)(Common)",
    "Papaya",
    "Papaya (Raw)",
    "Pear(Marasebu)",
    "Peas Wet",
    "Peas cod",
    "Peas(Dry)",
    "Pegeon Pea (Arhar Fali)",
    "Pepper ungarbled",
    "Pineapple",
    "Plum",
    "Pointed gourd (Parval)",
    "Pomegranate",
    "Poppy seeds",
    "Potato",
    "Pumpkin",
    "Pupadia",
    "Radish",
    "Ragi (Finger Millet)",
    "Rajgir",
    "Rice",
    "Ridgeguard(Tori)",
    "Rose(Loose)",
    "Round gourd",
    "Rubber",
    "Season Leaves",
    "Sesamum(Sesame,Gingelly,Til)",
    "Snakeguard",
    "Soanf",
    "Soyabean",
    "Spinach",
    "Sponge gourd",
    "Squash(Chappal Kadoo)",
    "Sugar",
    "Sunflower",
    "Surat Beans (Papadi)",
    "Sweet Potato",
    "Sweet Pumpkin",
    "Tamarind Fruit",
    "Tapioca",
    "Taramira",
    "Tender Coconut",
    "Thondekai",
    "Tinda",
    "Tomato",
    "Turmeric",
    "Turmeric (raw)",
    "Turnip",
    "Water Melon",
    "Wheat",
    "White Peas",
    "White Pumpkin",
    "Wood",
    "Yam (Ratalu)",
  ];

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
  ];

  const seasons = ["Kharif", "Rabi", "Zaid"];

  const translations = {
    english: {
      title: "Kisan Mitra",
      subtitle: "Your Personalized Agricultural Companion",
      cropLabel: "Select Crop",
      stateLabel: "Select State",
      seasonLabel: "Select Season",
      nextButton: "Get Advisory",
      placeholderCrop: "Choose your crop",
      placeholderState: "Choose your state",
      placeholderSeason: "Choose growing season",
    },
    hindi: {
      title: "किसान मित्र",
      subtitle: "आपका व्यक्तिगत कृषि साथी",
      cropLabel: "फसल चुनें",
      stateLabel: "राज्य चुनें",
      seasonLabel: "मौसम चुनें",
      nextButton: "सलाह प्राप्त करें",
      placeholderCrop: "अपनी फसल चुनें",
      placeholderState: "अपना राज्य चुनें",
      placeholderSeason: "उगाने का मौसम चुनें",
    },
  };

  const t = translations[language as keyof typeof translations];

  const filteredCrops = crops.filter((c) => c.toLowerCase().includes(cropSearchTerm.toLowerCase()));
  const filteredStates = states.filter((s) => s.toLowerCase().includes(stateSearchTerm.toLowerCase()));

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 animate-fade-in">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <Sprout className="h-8 w-8 text-green-600" />
            <h1 className="text-3xl font-extrabold text-green-800 tracking-tight">{t.title}</h1>
          </div>
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="hidden md:flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <Image
              src={bgImage}
              alt="Agricultural landscape with farmers and crops"
              className="w-full h-full object-cover rounded-lg shadow-md"
              priority
            />
          </div>

          <Card className="border-green-200 shadow-xl rounded-xl overflow-hidden animate-slide-up md:col-span-1">
            <CardHeader className="bg-gradient-to-r from-green-100 to-teal-100 py-6">
              <CardTitle className="text-center text-xl font-semibold text-green-900 flex items-center justify-center space-x-2">
                <span>{t.subtitle}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 pb-6 px-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Crop Selector */}
                <div className="space-y-2">
                  <label className="flex items-center text-lg font-medium text-gray-700 mb-2">
                    <Sprout className="mr-2 h-5 w-5 text-green-600" />
                    {t.cropLabel}
                  </label>
                  <Select value={crop} onValueChange={setCrop}>
                    <SelectTrigger className="h-14 text-lg border-green-300 focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-500">
                      <SelectValue placeholder={t.placeholderCrop} />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 overflow-y-auto">
                      <div className="px-4 py-2">
                        <input
                          type="text"
                          value={cropSearchTerm}
                          onChange={(e) => setCropSearchTerm(e.target.value)}
                          placeholder="Search crop..."
                          className="w-full px-3 py-2 border sticky rounded-md focus:outline-none focus:border-green-500"
                          onKeyDown={(e) => e.stopPropagation()}
                        />
                      </div>
                      {filteredCrops.map((c) => (
                        <SelectItem key={c} value={c} className="text-base hover:bg-green-50 focus:bg-green-100">
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* State Selector */}
                <div className="space-y-2">
                  <label className="flex items-center text-lg font-medium text-gray-700 mb-2">
                    <MapPin className="mr-2 h-5 w-5 text-green-600" />
                    {t.stateLabel}
                  </label>
                  <Select value={state} onValueChange={setState}>
                    <SelectTrigger className="h-14 text-lg border-green-300 focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-500">
                      <SelectValue placeholder={t.placeholderState} />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 overflow-y-auto">
                      <div className="px-4 py-2">
                        <input
                          type="text"
                          value={stateSearchTerm}
                          onChange={(e) => setStateSearchTerm(e.target.value)}
                          placeholder="Search state..."
                          className="w-full px-3 py-2 border sticky rounded-md focus:outline-none focus:border-green-500"
                          onKeyDown={(e) => e.stopPropagation()}
                        />
                      </div>
                      {filteredStates.map((s) => (
                        <SelectItem key={s} value={s} className="text-base hover:bg-green-50 focus:bg-green-100">
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Season Selector */}
                <div className="space-y-2">
                  <label className="flex items-center text-lg font-medium text-gray-700 mb-2">
                    <Calendar className="mr-2 h-5 w-5 text-green-600" />
                    {t.seasonLabel}
                  </label>
                  <Select value={season} onValueChange={setSeason}>
                    <SelectTrigger className="h-14 text-lg border-green-300 focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:border-green-500">
                      <SelectValue placeholder={t.placeholderSeason} />
                    </SelectTrigger>
                    <SelectContent>
                      {seasons.map((s) => (
                        <SelectItem
                          key={s}
                          value={s.toLowerCase()}
                          className="text-base hover:bg-green-50 focus:bg-green-100"
                        >
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 text-lg bg-green-600 hover:bg-green-700 transition-colors duration-300 group"
                  disabled={!crop || !state || !season}
                >
                  {t.nextButton}
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="absolute inset-0 -z-10 opacity-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
        </div>
      </div>
    </main>
  );
}
