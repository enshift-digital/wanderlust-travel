interface PackageModalInputStruct {
  type: string;
}

const PackageModal = ({ type }: PackageModalInputStruct) => {
  return (
    <div className="modal-box max-h-screen">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 className="font-bold text-lg text-center">
        {type == "add"
          ? "Add New Package"
          : type == "edit"
          ? "Edit Package"
          : ""}
      </h3>
      <div className="py-8">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Name</legend>
          <input type="text" className="input w-full" placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Country</legend>
          <input type="text" className="input w-full" placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Image URL</legend>
          <input type="text" className="input w-full" placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Highlights</legend>
          <div className="join">
            <input
              className="input input-bordered join-item w-full"
              placeholder="Add Highlights (Keep it low)"
            />
            <button className="btn join-item">Add</button>
          </div>
        </fieldset>
        <div className="flex gap-2">
          <fieldset className="fieldset basis-1/2">
            <legend className="fieldset-legend">Duration</legend>
            <label className="input w-full">
              <input type="text" placeholder="Days count" />
              <span className="label">Days</span>
            </label>
          </fieldset>
          <fieldset className="fieldset basis-1/2">
            <legend className="fieldset-legend">Price</legend>
            <label className="input w-full">
              <span className="label">$</span>
              <input type="text" placeholder="Price in $" />
            </label>
          </fieldset>
        </div>
        <div className="flex gap-2">
          <fieldset className="basis-1/2 fieldset">
            <legend className="fieldset-legend">Rating</legend>
            <label className="input">
              <input type="text" placeholder="Days count" />
              <span className="label">/ 5</span>
            </label>
          </fieldset>
          <fieldset className="basis-1/2 fieldset">
            <legend className="fieldset-legend">Batch</legend>
            <select defaultValue="Pick a batch" className="select">
              <option disabled={true}>Pick a batch</option>
              <option>None</option>
              <option>Popular</option>
              <option>New</option>
            </select>
          </fieldset>
        </div>
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

export default PackageModal;
