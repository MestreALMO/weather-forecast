import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const latitude = searchParams.get("latitude");
  const longitude = searchParams.get("longitude");

  if (!latitude || !longitude) {
    return NextResponse.json(
      { error: "Latitude and longitude are required" },
      { status: 400 }
    );
  }

  const apiKey = process.env.OPENCAGE_API_KEY;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.results.length === 0) {
    return NextResponse.json({ error: "No results found" }, { status: 404 });
  }

  const { city, state } = data.results[0].components;
  return NextResponse.json({ city, state });
}
