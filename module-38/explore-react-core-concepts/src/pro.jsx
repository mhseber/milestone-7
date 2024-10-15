export default function Programmer({ programmer }) {
    console.log(programmer);
    return (
        <div>
            <h3>Programmer : {programmer.name}</h3>
            <p>age: {programmer.age}</p>
        </div>
    )
}