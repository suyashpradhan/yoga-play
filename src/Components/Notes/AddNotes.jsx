export const AddNotes = () => {
  return (
    <>
      <div className="notes-container">
        <h2 className="notes-header">Take Notes</h2>
        <div className="notes-field-container">
          <div className="formGroup">
            <label htmlFor="" className="label">
              Title
            </label>
            <input type="text" className="formField" />
          </div>
          <div className="formGroup">
            <label htmlFor="" className="label">
              Content
            </label>
            <textarea type="text" className="formField formFieldTextArea" />
          </div>
          <button className="button button-primary loginButton">
            Add Notes
          </button>
        </div>
      </div>
    </>
  );
};
