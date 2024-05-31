import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");
  const state = searchParams.get("state");
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;

  if (!city || !state || !apiKey) {
    return NextResponse.json(
      { error: "Missing city, state or API key" },
      { status: 400 }
    );
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state}&appid=${apiKey}&units=metric`
  );

  https: if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: response.status }
    );
  }

  const weatherData = await response.json();

  const temperatureTomorrow = weatherData.list[1].main.temp;
  const temperatureAfterTomorrow = weatherData.list[2].main.temp;

  return NextResponse.json({ temperatureTomorrow, temperatureAfterTomorrow });
}
