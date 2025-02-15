export default function PlaceImg({ place, index = 0, className = null }) {
  if (!place.addedPhotos?.length) {
    return "";
  }
  if (!className) {
    className = "object-cover";
  }
  return <img className={className} src={place.addedPhotos[index]} />;
}
