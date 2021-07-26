import React from "react";
import { Route, Switch ,useLocation } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Covid from "./components/Covid";
import PrincipalDesk from "./components/principalDesk/index";
import Admissions from "./components/addmission/index";
import Career from "./components/career/index";
import Team from "./components/team/index";
import Contact from "./components/contact/index";
import Footer from "./components/footer";
import NavbarComponent from "./components/navbar";
import Dashboard from "./components/Admin/dashboard/index";
import Parents from "./components/parents/index";
import AdminAdmission from "./components/Admin/admission";
import AdminContact from "./components/Admin/contact";
import AdminMedical from "./components/Admin/medical";
import AdminCareer from "./components/Admin/career";
import AdminAbout from "./components/Admin/about";
import AdminTeam from "./components/Admin/team";
import AdminPrincipal from "./components/Admin/principal";
import AdminParents from "./components/Admin/parents";
import AdminBlogs from "./components/Admin/Blogs/index";
import Login from "./components/login";
import AdminGuardedRoute from "./components/guards/AdminLayout";

function App() {
  const location = useLocation();
  const route = location.pathname.slice(1,6);
  console.log(route);
  return (
    <div>
      {route && route=='admin' ? (
        <>
      <NavbarComponent />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/covid" component={Covid} />
        <Route exact path="/parents" component={Parents} />
        <Route exact path="/about" component={About} />
        <Route exact path="/principal" component={PrincipalDesk} />
        <Route exact path="/admissions" component={Admissions} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <AdminGuardedRoute
          exact
          path="/admin/dashboard"
          component={Dashboard}
        />
        <AdminGuardedRoute
          exact
          path="/admin/admission"
          component={AdminAdmission}
        />
        <AdminGuardedRoute
          exact
          path="/admin/contact"
          component={AdminContact}
        />
        <AdminGuardedRoute
          exact
          path="/admin/medical"
          component={AdminMedical}
        />
        <AdminGuardedRoute exact path="/admin/career" component={AdminCareer} />
        <AdminGuardedRoute exact path="/admin/about" component={AdminAbout} />
        <AdminGuardedRoute exact path="/admin/team" component={AdminTeam} />
        <AdminGuardedRoute
          exact
          path="/admin/principal"
          component={AdminPrincipal}
        />
        <AdminGuardedRoute
          exact
          path="/admin/parents"
          component={AdminParents}
        />
        <AdminGuardedRoute exact path="/admin/blogs" component={AdminBlogs} />
      </Switch>
      </>
      ) : (
        <>
        <NavbarComponent />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/covid" component={Covid} />
          <Route exact path="/parents" component={Parents} />
          <Route exact path="/about" component={About} />
          <Route exact path="/principal" component={PrincipalDesk} />
          <Route exact path="/admissions" component={Admissions} />
          <Route exact path="/career" component={Career} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <AdminGuardedRoute
            exact
            path="/admin/dashboard"
            component={Dashboard}
          />
          <AdminGuardedRoute
            exact
            path="/admin/admission"
            component={AdminAdmission}
          />
          <AdminGuardedRoute
            exact
            path="/admin/contact"
            component={AdminContact}
          />
          <AdminGuardedRoute
            exact
            path="/admin/medical"
            component={AdminMedical}
          />
          <AdminGuardedRoute exact path="/admin/career" component={AdminCareer} />
          <AdminGuardedRoute exact path="/admin/about" component={AdminAbout} />
          <AdminGuardedRoute exact path="/admin/team" component={AdminTeam} />
          <AdminGuardedRoute
            exact
            path="/admin/principal"
            component={AdminPrincipal}
          />
          <AdminGuardedRoute
            exact
            path="/admin/parents"
            component={AdminParents}
          />
          <AdminGuardedRoute exact path="/admin/blogs" component={AdminBlogs} />
        </Switch>
        <Footer />
        </>
      )}
    </div>
  );
}

export default App;
