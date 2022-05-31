import '../Sections/css/footer.css'

const Divider = () => (
  <div className='divider' />
)

const Footer = () => (
  <div className='footer'>
    <Divider />
    <table >
      <tr className='heading'>
        <th>Company</th>
        <th>Features</th>
        <th>Resource</th>
        <th>Legal</th>
      </tr>
      <tr>
        <td>
          <tr>Team</tr>
          <tr>History</tr>
          <tr>Contact us</tr>
          <tr>Locations</tr>
        </td>
        <td >
          <tr>Cool stuff</tr>
          <tr>Random feature</tr>
          <tr>Team feature</tr>
          <tr>Developer stuff</tr>
          <tr>Another one</tr>
        </td>
        <td>
          <tr>Resource</tr>
          <tr>Resource name</tr>
          <tr>Another resource</tr>
          <tr>Final resource</tr>
        </td>
        <td>
          <tr>Privacy policy</tr>
          <tr>Terms of use<br /><br /></tr>
        </td>
      </tr>
    </table>
  </div>

);

export default Footer;
