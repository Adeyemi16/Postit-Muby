import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useStore } from "../config/store";
import PageLayout from "../components/PageLayout";
import { useEffect } from "react";

export default function Home() {
  const { currentUser } = useStore();

  useEffect(() => {
    document.title = "Dashboard";
  });
  return (
    <PageLayout>
      <Container >
        <div className="d-flex justify-content-lg-between flex-lg-row flex-column-reverse">
          <Col>
            <h2 className="fs-1 fw-bold">
              Welcome {currentUser?.user?.username} 😊
            </h2>
            <p className="fs-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius,
              aliquid. Atque dignissimos incidunt quasi possimus beatae
              consectetur deleniti neque voluptatibus quaerat architecto. Nam
              quos reprehenderit repellendus qui accusantium beatae asperiores
              distinctio laborum. Corporis veritatis beatae et error quae.
              Perferendis, ea!
            </p>
            <Row className="gap-2">
              <Button className="btnTwenty" style={{ backgroundColor: "#0086B0" }}>
                My Stories
              </Button>
              <Button className="btnTwenty" variant="outline-primary">
                Go to Feed
              </Button>
            </Row>
          </Col>
          <Image src="unsplash_Z2bJeJQRbW0.png" fluid className="imgFifty" />
        </div>
      </Container>
    </PageLayout>
  );
}
