import Body from "./components/Body";
import useScript from "./utils/js/useScript";
import getProfile from "./utils/js/ProfileService";

function App() {
  let profile = getProfile();
  useScript("https://unpkg.com/boxicons@2.0.9/dist/boxicons.js");
  return <Body profile={profile} />;
}

export default App;
