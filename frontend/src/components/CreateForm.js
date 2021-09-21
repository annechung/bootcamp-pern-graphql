import React, {useState} from 'react';
import { useMutation, gql } from '@apollo/client';

function CreateForm(props) {

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('');
  const [budget, setBudget] = useState('');
  const [description, setDescription] = useState('');

  const ADD_RESTAURANT= gql`
    mutation AddRestaurant($name: String!, $address: String, $description: String, $type: String) {
      createRestaurant(name: $name, address: $address, description: $description, type: $type) {
        id
        name
      }
    }
  `;

  const [addRestaurant, { data, loading, error }] = useMutation(ADD_RESTAURANT);
      
	const handleChange = (event) => {
    switch(event.target.id) {
      case "name":
        setName(event.target.value);
        break;
      case "address":
        setAddress(event.target.value);
        break;
      case "type":
        setType(event.target.value);
        break;
      case "budget":
        setBudget(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      default: 
    }
	}
      
	const handleSubmit = (event) => {
	  alert('Submitted!');
	  event.preventDefault();
    
    addRestaurant({
      variables: {
        name: name,
        address: address,
        budget: budget,
        description: description,
        type: type
      },
    });
    setName('');
    setAddress('');
    setType('');
    setBudget('');
    setDescription('');
	}
      
  return (
    <form onSubmit={handleSubmit}>
      <label>
      Name:
      <input id="name" type="text" value={name} onChange={handleChange} />
        </label>
        <label>
      Address:
      <input id="address" type="text" value={address} onChange={handleChange} />
          </label>
          <label>
      Type:
      <input id="type" type="text" value={type} onChange={handleChange} />
          </label>
          <label>
      Budget:
      <input id="budget" type="text" value={budget} onChange={handleChange} />
          </label>
          <label>
      Description:
      <input id="description" type="text" value={description} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
    </form>
  );
}

export default CreateForm;