import AppComponent from "../../../core/component/App.component";
import { description, title } from "../../../core/meta-data";
import "./styles/pre-reset-password.scss"
import Layout from "../../../shared/components/layout";
import FromInput from "../../../shared/components/form-input";
import Form from "../../../shared/components/form";
import { Link } from "react-router-dom";
import UserApi from "../Api/Api"

class PreResetPassword extends AppComponent {

    state={
        errors: {
            email: true
        }
    }

    init() {
        title("Pre Reset Password App")
        description("Pre Reset Password App With React Js")
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
     * @param {Object} values 
     * @param {React.element} submitBtn 
     */
    preResetPassword(values, submitBtn) {
        UserApi.preResetPassword("/preResetPassword", values)
        .then(data => {
            submitBtn.classList.remove("disabled")
            this.props.history.push("/confirmpincode")
        })
        .catch(err => {
            submitBtn.classList.remove("disabled")
            this.set("errors.email" , "email is not found")
        })
    }


    render() {
        let {email} = this.state.errors
        return(
            <Layout>
                <div id="pre__reset__password__page">
                    <h1>forgtten password</h1>
                    <Form initValues={['email']} onSubmit={this.preResetPassword.bind(this)}>
                        <FromInput 
                            type="email" 
                            placeholder="Email Address" 
                            name="email"
                            onValidate={this.validate.bind(this)}
                            errors={email}
                            required
                            validate 
                        />
                        <button disabled={email} name="submit">send login link</button>
                        <p>back to <Link to="/resetPassword">login</Link></p>
                    </Form>
                </div>
            </Layout>
        )
    }
}

export default PreResetPassword