import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/navbar";
import Index from "./pages/Index.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Admissions from "./pages/Admissions.jsx";
import Academics from "./pages/Academics.jsx";
import ContactUs from "./pages/ContactUs.jsx";

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About Us",
    to: "/about-us",
  },
  {
    title: "Admissions",
    to: "/admissions",
  },
  {
    title: "Academics",
    to: "/academics",
  },
  {
    title: "Contact Us",
    to: "/contact-us",
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="admissions" element={<Admissions />} />
              <Route path="academics" element={<Academics />} />
              <Route path="contact-us" element={<ContactUs />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;