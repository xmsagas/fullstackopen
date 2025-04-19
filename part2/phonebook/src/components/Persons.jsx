import Person from "./Person";

const Persons = ({array}) => {
    return (
        <ul>
            {array.map(person => 
            <Person key={person.name} person={person}/>
            )}
        </ul>
    )
}

export default Persons