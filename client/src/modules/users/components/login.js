import AppComponent from "../../../core/component/App.component";
import { description, title } from "../../../core/meta-data";
import Form from "../../../shared/components/form";
import FromInput from "../../../shared/components/form-input";
import "./styles/login.scss"
import UserApi from "../Api/Api"
import Layout from "../../../shared/components/layout";
import User from "../user"
import { Link } from "react-router-dom";
import React from "react";

class Register extends AppComponent {
    state={
        errors: {
            email: true,
            password: true
        }
    }
    init() {
        title("Login App")
        description("Login App With React Js")
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
     * @param {React.element} submitBtn 
     */
    login(values , submitBtn) {
        UserApi.login("/login", values)
        .then(({data}) => {
            submitBtn.classList.remove("disabled")
            User.logged(data)
            data.success === true && this.props.history.push("/user");
        })
        .catch(({response}) => {
            submitBtn.classList.remove("disabled")
            this.set("errors.authriztion" , "email or password is wrong")
        })
    }
    render() {
        let {email, password} = this.state.errors
        return(
            <Layout>
                <div id="login__page">
                    <h1>app login</h1>
                    <Form initValues={['email', 'password']} onSubmit={this.login.bind(this)}>
                        {
                            this.get("errors.authriztion") && <label>{this.get("errors.authriztion")}</label>
                        }
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
                        <p><Link to="/preresetpassword">forget your password</Link></p>
                        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
                    </Form>
                </div>
            </Layout>
        )
    }
}

export default Register