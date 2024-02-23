import { Switch, Route } from "react-router-dom";

<Switch>
  <Route path="/users" element={<UsersList />} />
  <Route path="/users/:id" element={<UserProfile />} />

  {/* without exact  (default behavior)*/}
  {/* match "about", "/about/team", "/about/contact" etc. */}
  <Route path="/about" component={About} />

  {/* with exact */}
  {/* only match "about"*/}
  <Route path="/about" exact component={About} />

  {/* userId is the route parameter */}
  <Route path="/users/:userId" component={UserProfile} />

</Switch>;
