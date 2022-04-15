import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const mySizes = [19, 20, 34];
  const newArray = [];

  for (const size of mySizes) {
    newArray.push(new ClassRoom(size));
  }
  return newArray;
}
