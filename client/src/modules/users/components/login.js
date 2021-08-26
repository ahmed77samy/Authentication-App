import AppComponent from "../../../core/component/App.component";
import { description, title } from "../../../core/meta-data";
import Form from "../../../shared/components/form";
import FromInput from "../../../shared/components/form-input";
import "./styles/login.scss"
import UserApi from "../Api/Api"
import Layout from "../../../shared/components/layout";
import User from "../user"

class Register extends AppComponent {
    state={
        errors: {
            email: true,
            password: true
        }
    }
    init() {
        title("App Login")
        description("App Login With React Js")
    }
    /**
     * set the errors to the state
     * @param {Object} values 
     */
    validate(values) {
        for (const key in values) {
            this.set(`errors.${key}` , values[key])
        }
    }
    /**
     * custom submit to axios request
     * set user data in cache
     * handle btn submit
     * @param {object} values 
     * @param {Element} submitBtn 
     */
    login(values , submitBtn) {
        UserApi.login("/login", values)
        .then(({data}) => {
            submitBtn.classList.remove("disabled")
            User.logged("ACCESS_TOKEN" , data)
        })
        .catch(({response}) => {
            submitBtn.classList.remove("disabled")
            console.log(response);
        })
    }
    render() {
        let {email, password} = this.state.errors
        return(
            <div id="login__page">
                <Layout>
                    <h1>app login</h1>
                    <Form initValues={['email', 'password']} onSubmit={this.login.bind(this)}>
                        <FromInput 
                            type="email" 
                            placeholder="Email Address" 
                            name="email" 
                            onValidate={this.validate.bind(this)} 
                            errors={email} 
                            required 
                            validate 
                        />
                        <FromInput 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            onValidate={this.validate.bind(this)} 
                            errors={password} 
                            required 
                            validate 
                        />
                        <button name="submit" disabled={email || password}>submit</button>
                    </Form>
                </Layout>
            </div>
        )
    }
}

export default Register