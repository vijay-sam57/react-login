import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Filter() {
  return (
    <>
      <form>
        <label for="dept">Department</label>
        <select>
          <option value={"CSE"}>CSE</option>
          <option value={"EEE"}>EEE</option>
          <option value={"ECE"}>ECE</option>
        </select>
        <label for="desg">Designation</label>
        <select>
          <option value={"Assistant Prof"}>Assistant Prof</option>
          <option value={"Prof"}>Prof</option>
          <option value={"Non Teaching"}>Non Teaching</option>
        </select>
        <label for="staffID">StaffID</label>
        <input type="text"></input>
        <input type="checkbox"></input>
        <label>Latecomer</label>
        <input type="checkbox"></input>
        <label>Daywise</label>
        <input type="checkbox"></input>
        <label>Range of dates</label>

        <DatePicker dateFormat="dd/mm/yyyy" name="solodate"></DatePicker>
        <DatePicker dateFormat="dd/mm/yyyy"></DatePicker>
        <DatePicker dateFormat="dd/mm/yyyy"></DatePicker>
      </form>
    </>
  );
}

export default Filter;
