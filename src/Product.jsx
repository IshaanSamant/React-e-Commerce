import React, { Component } from "react";

export default class Product extends Component {

    constructor(props){
        super(props);

        console.log("Constructor - Product");

        this.state={
            product: this.props.product,
        };
    }

    state = {
        product: this.props.product
    };

    render() {
        
        console.log("render - Product");

        return (<div className="card m-2">
            <div className="card-body">
                <div className="text-muted"># {this.state.product.id}</div>
                <span 
                className="d-flex justify-content-end p-2 hand-icon" 
                onClick={() => {this.props.onDelete(this.state.product);}}
                >
                    <i className="fa fa-times"></i>
                </span>

                <h5 className="pt-2 border-top">{this.state.product.productName}</h5>
                <div>$ {this.state.product.price}</div>

                <div className="card-footer text-right">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-start">
                            <span className="text-dark m-2">{this.state.product.quantity}</span>
                            <div className="btn-group">
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => { this.props.onIncrement(this.state.product, 10); }}
                                >+
                                </button>
                                <button
                                    className="btn btn-outline-success"
                                    onClick={() => { this.props.onDecrement(this.state.product, 0); }}
                                >-
                                </button>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">{this.props.children}</div>
                    </div>

                </div>
            </div>
        </div>);
    }

    componentDidMount(){
        console.log("componentDidMount - Product");
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate - Product");
    }

    componentWillUmount(){
        console.log("componentWillUnmount-Product");
    }
}


