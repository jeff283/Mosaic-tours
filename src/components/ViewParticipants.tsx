import mosaicUser from "@/Interfaces/mosaicUser";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

interface Props {
  openSheet: boolean;
  mosaicUserArray: mosaicUser[];
  onOpenSheetChange: (sheetState: boolean) => void;
}

const ViewParticipants = ({
  openSheet,
  onOpenSheetChange,
  mosaicUserArray,
}: Props) => {
  //   const mosaicUserData: mosaicUser[] = [
  //     {
  //       name: "The Chaudhra",
  //       email: "chaudhra.loading@gmail.com",
  //       isAdmin: true,
  //       id: "Yeh2zvEH55ZPzReCoN8thNctm112",
  //     },
  //     {
  //       isAdmin: true,
  //       email: "jgichuki.njoroge@gmail.com",
  //       name: "Jeff Njoroge",
  //       id: "eJ0Kv4P9woPHm2JYlq8bTMG9PJB2",
  //     },
  //   ];
  return (
    <div>
      {/* Sheet component */}
      <Sheet
        open={openSheet}
        onOpenChange={() => {
          onOpenSheetChange(!openSheet);
        }}
      >
        <SheetContent className=" mr-7 md:mr-0 bg-eggshell shadow-custom">
          <SheetHeader>
            <SheetTitle className="text-2xl">Tour Participants</SheetTitle>
            <SheetDescription>
              View Details on the participants of a tour
            </SheetDescription>
          </SheetHeader>
          <div className="max-h-[80vh] md:max-h-[90vh] overflow-y-auto custom-scrollbar pb-4  pt-4">
            {mosaicUserArray.map((partcipant: mosaicUser) => (
              <div className="px-4 py-2 mx-1 my-4 space-y-1 border rounded-lg shadow-custom">
                <div className="text-xl font-medium">{partcipant.name}</div>
                <div className="text-lg ">{partcipant.email}</div>
              </div>
            ))}
          </div>

          {/* <Separator  /> */}

          {/* <SheetFooter>
          <SheetClose asChild>
            <Button
              type="submit"
              className="text-lg border bg-darkGreen border-darkGreen hover:bg-eggshell hover:text-darkGreen"
            >
              Save changes
            </Button>
          </SheetClose>
        </SheetFooter> */}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ViewParticipants;
