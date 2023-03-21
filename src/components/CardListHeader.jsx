import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CardListHeader as StyledCardListHeader } from '../styles/CardList.styles';
import OutsideClickHandler from './OutsideClickHandler';
import IconButton from './IconButton';

const CardListHeader = props => {
  const [listName, setListName] = useState(props.listName);
  useEffect(() => {
    setListName(props.listName);
  }, [props.listName]);

  return (
    <OutsideClickHandler>
      <StyledCardListHeader>
        <div>{listName}</div>
        <IconButton.ButtonContainer
              top="11px"
              right="3px"
            >
              <IconButton
                onClick={props.onRemoveList}
                iconType="delete"
              />
        </IconButton.ButtonContainer>
      </StyledCardListHeader>
    </OutsideClickHandler>
  );
};

CardListHeader.propTypes = {
  listName: PropTypes.string,
  onRemoveList: PropTypes.func
};

export default CardListHeader;
