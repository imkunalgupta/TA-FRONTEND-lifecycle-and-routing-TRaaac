import React from 'react';
class Card extends React.Component {
  constructor(props) {
    console.log('Card constructor');
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('Card mounted');
  }
  render() {
    console.log('Card Render');

    return (
      <article>
        <div className="top">
          <div className="card-img-div">
            <img
              src={this.props.data.picture.large}
              alt="profile"
              className="flexi-img"
            />
          </div>
        </div>
        <div className="bottom">
          <h3>{this.props.data.user}</h3>
          <h5>{this.props.valueTitle}</h5>
          <h3>{this.props.value}</h3>
          <div className="button-div">
            <i
              onClick={(event) => this.props.handleChangeData(event, 'user')}
              className="fas fa-user"
            ></i>
            <i
              onClick={(event) => this.props.handleChangeData(event, 'mail')}
              className="fas fa-envelope-open"
            ></i>
            <i
              onClick={(event) => this.props.handleChangeData(event, 'dob')}
              className="fas fa-calendar-times"
            ></i>
            <i
              onClick={(event) => this.props.handleChangeData(event, 'address')}
              className="fas fa-map"
            ></i>
            <i
              onClick={(event) => this.props.handleChangeData(event, 'phone')}
              className="fas fa-phone"
            ></i>
            <i
              onClick={(event) =>
                this.props.handleChangeData(event, 'password')
              }
              className="fas fa-lock"
            ></i>
          </div>
        </div>
        <div className="click-div">
          <button onClick={this.props.getRandomeUser} className="btn-pri">
            Get Randome user
          </button>
        </div>
      </article>
    );
  }
}
export default Card;
