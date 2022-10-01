export const SearchBox = ({onSearch}) => {
    const handleSubmit = evt => {
        evt.preventDefault();

        const search = evt.currentTarget.elements.query.value;

        if (search.trim() === '') {
            alert('Please enter a valid name');
            return;
        }

        onSearch(search);
        evt.currentTarget.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="query" />
            <button type="submit">Search</button>
        </form>
    );
};