import AppComponent from "../../../core/component/App.component";
import { description, title } from "../../../core/meta-data";
import Form from "../../../shared/components/form";
import FromInput from "../../../shared/components/form-input";
import "./styles/register.scss"

class Register extends AppComponent {
    state={
        errors: {
            name: true,
            email: true,
            password: true,
            confirm_password: true
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
    render() {
        let {name, email, password, confirm_password} = this.state.errors
        return(
            <div id="register__page">
                <h1>app register</h1>
                <Form initValues={['name', 'email', 'password', 'confirm_password']}>
                    <FromInput type="name" placeholder="Name" name="name" onValidate={this.validate.bind(this)} errors={name} required validate />
                    <FromInput type="email" placeholder="Email Address" name="email" onValidate={this.validate.bind(this)} errors={email} required validate />
                    <FromInput type="password" placeholder="Password" name="password" onValidate={this.validate.bind(this)} errors={password} required validate />
                    <FromInput type="password" placeholder="Confirm Password" name="confirm_password" onValidate={this.validate.bind(this)} errors={confirm_password} required validate />
                    <button disabled={name || email || password || confirm_password}>submit</button>
                </Form>
            </div>
        )
    }
}

export default Register