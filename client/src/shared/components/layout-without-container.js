import AppComponent from "../../core/component/App.component";
import "./styles/layout.scss"
import Header from "./header"

class Layout extends AppComponent {
    render() {
        return(
            <>
                <Header />
                {/* <div className="container"> */}
                    {this.props.children}
                {/* </div> */}
            </>
        )
    }
}

export default Layout