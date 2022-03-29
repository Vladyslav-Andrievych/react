import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import ProductTable from './ProductTable.jsx';

class FilterableProductTable extends Component {
  state = {
    filterText: '',
    inStockOnly: false,
  };

  handleFilterTextChange = (event) => {
    this.setState({
      filterText: event.target.value,
    });
  };

  handleInStockChange = (event) => {
    this.setState({
      inStockOnly: event.target.checked,
    });
  };

  render() {
    const { filterText, inStockOnly } = this.state;
    const products = this.props.products;

    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
