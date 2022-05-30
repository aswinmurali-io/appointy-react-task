import Card from './Components/Card/Card';
import Header from './Sections/Header';
import Footer from './Sections/Footer';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Header />
      <table>
        <tr>
          <th>
            <Card title='Hi' description='sd' />
          </th>
          <th>
            <Card title='Hi2' description='sd4' />
          </th>
          <th>
            <Card title='Hi3' description='sd5' />
          </th>
        </tr>
      </table>
      <Footer />
    </header>
  </div>
)

export default App;
