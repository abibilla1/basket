import React, {Component} from 'react';
import Product from "./product";

class App extends Component {
    state = {
        data: [
            {id: 1,title: 'Асан', text: 'Вы можете заказат эти аксессуары через интернет с Aliexpressa 1'},
            {id: 2,title: 'хасан', text: 'Вы можете заказат эти аксессуары через интернет с Aliexpressa 2'},
            {id: 3,title: 'Усон', text: 'Вы можете заказат эти аксессуары через интернет с Aliexpressa 3'},
            {id: 4,title: 'Масан', text: 'Вы можете заказат эти аксессуары через интернет с Aliexpressa 4'}
        ]
    }

    render() {
        return (
            <div className='container jumbotron'>
                <div className='row'>
                    {this.state.data.map((item) => {
                        return <Product key={item.id} title={item.title} text={item.text}/>
                    })}
                </div>
            </div>
        );
    }
}

export default App;