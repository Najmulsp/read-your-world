const Publish = () => {
  return (
    <div className="border rounded-2xl w-4/5 lg:w-2/3 mx-auto bg-slate-200 p-16 space-y-6 mt-10">
      <h2 className="text-4xl font-bold text-center">
        Publish Your Book With Us.
      </h2>
      <label className="input lg:w-2/3 mx-auto input-bordered flex items-center gap-2 ">
        <input type="text" className="grow" placeholder="Book Name" />
      </label>
      <label className="input lg:w-2/3 mx-auto  input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Author Name" />
      </label>
      <label className="input lg:w-2/3 mx-auto  input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Subject" />
      </label>
      <label className="form-control lg:w-2/3 mx-auto ">
        <div className="label">
          <span className="label-text">Give a simple riview of your book</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="Description"
        ></textarea>
      </label>

      <label className=" lg:w-2/3 mx-auto input-bordered  flex items-center gap-2">
        <input type="submit" className="btn grow bg-lime-600 text-white" value="Submit To Publish Your Book" />
      </label>
    </div>
  );
};

export default Publish;
