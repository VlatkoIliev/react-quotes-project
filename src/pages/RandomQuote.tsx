import { useState, useEffect } from 'react';
import { Quote } from '../interfaces/Quote';
import { useFetch } from '../hooks/useFetch';
import styled from '@emotion/styled';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import Error from '../components/Error';

const RandomQuotePage = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  position: relative;
  max-width: 800px;
  padding: 20px;
  border-radius: 20px;
  -webkit-box-shadow: 0px 0px 17px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 17px 1px rgba(0, 0, 0, 0.75);
`;

const RandomQuote = () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  const { loading, error, data, fetchData } = useFetch('/random');
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setQuote(data);
    } else {
      setQuote(null);
    }
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <RandomQuotePage>
      <Card>
        <RiDoubleQuotesL size={30} />
        <h2 className='quote'>{quote?.quote}</h2>
        <RiDoubleQuotesR
          style={{ position: 'absolute', right: 20 }}
          size={30}
        />
        <div
          style={{
            marginTop: '30px',
            padding: '20px',
          }}
        >
          <hr />
          <h4>-{quote?.character}-</h4>
        </div>
      </Card>
      <div className='btn-container'>
        <button onClick={fetchData} className='btn btn--get-quote'>
          Get quote!
        </button>

        <button onClick={() => navigate('/')} className='btn btn--back'>
          Go back
        </button>
      </div>
    </RandomQuotePage>
  );
};

export default RandomQuote;
