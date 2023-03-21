
 LoginForm {
    id: ID!
    LoginForm: String!
    LoginForm: String!
  };
  
  const Navbar {
    Navbar: [Navbar]
    Navbar(id: ID!): Navbar
  };
  
  type SignupForm {
    addSignupForm(name: String!, address: String!): SignupForm
    upSignupForm(id: ID!, title: String, author: String): SignupForm
    deleteSignupForm(id: ID!): SignupForm
  };
  /*Added in schema for LoginForm, Navbar and SignupForm*/