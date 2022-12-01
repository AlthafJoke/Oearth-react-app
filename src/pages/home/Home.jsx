import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function Home() {
  return (
    <div>
      <div className="bg-dark">hello</div>
      <div class="  text-center flex flex-row">

    
        <div className="basis-1/4">
          <div class="bg-blue-400 min-h-[50px] ">1</div>
        </div>
        <div className="basis-1/2">
          <div class="bg-yellow-500/100  min-h-[50px] ">1</div>
        </div>
        <div className="basis-1/4">
          <div class="bg-green-500/100  min-h-[50px] ">1</div>
        </div>
      </div>
      
     

      {/* <Row>
          <Col xs={6} md={4}>
            <h1>hello</h1>
          </Col>
          <Col xs={12} md={8}>
            <h1 className="text-3xl font-bold underline">welcome</h1>
          </Col>
        </Row> */}
    </div>
  );
}

export default Home;
