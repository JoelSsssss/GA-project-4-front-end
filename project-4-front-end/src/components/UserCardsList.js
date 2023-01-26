import { useEffect, useState } from 'react';
import { API } from '../lib/api';

import { Container, Grid } from '@mui/material';

import UserCardsCard from './common/UserCardsCard';

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

  return (
    <>
      <section className='UserCardsIndexSection'>
        <Container
          maxwith='lg'
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <Container
            maxwith='lg'
            sx={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12} md={4}></Grid>
              <Grid item xs={12} sm={12} md={8}>
                <Grid container spacing={2}>
                  {userCards?.map((userCards) => (
                    <Grid item sm={12} md={4} key={userCards._id}>
                      <UserCardsCard
                        name={userCards.name}
                        image={userCards.image}
                        type={userCards.template}
                        id={userCards._id}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Container>
      </section>
      <p>user cards list</p>;
    </>
  );
}

export default UsercardsList;
