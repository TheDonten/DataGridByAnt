import axios from "axios";
import { useQuery } from "react-query";

const getTokenValid = async (id: string) => {
  return axios.get(`http://localhost:5173/api/users/${id}`);
};


export const Layout: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["aloha"],
    queryFn: () => {
      return getTokenValid("1");
    },
  });

  if (isLoading) {
    return <div>isLoading...</div>;
  }

  if (!data?.data.id) {
    return <div>isEmpty</div>;
  }

  return (
    <div style={{ height: "100vw", width: "100vh", textAlign: "center" }}>
      {data.data.id}
    </div>
  );
};
