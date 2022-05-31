import Card from './Components/Card/Card';
import Header from './Sections/Header';
import Footer from './Sections/Footer';


const appStyle = {
  addingTop: '50px',
  paddingRight: '15%',
  paddingBottom: '50px',
  paddingLeft: '15%',
}

const App = () => (
  <div style={appStyle}>
    <header>
      <Header />
      <table>
        <tr>
          <th>
            <Card
              heading='Free'
              icon={'x'}
              description='sd'
              pricing={0}
              isSelected={false}
              buttonText='SIGN UP FOR FREE'
              points={[
                '10 users included',
                '2 GB of storage',
                'Help center access',
                'Email support',
              ]}
            />
          </th>
          {/* <th>
            <Card title='Pro' description='sd4' />
          </th>
          <th>
            <Card title='Enterprise' description='sd5' />
          </th> */}
        </tr>
      </table>
      <Footer />
    </header>
  </div>
)

export default App;
