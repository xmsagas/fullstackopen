const Filter = ({ search, filter }) => {
    return (
        <div>filter shown with <input value={search} onChange={filter} /></div>
    )
}

export default Filter