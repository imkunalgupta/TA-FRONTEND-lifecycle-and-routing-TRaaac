import React from 'react';
import Loader from './Loader';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faCalendar,
  faMap,
  faPhone,
  faLock,
} from '@fortawesome/fontawesome-free-solid';

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/?results=5')
      .then((res) =>
        res.data.results.map((user) => ({
          name: `${user.name.first} ${user.name.last}`,
          email: `${user.email}`,
          image: `${user.picture.middle}`,
          dob: `${user.dob.date}`,
          location: `${user.location.city}, ${user.location.state}, ${user.location.country}`,
          phone: `${user.phone}`,
          username: `${user.login.username}`,
        }))
      )
      .then((users) => this.setState({ users, isLoading: false }));
  }
  render() {
    const { isLoading, users } = this.state;
    return (
      <>
        <div className="container">
          {!isLoading ? (
            users.map((user) => {
              const { name, email, image, dob, location, phone, username } =
                user;
              return (
                <div className="box">
                  <img src={image} alt="profile" />
                  <p>My name is</p>
                  <h3>{name}</h3>
                  <div className="flex">
                    <FontAwesomeIcon className="icon" icon={faUser} />
                    <FontAwesomeIcon className="icon" icon={faEnvelope} />
                    <FontAwesomeIcon className="icon" icon={faCalendar} />
                    <FontAwesomeIcon className="icon" icon={faMap} />
                    <FontAwesomeIcon className="icon" icon={faPhone} />
                    <FontAwesomeIcon className="icon" icon={faLock} />
                  </div>
                  <button>
                    {!this.state.data ? 'Random User' : 'Loading...'}
                  </button>
                </div>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </>
    );
  }
}

export default Data;
