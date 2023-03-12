function Person({ firstName, lastName, email, id }) {
  return (
    <table>
      <tr>
        <td className="id">{id}</td>
        <td className="firstName">{firstName}</td>
        <td className="lastName">{lastName}</td>
        <td className="email">{email}</td>
      </tr>
    </table>
  );
}

export default Person;
