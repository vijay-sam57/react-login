import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./filter.css";
function Filter() {
  const [toggle, setToggle] = useState(false);
  const [date, setDate] = useState(false);
  const [daterange, setDaterange] = useState(false);
  const [datevalue, setDatevalue] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <div className="filter-btn">
        <button onClick={() => setToggle(!toggle)}>
          <span>Filter</span>
          <i className="fa-solid fa-angle-down"></i>
        </button>
      </div>
      {toggle && (
        <form id="form">
          <div className="row-1">
            <div className="inputgrp">
              <label htmlFor="dept">Department</label>
              <input type="text" list="dept"></input>
              <datalist id="dept">
                <option value={"CSE"}>CSE</option>
                <option value={"EEE"}>EEE</option>
                <option value={"ECE"}>ECE</option>
              </datalist>
            </div>
            <div className="inputgrp">
              <label htmlFor="desg">Designation</label>
              <input type="text" list="desig"></input>
              <datalist id="desig">
                <option value={"Assistant Prof"}>Assistant Prof</option>
                <option value={"Prof"}>Prof</option>
                <option value={"Non Teaching"}>Non Teaching</option>
              </datalist>
            </div>
            <div className="inputgrp">
              <label htmlFor="staffID">StaffID</label>
              <input type="text"></input>
            </div>
            <div className="late">
              <label htmlFor="latecomer">
                <input type="checkbox" id="latecomer"></input>
                Latecomer
              </label>
            </div>
          </div>
          <div className="row-2">
            <div className="date">
              <label>
                <input type="checkbox" onChange={() => setDate(!date)}></input>
                Daywise
              </label>
            </div>
            {date && (
              <div className="date-1">
                <DatePicker
                  selected={datevalue}
                  onChange={(date) => setDatevalue(date)}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            )}
            <div className="daterange">
              <label>
                <input
                  type="checkbox"
                  onChange={() => setDaterange(!daterange)}
                ></input>
                Range of dates
              </label>
            </div>
            {daterange && (
              <div className="date-2">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  startDate={startDate}
                  endDate={endDate}
                  dateFormat="dd/MM/yyyy"
                />
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            )}
          </div>
        </form>
      )}
    </>
  );
}

export default Filter;
