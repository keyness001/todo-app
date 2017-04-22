import React, {Component} from 'react';
import Item from './Item';

class ListItem extends Component {
  constructor(props){
    super(props);
    this.renderItem = this.renderItem.bind(this);
  }

  renderItem = () => {
    return(
      this.props.data.map((text, idx) => {
        return <Item key={idx} name={text} id={idx} handleRemove={this.props.handleRemove}/>;
      }, this)
    );
  }

  render(){
    return(
      <ul>
        {this.renderItem()}
      </ul>
    )
  }
}

export default ListItem
