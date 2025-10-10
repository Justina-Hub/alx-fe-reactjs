import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();
  return <h3>Viewing Blog Post #{id}</h3>;
}
