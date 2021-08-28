import AppComponent from "../../../core/component/App.component";
import { description, title } from "../../../core/meta-data";
import "./styles/confirm-pin-code.scss"
import Layout from "../../../shared/components/layout";
import FromInput from "../../../shared/components/form-input";
import Form from "../../../shared/components/form";
import { Link } from "react-router-dom";
import UserApi from "../Api/Api"

class EmailVerification extends AppComponent {
    state={
        errors: {
            emailverification: true
        }
    }
    init() {
        title("Email Verification App")
        description("Email Verification App With React Js")
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
    confirmPin(values, submitBtn) {
        UserApi.emailVerification(`/emailVerification/${values.emailverification}`)
        .then(({data}) => {
            submitBtn.classList.remove("disabled")
            console.log(data);
        })
        .catch(err => {
            console.log(err.response);
            submitBtn.classList.remove("disabled")
            this.set("errors.emailverification" , "verification code Invalid")
        })
    }


    render() {
        let {emailverification} = this.state.errors
        return(
            <Layout>
                <div id="reset__password__page">
                    <h1>Email Verification</h1>
                    <p>Enter your email and check a verification code.</p>
                    <Form initValues={['emailverification']} onSubmit={this.confirmPin.bind(this)}>
                        <FromInput 
                            type="text" 
                            placeholder="Verification Email" 
                            name="emailverification"
                            onValidate={this.validate.bind(this)}
                            errors={emailverification}
                            required
                            validate 
                        />
                        <button disabled={emailverification} name="submit">verify Email</button>
                        <p>back to <Link to="/register">another email</Link></p>
                    </Form>
                </div>
            </Layout>
        )
    }
}

export default EmailVerification