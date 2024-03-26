import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TourCard from "./TourCard";

const TourCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-[1600px] mdMax:pl-6 py-5 "
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        <CarouselItem className="pl-2 md:pl-4 smMax:basis-full md:basis-1/2 lg:basis-1/4">
          <TourCard />
        </CarouselItem>
        <CarouselItem className="pl-2 md:pl-4 smMax:basis-full md:basis-1/2 lg:basis-1/4">
          <TourCard />
        </CarouselItem>
        <CarouselItem className="pl-2 md:pl-4 smMax:basis-full md:basis-1/2 lg:basis-1/4">
          <TourCard />
        </CarouselItem>
        <CarouselItem className="pl-2 md:pl-4 smMax:basis-full md:basis-1/2 lg:basis-1/4">
          <TourCard />
        </CarouselItem>
        <CarouselItem className="pl-2 md:pl-4 smMax:basis-full md:basis-1/2 lg:basis-1/4">
          <TourCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default TourCarousel;
