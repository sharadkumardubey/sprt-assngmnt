import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import OutsideClickHandler from './OutsideClickHandler';
import { CardContainer, CardBody, CardHeader } from '../styles/Card.styles';

import IconButton from './IconButton';

const Card = ({ card, index, onChangeCardContent, onRemoveCard }) => {

  const onClickOutside = () => {
    onChangeCardContent(card.content);
  };

  return (
    <OutsideClickHandler
      onClickOutside={onClickOutside}
    >
      <Draggable
        key={card.id}
        draggableId={card.id}
        index={index}
      >
        {provided => (
          <CardContainer
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
          >
            <CardHeader>{card.header || `Dummy`}</CardHeader>
            <hr></hr>
            <IconButton.ButtonContainer>
                  <IconButton
                    onClick={onRemoveCard}
                    iconType="delete"
                  />
                </IconButton.ButtonContainer>
              <CardBody>
                {card.content}
              </CardBody>
          </CardContainer>
        )} 
      </Draggable>
    </OutsideClickHandler>
  );
};

Card.propTypes = {
  card: PropTypes.object,
  index: PropTypes.number,
  onChangeCardContent: PropTypes.func,
  onRemoveCard: PropTypes.func
};
export default Card;
