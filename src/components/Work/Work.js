import React, { Component } from "react";
// import axios from 'axios';

// const BASE_URL = "https://my-json-server.typicode.com/themeland/netstorm-json/work";

class Work extends Component {
  state = {
    data: {},
    workData: [],
  };
  // componentDidMount(){
  //     axios.get(`${BASE_URL}`)
  //         .then(res => {
  //             this.setState({
  //                 data: res.data,
  //                 workData: res.data.workData
  //             })
  //             // console.log(this.state.data)
  //         })
  //     .catch(err => console.log(err))
  // }
  render() {
    return (
      <section className="work-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Intro */}
              <div className="intro mb-4">
                <div className="intro-content">
                  <span>Community</span>
                 
                 
                  <h3 id="" className="mt-3 mb-0">
                    Visit
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                    harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium
                    molestias eos sapiente officiis modi at sunt excepturi
                    expedita sint? Sed quibusdam recusandae alias error harum
                    maxime adipisci amet laborum.
                  </p>

                  <h3 id="" className="mt-3 mb-0">
                    Book
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                    harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium
                    molestias eos sapiente officiis modi at sunt excepturi
                    expedita sint? Sed quibusdam recusandae alias error harum
                    maxime adipisci amet laborum.
                  </p>

                  <h3 id="" className="mt-3 mb-0">
                    Decorate
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                    harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium
                    molestias eos sapiente officiis modi at sunt excepturi
                    expedita sint? Sed quibusdam recusandae alias error harum
                    maxime adipisci amet laborum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
