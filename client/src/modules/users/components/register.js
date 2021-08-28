import AppComponent from "../../../core/component/App.component";
import { description, title } from "../../../core/meta-data";
import Form from "../../../shared/components/form";
import FromInput from "../../../shared/components/form-input";
import "./styles/register.scss"
import UserApi from "../Api/Api"
import Layout from "../../../shared/components/layout";
import { Link } from "react-router-dom";

class Register extends AppComponent {
    state={
        errors: {
            name: true,
            email: true,
            password: true,
            password_confirmation: true
        }
    }
    init() {
        title("Register App")
        description("Register App With React Js")
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
     * handle btn submit
     * @param {object} values 
     * @param {React.element} submitBtn 
     */
    register(values , submitBtn) {
        UserApi.register("/register", values)
        .then(({data}) => {
            if(data.success === true) {
                submitBtn.classList.remove("disabled")
                this.props.history.push("/emailVerification")
            }
        })
        .catch(({response}) => {
            let errors = response.data.errors
            submitBtn.classList.remove("disabled")
            errors.forEach(err => {
                this.set(`errors.${err.param}`, err.msg)
            });
        })
    }
    render() {
        let {name, email, password, password_confirmation} = this.state.errors
        return(
            <Layout>
                <div id="register__page">
                    <h1>app register</h1>
                    <Form initValues={['name', 'email', 'password', 'password_confirmation']} onSubmit={this.register.bind(this)}>
                        <FromInput type="name" placeholder="Name" name="name" onValidate={this.validate.bind(this)} errors={name} required validate />
                        <FromInput type="email" placeholder="Email Address" name="email" onValidate={this.validate.bind(this)} errors={email} required validate />
                        <FromInput type="password" placeholder="Password" name="password" onValidate={this.validate.bind(this)} errors={password} required validate />
                        <FromInput type="password" placeholder="Confirm Password" name="password_confirmation" onValidate={this.validate.bind(this)} errors={password_confirmation} required validate />
                        <button name="submit" disabled={name || email || password || password_confirmation}>submit</button>
                        <p>Have an account? <Link to="/login">Log in</Link></p>
                    </Form>
                </div>
            </Layout>
        )
    }
}

export default Register