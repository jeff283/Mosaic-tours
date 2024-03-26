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
      className="w-full max-w-[1600px] mdMax:pl-6  px-0 mdMax:max-w-[450px] "
    >
      <CarouselContent className="-ml-2 md:-ml-4">
        <CarouselItem className="py-6  pl-2 md:pl-4 smMax:basis-full md:basis-1/2 lg:basis-1/4">
          <TourCard />
        </CarouselItem>
        <CarouselItem className="py-6  pl-2 md:pl-4 smMax:basis-full md:basis-1/2 lg:basis-1/4">
          <TourCard />
        </CarouselItem>
        <CarouselItem className="py-6  pl-2 md:pl-4 smMax:basis-full md:basis-1/2 lg:basis-1/4">
          <TourCard />
        </CarouselItem>
        <CarouselItem className="py-6  pl-2 md:pl-4 smMax:basis-full md:basis-1/2 lg:basis-1/4">
          <TourCard />
        </CarouselItem>
        <CarouselItem className="py-6  pl-2 md:pl-4 smMax:basis-full md:basis-1/2 lg:basis-1/4">
          <TourCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="bg-eggshell ring-1 ring-lightGreen mdMax:hidden  " />
      <CarouselNext className="bg-eggshell ring-1 ring-lightGreen mdMax:hidden" />
    </Carousel>
  );
};

export default TourCarousel;
