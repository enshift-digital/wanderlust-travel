const BookingModal = () => {
  return (
    <div className="modal-box max-h-screen">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 className="font-bold text-lg text-center">Edit Booking</h3>
      <div className="py-8">
        <div className="flex gap-2">
          <fieldset className="fieldset basis-1/2">
            <legend className="fieldset-legend">Id</legend>
            <input type="text" className="input w-full" value="bkg1" disabled />
          </fieldset>
          <fieldset className="fieldset basis-1/2">
            <legend className="fieldset-legend">Package Id</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Type here"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Name</legend>
          <input type="text" className="input w-full" placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Email</legend>
          <input type="text" className="input w-full" placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Phone Number</legend>
          <input type="text" className="input w-full" placeholder="Type here" />
        </fieldset>
        <div className="flex gap-2">
          <fieldset className="fieldset basis-1/2">
            <legend className="fieldset-legend">Date</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Type here"
            />
          </fieldset>
          <fieldset className="fieldset basis-1/2">
            <legend className="fieldset-legend">Tickets</legend>
            <input
              type="text"
              className="input w-full"
              placeholder="Type here"
            />
          </fieldset>
        </div>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Special Notes</legend>
          <textarea
            className="textarea textarea-bordered w-full resize-none"
            placeholder="Type here"
          ></textarea>
        </fieldset>
      </div>
      <div className="flex justify-around">
        <form method="dialog">
          <button className="btn btn-soft">Cancel</button>
        </form>
        <button className="btn btn-success">Submit</button>
      </div>
    </div>
  );
};

export default BookingModal;
