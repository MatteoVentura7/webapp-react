import Heading from "./ui/Heading";
import Stars from "./ui/Stars";

export default function Review({ review }) {
  return (
    <>
      <Heading level={3}>{review.name}</Heading>
      <Stars vote={review.vote} />
      <p>{review.text}</p>
    </>
  );
}
