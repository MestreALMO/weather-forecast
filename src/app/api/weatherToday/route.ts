import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = "Fortaleza";
  const state = "Ceará";
  // const city = searchParams.get("city");
  // const state = searchParams.get("state");
  const apiKey = process.env.OPENWEATHERMAP_API_KEY;

  if (!city || !state || !apiKey) {
    return NextResponse.json(
      { error: "Missing city, state or API key" },
      { status: 400 }
    );
  }

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&appid=${apiKey}&units=metric`
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch weather data" },
      { status: response.status }
    );
  }

  const weatherData = await response.json();

  const temperature = weatherData.main.temp;
  const weatherDescription = weatherData.weather[0].main;
  const windSpeed = weatherData.wind.speed;
  const humidity = weatherData.main.humidity;
  const pressure = weatherData.main.pressure;

  return NextResponse.json({
    temperature,
    weatherDescription,
    windSpeed,
    humidity,
    pressure,
  });
}
