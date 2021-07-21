import React from 'react';
import Geocode from "react-geocode";
import {FROM, TO, PROVIDED_DATA_IS_IVALID, API_KRY} from '../../Common/consts';
import './index.scss';

class AddTransportationForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      customerId: '',
      name: '',
      fromlat: '',
      fromlng: '',
      tolat: '',
      tolng: '',
      from: '',
      to:'',
      error : false,
    }
  }

  componentDidUpdate(){
    const {submitAddNewTransportation} = this.props;
    const {fromlat, fromlng, tolat, tolng, customerId, name} = this.state
    if(fromlat>0 && fromlng>0 && tolat>0 && tolng>0){
      const tempTrans = {
        customerId,
        name,
        fromlat,
        fromlng,
        tolat,
        tolng
      };
      submitAddNewTransportation(tempTrans);
    }
  };

  onCustomerIdChanged = (event) => this.setState({customerId:event.target.value });

  onNameChanged = (event) => this.setState({name: event.target.value});

  onFromChanged = (event) => this.setState({from: event.target.value});

  onToChanged = (event) => this.setState({to: event.target.value});

  render(){
    const {newId, submitAddNewTransportation} = this.props;
    const {customerId, name, from , to} = this.state

    const onSubmitAddForm = () => {
      getAddress(from, FROM);
      getAddress(to, TO);
    };

    if(this.state.error)
      throw new Error();
    
    const getAddress = (address, type) => {
      Geocode.setApiKey(API_KRY);
      Geocode.enableDebug();
      Geocode.fromAddress(address).then(
        response => {
          if(response.status === 'OK'){
            const { lat, lng } = response.results[0].geometry.location;
            if(type === FROM) {this.setState({fromlat: lat, fromlng: lng})}
            else {this.setState({tolat: lat, tolng: lng})}
          }
        },
        error => {
          this.setState({error: true});
        }
      );    
    };

    return(
      <div>
        <form>
          <p>Transportation Number:</p> <span><b>{newId}</b></span><br/>
          <p>Customer Number</p> <input placeholder="Customer Number" value={customerId} onChange={this.onCustomerIdChanged}></input><br/>
          <p>Name</p> <input placeholder="Name" value={name} onChange={this.onNameChanged}></input><br/>
          <p>From</p> <input placeholder="From" value={from} onChange={this.onFromChanged}></input><br/>
          <p>To</p> <input placeholder="To" value={to} onChange={this.onToChanged}></input><br/>
          <button className="submitButton" type='button' onClick={onSubmitAddForm}>submit</button>
        </form>
      </div>
    );
  }
}
export default AddTransportationForm;