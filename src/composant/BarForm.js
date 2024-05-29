import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import barService from '../services/barService';

const BarForm = () => {
  const [bar, setBar] = useState({ name: '', description: '' });
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchBar(id);
    }
  }, [id]);

  const fetchBar = async (id) => {
    try {
      const response = await barService.getBar(id);
      setBar(response.data);
    } catch (error) {
      console.error('Error fetching bar:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBar((prevBar) => ({ ...prevBar, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await barService.updateBar(id, bar);
      } else {
        await barService.createBar(bar);
      }
      history.push('/');
    } catch (error) {
      console.error('Error saving bar:', error);
    }
  };

  return (
    <div>
      <h1>{id ? 'Edit Bar' : 'Add Bar'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={bar.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={bar.description}
            onChange={handleChange}
          />
        </div>
        <button type="submit">{id ? 'Update' : 'Add'} Bar</button>
      </form>
    </div>
  );
};

export default BarForm;
