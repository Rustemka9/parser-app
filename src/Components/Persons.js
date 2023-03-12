import Person from "./Person";
import persons from "../data/persons_1"; // подключение данных из JSON файла, можно закомментировать строку №2 и раскомментировать строку №3
// import persons from "../data/persons_2";

function Persons() {
  // функция парсинга JSON файла
  const personStr = JSON.stringify(persons); // превращаем JSON в строку
  const personsArr = JSON.parse(personStr); // превращаем JSON в массив
  return (
    <table>
      <tr>
        <tr>
          <th className="id">Id</th>
          <th className="firstName">First name</th>
          <th className="lastName">Last name</th>
          <th className="email">Email</th>
        </tr>
      </tr>
      {personsArr.map((person) => {
        // деструктурицзация массива и передача данных в компонент Person
        return <Person key={person.id} {...person} />;
      })}
    </table>
  );
}

export default Persons;
