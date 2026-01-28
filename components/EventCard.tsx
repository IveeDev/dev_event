import { EventItem } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ title, image, slug, location, time, date }: EventItem) => {
  return (
    <Link href={`/events/${slug}`} id="event-card">
      <Image
        alt="event-card"
        src={image}
        width={410}
        height={300}
        className="poster"
      />

      <div className="flex flex-row gap-2">
        <Image
          src={"/icons/pin.svg"}
          alt="location"
          width={"14"}
          height={"14"}
        />
        <p>{location}</p>
      </div>

      <p>{title}</p>

      <div className="datetime">
        <div className="flex flex-row gap-2">
          <Image
            src={"/icons/calendar.svg"}
            alt="date"
            width={"14"}
            height={"14"}
          />
          <p>{date}</p>
        </div>

        <div className="flex flex-row gap-2">
          <Image
            src={"/icons/clock.svg"}
            alt="time"
            width={"14"}
            height={"14"}
          />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
