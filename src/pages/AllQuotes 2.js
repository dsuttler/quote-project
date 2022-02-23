import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Devin', text: 'Learning React can be fun!'},
    {id: 'q2', author: 'Jay', text: 'Learning Linux can be fun!'}
]


const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    )
}

export default AllQuotes;