import AppComponent from "../../core/component/App.component"
import "./styles/loading.scss"

class Loading extends AppComponent {
    render() {
        return(
            <div id="loading__page">
                <div className='loader'></div>
            </div>
        )
    }
}

export default Loading