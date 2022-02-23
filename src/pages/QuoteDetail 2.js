import {useParams, Route} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Devin', text: 'Learning React can be fun!'},
    {id: 'q2', author: 'Jay', text: 'Learning Linux can be fun!'}
]

const QuoteDetail = () => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

    if(!quote) {
        return <p>No quote found</p>
    }

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </>
    )
}

export default QuoteDetail;