/**
 * middleware to check on the routes 
 * @param {React.PropsWithChildren} props 
 * @returns {React.Component}
 */
function Middleware (props) {
    let {history, route} = props
    if(route.middleware) {
        for (const middleware of route.middleware) {
            middleware(history, route)
        }
    }
    return <route.component history={history} />        
}

export default Middleware