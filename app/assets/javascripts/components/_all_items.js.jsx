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

    let items = this.state.items.map((item) => {
      return (
        <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
        </div>
      )
    })
    return (
      <div>
        <h1>ALL ITEMS</h1>
        {items}
      </div>
    );
  }
}
