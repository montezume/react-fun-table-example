import React, { Component } from 'react';
import { Table } from 'react-fun-table';
import logo from './logo.svg';
import './App.css';

const data = [
	{
		"field_name": "Potatoes",
		"area_in_hectares": 0.3,
		"active": false,
		"company_name": "Potato Company",
		"cultivation_id": 1,
		"crop_name": "Potatoes",
		"harvest_year": 2017
	},
  {
    "field_name": "Shrimp",
    "area_in_hectares": 1,
    "active": true,
    "company_name": "Shrimpcorp",
    "cultivation_id": 3,
    "crop_name": "Shrimp",
    "harvest_year": 2016
  },
  {
    "field_name": "Shrimp",
    "area_in_hectares": 1,
    "active": true,
    "company_name": "Shrimpcorp",
    "cultivation_id": 3,
    "crop_name": "Shrimp",
    "harvest_year": 2016
  },
  {
    "field_name": "Shrimp",
    "area_in_hectares": 1,
    "active": true,
    "company_name": "Shrimpcorp",
    "cultivation_id": 3,
    "crop_name": "Shrimp",
    "harvest_year": 2016
  },
  {
    "field_name": "Shrimp",
    "area_in_hectares": 1,
    "active": true,
    "company_name": "Shrimpcorp",
    "cultivation_id": 3,
    "crop_name": "Shrimp",
    "harvest_year": 2016
  },
];



const columns = [
 {
   "attribute": "field_name",
   "label": "Name",
   sortBy: (a, b) => { console.log('a', a)}
 },
 {
   "attribute": "cultivation_id",
   "label": "Nummer",
   sortBy: (a, b) => { console.log('a', a)}
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


const defaultSorted = [
  {
    id: "age",
    desc: true
  }];

class App extends Component {
  
  state = {
    columns: columns, 
    data: data,
    sortBy: columns[0].attribute,
    sortDirection: 1
  }
  
  onSort = (attribute, sortDirection) => {
    const sortedData = data.sort((a, b) => {
      return sortDirection === -1 ? (a[attribute] > b[attribute]) : a[attribute] < b[attribute];
    });
        
    this.setState({
      ...this.state,
      data: sortedData,
      sortDirection: this.state.sortDirection == 1 ? -1 : 1
    });
  }
  
  
  // move sort logic?
  
  render() {
    console.log('this.state', this.state);
    const { sortDirection } = this.state;
    
    return (
      <div className="App">
        <div className="main-content">
          <Table onSort={(column) => this.onSort(column, sortDirection)} columns={columns} data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
