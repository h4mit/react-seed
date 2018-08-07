import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import AvatarRenderer from "../../../utils/table/renderer/avatar-renderer";
import listTranslations from "./i18n/list.json";
import { withLocalize } from 'react-localize-redux';

class ListPage extends Component {

  constructor(props) {
    super(props);
    this.props.addTranslation(listTranslations);

    this.state = {
      columnDefs: [
        { headerName: this.props.translate("LIST.name"), field: "name.first" },
        { headerName: "Family", field: "name.last" },
        { headerName: "Gender", field: "gender" },
        { headerName: "Email", field: "email" },
        { headerName: "Phone", field: "phone" },
        { headerName: "Avatar", field: "picture.thumbnail", cellRendererFramework: AvatarRenderer }
      ],
      onGridReady: function(params) {
        params.api.sizeColumnsToFit();
      },
    }
  }

  componentDidMount() {
    fetch("https://randomuser.me/api?results=10")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
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

export default withLocalize(ListPage);
