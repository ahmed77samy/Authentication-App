import AppComponent from "../../../core/component/App.component";
import { description, title } from "../../../core/meta-data";
import Layout from "../../../shared/components/layout";
import "./styles/users.scss"
import user from "../user";

class Users extends AppComponent {
    state={}
    init() {
        title("User App")
        description("User App With React Js")
    }

    ready() {
        this.set('userInfo', user.UserInfo())
    }
    
    render() {
        return(
            <Layout>
                <div id="user__page">
                    <ul>
                        <li>name: {this.get("userInfo.name")}</li>
                        <li>email: {this.get("userInfo.email")}</li>
                    </ul>
                </div>
            </Layout>
        )
    }
}

export default Users