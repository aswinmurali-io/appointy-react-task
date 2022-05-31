import Card from './Components/Card/Card';

import Header from './Sections/Header';
import Footer from './Sections/Footer';

const App = () => (
  <div className='app'>
    <header>
      <Header />
      <table className='cardsview' style={{
        verticalAlign: 'bottom',
        margin: '0 auto',
      }}>
          <th>
            <Card
              heading='Free'
              icon={'x'}
              description=''
              pricing={0}
              isFocus={false}
              buttonText='SIGN UP FOR FREE'
              points={[
                '10 users included',
                '2 GB of storage',
                'Help center access',
                'Email support',
              ]}
            />
          </th>
          <th>
            <Card
              heading='Pro'
              icon={'x'}
              description='Most Popular'
              pricing={15}
              isFocus={true}
              buttonText='GET STARTED'
              points={[
                '20 users included',
                '10 GB of storage',
                'Help center access',
                'Priority Email support',
              ]}
            />
          </th>
          <th>
            <Card
              heading='Enterprise'
              icon={'x'}
              description=''
              pricing={30}
              isFocus={false}
              buttonText='CONTACT US'
              points={[
                '50 users included',
                '30 GB of storage',
                'Help center access',
                'Photo & email support',
              ]}
            />
          </th>

        
      </table>
      <Footer />
    </header>
  </div>
)

export default App;
