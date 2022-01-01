import React, { Component } from 'react';
import img1 from '../../img/1.jpeg'
import img2 from '../../img/2.jpeg'
import img3 from '../../img/3.jpeg'

const initData = {
    pre_heading: "Exclusive Assets",
    heading: "Explore",
    btn_1: "View All",
    btn_2: "Load More"
}

const data = [
    {
        id: "1",
        img: img1,
        title: "Event 1",
        owner: "Richard",
        price: "1.5 ETH",
        count: "1 of 1",
        btnText: "Book now"
    },
    {
        id: "2",
        img: img2,
        title: "Event 2",
        owner: "John Deo",
        price: "2.7 ETH",
        count: "1 of 1",
        btnText: "Book now"
    },
    {
        id: "3",
        img: img3,
        title: "Event 3",
        owner: "Arham",
        price: "2.3 ETH",
        count: "1 of 1",
        btnText: "Book now"
    }
]

class ExploreOne extends Component {
    state = {
        initData: {},
        data: []
    }
    componentDidMount(){
        this.setState({
            initData: initData,
            data: data
        })
    }
    render() {
        return (
            <section className="explore-area load-more p-0">
                <div className="container">
                    <div className="row">
                        <div className="col-12 ">
                            {/* Intro */}
                            <div className="intro d-flex justify-content-between align-items-end m-0">
                                <div className="intro-content">
                                    <span>{this.state.initData.pre_heading}</span>
                                    <h3 id='exp' className="mt-3 mb-0">{this.state.initData.heading}</h3>
                                </div>
                                <div className="intro-btn">
                                    <a className="btn content-btn" href="#exp">{this.state.initData.btn_1}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row items">
                        {/* {this.state.data.map((item, idx) => { */}
                          
                                <div  className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="/item-details">
                                                <img className="card-img-top" src={data[0].img} alt="" />
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
                                                <a href="/item-details">
                                                    <h5 className="mb-0">{data[0].title}</h5>
                                                </a>
                                              
                                              
                                                <a className="btn btn-bordered-white btn-smaller mt-3" href="/item-details"><i className="icon-handbag mr-2" />{data[0].btnText}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div  className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="/item-details2">
                                                <img className="card-img-top" src={data[1].img} alt="" />
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
                                                <a href="/item-details2">
                                                    <h5 className="mb-0">{data[1].title}</h5>
                                                </a>
                                              
                                              
                                                <a className="btn btn-bordered-white btn-smaller mt-3" href="/item-details2"><i className="icon-handbag mr-2" />{data[1].btnText}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div  className="col-12 col-sm-6 col-lg-3 item">
                                    <div className="card">
                                        <div className="image-over">
                                            <a href="/item-details3">
                                                <img className="card-img-top" src={data[2].img} alt="" />
                                            </a>
                                        </div>
                                        {/* Card Caption */}
                                        <div className="card-caption col-12 p-0">
                                            {/* Card Body */}
                                            <div className="card-body">
                                                <a href="/item-details3">
                                                    <h5 className="mb-0">{data[2].title}</h5>
                                                </a>
                                              
                                              
                                                <a className="btn btn-bordered-white btn-smaller mt-3" href="/item-details3"><i className="icon-handbag mr-2" />{data[2].btnText}</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                        
                        {/* } */}
                    </div>
                  
                </div>
            </section>
        );
    }
}

export default ExploreOne;