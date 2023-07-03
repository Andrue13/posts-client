import { createContext } from "react";
// type Context = null | (() => void);
type Context = {current: null | (() => void)}
const RevalidateContext = createContext<Context>({current: null});

export default RevalidateContext
