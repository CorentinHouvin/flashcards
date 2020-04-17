export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY';
export const RETURN_CARD = 'RETURN_CARD';

export function toggleVisibility(id) {
  return { type: TOGGLE_VISIBILITY, id: id };
}

export function rotateCard(id) {
  return { type: RETURN_CARD, id: id };
}