import {useParams, Route, Link, useRouteMatch} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import {getSingleQuote} from "../lib/api";
import {useEffect} from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Devin', text: 'Learning React can be fun!'},
    {id: 'q2', author: 'Jay', text: 'Learning Linux can be fun!'}
]

const QuoteDetail = () => {
    const match = useRouteMatch()
    const params = useParams();

    const {quoteId} = params

    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true)

    // console.log(match)

    // const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

    useEffect(() => {
        sendRequest(quoteId)
    }, [sendRequest, quoteId])

    if(status === 'pending') {
        return (
            <div className={'centered'}>
                <LoadingSpinner />
            </div>
        )
    }

    if(error) {
        return (
            <p className={'centered'}>{error}</p>
        )
    }

    if(!loadedQuote.text) {
        return <p>No quote found</p>
    }

    return (
        <>
            <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author}/>
            <Route path={`${match.path}`} exact>
                <div className={'centered'}>
                    <Link className={'btn--flat'} to={`${match.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </>
    )
}

export default QuoteDetail;