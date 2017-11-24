import React, { Component } from 'react';
import { Table } from 'react-fun-table';
import styled from 'styled-components';
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
    "field_name": "Steak",
    "area_in_hectares": 2,
    "active": true,
    "company_name": "Shrimpcorp",
    "cultivation_id": 3,
    "crop_name": "Shrimp",
    "harvest_year": 2016
  },
  {
    "field_name": "Java",
    "area_in_hectares": 5,
    "active": true,
    "company_name": "Shrimpcorp",
    "cultivation_id": 3,
    "crop_name": "Shrimp",
    "harvest_year": 2016
  },
  {
    "field_name": "Volcanoes",
    "area_in_hectares": 10,
    "active": true,
    "company_name": "A Shrimpcorp",
    "cultivation_id": 3,
    "crop_name": "Shrimpy",
    "harvest_year": 2016
  },
];



const columns = [
 {
   "attribute": "field_name",
   "label": "Name",
 },
 {
   "attribute": "cultivation_id",
   "label": "Nummer",
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

const GithubImg = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	border: 0;
	z-index: 9999999;
`;

class App extends Component {
  // move sort logic?

  render() {

    return (
      <div className="App">
        <div className="main-content">
					<a href="https://github.com/montezume/react-fun-table"><GithubImg src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png" /></a>


					<h2>With one sticky column</h2>
          <Table
						columns={columns}
						data={data}
						sortBy={columns[0].attribute}
						numStickyColumns={1}
					/>
					<h2>With two sticky column</h2>
					<Table
						columns={columns}
						data={data}
						sortBy={columns[0].attribute}
						numStickyColumns={2}
					/>

					<h2>With no sticky header and sticky column</h2>
					<Table
						columns={columns}
						data={data}
						sortBy={columns[0].attribute}
						stickyHeader={false}
					/>

					<h2>Sort by third column</h2>
					<Table
						columns={columns}
						data={data}
						sortBy={columns[2].attribute}
					/>


        </div>
      </div>
    );
  }
}

export default App;
