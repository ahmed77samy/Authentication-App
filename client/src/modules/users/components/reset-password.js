import AppComponent from "../../../core/component/App.component";
import { description, title } from "../../../core/meta-data";
import "./styles/reset-password.scss"
import Layout from "../../../shared/components/layout";
import FromInput from "../../../shared/components/form-input";
import Form from "../../../shared/components/form";
import UserApi from "../Api/Api"

class ResetPassword extends AppComponent {

    state={
        errors: {
            pincode: true,
            newPassword: true,
            password_confirmation: true,
        }
    }

    init() {
        title("Reset Password App")
        description("Reset Password App With React Js")
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
    resetPassword(values, submitBtn) {
        UserApi.resetPassword("/resetPassword", values)
        .then(data => {
            submitBtn.classList.remove("disabled")
            this.props.history.push("/login")
        })
        .catch(({response}) => {
            let errors = response.data.errors
            submitBtn.classList.remove("disabled")
            if(response.status === 400) {
                errors.forEach(err => {
                    this.set(`errors.${err.param}`, err.msg)
                });
            }else if(response.status === 404) {
                this.set(`errors.pincode`, "verification code Invalid")
            }
        })
    }


    render() {
        let {pincode, newPassword, password_confirmation} = this.state.errors
        return(
            <Layout>
                <div id="reset__password__page">
                    <h1>reset password</h1>
                    <Form initValues={['pincode', 'newPassword', 'password_confirmation']} onSubmit={this.resetPassword.bind(this)}>
                        <FromInput 
                            type="text"
                            placeholder="Confirm Pin Code" 
                            name="pincode"
                            onValidate={this.validate.bind(this)}
                            errors={pincode}
                            password="newPassword"
                            required
                            validate 
                        />
                        <FromInput 
                            type="password"
                            placeholder="New Password" 
                            name="newPassword"
                            onValidate={this.validate.bind(this)}
                            errors={newPassword}
                            password="newPassword"
                            required
                            validate 
                        />
                        <FromInput 
                            type="password" 
                            placeholder="confirm New Password" 
                            name="password_confirmation"
                            onValidate={this.validate.bind(this)}
                            errors={password_confirmation}
                            password="newPassword"
                            required
                            validate 
                        />
                        <button disabled={newPassword || password_confirmation || pincode} name="submit">submit</button>
                    </Form>
                </div>
            </Layout>
        )
    }
}

export default ResetPassword