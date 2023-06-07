// Constants & Types
import { Review } from "../types";

// sample hotel reviews
export const reviews: Review = [
  {
    title: "Excellent value for the price!",
    user: "Mark M",
    message: "We enjoyed our stay at this hotel. We will definitely come back!",
    points: [
      "+Great Location!",
      "+Service",
      "+Bottle of champagne in the room!",
    ],
    score: 10,
    date: Date.now(),
  },
  {
    title: "Good hotel but noisy location",
    user: "Jane T",
    message: `Maintenance is needed. the shower doesn’t work because the pipe has issues, we had to bend down to shower.
                We requested for another towel as we were given only one`,
    points: ["+Privacy", "-Poor facilities"],
    score: 5.6,
    date: 1663632000000,
  },
  {
    title: "The facilities are complete and well maintained",
    user: "Hannah K",
    message:
      "Host was very attentive and responsive, great facilities and great room for the price.",
    points: [
      "+Transportation",
      "+Exceptional staff",
      "-I didn’t get any breakfast",
    ],
    score: 8.5,
    date: 1655318864000,
  },
];

// sample hotel ratings
export const ratings = [
  {
    name: "Cleanliness",
    rate: 10,
  },
  {
    name: "Amenities",
    rate: 7,
  },
  {
    name: "Location",
    rate: 9,
  },
  {
    name: "Service",
    rate: 8,
  },
];

// sample hotel rooms
export const rooms = [
  {
    image: 1,
    group: "Double standard room",
    sqm: 18,
    people: 2,
    bed: "1 queen bed or 2 separate beds",
    price: 180,
  },
  {
    image: 2,
    group: "Comfort single room",
    sqm: 21,
    people: 2,
    bed: "1 king size bed",
    price: 220,
  },
  {
    image: 3,
    group: "Double standard room",
    sqm: 25,
    people: 2,
    bed: "1 king size bed",
    price: 250,
  },
  {
    image: 4,
    group: "Double fancy room",
    sqm: 35,
    people: 2,
    bed: "1 king size bed and couch",
    price: 250,
  },
];

// sample hotel features
export const hotelFeatures = [
  { icon: "wifi", text: "Free Wifi" },
  { icon: "air", text: "Air Conditioning" },
  { icon: "shower", text: "Private bathroom" },
  { icon: "badge", text: "Key card access" },
  { icon: "local_parking", text: "Free Parking" },
  { icon: "watch_later", text: "24-hour front desk" },
];
