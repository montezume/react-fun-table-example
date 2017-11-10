import React, { Component } from 'react';
import { Table } from 'react-fun-table';
import logo from './logo.svg';
import './App.css';

const data = [
	{
		"field_name": "Example name",
		"area_in_hectares": 0.1,
		"active": true,
		"company_name": "Company",
		"cultivation_id": 1,
		"crop_name": "Potatoes",
		"harvest_year": 2017
	}
];

const columns = [
 {
   "attribute": "field_name",
   "label": "Name"
 },
 {
   "attribute": "cultivation_id",
   "label": "Nummer"
 },
 {
   "attribute": "company_name",
   "label": "Betrieb"
 },
 {
   "attribute": "area_in_hectares",
   "label": "Fläche"
 },
 {
   "attribute": "active",
   "label": "Aktiv"
 },
 {
   "attribute": "crop_name",
   "label": "Kultur"
 },
 {
   "attribute": "harvest_year",
   "label": "Ernte"
 }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-content">
          <Table columns={columns} data={data} />
        </div>
      </div>
    );
  }
}

export default App;
