import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import AvatarRenderer from "../../../utils/table/renderer/avatar-renderer";
import axios from 'axios';
import intl from 'react-intl-universal';

class ListPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      columnDefs: [
        { headerName: intl.get('LIST.name'), field: "name.first" },
        { headerName: intl.get('LIST.family'), field: "name.last" },
        { headerName: "Gender", field: "gender" },
        { headerName: "Email", field: "email" },
        { headerName: "Phone", field: "phone" },
        { headerName: "Avatar", field: "picture.thumbnail", cellRendererFramework: AvatarRenderer }
      ],
      onGridReady: function (params) {
        params.api.sizeColumnsToFit();
      },
    }
  }

  componentDidMount() {
    axios.get(`https://randomuser.me/api?results=50`)
      .then(res => {
        this.setState({
          isLoaded: true,
          items: res.data.results
        });
      }).catch(error => {
        this.setState({
          isLoaded: false,
          error
        });
      });

  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (isLoaded) {
      return (<div
        className="ag-theme-balham"
        style={{
          height: '500px',
          width: '100%'
        }}
      >
        <AgGridReact
          enableSorting={true}
          enableFilter={true}
          columnDefs={this.state.columnDefs}
          onGridReady={this.state.onGridReady}
          rowData={items}>
        </AgGridReact>
      </div>);
    }
    else if (error) return (
      <div>
        Error Loaded data. <br />
      </div>
    );
    else return (
      <div>
        Welcome to List. <br />
      </div>
    );
  }
}

export default ListPage;
