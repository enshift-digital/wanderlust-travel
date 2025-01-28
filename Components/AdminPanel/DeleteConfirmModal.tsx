interface DestinationModalInputStruct {
  deleteData: string;
}

const DeleteConfirmModal = ({ deleteData }: DestinationModalInputStruct) => {
  return (
    <div className="modal-box">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
      </form>
      <h3 className="font-bold text-lg text-center">Confirmation</h3>
      <p className="py-4 font-normal text-base">
        Are you sure you want to delete "{deleteData}"?
      </p>
      <div className="flex justify-around">
        <form method="dialog">
          <button className="btn btn-soft">Cancel</button>
        </form>
        <button className="btn btn-error">Delete</button>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
