import React from "react"
import Card from "react-bootstrap/Card"


function GitHubCard() {
  return (
      <div className="card3">
        <Card style={{ width: "18rem"}}>
        {/* Use your GitHub info instead*/}
        <Card.Img variant="top"  />
        {/* Source: https://avatars.githubusercontent.com/u/133785969?u=37d1c2548b9b68d6d4bd106eff3ff62264789575&v=4 */}
        <Card.Body>
            <Card.Title>User Name</Card.Title>
            <Card.Text>
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard