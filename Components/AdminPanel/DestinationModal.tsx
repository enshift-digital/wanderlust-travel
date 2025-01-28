interface DestinationModalInputStruct {
  type: string;
}

const DestinationModal = ({ type }: DestinationModalInputStruct) => {
  return (
    <div className="modal-box">
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
          <legend className="fieldset-legend">Image URL</legend>
          <input type="text" className="input w-full" placeholder="Type here" />
        </fieldset>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Description</legend>
          <input type="text" className="input w-full" placeholder="Type here" />
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

export default DestinationModal;
