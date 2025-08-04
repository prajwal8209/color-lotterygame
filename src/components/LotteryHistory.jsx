import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "../App.css";
import { FiLogOut } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
// Sample datasets
const w1Data = [
  { name: "W1 User 1", rollNo: "W001", place: "Nashik", class: "8", age: 13, blood: "B+" },
];
const w2Data = [
  { name: "W2 User 2", rollNo: "W002", place: "Chennai", class: "9", age: 14, blood: "A+" },
];
const w3Data = [
  { name: "W3 User 3", rollNo: "W003", place: "Goa", class: "10", age: 15, blood: "O-" },
];
const w4Data = [
  { name: "W4 User 4", rollNo: "W004", place: "Bangalore", class: "11", age: 16, blood: "B-" },
];
const w5Data = [
  { name: "W5 User 5", rollNo: "W005", place: "Kolkata", class: "12", age: 17, blood: "AB+" },
];

// Mapping of keys to data
const tableMap = {
  star30: w1Data,
  star60: w2Data,
  star3h: w3Data,
  star6h: w4Data,
  star12h: w5Data,
  star7d: [],
  star15d: [],
  star1m: [],
};

// Button definitions
const buttons = [
  { key: "star30", label: "Star 30 Min" },
  { key: "star60", label: "Star 60 Min" },
  { key: "star3h", label: "Star 3 Hour" },
  { key: "star6h", label: "Star 6 Hour" },
  { key: "star12h", label: "Star 12 Hour" },
  { key: "star7d", label: "Star 7 Days" },
  { key: "star15d", label: "Star 15 Days" },
  { key: "star1m", label: "Star 1 Month" },
];

const columns = [
  { name: "Name", selector: row => row.name, sortable: true },
  { name: "Roll No", selector: row => row.rollNo, sortable: true },
  { name: "Place", selector: row => row.place, sortable: true },
  { name: "Class", selector: row => row.class, sortable: true },
  { name: "Age", selector: row => row.age, sortable: true },
  { name: "Blood", selector: row => row.blood, sortable: true },
];

const customStyles = {
  headCells: { className: "yyr-header" },
  rows: { className: "yyr-row" },
  cells: { className: "yyr-cell" },
};

const LotteryHistory = () => {
  const [filterText, setFilterText] = useState("");
  const [activeTable, setActiveTable] = useState("star30"); // default selection

  const dataToShow = tableMap[activeTable] || [];

  const filteredData = dataToShow.filter(item =>
    Object.values(item).some(val =>
      val.toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );

  return (   <div className="dashboard-container">
        {/* Top bar */}
        
    
    <div className="yyr-container">
        
    <div className="gfd-card">
        <div className="jh">
        <h3 className="abc">Activities</h3>
        <p className="bv">Please remember to follow the event page

We will launch user feedback activities from time to time</p></div>
    </div>




      {/* Button grid */}
      <div className="yyr-btn-grid">
        {buttons.map(({ key, label }) => (
          <button
            key={key}
            className={`yyr-btn ${activeTable === key ? "active" : ""}`}
            onClick={() => {
              setActiveTable(key);
              setFilterText("");
            }}
          >
            {label}
          </button>
        ))}
      </div>
<div className="hy">
      {/* Heading */}
      <h2 className="yyr-title">{buttons.find(b => b.key === activeTable)?.label} Table</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
        className="yyr-search"
      />

      {/* Data table */}
      <DataTable
        columns={columns}
        data={filteredData}
        customStyles={customStyles}
        pagination
        striped
        highlightOnHover
        responsive
        noDataComponent="No records found"
      />
    </div> </div></div>
  );
};

export default LotteryHistory;
