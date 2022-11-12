import { useState } from "react";
import data from "./data";
import "./home.css";
import Filter from "./filter";
function Home() {
  const [staff, setStaff] = useState(data);
  return (
    <div>
      <h1>Attendance</h1>
      <Filter></Filter>
      <ul className="attable">
        <li className="athead">
          <div>S.No</div>
          <div>Name</div>
          <div>Staff ID</div>
          <div>Designation</div>
          <div>Department</div>
          <div>In time</div>
          <div>Count of Entry</div>
          <div>Out Time</div>
          <div>Total Hours</div>
        </li>
        <div className="atbody">
          <h4 className="day">Day 0</h4>
          {staff.map((item) => (
            <li className="atdata" key={item.sno}>
              <div data-label="S.No">{item.sno}</div>
              <div data-label="Name">{item.name}</div>
              <div data-label="Staff ID">{item.staffID}</div>
              <div data-label="Designation">{item.designation}</div>
              <div data-label="Department">{item.department}</div>
              <div data-label="In time">{item.inTime.toLocaleTimeString()}</div>
              <div data-label="Count of entry">{item.entryCount}</div>
              <div data-label="Out time">
                {item.outTime.toLocaleTimeString()}
              </div>
              <div data-label="Total hours">
                <a href="#" className="hrs-link">
                  {item.totalHours}
                </a>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default Home;
