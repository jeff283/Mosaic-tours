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

interface Props {
  toursData: Tour[];
  onEditTour: (tour: Tour) => void;
  onDeleteTour: (tour: Tour) => void;
}

const TableDisplay = ({ toursData, onEditTour, onDeleteTour }: Props) => {
  // Update
  const handleUpdateTour = (tour: Tour) => {
    onEditTour(tour);
  };

  // Delete
  const handleDeleteTour = (tour: Tour) => {
    onDeleteTour(tour);
  };

  return (
    <div className="w-full max-h-[80vh] overflow-y-auto custom-scrollbar  relative">
      {toursData && toursData.length > 0 ? (
        <div className="sticky top-0 z-10 bg-eggshell custom-shadow">
          <Table className="w-full">
            <TableHeader className="bg-eggshell shadow-custom">
              <TableRow>
                <TableHead>Tour Name</TableHead>
                <TableHead className="hidden md:table-cell">Location</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="hidden md:table-cell">Days</TableHead>
                <TableHead className="hidden md:table-cell">Nights</TableHead>
                <TableHead>Price</TableHead>
                <TableHead className="hidden lg:table-cell">
                  Participants
                </TableHead>

                <TableHead className="hidden md:table-cell">Action</TableHead>
              </TableRow>
            </TableHeader>
            {/* </Table>
    </div>
    <div className="w-full">
      <Table className="w-full"> */}
            <TableBody>
              {toursData.map((tour: Tour) => (
                <TableRow key={tour.id}>
                  <TableCell>{tour.tourName}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {tour.location}
                  </TableCell>
                  <TableCell className="">{tour.tourDate}</TableCell>
                  {/* <TableCell className="hidden md:table-cell">
                {tour.tourDate.getDate().toString().padStart(2, "0")}
                {"-"}
                {tour.tourDate.toLocaleString("default", { month: "short" })}
                {"-"}
                {tour.tourDate.getFullYear()}
              </TableCell> */}
                  <TableCell className="hidden md:table-cell">
                    {tour.days}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {tour.nights}
                  </TableCell>
                  <TableCell>{tour.price}</TableCell>
                  <TableCell className="hidden font-medium lg:table-cell">
                    {tour.participants.length}
                  </TableCell>
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[70vh]  gap-3">
          <h2 className="text-4xl font-bold">No Tours Available</h2>
          <h3 className="text-2xl font-medium">Please Add Tours</h3>
        </div>
      )}
    </div>
  );
};

export default TableDisplay;
