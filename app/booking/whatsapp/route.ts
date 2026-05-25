import { NextResponse } from "next/server";
import { createWhatsAppUrl } from "@/data/site";

function readParam(searchParams: URLSearchParams, key: string) {
  return searchParams.get(key)?.trim() || "";
}

export function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;

  const details = {
    name: readParam(searchParams, "name"),
    phone: readParam(searchParams, "phone"),
    pickup: readParam(searchParams, "pickup"),
    dropoff: readParam(searchParams, "dropoff"),
    date: readParam(searchParams, "date"),
    time: readParam(searchParams, "time"),
    carType: readParam(searchParams, "carType"),
    message: readParam(searchParams, "message"),
  };

  const message = [
    "Hello Ummat Enterprises Rent-a-Car, I want to book a car.",
    "",
    `Full name: ${details.name || "Not provided"}`,
    `Phone number: ${details.phone || "Not provided"}`,
    `Pickup location: ${details.pickup || "Not provided"}`,
    `Drop-off location: ${details.dropoff || "Not provided"}`,
    `Date: ${details.date || "Not provided"}`,
    `Time: ${details.time || "Not provided"}`,
    `Car type: ${details.carType || "Not provided"}`,
    `Message: ${details.message || "No extra message"}`,
  ].join("\n");

  return NextResponse.redirect(createWhatsAppUrl(message));
}
