import { useContext } from "react";

import Context from "./UserContext";

const useUserContext = () => useContext(Context);

export default useUserContext;
