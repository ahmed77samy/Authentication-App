import AppComponent from "../../core/component/App.component";
import "./styles/layout.scss"

class Layout extends AppComponent {
    render() {
        return(
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

export default Layout