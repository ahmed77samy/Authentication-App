import AppComponent from "../../../core/component/App.component";
import { description, title } from "../../../core/meta-data";
import "./styles/home.scss"
import Layout from "../../../shared/components/layout-without-container";

class Home extends AppComponent {
    init() {
        title("Home App")
        description("Home App With React Js")
    }
    
    render() {
        return(
            <Layout>
                <div id="home__page">
                    <h1>welcome home page</h1>
                </div>
            </Layout>
        )
    }
}

export default Home