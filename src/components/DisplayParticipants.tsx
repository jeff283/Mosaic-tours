const DisplayParticipants = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-center">Participants</h3>
      <div className="grid gap-4 py-4">
        <div className="flex items-center justify-between p-2 border rounded-xl">
          <div className="grid items-center grid-rows-2 gap-2 ">
            <div className="font-medium">Henry Sandeig</div>
            <div className="">henrysandeig@gmail.com</div>
          </div>
          <div className="text-2xl font-medium">X</div>
        </div>
      </div>
    </div>
  );
};

export default DisplayParticipants;
