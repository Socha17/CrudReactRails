class AllItems extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        items: []
      };
  }

  componentDidMount() {
    console.log("component mounted");
    fetch('/api/v1/items.json')
    .then(response => response.json())
    .then((json) => {
      console.log(json);
      this.setState({items: json})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <h1>ALL ITEMS</h1>
      </div>
    );
  }
}
