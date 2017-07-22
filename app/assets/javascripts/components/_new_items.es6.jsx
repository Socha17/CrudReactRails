class NewItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      descriptionm: ''
    };
  }

  handleClick() {
    let name = e.target.value;
    let descrip = e.target.value;
    console.log(e.target);
    console.log(`the name value is ${name} the description is ${descrip}`);
  }

  handleTextChange(e) {

    let txtChange = this.state
    console.log();
    console.log(this.state);
    let newState = txtChange[e.target.name] = e.target.value

    this.setState(newState);
  }

  render() {
    return (
      <div>
        <input name='name' placeholder='Enter name of item' onChange={this.handleTextChange}/>
        <input name='description' placeholder='Enter description of item' onChange={this.handleTextChange}/>
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}
