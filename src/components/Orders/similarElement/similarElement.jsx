import React from 'react';
import { Card } from 'semantic-ui-react';

const SimilarElement = ({ imgSrc }) => {
  return (
    <Card>
      <img
        src={imgSrc}
        style={{ height: '300px', width: '290px' }}
        alt='card'
      />
      <Card.Content>
        <Card.Header>Similar Item</Card.Header>
        <Card.Description>This is a Similar Item</Card.Description>
        <Card.Description>
          <span>Ξ150</span>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default SimilarElement;
