import { useEffect, useState } from 'react';
import { API } from '../lib/api';

function UsercardsList() {
  const [userCards, setUserCards] = useState(null);

  useEffect(() => {
    API.GET(API.ENDPOINTS.getAllUserCards)
      .then(({ data }) => {
        setUserCards(data);
        console.log(data);
      })
      .catch(({ message, response }) => {
        console.error(message, response);
      });
  }, []);

  return <p>hello</p>;
}

export default UsercardsList;
