import * as types from '../constants/ActionTypes';

export const addList = name => ({
  type: types.ADD_LIST,
  data: name
});

export const removeList = listIndex => ({
  type: types.REMOVE_LIST,
  data: listIndex
});

export const addCard = (listIndex, cardContent) => ({
  type: types.ADD_CARD,
  data: { listIndex, cardContent }
});

export const removeCard = (listIndex, cardIndex) => ({
  type: types.REMOVE_CARD,
  data: { listIndex, cardIndex }
});

export const setCardContent = (listIndex, cardIndex, content) => ({
  type: types.SET_CARD_CONTENT,
  data: { listIndex, cardIndex, content }
});

export const setListName = (listIndex, listName) => ({
  type: types.SET_LIST_NAME,
  data: { listIndex, listName }
});

export const reOrderList = (listId, cardSourceIndex) => ({
  type: types.RE_ORDER_LIST,
  data: {
    listId,
    cardSourceIndex
  }
});

export const moveCardToList = (
  sourceListId,
  cardId,
  destinationListId
) => ({
  type: types.MOVE_CARD_TO_LIST,
  data: {
    sourceListId,
    cardId,
    destinationListId
  }
});
