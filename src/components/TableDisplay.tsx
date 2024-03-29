import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  // TableFooter,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Tour from "@/Interfaces/Tour";

import { FaEllipsisV } from "react-icons/fa";
import { Button } from "./ui/button";
// import { BsThreeDotsVertical } from "react-icons/bs";

const toursData: Tour[] = [
  {
    id: "1",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    // tourDate: new Date("25/04/2024").getDate(),
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "2",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "3",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "4",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "5",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "6",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "7",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "8",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "9",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "10",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "11",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "12",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "13",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "14",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "15",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "16",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "17",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "18",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "19",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
  {
    id: "20",
    tourName: "Mount Kenya",
    location: "Meru, Kenya",
    tourImg: "png",
    tourDate: "25/04/2024",
    days: 5,
    nights: 4,
    price: 200000,
    participants: [],
  },
];

export function TableDisplay() {
  // CR will be handled by an upper component, this component only handles the data it's given
  // Create
  // const handleAddTour = (tour: Tour) => {
  //   console.log(tour);
  // };
  // // Read
  // const handleGetTours = () => {
  //   console.log("Get Tours");
  // };

  // Update
  const handleUpdateTour = (tour: Tour) => {
    console.log(tour);
  };

  // Delete
  const handleDeleteTour = (tour: Tour) => {
    console.log(tour);
  };

  return (
    <div className="w-full max-h-[80vh] overflow-y-auto custom-scrollbar  relative">
      <div className="sticky top-0 z-10 bg-eggshell custom-shadow">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead className="hidden lg:table-cell">Tour ID</TableHead>
              <TableHead>Tour Name</TableHead>
              <TableHead className="hidden md:table-cell">Location</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="hidden md:table-cell">Days</TableHead>
              <TableHead className="hidden md:table-cell">Nights</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="hidden md:table-cell">Action</TableHead>
            </TableRow>
          </TableHeader>
        </Table>
      </div>
      <div className="w-full">
        <Table className="w-full">
          <TableBody>
            {toursData.map((tour: Tour) => (
              <TableRow key={tour.id}>
                <TableCell className="hidden font-medium lg:table-cell">
                  {tour.id}
                </TableCell>
                <TableCell>{tour.tourName}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {tour.location}
                </TableCell>
                <TableCell>{tour.tourDate}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {tour.days}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {tour.nights}
                </TableCell>
                <TableCell>{tour.price}</TableCell>
                <TableCell className="">
                  {/* <FaEllipsisV size={16} /> */}
                  <div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-8 h-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <FaEllipsisV size={20} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align="end"
                        className="bg-eggshell shadow-custom"
                      >
                        <DropdownMenuLabel className="text-lg">
                          Actions
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                          className="text-lg hover:bg-slate-100"
                          onClick={() => {
                            handleUpdateTour(tour);
                          }}
                        >
                          Edit Tour
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="text-lg text-red-500 hover:bg-red-100"
                          onClick={() => {
                            handleDeleteTour(tour);
                          }}
                        >
                          Delete Tour
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
                {/* <TableCell className="hidden md:table-cell">
                  <FaEllipsisV size={20} />
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
