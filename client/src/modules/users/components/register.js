import AppComponent from "../../../core/component/App.component";
import { description, title } from "../../../core/meta-data";
import Form from "../../../shared/components/form";
import FromInput from "../../../shared/components/form-input";
import "./styles/register.scss"
import UserApi from "../Api/Api"
import Layout from "../../../shared/components/layout";

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
        title("App Register")
        description("App Register With React Js")
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
     * @param {Element} submitBtn 
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
            <div id="register__page">
                <Layout>
                    <h1>app register</h1>
                    <Form initValues={['name', 'email', 'password', 'password_confirmation']} onSubmit={this.register.bind(this)}>
                        <FromInput type="name" placeholder="Name" name="name" onValidate={this.validate.bind(this)} errors={name} required validate />
                        <FromInput type="email" placeholder="Email Address" name="email" onValidate={this.validate.bind(this)} errors={email} required validate />
                        <FromInput type="password" placeholder="Password" name="password" onValidate={this.validate.bind(this)} errors={password} required validate />
                        <FromInput type="password" placeholder="Confirm Password" name="password_confirmation" onValidate={this.validate.bind(this)} errors={password_confirmation} required validate />
                        <button name="submit" disabled={name || email || password || password_confirmation}>submit</button>
                    </Form>
                </Layout>
            </div>
        )
    }
}

export default Register