import React, {Component} from 'react';

class Product extends Component {
    render() {
        return (
                <div className="card col-3" >
                    <img className="card-img-top" src="https://cdn.dashhudson.com/media/640/1572361963.115447556367.jpeg" alt="Card cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text">{this.props.text}</p>
                        <span className="btn btn-primary">Купит</span>
                    </div>
                </div>
        );
    }
}

export default Product;